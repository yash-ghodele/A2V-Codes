# A2V Codes Landing Page

A premium, conversion-focused landing page built for **A2V Codes**—an engineering project mentorship platform designed to help students build, understand, and confidently present their projects to score high in vivas.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Custom implementation heavily inspired by [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database (Leads)**: [Firebase Firestore](https://firebase.google.com/)

## 🎨 Design System

The platform utilizes a highly modern, dark-themed "glassmorphism" aesthetic.
- **Primary Colors**: Cyan/Teal (`#06b6d4` mapping) and deep Navy/Black.
- **Typography**: Geist (Sans & Mono) optimized for readability and a premium technical feel.
- **Micro-interactions**: Hover lifts (`-translate-y-2`), glowing borders, and subtle ping animations on primary CTAs.

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Next, set up your environment variables. Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Make sure to add your `NEXT_PUBLIC_FIREBASE_*` environment variables in your Vercel Project Settings before deploying.

---
Built with ❤️ for Engineers.
