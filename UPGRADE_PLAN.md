# KAA Website v2 Upgrade Plan

## Audit (before changes)

- **Framework/routing:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS. The only application route is `/`; navigation is section-anchor based. Existing ERP module tiles currently point at marketing-site paths that are not implemented in this repository.
- **Homepage/components:** Root layout and metadata; hero, stats/industry ticker, about, five business-problem cards, why-choose-us, service verticals, ERP platform/modules, process, portfolio, industries, CTA, contact, navbar, footer. A Testimonials component exists but is not mounted.
- **Assets/fonts/icons:** Seven KAA image assets plus logo and ERP dashboard screenshot. The original `next/font/google` setup made builds depend on Google Fonts network access; the upgraded site uses local system-font stacks for a self-contained build. Lucide supplies icons. No 3D dependency or scene exists.
- **Motion:** Framer Motion and a canvas starfield drive parallax/reveals and decorative effects. The canvas/mobile workload was already reduced in the preceding fix. No reduced-motion handling was found in the core motion components.
- **Forms/integrations:** Contact details link to email, phone, WhatsApp and Instagram. The contact form has no API/backend and currently reports “Message Sent” without sending anything; do not preserve this false-success behavior. No database, authentication, chatbot, or application API exists. Vercel Analytics is installed.
- **Claims/content risks:** Homepage contains numeric counters and portfolio entries that need evidence before being repeated or expanded. Keep only verified contact and product messaging from the brief/site, label dashboard imagery as a preview, and do not add fabricated client metrics, reviews, certifications, guarantees, or timelines.
- **SEO/accessibility gaps:** Metadata exists, but no sitemap, robots route, canonical/JSON-LD was found. Several footer/legal/navigation links use `#`; contact labels lack input `htmlFor`/`id`; motion components lack reduced-motion handling.

## Incremental implementation plan

1. Preserve the App Router, current homepage sections, KAA logo/imagery, contact channels, and the current `/` URL. Do not introduce a backend or a heavy 3D runtime.
2. Establish the requested navy, burgundy, soft-cream and restrained pink design tokens through the existing CSS/Tailwind system; simplify excess neon/glass effects and respect reduced motion.
3. Refine hero and section hierarchy around “Qatar’s Full-Stack Digital Partner,” the business problem-to-solution story, ERP, HRMS, accounting, CRM, projects, inventory/warehouse, cybersecurity and IT services, reusing existing module data and imagery.
4. Fix unsafe/false interactions: make module exploration work without linking to nonexistent local routes; make contact submission honest with a prefilled email draft (no success claim); remove placeholder legal links or make them inert text until real pages exist.
5. Add a small keyboard-accessible, data-driven FAQ chatbot using only approved site content and existing human contact channels. Add valid sitemap/robots/canonical and accurate Organization structured data.
6. Audit image priorities, labels, keyboard/focus behavior, mobile overflow and animation cost. Run build, lint, and TypeScript checks; report any device-only checks that cannot be performed in this environment.

## Completed

- [x] Preserved the existing App Router home page, section navigation, brand/logo assets, business content and contact details.
- [x] Shifted the visual system toward navy, burgundy, blush and a cream feature section; reduced excess neon/glass styling and added system reduced-motion support.
- [x] Reframed the homepage around the KAA digital partner story and current solution groups, reusing existing ERP tabs/modules for HRMS, accounting, CRM, projects, inventory and warehouse.
- [x] Replaced unsupported counters and fictional case studies with product principles and solution categories; labeled the ERP screenshot as a product preview.
- [x] Made all 22 ERP module tiles expandable without linking to nonexistent local routes; retained category filters and existing ERP tab interactions.
- [x] Added a fixed, accessible, FAQ-only assistant that uses approved site/product details and links to KAA’s existing email, phone and WhatsApp contact routes.
- [x] Changed the contact form to prepare an email draft and removed its false sent/response-time promise; labeled fields and removed dead footer legal links.
- [x] Added canonical, Open Graph/Twitter metadata, Organization JSON-LD, `robots.txt`, `sitemap.xml`, skip navigation, focus states and mobile-menu keyboard behavior.
- [x] Reduced eager image loading, removed remote font build requests, and kept mobile canvas/reduced-motion safeguards.
- [x] Added the Next.js 14 ESLint config required by the existing `next lint` script.

## Verification

- `npx tsc --noEmit`: passed.
- `npm run lint`: passed with no warnings or errors.
- `npm run build`: passed; `/`, `/robots.txt`, and `/sitemap.xml` prerender successfully.
- Local desktop browser smoke check: homepage, FAQ assistant response, ERP tab selection and an expanded module detail verified.
- Native iOS/Android device and narrow viewport testing remains a deployment/device check.

## Implementation scope and constraints

Implement the complete cohesive homepage upgrade in this repository using verified content and existing assets. New standalone product routes and backend services are not justified by the present codebase or the brief’s preservation rule; keep visitors on the established homepage and link ERP inquiries to the already published ERP dashboard/contact destinations only.
