# CLAUDE.md

## Mission
Build POLARIS for SIH26063 as a polished, demo-ready MVP. Prioritize completion, reliability and visual quality over feature count.

## Mandatory reading
Before changing code, read:
- docs/PRD.md
- docs/ARCHITECTURE.md
- docs/DESIGN_SYSTEM.md

## Non-negotiable rules
1. Do not invent government claims or real datasets.
2. Clearly label demo/mock data in admin/dev contexts.
3. Do not add complex AI/ML unless explicitly requested.
4. Do not add blockchain, Web3, microservices or unnecessary infrastructure.
5. Do not rewrite unrelated files.
6. Reuse components instead of duplicating UI.
7. Type everything in TypeScript.
8. Use accessible semantic HTML.
9. Use Lucide icons, not emoji.
10. Keep dependencies minimal.
11. Every route must have a useful empty/loading/error state.
12. Verify the build after meaningful changes.
13. Never sacrifice usability for animation.

## Build order
Phase 1: app shell + design tokens + navigation.
Phase 2: landing page.
Phase 3: search + resource repository.
Phase 4: expedition + resource detail.
Phase 5: media/story pages.
Phase 6: admin dashboard.
Phase 7: responsive polish + accessibility + demo QA.

## Definition of done
The app should feel coherent from first click to final click. A judge should be able to understand, search, inspect a resource and see how an administrator manages content without needing explanation.
