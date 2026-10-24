# Homepage maintenance

The homepage still uses Jekyll and the AcademicPages default layout. Its entry is `_pages/about.md`; `homepage: true` selects the home-specific masthead, footer and scripts. Other routes continue to use their original templates and styles.

- Edit the biography, research interests and secondary activities in `_pages/about.md`.
- Edit publications in `_data/home_publications.yml`. `selected: true` and `group` control the selected-research list. Every entry needs a `preview` thumbnail, used in both lists. All entries appear in the complete bibliography, in data-file order. Keep `authors` in publication order; use `<strong class="author-self">` for Zicheng Duan. `highlight` is an optional separate research note.
- Edit news in `_data/home_news.yml`, newest first. Three updates are visible initially; the remaining updates use a native expandable section.
- Edit internships in `_data/home_internships.yml`. Only company, dates, location, mentors, topic and logo are displayed.
- Change the CV link in `_config.yml` under `author.cv`.
- Home-specific styling is in `assets/css/home.css`; theme behavior is in `assets/js/home-theme.js` (before paint) and `assets/js/home.js` (controls and bibliography anchors).
- Homepage thumbnails are in `images/home/`. Originals remain in `images/`. Composite transparent source figures onto white before converting to RGB/WebP, so alpha regions never become black. Thumbnails preserve the full scientific figure; animated research assets use static preview frames, with project links leading to the full demonstrations.
- The locally hosted Newsreader heading font is licensed under the SIL Open Font License; see `assets/fonts/Newsreader-OFL.txt`.

Build with `bundle install` and `bundle exec jekyll serve`. Do not load the legacy Plotly/MathJax/Mermaid bundle on the homepage unless new content actually needs it.

## Verification checklist

Build the complete site; check all 14 bibliography entries, six selected publications, four internships and six news updates. Inspect 320, 390, 768, 1024 and 1440px widths plus a 1100×600 short window. Check the publication and news disclosures with keyboard input, direct `#all-publications` navigation, dark/light switching and persistence, system-theme changes, disabled JavaScript and blocked storage. Verify local resources and contrast with an accessibility scanner. Shared-template edits must leave legacy pages unchanged.

The homepage uses a blue accent palette. LiveWorld’s highlight retains its flame, 16px text and bold/underlined key terms. A locally hosted single-glyph Noto Color Emoji font ensures the flame renders; its SIL OFL license is in `assets/fonts/NotoColorEmoji-OFL.txt`. Research images have no decorative frame. All 14 bibliography entries display thumbnails using the shared publication template. Body text is consistently 16px at every viewport width; section headings are 30px (28px on phones), topic headings are 20px, and paper titles are 18px. The LiveWorld highlight has a light gray background (neutral dark gray in dark mode).

Content checkpoint before redesign: `65c30b1`.
