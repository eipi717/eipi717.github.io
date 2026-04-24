# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

This is a **Next.js 14 App Router** portfolio site with a dual-persona system (Developer vs. IT Support), dark/light appearance, and Framer Motion animations.

### Dual-Persona System

The site's core feature is a `mode` toggle (`dev` | `it`) that re-renders content across all pages. This is managed by `ModeContext` (`src/context/ModeContext.tsx`), which persists both `mode` and `appearance` to `localStorage` and applies them as CSS classes on `<html>`:

- `dark` class → dark mode
- `persona-it` class → emerald accent color; absence → violet accent

A blocking inline `<script>` in `layout.tsx` reads localStorage and applies these classes before React hydrates, preventing a flash of wrong theme/persona.

### Data Layer

All content lives in two data files — no CMS or API:

- **`src/data/site.ts`** — `personal` info, `personas` (per-mode role/skills/highlights), `experiences`, `projects`. The `personas` object is keyed by `Mode` (`dev` | `it`) and drives what text, skills, and highlights render on each page.
- **`src/data/freelance.ts`** — freelance-specific data (stats, services, packages, process, testimonials, FAQs) also keyed by `Mode`. Helper functions `getFreelanceStats`, `getFreelanceServices`, `getFreelancePackages` accept a `Mode` argument.

To change site content (bio, skills, work history, services, pricing), edit these two files.

### Theming

CSS custom properties in `src/app/globals.css` define the full design token system. Key tokens:

- `--color-persona-primary` — the accent color, switches between violet (dev) and emerald (IT) via `.persona-it` class
- `--color-background`, `--color-foreground` — root background/text, switch via `.dark` class
- All tokens are exposed to Tailwind via `@theme inline` so they're available as `bg-background`, `text-persona-primary`, etc.

Use `style={{ color: "var(--color-persona-primary)" }}` for inline persona-aware colors, or `text-[color:var(--color-persona-primary)]` in Tailwind classnames.

### Pages

Each route (`/`, `/about`, `/experience`, `/services`, `/contact`) is a `"use client"` component that calls `useMode()` to get the current `mode` and renders persona-specific content from the data files.

### Layout

`layout.tsx` wraps everything in `ModeProvider` → `AppShell` → `Navbar` + `main` + `ContactBar` + `Footer`. The `Navbar` contains the DEV/IT toggle pill and the dark/light toggle button.
