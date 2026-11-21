# Premium Luxury Curtain Factory Website
### Dwarka – Najafgarh Region &bull; Delhi, India

An elegant, luxury-grade informational static website for a regional curtain manufacturing factory providing premium window draping collections and high-potential **dealership & distribution opportunities** across Dwarka, Najafgarh, and Southwest Delhi.

---

## ⚜ Brand & Design System

The visual design is curated with an interior-design luxury aesthetic:

| Color Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Golden** | `#C6A15B` | Accent borders, badges, CTA highlights, icons, active nav links |
| **Dark Brown** | `#4A3428` | Primary luxury contrast, footer background, primary headings |
| **Deep Dark Brown** | `#38251B` | Hero overlay backdrop, high-contrast dark elements |
| **Cream** | `#F5F0E8` | Secondary section background, soft card surfaces, warmth |
| **Beige** | `#E8DCCB` | Subtle dividers, border accents, elegant framing |
| **Pure White** | `#FFFFFF` | Main body backgrounds, clean card surfaces |

### Typography
- **Headings & Accents:** `Playfair Display` (Classic European luxury serif)
- **Body & Interface:** `Poppins` (Clean, geometric, highly legible sans-serif)

---

## 📑 Website Structure & Sections

1. **Sticky Header & Navigation Bar:**
   - Brand logo and regional marker (`[CURTAIN FACTORY] - DWARKA – NAJAFGARH • DELHI`).
   - Smooth navigation links: *Home*, *About Us*, *Collections*, *Dealership*, *Why Choose Us*, *Service Area*, *Contact*.
   - Standout golden CTA button: `"Become a Dealer"` that directly scrolls and prefills the dealership form.
   - Fully responsive hamburger navigation drawer for tablets and mobile devices.

2. **Hero Section (Home):**
   - Backdrop featuring luxury interior drapery with atmospheric warm lighting.
   - Main Headline: *"Transform Your Spaces with Premium Curtains"*
   - Subheading: *"Discover elegant curtain collections and dealership opportunities across Dwarka and Najafgarh, Delhi."*
   - Two CTA buttons: *"Explore Our Collection"* and *"Become a Dealer"*.
   - Trust indicators highlighting fabric quality, wholesale pricing, and local Delhi hub.

3. **About Our Factory:**
   - Clear focus on:
     - Premium curtain fabrics (jacquards, velvets, linens, thermal weaves)
     - Modern & traditional designs
     - Quality manufacturing & precision stitching
     - Affordable wholesale pricing (factory-direct economics)
     - Custom curtain solutions (bespoke drop lengths & pleats)

4. **Curtain Collections Showcase:**
   - 6 product cards with high-resolution imagery and descriptions:
     1. **Blackout Curtains:** Energy-efficient room darkening & thermal insulation.
     2. **Sheer Curtains:** Soft ambient light diffusion & daytime privacy.
     3. **Designer Curtains:** Contemporary styling with textured motifs.
     4. **Printed Curtains:** Fade-resistant botanical and geometric prints.
     5. **Luxury Curtains:** Opulent plush velvets and rich jacquards.
     6. **Custom-Made Curtains:** Tailored to bespoke architectural dimensions.
   - *"Enquire for Wholesale"* buttons that automatically prefill the product name in the enquiry form.

5. **Dealership Opportunities (Major Highlight):**
   - Heading: *"Become Our Dealership Partner"*
   - Content: *"Explore business opportunities with our curtain factory. We welcome dealership enquiries from Dwarka, Najafgarh and nearby areas of Delhi."*
   - 5 Key Partnership Benefits:
     1. Wholesale product availability
     2. Multiple curtain collections
     3. Business partnership opportunities
     4. Product variety
     5. Direct enquiry support
   - Prominent *"Enquire for Dealership"* button.

6. **Why Choose Us:**
   - 6 structured value propositions: Premium Fabric Quality, Beautiful Designs, Competitive Wholesale Pricing, Multiple Collections, Customisation Options, and Dedicated Customer Support.

7. **Service Area:**
   - Highlights the core service region: **Dwarka, Delhi**, **Najafgarh, Delhi**, and **nearby areas of Southwest Delhi**.
   - Elegant regional cards and photo card without inventing unverified addresses.

8. **Contact Us & Dealership Form:**
   - Click-to-call link: `+91 XXXXX XXXXX`
   - Clickable email link: `xyzcurtains@gmail.com`
   - Business Location: `Dwarka–Najafgarh Region, Delhi, India`
   - Instant WhatsApp enquiry button.
   - Comprehensive Dealership & Trade enquiry form (Full Name, Phone Number, Email, Area/Location, Enquiry Type, Message).
   - **Static Website Transparency Notice:** Clearly clarifies that submissions are processed locally with interactive modal summaries, WhatsApp prefill, and mailto links, and that a backend service (e.g. Formspree / Web3Forms) is required to receive direct inbox submissions.

9. **Footer:**
   - Business name placeholder, brand description, quick links, collection directory, verified contact details, copyright year, and ethical business disclaimer.

---

## 📁 Project Directory Structure

```
curtains/
├── index.html            # Semantic, accessible HTML5 single-page website
├── css/
│   └── styles.css        # Luxury design system, CSS variables & responsive layout
├── js/
│   └── main.js           # Navigation, scroll spy, form validation & WhatsApp/Email prefill
├── assets/
│   └── images/           # Local asset directory (ready for custom client assets)
├── vercel.json           # Vercel deployment routing & caching headers
└── README.md             # Project documentation and deployment manual
```

---

## 💻 Local Preview & Testing

You can preview the website locally using any standard static HTTP server or opening `index.html` directly in your browser:

### Option A: Python Built-in HTTP Server
```bash
# In the project root directory:
python -m http.server 3000
```
Then navigate to: `http://localhost:3000`

### Option B: Node.js (npx serve)
```bash
npx serve .
```

### Option C: Direct Browser Opening
Simply double-click `index.html` or open it with Google Chrome / Microsoft Edge / Safari / Firefox.

---

## 🚀 Deployment to GitHub

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of premium luxury curtain factory website"
   ```

2. **Connect to your GitHub Repository:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

---

## 🌐 Deployment to Vercel

### Method 1: Via Vercel Dashboard (Zero-Configuration)
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** > **"Project"**.
3. Import your GitHub repository (`curtains`).
4. Keep the Framework Preset as **Other** (Static Website).
5. Click **"Deploy"**.
6. Your website is live in seconds with global CDN and SSL!

### Method 2: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🛠 Connecting a Live Form Backend (Optional Enhancement)

To enable live email forwarding for form submissions without writing custom server code, you can connect the form to any static form provider:

### Using Formspree:
Change `<form class="enquiry-form" id="enquiryForm" ...>` in `index.html` to:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="enquiry-form">
```

### Using Web3Forms:
Add your access key as a hidden field:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

---

## 🔒 Verification & Compliance

- **No fake prices or unsupported claims:** Maintained strict editorial standards.
- **No unverified promises:** Dealership section avoids claims of guaranteed profits or exclusive territories.
- **Accurate contact data:** Uses exact contact specifications (`+91 XXXXX XXXXX`, `xyzcurtains@gmail.com`, `Dwarka–Najafgarh Region, Delhi, India`).
- **Fully responsive:** Tested across desktop, laptop, tablet, and mobile viewport sizes.
