# Homepage refinement implementation plan

> Execute inline with superpowers:executing-plans; request one independent review after implementation.

Goal: Redesign only the personal homepage into a quiet, polished academic portfolio while retaining Jekyll, AcademicPages, existing URLs and the user-approved content.

Architecture: Inherit the existing default layout. Add a home layout, home-only stylesheet and a small theme script. Reuse the shared masthead/footer via explicit homepage branches. Store publication and internship records in Jekyll data; render selected work and the complete bibliography from the same records. Leave subpages unchanged.

Design: Cool white paper, blue accents (updated at the user’s request), serif name/section headings with readable system sans body text. Desktop portrait/contact sidebar; main column with introduction, research interests, compact news, selected research, bibliography disclosure, internships and secondary activities. Compact header anchors, no large decorative effects. Mobile stacks naturally with directly visible contact links. Full dark mode and keyboard accessibility.

Constraints: Preserve approved bio and interests verbatim, all 14 publications, six selected works, four internships with their six allowed fields, and existing resource links. No new claims about research contributions. Keep original media files. Generate smaller web derivatives for homepage use. Keep the user's LiveWorld subpage change from checkpoint 65c30b1 intact. Work in the current checkout as requested; no publication/deployment.

- [x] Commit the current content as a rollback checkpoint (65c30b1).
- [x] Extract data and implement homepage structure and scoped style.
- [x] Preserve links, optimize homepage media delivery and implement accessible theme/disclosures/navigation.
- [x] Build with Jekyll, inspect desktop/mobile/light/dark screenshots and test navigation/disclosures/theme, overflow and asset availability.
- [x] Review full diff for content preservation, subpage isolation, accessibility and maintenance; resolve issues.

Verification: Jekyll build success; all baseline publication titles/authors/resources preserved; four internships; no missing local resources; 320/390/768/1440px viewport checks; theme persistence and system preference; keyboard toggle and disclosures; no unexpected JS errors; compare a representative subpage against baseline output.

Verification results: full Jekyll 3.10 build passes. Playwright checks pass at nine widths (320–1920px), including keyboard disclosures/theme, stored and system theme, local resources and direct bibliography hash. Axe reports zero WCAG 2 A/AA, WCAG 2.1 AA or best-practice violations in light and dark modes. No-JS disclosures and restricted-storage theme behavior pass. Independent review found a short-height sticky-sidebar issue; a regression reproduced it at 1100×600, and a height media query fixes it. Legacy CV, publications and talks HTML matches checkpoint output modulo whitespace; shared main.css is identical. Static subpage sources have no redesign changes.

Homepage portrait and six research previews total 223,914 bytes, down from 57,666,461 source-image bytes. Original images remain untouched. The Chosen One paper URL was corrected to arXiv:2311.10093 using the linked repository's citation.
