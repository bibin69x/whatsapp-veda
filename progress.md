# Ayur Veda Mantra — Project Progress & Requirements Matrix (`progress.md`)

> **Website:** Ayur Veda Mantra  
> **Brand Vision:** Authentic Ayurveda, Natural Wellness, Trust, Calmness, and Traditional Healing with a Modern Aesthetic.  
> **Primary Contact / WhatsApp Business Number:** `9074255833` (`+91 9074255833`)  
> **Created From:** [`problemStatement.md`](./problemStatement.md)

---

## 1. Brand Identity & Asset Specifications

| Asset / Parameter | Specified Value / Path | Purpose & Placement | Status |
| :--- | :--- | :--- | :---: |
| **Brand Name** | **Ayur Veda Mantra** | Global Site Header, Page Titles, Metadata, Footers | 🟢 Integrated |
| **Brand Logo** | [`logo.png`](./logo.png) | Navbar brand mark, Footer branding, Favicon, Hero badge | 🟢 Integrated |
| **Hero Background Image** | [`hero.png`](./hero.png) | Home page hero background with subtle dark luxury overlay | 🟢 Integrated |
| **Doctor Profile Photo** | [`Dr. Anupama Ramachandran.jpeg`](./Dr.%20Anupama%20Ramachandran.jpeg) | About Us lead practitioner, Home Page doctor spotlight | 🟢 Integrated |
| **WhatsApp Ordering** | `9074255833` | Single-click product checkout & general consultation booking | 🟢 Active |

### Color Palette System
- **Deep Brown (`#2B241E`)**: Primary brand color, dark headers/footers, luxury accents, main typography.
- **Ayurvedic Green (`#1D4F40`)**: Primary CTA buttons, treatment badges, WhatsApp triggers, vitality accents.
- **Warm Ivory / Cream (`#FBF9F5` / `#F5EFE6`)**: Natural background tones, card backings, soft sections.
- **Pure White (`#FFFFFF`)**: High contrast cards, clean backgrounds, form inputs.
- **Charcoal / Black (`#000000` / `#1E1A17`)**: Readable body text, high-contrast descriptions.

---

## 2. Core Functional Requirements

- [x] **No Cart / Checkout Friction**: Direct manual order flow via WhatsApp without complex e-commerce or cart systems.
- [x] **Pre-filled Product WhatsApp Messages**: Dynamic URL-encoded trigger formatted as:  
  `https://wa.me/919074255833?text=I%20want%20%22[Product%20Name]%22`
- [x] **Mobile-First Responsive Layout**: Smooth browsing on mobile phones, tablets, laptops, and ultra-wide desktops.
- [x] **Floating Sticky WhatsApp Action**: Immediate reachability from any page on mobile and desktop.
- [x] **Strict Ethical Content**: Honest Ayurvedic principles without unsupported medical promises or hype.

---

## 3. Treatment Inventory & Categorization

All 11 verified treatments organized into 4 distinct therapeutic domains in [`treatments.html`](./treatments.html):

### Category 1: Body Therapies
- [x] **Abhyanga + Swedam**: Full-body Ayurvedic herbal oil massage followed by therapeutic steam bath.
- [x] **Abhyanga + Kizhi**: Warm medicated herbal poultice bolus massage for deep tissue rejuvenation.
- [x] **Pada Abhyanga**: Traditional lower limb and foot reflexology therapy for grounding and stress release.

### Category 2: Head & Face
- [x] **Face Abhyanga — Fascial Release**: Ayurvedic facial massage with herbal oils focused on fascial tension relief and skin vitality.
- [x] **Head Abhyanga — Hair Treatment**: Scalp nourishment and root-strengthening medicated oil therapy.

### Category 3: Specialised Treatments
- [x] **Shirodhara + Netra Dhara**: Continuous rhythmic warm herbal oil stream on the forehead paired with gentle herbal eye cleansing.
- [x] **Sirovasti**: Traditional medicated oil retention cap over the cranial region for neurological equilibrium.
- [x] **Tarpana (for Vision)**: Medicated ghee ocular rejuvenation bath for eyesight strain and cooling.

### Category 4: Pain Management
- [x] **Neck Pain Treatment Package**: Cervical tension relief, herbal fomentation, and restorative muscle therapy.
- [x] **Back Pain Treatment Package**: Lumbar care, spine-nourishing medicated warm oils, and herbal compresses.
- [x] **Knee Pain Treatment Package**: Joint lubrication (Janu Basti/Kizhi) and anti-inflammatory Ayurvedic regimen.

---

## 4. Product Catalogue Specifications

| Product Line | Category | Core Purpose | WhatsApp Message Trigger | Status |
| :--- | :--- | :--- | :--- | :---: |
| **Ayurvedic Hair Oil** | Hair & Scalp | Root strengthening, cooling, scalp health | `I want "Ayurvedic Hair Oil"` | 🟢 Implemented |
| **Pain Relief Thailam** | Pain Management | Joint, muscle, and cervical discomfort relief | `I want "Pain Relief Thailam"` | 🟢 Implemented |
| **Kumkumadi Face Elixir**| Skin & Beauty | Herbal skin radiance, glow, and nourishment | `I want "Kumkumadi Face Elixir"`| 🟢 Implemented |
| **Digestive Herbal Choorna**| Wellness & Digestion | Agni (digestive fire) balance & gut health | `I want "Digestive Herbal Choorna"` | 🟢 Implemented |
| **Herbal Snana Choornam**| Body & Bath | Traditional soap-free herbal body cleanse | `I want "Herbal Snana Choornam"` | 🟢 Implemented |
| **Daily Vitality Rasayana** | Immunity & Vitality| Preventive herbal restorative jam/tonic | `I want "Daily Vitality Rasayana"` | 🟢 Implemented |

---

## 5. Website Architecture & Page Deliverables

### Phase 1: Foundation & Global Design System
- [x] Global stylesheet [`css/styles.css`](./css/styles.css) with CSS custom properties (`--primary-brown`, `--ayur-green`, etc.)
- [x] Typography integration: Google Fonts *Cormorant Garamond* (Headings) and *Plus Jakarta Sans* (Body)
- [x] Reusable responsive Header with logo [`logo.png`](./logo.png), navigation links, phone number, and WhatsApp CTA
- [x] Reusable Footer with quick navigation, hours, clinic address, phone, and disclaimer
- [x] Floating mobile/desktop WhatsApp quick contact button
- [x] Global JavaScript [`js/main.js`](./js/main.js) for mobile drawer menu, dynamic WhatsApp generators, and scroll reveals

### Phase 2: Home Page ([`index.html`](./index.html))
- [x] **Hero Section**: High-impact presentation using [`hero.png`](./hero.png), brand headline, tagline, and dual booking/catalogue CTAs
- [x] **Brand Introduction**: Ayur Veda Mantra philosophy and authentic traditional healing values
- [x] **Core Pillars of Care**: Purity, Individual Constitution (Doshas), Ancient Herbals, Holistic Living
- [x] **Doctor Spotlight**: Prominent feature of **Dr. Anupama Ramachandran** using [`Dr. Anupama Ramachandran.jpeg`](./Dr.%20Anupama%20Ramachandran.jpeg)
- [x] **Featured Treatments Showcase**: Visual cards with category tags and direct booking CTAs
- [x] **Featured Products Preview**: Top formulations with one-click "Order on WhatsApp" triggers
- [x] **Why Choose Us & Trust Badges**: Pure ingredients, certified practitioner, authentic Keralan techniques
- [x] **Consultation CTA Banner**: Direct link to WhatsApp line (`9074255833`)

### Phase 3: About Us Page ([`about.html`](./about.html))
- [x] **Brand Story**: Heritage, vision, and dedication to authentic Ayurvedic therapies
- [x] **Meet Dr. Anupama Ramachandran**: Practitioner biography, credentials, philosophy of root-cause healing, using [`Dr. Anupama Ramachandran.jpeg`](./Dr.%20Anupama%20Ramachandran.jpeg)
- [x] **Our Philosophy**: Vata, Pitta, and Kapha balance, tailored lifestyle guidance, natural herbal purity
- [x] **Treatment Environment**: Hygiene standards, serene therapy rooms, authentic medicated oils
- [x] **Action CTA**: Book a personalized consultation

### Phase 4: Treatments Page ([`treatments.html`](./treatments.html))
- [x] **Category Filter Tabs**: All Treatments, Body Therapies, Head & Face, Specialised Treatments, Pain Management
- [x] **Detailed Treatment Cards**: High-res therapy imagery, description, ideal for, procedure summary, and key benefits
- [x] **Direct WhatsApp Booking**: Pre-fills `Hello, I would like to book a consultation / enquire about "[Treatment Name]"`
- [x] **Frequently Asked Questions (FAQ)**: Accordion addressing first-time visitors, consultation requirements, and session prep

### Phase 5: Products Page ([`products.html`](./products.html))
- [x] **Catalogue Header**: Explaining the manual, personalized WhatsApp order system
- [x] **Product Grid**: Card visuals, product titles, benefits, key botanical ingredients, volume, price tag
- [x] **One-Click WhatsApp Order Button**: Dynamic pre-filled message generator `I want "[Product Name]"`
- [x] **How Ordering Works Guide**: Step 1 (Browse) -> Step 2 (Click WhatsApp) -> Step 3 (Confirm delivery & payment with clinic)
- [x] **Authenticity Guarantee**: 100% genuine Ayurvedic classical and proprietary formulations

### Phase 6: Contact Us Page ([`contact.html`](./contact.html))
- [x] **Contact Cards**: Phone (`9074255833`), WhatsApp direct link, Email, Clinic Location
- [x] **Opening Hours & Consultation Timings**: Morning & evening therapy slots
- [x] **Interactive Consultation Enquiry Form**: Generates structured enquiry and offers instant WhatsApp dispatch
- [x] **Location / Map Card**: Address directions and arrival information

### Phase 7: Optimization, Accessibility & Final QA
- [x] Semantic HTML5 validation, ARIA labels, and keyboard navigation
- [x] High-contrast readability checks across all screen sizes
- [x] Responsive cross-device testing (Mobile, Tablet, Desktop)
- [x] WhatsApp link testing for all 11 treatments and 6 products
- [x] Performance and image optimization for lightning-fast loads

---

## 6. Live Progress & Status Tracker

| Deliverable / Milestone | Status | Target Completion | Notes |
| :--- | :---: | :---: | :--- |
| **Project Tracker (`progress.md`)** | 🟢 Complete | Immediate | Baseline created and mapped to problem statement |
| **Design System & Global CSS (`css/styles.css`)** | 🟢 Complete | Phase 1 | Typography, color tokens, layout system, responsive |
| **Global JS Utilities (`js/main.js`)** | 🟢 Complete | Phase 1 | Dynamic WhatsApp URL generator & mobile nav |
| **Home Page (`index.html`)** | 🟢 Complete | Phase 2 | With `hero.png`, `logo.png`, `Dr. Anupama Ramachandran.jpeg` |
| **About Us Page (`about.html`)** | 🟢 Complete | Phase 3 | Lead practitioner profile & philosophy |
| **Treatments Page (`treatments.html`)** | 🟢 Complete | Phase 4 | All 11 treatments across 4 categories |
| **Products Page (`products.html`)** | 🟢 Complete | Phase 5 | Catalogue with dynamic WhatsApp ordering flow |
| **Contact Us Page (`contact.html`)** | 🟢 Complete | Phase 6 | Multi-channel contact & consultation enquiry form |
| **QA, Mobile & Cross-Browser Verification** | 🟢 In Verification | Phase 7 | Verification via subagent browser testing |

---

*Last Updated: All 5 core pages, CSS design system, and JS handlers fully built.*
