# YuSR — Applied AI for the Physical World

Production-ready corporate website for YuSR AI, built with Next.js 14, TypeScript, and Tailwind CSS. Deployable to Vercel with zero additional configuration.

---

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd yusr-website

# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build

# Run production server
npm start
```

---

## Project Structure

```
yusr-website/
├── .github/workflows/ci.yml    # GitHub Actions: build + lint on push
├── public/
│   └── images/
│       └── .gitkeep            # Placeholder for Genni image upload
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Header/Footer, meta tags
│   │   ├── page.tsx            # Homepage: hero, products, research, stats
│   │   ├── globals.css         # Tailwind + custom styles + animations
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   ├── robots.ts           # robots.txt configuration
│   │   ├── about/page.tsx      # About page with timeline
│   │   ├── contact/page.tsx    # Contact page with form
│   │   └── products/
│   │       ├── yusr-model/page.tsx  # YuSR Model product page
│   │       ├── lithogpt/page.tsx    # LithoGPT product page
│   │       └── genni/page.tsx       # Genni product page
│   └── components/
│       ├── Header.tsx          # Responsive navigation with mobile menu
│       ├── Footer.tsx          # Footer with product/company/research links
│       ├── Shared.tsx          # Reusable: Hero, FeatureGrid, SectionHeading,
│       │                       #   ProductCard, Checklist, ApiEndpoint
│       ├── ContactForm.tsx     # Client-side contact form
│       ├── ModelDemo.tsx       # YuSR Model prompt simulator (static)
│       ├── LithoDemo.tsx       # LithoGPT lithology prediction viewer (static)
│       └── GenniDemo.tsx       # Genni agent orchestration dashboard (static)
├── tailwind.config.ts          # Custom theme: colors, fonts, animations
├── postcss.config.js
├── tsconfig.json
├── next.config.js
├── package.json
├── ASSETS.md                   # Image/asset attribution manifest
└── README.md                   # This file
```

---

## Deploying to Vercel

### Step-by-step

1. **Push to GitHub**: Push this project to a GitHub repository.

2. **Import in Vercel**: Go to [vercel.com/new](https://vercel.com/new), select your repository.

3. **Configure build settings** (should auto-detect):
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Environment Variables** (optional, for future features):
   - `NEXT_PUBLIC_SITE_URL` — Your production URL (e.g., `https://yusr.ai`)
   - `CONTACT_FORM_ENDPOINT` — API endpoint for contact form submissions

5. **Deploy**: Click "Deploy". Vercel handles SSR, static generation, and CDN distribution.

### Recommended Vercel Settings

- **Node.js Version**: 20.x
- **Build Cache**: Enabled (default)
- **Edge Functions**: Not required for this build
- **Redirects**: None required initially

---

## Replacing the Genni Image

1. Save your Genni image as `public/images/genni-hero.png`
2. Open `src/app/products/genni/page.tsx`
3. Find the comment `GENNI IMAGE PLACEHOLDER`
4. Uncomment the `<Image>` tag
5. Remove or comment out the placeholder `<div>`
6. Rebuild and deploy

---

## Connecting the Contact Form

The contact form currently uses client-side state only. To connect it to a backend:

**Option A — Vercel Serverless Function:**
Create `src/app/api/contact/route.ts` with a POST handler that sends emails via Resend, SendGrid, or similar.

**Option B — Third-party Service:**
Replace the form handler with a fetch to Formspree, Formspark, or similar.

---

## Replacing Demo Data with Live Data

### LithoGPT Demo
Edit `src/components/LithoDemo.tsx`. Replace the `DEMO_WELLS` array with data fetched from your LithoGPT API endpoint. The component expects: depths (number[]), gr (number[]), resistivity (number[]), lithology (string[]).

### Genni Demo
Edit `src/components/GenniDemo.tsx`. Replace the `AGENTS` and `APPS` arrays with live data from your Genni `/v1/agent/status` endpoint.

### YuSR Model Demo
Edit `src/components/ModelDemo.tsx`. Replace the `EXAMPLES` array with live inference calls to your `/v1/completions` endpoint.

---

## Production Readiness Checklist

- [ ] Replace `https://yusr.ai` in `sitemap.ts` and `robots.ts` with actual domain
- [ ] Upload Genni hero image to `public/images/genni-hero.png`
- [ ] Connect contact form to backend (API route or third-party)
- [ ] Add favicon and Open Graph images to `public/`
- [ ] Configure custom domain in Vercel dashboard
- [ ] Enable Vercel Analytics (optional)
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Review and test all pages on mobile
- [ ] Run Lighthouse audit and address any issues
- [ ] Set up error monitoring (Sentry, etc.)

---

## Assumptions

The following assumptions were made where repository documentation was incomplete:

1. **YuSR Model API endpoints**: Suggested endpoints (`/v1/completions`, `/v1/embeddings`, etc.) are illustrative. The Hugging Face model cards do not document a production API — these should be updated when the inference service is deployed.

2. **Genni architecture details**: Descriptions of the multi-agent system (Brain/Memory/Soul/Hand) are based on prior development context. The GitHub repository for Genni is currently empty. Update product page content as the public repository matures.

3. **LithoGPT metrics**: The R² of 0.91 and RMSE of 4.1 are sourced directly from the LithoGPT GitHub README. These are validated on the FORCE 2020 dataset and represent research results, not production SLAs.

4. **Company entity**: "YuSR AI" is presented as a company. If this is a personal brand or research group, adjust the About page and Footer accordingly.

5. **Contact form**: No backend email service is configured. The form renders a success state client-side only.

---

## Content and Image Attributions

See [ASSETS.md](./ASSETS.md) for complete attribution details.

**Summary:**
- All visual elements are programmatically generated (HTML/CSS/SVG)
- No copyrighted stock images are used
- Fonts are from Google Fonts under Open Font License
- Demo data is entirely synthetic
- Code is provided under MIT license

---

## License

MIT
