# Hadi Portfolio — Setup Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:3000
```

## Files to Add in /public folder

```
public/
├── portfolio_image.png     ← তোমার ছবি (already added)
├── Md__Hadiuzzaman.pdf     ← তোমার CV এখানে রাখো
└── screenshots/
    ├── keenkeeper.png      ← already added
    ├── digitools.png       ← already added
    ├── english-janala.png  ← already added
    └── issue-tracker.png   ← GitHub Issue Tracker screenshot এখানে রাখো
```

## EmailJS Setup (Contact Form)

1. Go to https://emailjs.com → Create free account
2. Add a Service (Gmail) → Copy **Service ID**
3. Create a Template → Copy **Template ID**
4. Account → API Keys → Copy **Public Key**
5. Open `components/Contact.js`
6. Replace these 3 values:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // ← paste here
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // ← paste here
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // ← paste here
   ```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts → Done!
```

## Tech Stack Used
- Next.js 14 (App Router)
- Tailwind CSS v3
- Framer Motion (animations)
- GSAP + ScrollTrigger (background + scroll effects)
- Lenis (smooth scroll)
- EmailJS (contact form)
