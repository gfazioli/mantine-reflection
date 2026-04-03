# CLAUDE.md

## Project
`@gfazioli/mantine-reflection` — A Mantine 9 React component that creates a reflection effect on images or any other component. Supports responsive reflection distance, dark mode shadow, blur without edge clipping, and accessibility. Requires React 19 and TypeScript 6.

## Commands
| Command | Purpose |
|---------|---------|
| `yarn build` | Build the npm package via Rollup |
| `yarn dev` | Start the Next.js docs dev server (port 9281) |
| `yarn test` | Full test suite (syncpack + oxfmt + typecheck + lint + jest) |
| `yarn jest` | Run only Jest unit tests |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn docs:build` | Build the Next.js docs site for production |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn lint` | Run oxlint + Stylelint |
| `yarn format:write` | Format all files with oxfmt |
| `yarn storybook` | Start Storybook dev server |
| `yarn clean` | Remove build artifacts |
| `yarn release:patch` | Bump patch version and deploy docs |
| `diny yolo` | AI-assisted commit (stage all, generate message, commit + push) |

> **Important**: After changing the public API, always run `yarn clean && yarn build` before `yarn test`.

## Architecture

### Workspace Layout
Yarn workspaces monorepo with two workspaces: `package/` (npm package) and `docs/` (Next.js 15 documentation site).

### Package Source (`package/src/`)
- `Reflection.tsx` — Main component (factory pattern)
- `Reflection.module.css` — CSS Modules with direction variants and animation keyframes
- `index.ts` — Public exports

Single-component package built with Mantine's `factory<ReflectionFactory>` pattern.

### Build Pipeline
Rollup bundles to dual ESM/CJS with `'use client'` banner. CSS modules hashed with `hash-css-selector` (prefix `me`). TypeScript declarations via `rollup-plugin-dts`. CSS split into `styles.css` and `styles.layer.css`.

## Component Details

### Responsive props
The following props accept `StyleProp<...>` — either a static value or a Mantine breakpoint object (e.g., `{ base: 0, md: 20 }`):
- `reflectionDistance` — `StyleProp<MantineSize | number | (string & {})>`
- `reflectionOpacity` — `StyleProp<number | (string & {})>`
- `reflectionBlur` — `StyleProp<number | (string & {})>`
- `shadowSize` — `StyleProp<MantineSize | number | (string & {})>`

Responsive values are resolved via a `ReflectionMediaVariables` component using `InlineStyles` + CSS media queries (same pattern as Mantine's `SimpleGrid`). No React re-renders on resize. When `reflectionBlur` is responsive, `--reflection-blur-padding` is also set per breakpoint to prevent edge clipping.

### Water ripple effect
`ripple` enables a water distortion effect on the reflection using an inline SVG filter with `feTurbulence` + `feDisplacementMap`. Each instance gets a unique filter ID via `useId()`. Configuration:
- `rippleStrength` (1-50, default 10) — displacement map scale
- `rippleFrequency` (default 0.02) — turbulence base frequency
- `rippleSpeed` (seconds, default 3) — SVG `<animate>` duration (0 = static)

### Blur without edge clipping
The reflection uses `padding` + negative `margin` to compensate for `filter: blur()` edge clipping. The padding size is `blur radius + 2px` safety margin, set via `--reflection-blur-padding`.

### Dark mode shadow
`shadowColor="auto"` uses CSS `light-dark()` to switch between black (light) and white (dark) shadow colors.

### Accessibility
- Reflection div: `aria-hidden="true"`, `role="presentation"`
- `disableChildren`: sets `disabled: true` + `tabIndex: -1` recursively
- `@media (prefers-reduced-motion: reduce)`: disables blur filter and animation
- Memoized recursive cloning via `useMemo`

### CSS custom properties
- **Root**: `--shadow-offset`, `--shadow-opacity`, `--shadow-blur`, `--shadow-color`, `--shadow-scale-x`, `--shadow-scale-y`, `--shadow-size`
- **Reflection**: `--reflection-distance` (responsive), `--reflection-opacity` (responsive), `--reflection-start`, `--reflection-end`, `--reflection-stretch`, `--reflection-blur` (responsive), `--reflection-blur-padding` (derived from blur, also responsive)
- **Root** (additional): `--shadow-size` (responsive)

## Testing
Jest with `jsdom`, `esbuild-jest` transform, CSS mocked via `identity-obj-proxy`. Tests use `@mantine-tests/core` render helper.

## Ecosystem
This repo is part of the Mantine Extensions ecosystem, derived from the `mantine-base-component` template. See the workspace `CLAUDE.md` (in the parent directory) for:
- Development checklist (code → test → build → docs → release)
- Cross-cutting patterns (compound components, responsive CSS, GitHub sync)
- Update packages workflow
- Release process
