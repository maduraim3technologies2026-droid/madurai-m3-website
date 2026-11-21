# MADURAI M3 TECHNOLOGIES - Official Website

> **Premium, modern, production-ready website for MADURAI M3 TECHNOLOGIES**, a boutique software development and IT services company based in Madurai, Tamil Nadu, India.

---

## 🏢 Company Profile

| Attribute | Details |
| :--- | :--- |
| **Company Name** | **MADURAI M3 TECHNOLOGIES** |
| **Business Type** | Sole Proprietorship IT Company |
| **Headquarters** | Madurai, Tamil Nadu, 625001, India |
| **Official Website** | `maduraim3technologies.com` |
| **Business Email** | `admin@maduraim3technologies.com` |
| **Phone / WhatsApp** | `+91 93455 04662` |
| **Core Specialization** | Flutter Mobile Apps, Native Android & iOS, Enterprise Web Systems & Cloud Dashboards |

---

## 🎨 Design System & Visual Identity

The website follows an engineering-first design philosophy engineered to convey trust, technical competence, and architectural rigor without generic agency tropes:

- **Foundation (Dark Navy):** `#070B19` (Deep midnight base) and `#0C142B` (Surface navy cards).
- **Accent (Vibrant Radiant Orange):** `#F97316` and `#FB923C` providing purposeful focal points and CTA contrast.
- **Typography:** High-legibility Google Fonts (`Plus Jakarta Sans` for bold headings, `Inter` for clean body copy, `JetBrains Mono` for code & architectural telemetry).
- **Micro-Interactions:** Subtle border glow gradients, responsive mobile navigation drawer, interactive scope estimator, and accessible toast notifications.
- **Zero Hallucination Guarantee:** No fake client testimonials, fabricated client logos, or artificial statistics. Strengths are demonstrated through real architectural case studies, data structures, and engineering standards.

---

## 💼 Core Services Included

The website features in-depth technical breakdowns for all 9 official services:
1. **Flutter Mobile App Development** (60/120fps native performance, Riverpod/BLoC, offline SQLite caching).
2. **Android & iOS App Development** (Kotlin & Swift platform channels, background services, sensor interop).
3. **UI/UX Design** (Ergonomic wireframing, high-fidelity Figma prototypes, design token systems).
4. **API Integration** (RESTful & GraphQL, Razorpay, Stripe, UPI Intent, Webhook security).
5. **Web Application Development** (Single Page Apps, TypeScript, Tailwind, sub-second load times).
6. **Admin Dashboard Development** (Role-Based Access Control [RBAC], paginated tables, CSV/PDF data exports).
7. **Business Management Software** (Custom ERP, multi-branch stock inventory, GST invoicing).
8. **Application Maintenance & Support** (SLA monitoring, Android/iOS target SDK updates, Crashlytics).
9. **Google Play Store Publishing Assistance** (Mandatory 14-day 20-tester closed testing, Data Safety declarations, AAB signing).

---

## 📁 Project Directory Structure

```text
Madurai m3/
└── website/
    ├── index.html              # Flagship homepage (Hero, About, 9 Services, Estimator, Blueprints, Process, Contact)
    ├── about.html              # Dedicated About Company page (Sole proprietorship, engineering values)
    ├── services.html           # Comprehensive deep-dive into each of the 9 services
    ├── portfolio.html          # Detailed technical blueprints & production system architectures
    ├── contact.html            # Dedicated consultation booking, contact questionnaire & channels
    ├── privacy-policy.html     # Legally structured Privacy Policy (Indian IT Act & DPDPA compliance)
    ├── terms.html              # Professional Terms & Conditions for software engineering services
    ├── sitemap.xml             # XML Sitemap for search engines
    ├── robots.txt              # Search crawler directives
    ├── _headers                # Cloudflare Pages security headers (HSTS, CSP, X-Frame-Options, Cache-Control)
    ├── _redirects              # Cloudflare Pages clean URL routing rules
    ├── package.json            # Local development scripts
    ├── README.md               # Deployment and customization documentation
    └── assets/
        ├── css/
        │   └── styles.css      # Core stylesheet, CSS custom properties, responsive breakpoints
        ├── js/
        │   └── main.js         # Mobile drawer, scroll blur, scope estimator, form validation & toast
        └── images/
            ├── logo.svg        # Official horizontal brand logo with M3 monogram
            ├── logo-icon.svg   # Standalone M3 geometric icon mark
            └── favicon.svg     # Optimized browser tab favicon
```

---

## 🚀 Local Development

To run the website locally on your computer:

### Option 1: Using Node.js / NPX
```bash
cd "/Users/easwaranvel/MMM/Madurai m3/website"
npm run dev
# Opens on http://localhost:3000
```

### Option 2: Using Python 3 Built-in Server
```bash
cd "/Users/easwaranvel/MMM/Madurai m3/website"
python3 -m http.server 3000
# Opens on http://localhost:3000
```

### Option 3: Direct File Opening
You can simply double-click `index.html` in Finder or open it in any web browser. Because the codebase uses standard vanilla web standards, it loads instantly with zero build step!

---

## ☁️ How to Deploy on Cloudflare Pages via GitHub

Cloudflare Pages is the fastest, most reliable global hosting platform for static websites with built-in SSL, global Edge CDN, and DDoS protection.

### Step 1: Initialize Git and Push to GitHub
Open your terminal and run:
```bash
cd "/Users/easwaranvel/MMM/Madurai m3/website"
git init
git add .
git commit -m "Initial commit of MADURAI M3 TECHNOLOGIES website"
```
Create a new private or public repository on GitHub (e.g. `madurai-m3-website`), and push:
```bash
git remote add origin https://github.com/<your-username>/madurai-m3-website.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click on **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
3. Select your GitHub repository (`madurai-m3-website`).
4. Configure Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(Leave empty)*
   - **Build output directory:** `.` *(or leave default)*
5. Click **Save and Deploy**.
6. Cloudflare Pages will build and deploy the website in under 15 seconds to a `*.pages.dev` URL!

### Step 3: Connect Your Custom Domain (`maduraim3technologies.com`)
1. In your Cloudflare Pages project dashboard, go to the **Custom domains** tab.
2. Click **Set up a domain** and enter `maduraim3technologies.com` (and `www.maduraim3technologies.com`).
3. If your domain's DNS is already on Cloudflare, DNS records will be added automatically with automatic free SSL certificate renewal!

---

## ✏️ How to Customize Placeholders

1. **Verified Contact Details:**
   - WhatsApp Number: `+91 93455 04662` (Direct chat link: `https://wa.me/919345504662`)
   - Official Business Email: `admin@maduraim3technologies.com`
2. **Business Address & Phone:**
   - If you wish to specify a specific door number or street in Madurai (e.g. KK Nagar, Anna Nagar, or Bye Pass Road), update the text inside the `.location-card` in `index.html` and `contact.html`.
3. **Form Backend (Optional):**
   - The consultation form currently has client-side validation and visual confirmation.
   - To connect it to your email inbox directly without server code, you can set the form's `action` to Formspree, Formkeep, or Web3Forms (e.g. `action="https://api.web3forms.com/submit"`).

---

## 🛡️ License & Copyright

© 2026 **MADURAI M3 TECHNOLOGIES**. All Rights Reserved.  
Sole Proprietorship IT Company, Madurai, Tamil Nadu, India.
