# A2V Codes | Engineering Mastery Landing Page

A high-fidelity, conversion-optimized landing page built for **A2V Codes**—a specialized engineering project mentorship platform. Designed to help students transition from "just surviving submissions" to "mastering their engineering craft."

## 🎨 Visual Identity: "Cyber-Tech Premium"
The platform features a custom-built design system that differentiates it from standard SaaS templates:
- **Primary Brand Color**: Electric Indigo (`#8b5cf6`)
- **Theme**: Deep Dark Mode with Glassmorphism
- **Backgrounds**: Multi-layered backgrounds featuring architectural grids, masked radial spotlights, and ambient "Indigo Glow" effects.
- **Typography**: Optimized Geist (Sans & Mono) hierarchy for a clean, technical authority.

## 🚀 Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Architecture**: [Base UI](https://base-ui.com/) + [Radix](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Firebase Firestore](https://firebase.google.com/) for Lead Capture

## 💻 Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory and add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
```

### 3. Run Development Server
```bash
npm run dev
```

## 📦 Launch Checklist
Before deploying to production (Vercel/Netlify/Firebase Hosting), ensure you:
1. **Update WhatsApp Links**: Search for `91XXXXXXXXXX` in `Hero.tsx`, `Navbar.tsx`, and `Pricing.tsx` and replace with your live business number.
2. **Set Firestore Rules**: Ensure your "leads" collection in Firestore has `allow create` permissions for authenticated or unauthenticated users (depending on your setup).
3. **Logo Replacement**: The current logo is located at `public/logo.png`. To change it, simply replace this file.

## 📦 Deployment
Recommended: **Vercel**
1. Push your code to GitHub.
2. Import the project in Vercel.
3. Add the `NEXT_PUBLIC_FIREBASE_*` environment variables in the Vercel dashboard.
4. Deploy!

## 📝 Pending Work
To take this platform from "Live" to "Fully Automated," consider these upcoming tasks:
- **[ ] Real-time Chat**: Integrate a live support widget (e.g., Tawk.to or Crisp) for immediate visitor engagement.
- **[ ] Testimonial Carousel**: As students complete their vivas, add a dedicated "Success Stories" section with real scorecards/feedback.
- **[ ] Automated WhatsApp Flow**: Integrate an API like Twilio or Interakt to automatically send the "Free Project Mastery Guide" via WhatsApp once a lead is captured.
- **[ ] Blog / Guide Repository**: Build a CMS-driven section for engineering tips and tricks to improve long-term SEO.

---

Built with ❤️ for A2V Codes.
