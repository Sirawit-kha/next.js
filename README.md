# Portfolio - Sirawit Kaosong (Next.js)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css       # Global styles & Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Fixed navigation bar
│   ├── Hero.tsx          # Hero/landing section
│   ├── About.tsx         # About me section
│   ├── Projects.tsx      # Featured projects
│   ├── Skills.tsx        # Skills & expertise grid
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── public/
│   ├── Sirawit.jpeg      # ← วางรูปโปรไฟล์ที่นี่
│   ├── Project1.png      # ← วางรูปโปรเจกต์ 1 ที่นี่
│   └── Project2.jpg      # ← วางรูปโปรเจกต์ 2 ที่นี่
├── tailwind.config.ts    # Tailwind + custom animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Images

Place your images inside the `/public` folder:
- `Sirawit.jpeg` — profile photo
- `Project1.png` — Rody Application screenshot
- `Project2.jpg` — Web Application screenshot

## Contact Email

Update the email in `components/Contact.tsx` to your real email address.
