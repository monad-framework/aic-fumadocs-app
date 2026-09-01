import { createLLMGateway } from '@llmgateway/ai-sdk-provider';
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  stepCountIs,
  streamText,
  tool,
  toUIMessageStream,
} from 'ai';
import { z } from 'zod';
import { source } from '@/lib/source';
import { Document, type DocumentData } from 'flexsearch';
import type { ChatUIMessage, SearchTool } from '../../../components/ai/search';

interface CustomDocument extends DocumentData {
  url: string;
  title: string;
  description: string;
  content: string;
}

const searchServer = createSearchServer();

async function createSearchServer() {
  const search = new Document<CustomDocument>({
    document: {
      id: 'url',
      index: ['title', 'description', 'content'],
      store: true,
    },
  });

  const docs = await chunkedAll(
    source.getPages().map(async (page) => {
      if (!('getText' in page.data)) return null;

      return {
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        content: await page.data.getText('processed'),
      } as CustomDocument;
    }),
  );

  for (const doc of docs) {
    if (doc) search.add(doc);
  }

  return search;
}

async function chunkedAll<O>(promises: Promise<O>[]): Promise<O[]> {
  const SIZE = 50;
  const out: O[] = [];
  for (let i = 0; i < promises.length; i += SIZE) {
    out.push(...(await Promise.all(promises.slice(i, i + SIZE))));
  }
  return out;
}

const llmgateway = createLLMGateway({
  apiKey: process.env.LLM_GATEWAY_API_KEY,
});

const systemPrompt = [
  'You are the documentation-grounded AI assistant for Monad.',
  'Your retrieval scope is intentionally limited to the Documentation domain. Do not imply that you searched the Engineering Journal, Changelogs, Articles, or Building Monad.',
  'Use the `search` tool before answering factual questions about Monad when documentation context is needed.',
  'Treat current System documentation and governed Artifacts as stronger sources for technical truth than orientation or coordination pages.',
  'Preserve lifecycle distinctions when the documentation makes them available: proposed is not accepted, accepted is not implemented, implemented is not verified, and historical truth is not necessarily current truth.',
  'Cite supporting documentation as markdown links using each result `url` when available.',
  'If the question requires historical, release, editorial, or curated context outside Documentation, say that this AI is documentation-scoped and suggest using the global search to locate those records.',
  'If the answer cannot be established from Documentation, say you do not know rather than filling the gap from assumption.',
].join('\n');

export async function POST(req: Request, ctx: RouteContext<"/api/chat">) {
  const reqJson = await req.json();
  const modelId = process.env.LLM_GATEWAY_MODEL ?? 'anthropic/claude-3.5-sonnet';

  const result = streamText({
    model: llmgateway.chat(modelId as never),
    stopWhen: stepCountIs(5),
    tools: {
      search: searchTool,
    },
    messages: [
      { role: 'system', content: systemPrompt },
      ...(await convertToModelMessages<ChatUIMessage>(reqJson.messages ?? [], {
        convertDataPart(part) {
          if (part.type === 'data-client')
            return {
              type: 'text',
              text: `[Client Context: ${JSON.stringify(part.data)}]`,
            };
        },
      })),
    ],
    toolChoice: 'auto',
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}

const searchTool = tool({
  description: 'Search current Monad Documentation and return raw JSON results.',
  inputSchema: z.object({
    query: z.string(),
    limit: z.number().int().min(1).max(100).default(10),
  }),
  async execute({ query, limit }) {
    const search = await searchServer;
    return await search.searchAsync(query, { limit, merge: true, enrich: true });
  },
}) satisfies SearchTool;
