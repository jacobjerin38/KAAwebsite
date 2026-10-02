# KAA Website v2 Upgrade Plan

## Audit (before changes)

- **Framework/routing:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS. The only application route is `/`; navigation is section-anchor based. Existing ERP module tiles currently point at marketing-site paths that are not implemented in this repository.
- **Homepage/components:** Root layout and metadata; hero, stats/industry ticker, about, five business-problem cards, why-choose-us, service verticals, ERP platform/modules, process, portfolio, industries, CTA, contact, navbar, footer. A Testimonials component exists but is not mounted.
- **Assets/fonts/icons:** Seven KAA PNG/JPEG-named visual assets plus logo and ERP dashboard screenshot. `next/font` loads Inter, Space Grotesk and JetBrains Mono; Lucide supplies icons. No 3D dependency or 3D scene exists.
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

## Implementation scope and constraints

Implement the complete cohesive homepage upgrade in this repository using verified content and existing assets. New standalone product routes and backend services are not justified by the present codebase or the brief’s preservation rule; keep visitors on the established homepage and link ERP inquiries to the already published ERP dashboard/contact destinations only.
