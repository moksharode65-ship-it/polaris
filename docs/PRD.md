# PRD — POLARIS
## SIH26063 — Integrated Polar Science Outreach, Knowledge Repository & Media Dissemination Portal

### Product vision
POLARIS is a premium, public-facing digital knowledge platform that makes polar science discoverable, understandable, searchable, and reusable. It combines a high-fidelity editorial experience with a practical research repository.

### Primary users
1. Public visitors — explore expeditions, stories, media and science.
2. Students/educators — discover explainers, publications and learning material.
3. Researchers — search reports, datasets and publications.
4. Content administrators — upload, tag, curate and publish material.

### Core MVP
- Landing page with cinematic polar-science hero.
- Global search across resources.
- Expedition directory + expedition detail.
- Research/publication repository with filters.
- Media gallery for photos/videos.
- Science stories / explainers.
- Resource detail pages with metadata and download/view actions.
- Admin dashboard for content CRUD.
- Responsive accessibility-first UI.

### Signature UX
- Editorial storytelling + SaaS information architecture.
- Dark premium shell with restrained icy accents.
- Large typography, generous whitespace, glass surfaces used sparingly.
- Interactive expedition timeline.
- Search command palette.
- Filter chips and saved/favorite resources.
- Data-rich but calm dashboards.

### Non-goals for MVP
- Real government integrations.
- Live satellite feeds.
- Training custom AI models.
- Complex scientific simulation.
- Production social-media publishing integrations.
- Real authentication infrastructure beyond a simple demo role switch.

### Demo data
Use clearly labelled realistic mock records. Never imply mock data is official government data.

### Acceptance criteria
- A judge can understand the purpose within 10 seconds.
- Search finds resources by title, author, year, expedition and topic.
- Every major content type has a polished detail view.
- Admin can create/edit/delete demo records.
- Mobile and desktop layouts are coherent.
- No dead-end primary navigation.
- Loading, empty and error states are designed.

### Suggested stack
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion + Lucide icons.
Data layer: PostgreSQL/Supabase or a typed local mock repository for MVP.
Charts: Recharts only where they improve comprehension.
Maps: MapLibre/Leaflet only if needed; keep map usage lightweight.

### Success metric for the hackathon
A complete vertical slice beats a huge unfinished feature set:
Landing → Search → Resource → Expedition → Admin.
