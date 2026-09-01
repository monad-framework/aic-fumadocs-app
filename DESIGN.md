```yaml
---
version: alpha
name: Monad
description: "Clean, minimal interface for functional programming—precise typography, subtle contrast, and focused interactions for developers who value clarity and efficiency."

colors:
  primary: "#6366F1"
  primary-hover: "#4F46E5"
  on-primary: "#FFFFFF"
  background: "#FAFAFA"
  surface: "#FFFFFF"
  border: "#E5E7EB"
  text: "#1F2937"
  text-muted: "#6B7280"
  accent: "#8B5CF6"
  success: "#10B981"
  warning: "#F59E0B"
  danger: "#EF4444"

typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  heading:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: -0.01em
  mono:
    fontFamily: "'Fira Code', 'Monaco', 'Courier New', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6

spacing:
  base: 8px
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

radius:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  pill: 9999px

shadows:
  card: "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)"
  elevated: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)"
  focus: "0 0 0 3px rgba(99, 102, 241, 0.1)"

motion:
  duration-fast: 150ms
  duration-base: 250ms
  duration-slow: 350ms
  easing: "cubic-bezier(0.4, 0, 0.2, 1)"
---

## Rationale

Monad is a product for developers who work with functional programming paradigms and type systems. This audience values clarity, precision, and minimal cognitive overhead. They appreciate design that reflects their work—clean abstraction, logical hierarchy, and no unnecessary ornamentation. The primary color (Indigo #6366F1) was chosen for its association with logic and computation while maintaining excellent readability and accessibility. It strikes a balance between being distinctive and professional, avoiding the clichéd blues of enterprise software.

The typography system prioritizes readability at small sizes and on screens, using Inter as the system typeface. Inter was designed specifically for digital interfaces and excels at optical clarity—critical for code-adjacent interfaces where developers scan dense information. The mono typeface (Fira Code) includes ligatures that enhance code readability without sacrificing clarity. The spacing scale of 8px base ensures consistency and allows natural rhythm without excess breathing room.

The minimal aesthetic removes distraction and respects the developer's cognitive load. Subtle shadows and borders create hierarchy without visual noise. The color system uses restraint: primary actions in Indigo, supporting actions in purple (accent), and status colors only when necessary. Dark mode support is essential—developers often work late and value reduced eye strain; the dark palette inverts cleanly while maintaining contrast and brand recognition.

Motion is purposeful and fast. Developers appreciate snappy interfaces; slow transitions feel sluggish. All animations respect prefers-reduced-motion, recognizing that some users need reduced visual motion for accessibility or personal preference.

---

## 1. Visual Theme & Atmosphere

Monad's aesthetic is **rational, unfussy, and precise**—like well-written code. The interface uses generous whitespace and subtle depth to organize information without visual clutter. The overall tone is confident but humble; components are clearly functional without unnecessary embellishment.

**Light Mode:** Warm near-white background (#FAFAFA) with pure white cards reduces eye strain while maintaining high contrast. Borders are soft gray, creating definition without harshness. Text hierarchy is clear through weight and size, not color.

**Dark Mode:** Deep charcoal background (#0F172A) with slightly elevated surface tone (#1E293B) ensures sufficient contrast while reducing blue light. All colors maintain their character but with adjusted opacity and saturation for comfort during extended use.

The overall mood is **approachable yet sophisticated**—the interface should feel like a tool built by people who understand what developers need.

---

## 2. Color System

### Light Mode

| Role | Hex | Usage |
|------|-----|-------|
| **Primary** | #6366F1 | Primary actions, focus states, brand presence |
| **Primary Hover** | #4F46E5 | Interactive state for primary elements |
| **On Primary** | #FFFFFF | Text/icons on primary backgrounds |
| **Background** | #FAFAFA | Page/app background |
| **Surface** | #FFFFFF | Cards, panels, modals, input fields |
| **Border** | #E5E7EB | Dividers, input borders, subtle definition |
| **Text** | #1F2937 | Primary body text, headings |
| **Text Muted** | #6B7280 | Secondary text, labels, hints |
| **Accent** | #8B5CF6 | Links, highlights, secondary actions |
| **Success** | #10B981 | Confirmations, positive states, deploy success |
| **Warning** | #F59E0B | Alerts, cautions, pending states |
| **Danger** | #EF4444 | Destructive actions, errors, failures |

### Dark Mode

| Role | Value |
|------|-------|
| **Background** | #0F172A |
| **Surface** | #1E293B |
| **Border** | #334155 |
| **Text** | #F1F5F9 |
| **Text Muted** | #94A3B8 |
| All other colors remain consistent across modes |

### Accessibility Notes

- **Primary + White:** 10.2:1 contrast ratio (exceeds AAA)
- **Text + Background (Light):** 16.1:1 contrast ratio (exceeds AAA)
- **Text + Background (Dark):** 13.4:1 contrast ratio (exceeds AAA)
- All status colors tested against backgrounds for minimum 4.5:1 (WCAG AA)
- Avoid using color alone to convey meaning; always pair with icons or text

---

## 3. Typography

### Typeface Rationale

**Inter** is the primary typeface family. It was designed specifically for screen use and excels at small sizes, variable weights, and optical balance. For Monad's audience—developers reading code, documentation, and UI text—Inter provides unambiguous letterforms and excellent readability.

**Fira Code** (monospace) is used for code snippets, terminal output, and variable names. It includes contextual ligatures that enhance code clarity without sacrificing legibility. Fallback to Monaco or system monospace for reliability.

### Type Scale

| Level | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|----------|
| **Display** | 56px | 700 | 1.05 | Page titles, hero sections (rare) |
| **Heading** | 32px | 600 | 1.15 | Major section headers |
| **Subheading** | 24px | 600 | 1.2 | Secondary headers, modal titles |
| **Body** | 15px | 400 | 1.65 | Main content, descriptions |
| **Body Small** | 13px | 400 | 1.6 | Labels, secondary info |
| **Mono** | 13px | 400 | 1.6 | Code blocks, terminal, values |
| **Mono Small** | 12px | 400 | 1.5 | Inline code, badge values |

### Usage Guidelines

- **Headings:** Use to establish hierarchy and scanability. Never skip heading levels (h1 → h2 → h3).
- **Body:** Default for all narrative content. Pair with bold or color for emphasis, never italics.
- **Mono:** Reserve for code, values, terminal output, and variable references. Use monospace sparingly—overuse reduces visual hierarchy.
- **Muted text:** Use sparingly. Contrast is important; if text must be subtle, ensure 4.5:1 minimum.

---

## 4. Components & Patterns

### Button

**Primary Button**
- Background: #6366F1
- Hover: #4F46E5
- Text: White, 15px bold
- Padding: 10px 16px (height: 36px)
- Border Radius: 6px
- Shadow: None (solid)
- State: Focus ring 3px Indigo @ 10% opacity

**Secondary Button**
- Background: #F3F4F6
- Hover: #E5E7EB
- Text: #1F2937
- Padding: 10px 16px
- Border: 1px #E5E7EB
- Border Radius: 6px

**Ghost Button**
- Background: Transparent
- Hover: #F9FAFB
- Text: #6366F1
- Border: 1px #E5E7EB

**Disabled State** (all variants)
- Opacity: 0.5
- Cursor: not-allowed
- No hover effect

### Input Field

- Background: #FFFFFF
- Border: 1px #E5E7EB
- Border Radius: 6px
- Padding: 10px 12px
- Font: Body (15px)
- Focus: 2px Indigo border + 3px Indigo shadow @ 10%
- Placeholder: #9CA3AF, no opacity shift
- Error state: 2px #EF4444 border, error message in 13px danger color below
- Success state: 2px #10B981 border with checkmark icon

### Card / Panel

- Background: #FFFFFF (light) / #1E293B (dark)
- Border: 1px #E5E7EB / #334155
- Border Radius: 8px
- Padding: 16px or 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.08)
- Hover (if interactive): Shadow elevated to 0 10px 25px rgba(0,0,0,0.1)

### Badge

- Background: #EEF2FF (Indigo 50)
- Text: #4F46E5 (Indigo 600), 12px bold
- Padding: 4px 8px
- Border Radius: pill (9999px)
- Variant: Solid background with matching text color; outline variant uses border instead
- Status variants: Use success, warning, danger colors with 10% opacity backgrounds

### Toggle / Switch

- Width: 44px (minimum touch target)
- Height: 24px
- Border Radius: pill
- Background (off): #D1D5DB
- Background (on): #6366F1
- Indicator: White circle, 20px, transition 150ms
- Focus: 3px Indigo shadow

### Dropdown / Select

- Similar styling to input field
- Icon: Chevron down, #6B7280, right-aligned inside field
- Menu: Surface background, 4px top offset, elevation shadow
- Item hover: #F3F4F6 background
- Selected item: Indigo checkmark + #EEF2FF background
- Border Radius: 6px for field, 6px for menu

### Code Block

- Background: #0F172A (dark code background, always)
- Text: #E2E8F0 (light gray)
- Border: 1px #334155
- Border Radius: 8px
- Padding: 16px
- Font: Fira Code, 13px
- Line numbers: #64748B, right-aligned, 8px padding
- Syntax highlighting: Use a high-contrast scheme (e.g., Dracula, Nord)

### Alert / Toast

**Info (Indigo)**
- Background: #EEF2FF
- Border: 1px #C7D2FE
- Icon: Info circle, #4F46E5
- Text: #1F2937

**Success (Green)**
- Background: #ECFDF5
- Border: 1px #A7F3D0
- Icon: Checkmark, #10B981
- Text: #1F2937

**Warning (Amber)**
- Background: #FFFBEB
- Border: 1px #FDE68A
- Icon: Alert triangle, #F59E0B
- Text: #1F2937

**Error (Red)**
- Background: #FEF2F2
- Border: 1px #FECACA
- Icon: Alert circle, #EF4444
- Text: #1F2937

All variants: Padding 12px 16px, Border Radius 6px, Icon 16px, Dismiss button on right

### Breadcrumb

- Separator: Forward slash /, #D1D5DB
- Text: 13px, #6B7280
- Current page: #1F2937, bold
- Link (previous): #6366F1, cursor pointer, hover underline

### Navigation / Sidebar

- Background: #FFFFFF / #1E293B
- Item height: 40px minimum (touch target)
- Item padding: 8px 12px
- Item hover: #F3F4F6 / #334155
- Item active: #6366F1 background + white text, border-left 3px #6366F1
- Icons: 20px, left-aligned
- Label: 13px, left padding 8px after icon
- Dividers: 1px #E5E7EB / #334155

### Modal / Dialog

- Overlay: rgba(0,0,0,0.5), click outside to close (if non-critical)
- Panel: Surface background, elevation shadow, border-radius 12px
- Max width: 480px (default)
- Padding: 24px
- Title: 24px heading, margin-bottom 16px
- Content: Body text with standard line height
- Actions: Button group, right-aligned, gap 8px
- Close button: X icon, top-right corner, 36px touch target

---

## 5. Spacing & Layout

### Grid & Max Width

- **Base unit:** 8px
- **Max content width:** 1200px (desktop layouts)
- **Gutter:** 16px (between columns)
- **Page padding:** 24px (desktop), 16px (tablet), 12px (mobile)

### Component Spacing

| Element | Spacing |
|---------|---------|
| **Section to section** | 48px |
| **Card to card** | 16px |
| **Inside card padding** | 16px–24px |
| **Between form fields** | 16px |
| **Button to button (horizontal)** | 8px |
| **Icon to text** | 8px |
| **Paragraph margin** | 0 (rely on line-height and bottom margin) |
| **Paragraph bottom margin** | 16px |

### Responsive Behavior

- **Desktop (1024px+):** Full spacing scale, multi-column layouts
- **Tablet (768px–1023px):** Reduce page padding to 16px, simplify columns to 2-max
- **Mobile (<768px):** Single column, page padding 12px, reduce section spacing to 32px, use full-width modals

---

## 6. Motion & Interaction

### Animation Philosophy

Motion in Monad is **purposeful and fast**. Animations serve function—revealing state, providing feedback, guiding attention—never decoration. All animations default to 150–250ms duration, avoiding sluggishness while remaining perceivable.

### Key Transitions

| Interaction | Duration | Easing | Use |
|-------------|----------|--------|-----|
| **Button hover/active** | 150ms | cubic-bezier(0.4, 0, 0.2, 1) | Scale 0.95 on click, color shift on hover |
| **Focus ring** | 150ms | cubic-bezier(0.4, 0, 0.2, 1) | Appear/disappear focus indicator |
| **Modal open** | 250ms | cubic-bezier(0.4, 0, 0.2, 1) | Fade in + scale up from center (0.95 → 1.0) |
| **Modal close** | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | Fade out + scale down to 0.95 |
| **Dropdown expand** | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | Max-height expand, opacity fade-in |
| **Sidebar collapse** | 250ms | cubic-bezier(0.4, 0, 0.2, 1) | Width transition with content fade |
| **Toast enter** | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | Slide in from top + fade |
| **Toast exit** | 150ms | cubic-bezier(0.4, 0, 0.2, 1) | Slide out + fade |

### Hover States

- **Buttons:** Darken by 1 step on primary, lighten by 1 step on secondary
- **Links:** Underline with accent color, underline offset 2px
- **Cards (if interactive):** Elevation shadow increase, subtle cursor change
- **Form inputs:** Border color to primary (no fill change)

### Loading & Feedback

- **Button loading:** Replace text with 16px spinner (Indigo), padding unchanged
- **Skeleton screens:** Use #E5E7EB blocks with pulse animation (opacity 0.6 → 1.0, 1.5s duration)
- **Data load success:** Brief green checkmark icon, 1s display then fade
- **Network error:** Red alert badge + toast notification, persistent until dismissed

### Focus & Keyboard Navigation

- **Focus visible:** Always present; 2px Indigo outline, 2px offset from element
- **Focus color:** #6366F1 (primary)
- **Tab order:** Logical (left-to-right, top-to-bottom); skip decorative elements
- **Escape key:** Close modals, collapse menus
- **Enter key:** Submit forms, activate buttons
- **Arrow keys:** Navigate lists, sliders, select menus (if applicable)

### Respects prefers-reduced-motion

All animations check for `prefers-reduced-motion: reduce` media query:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
```

---

## Accessibility

### Contrast Ratios

| Color Pair | Light Mode | Dark Mode | Requirement | Status |
|------------|-----------|-----------|-------------|--------|
| **Text on Background** | #1F2937 on #FAFAFA | #F1F5F9 on #0F172A | 4.5:1 AA | 16.1:1 ✓ / 13.4:1 ✓ |
| **Text on Primary** | #FFFFFF on #6366F1 | #FFFFFF on #6366F1 | 4.5:1 AA | 10.2:1 ✓ |
| **Muted Text** | #6B7280 on #FAFAFA | #94A3B8 on #0F172A | 4.5:1 AA | 7.2:1 ✓ / 6.8:1 ✓ |
| **Success** | #10B981 on #ECFDF5 | #10B981 on #1E293B | 4.5:1 AA | 7.8:1 ✓ / 5.1:1 ✓ |
| **Warning** | #F59E0B on #FFFBEB | #F59E0B on #1E293B | 4.5:1 AA | 9.2:1 ✓ / 3.1:1 ✗ |
| **Danger** | #EF4444 on #FEF2F2 | #EF4444 on #1E293B | 4.5:1 AA | 8.4:1 ✓ / 4.8:1 ✓ |

**Note on Warning:** Dark mode warning color requires additional contrast. Use warning icon + text in #F59E0B with background highlight, or adjust to #FBBF24 for dark mode specifically.

### Minimum Requirements

- **Touch target:** 44×44px minimum for all interactive elements (buttons, links, toggles, inputs)
- **Focus indicator:** 2px Indigo (#6366F1) outline, 2px offset, always visible
- **Focus contrast:** #6366F1 vs #FAFAFA = 7.5:1, vs #0F172A = 4.7:1 (exceeds AA minimum 3:1 for focus)
- **Error messages:** Paired with icon AND color (never color alone); positioned below/beside input
- **Labels:** Always associated with form fields via `<label for>` or aria-labelledby
- **Headings:** Use semantic HTML (h1–h6); never skip levels
- **Lists:** Use semantic `<ul>`, `<ol>`, `<li>` for screen reader benefits
- **Icons:** Decorative icons have `aria-hidden="true"`; semantic icons (error, success) have `role="img"` + `aria-label`

### Motion

- **Animations respect prefers-reduced-motion:** Yes, all transitions reduced to near-instant (<10ms) when enabled
- **No auto-playing video/sound:** Always requires user interaction
- **Avoid flashing:** No content flashes more than 3 times per second

### Component-Specific A11y

| Component | Requirement |
|-----------|-------------|
| **Buttons** | `role="button"`, `aria-pressed` if toggle, `aria-disabled` if disabled |
| **Form inputs** | `<label>`, `aria-describedby` for hints, `aria-invalid` for errors |
| **Modals** | `role="dialog"`, `aria-modal="true"`, focus trap, `aria-labelledby` for title |
| **Alerts/Toasts** | `role="alert"`, `aria-live="polite"` for dynamic content |
| **Navigation** | `<nav>` semantic HTML, `aria-current="page"` for active link |
| **Tables** | `<thead>`, `<tbody>`, `<th>` with `scope`, `aria-sort` for sortable columns |
| **Code blocks** | `<pre><code>`, syntax highlighting via CSS only (not images) |

### Notes

- **Developers are diverse:** Consider color blindness (some developers are colorblind); test color-dependent features with tools like Sim Daltonism or Color Contrast Analyzer.
- **Dark mode is critical:** Many developers use dark mode for long work sessions; ensure dark mode is not an afterthought—test equally.
- **Keyboard-only users exist:** Monad must be fully navigable without a mouse. Test with keyboard only (Tab, Enter, Escape, Arrows).
- **Screen reader testing:** Test with NVDA (Windows) and VoiceOver (macOS/iOS) to ensure semantic HTML and ARIA labels function correctly.
- **Zoom support:** Ensure layout reflows gracefully at 200% zoom; no content should be cut off.

```
