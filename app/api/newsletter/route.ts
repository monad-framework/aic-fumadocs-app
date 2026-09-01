const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function redirectWithStatus(request: Request, status: string) {
  const target = new URL('/newsletter', request.url);
  target.searchParams.set('status', status);
  return Response.redirect(target, 303);
}

async function subscribeWithButtondown(email: string, request: Request) {
  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) return false;

  const response = await fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
      'X-Buttondown-Collision-Behavior': 'add',
    },
    body: JSON.stringify({
      email_address: email,
      referrer_url: request.headers.get('referer') ?? undefined,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Buttondown subscription failed with status ${response.status}.`);
  }

  return true;
}

async function subscribeWithWebhook(email: string, request: Request) {
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const token = process.env.NEWSLETTER_WEBHOOK_TOKEN;
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({
      email,
      source: 'aic-engineering-website',
      referrer: request.headers.get('referer'),
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Newsletter webhook failed with status ${response.status}.`);
  }

  return true;
}

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get('email') ?? '').trim().toLowerCase();
  const honeypot = String(form.get('company') ?? '').trim();

  // Silently accept obvious bot submissions so the endpoint does not become an oracle.
  if (honeypot) return redirectWithStatus(request, 'success');

  if (!email || email.length > 320 || !EMAIL_PATTERN.test(email)) {
    return redirectWithStatus(request, 'invalid');
  }

  try {
    const buttondownConfigured = await subscribeWithButtondown(email, request);
    if (buttondownConfigured) return redirectWithStatus(request, 'success');

    const webhookConfigured = await subscribeWithWebhook(email, request);
    if (webhookConfigured) return redirectWithStatus(request, 'success');

    return redirectWithStatus(request, 'not-configured');
  } catch (error) {
    console.error(
      'Newsletter subscription provider failed.',
      error instanceof Error ? error.message : 'Unknown provider error',
    );
    return redirectWithStatus(request, 'error');
  }
}
