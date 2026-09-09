# ARCHITECTURE.md

## Architecture principle
Build a production-shaped modular monolith. Keep domain logic independent from UI so a mock repository can later be replaced by an API/database.

## Folder structure

```text
polaris/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx
│  │  ├─ stories/
│  │  ├─ expeditions/
│  │  ├─ research/
│  │  └─ media/
│  ├─ resource/[id]/page.tsx
│  ├─ admin/
│  │  ├─ page.tsx
│  │  ├─ resources/
│  │  ├─ expeditions/
│  │  └─ media/
│  ├─ api/
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  ├─ ui/
│  ├─ navigation/
│  ├─ hero/
│  ├─ cards/
│  ├─ search/
│  ├─ charts/
│  └─ editorial/
├─ lib/
│  ├─ data/
│  ├─ types/
│  ├─ utils/
│  └─ search/
├─ public/
│  ├─ images/
│  ├─ icons/
│  └─ fonts/
├─ docs/
│  ├─ PRD.md
│  ├─ ARCHITECTURE.md
│  └─ DESIGN_SYSTEM.md
├─ CLAUDE.md
└─ README.md
```

## Domain model
Resource:
id, title, type, abstract, description, authors, year, topics, expeditionId, thumbnail, fileUrl, status

Expedition:
id, name, year, region, dates, lead, summary, status, heroImage

Media:
id, title, type, year, expeditionId, thumbnail, caption, credit

## Boundaries
UI components must not directly manipulate raw data.
Pages call typed domain functions.
Search logic lives in `lib/search`.
Mock data lives in `lib/data`.
API adapters can replace mock functions without changing page components.

## Performance
- Prefer server components for content pages.
- Lazy-load heavy media.
- Optimize images.
- Avoid unnecessary client state.
- Keep animation purposeful and short.
