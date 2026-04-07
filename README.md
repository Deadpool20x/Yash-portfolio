# Yash Patel — Portfolio

Personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **Framework**: Next.js 15 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (neo-brutalism design system)
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk + JetBrains Mono (via `next/font`)
- **Data**: GitHub API fetched server-side (revalidates every hour)

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, cursor, glitch, marquee
│   ├── layout.tsx        # Root layout with metadata + fonts
│   ├── page.tsx          # Home page (assembles all sections)
│   └── not-found.tsx     # Custom 404 page
├── components/
│   ├── Cursor.tsx        # Custom square cursor
│   ├── Nav.tsx           # Fixed navbar with active section tracking
│   ├── StatusBar.tsx     # Fixed bottom marquee bar
│   ├── SectionHeader.tsx # Reusable section header
│   ├── RevealWrapper.tsx # Framer Motion scroll reveal
│   ├── HeroSection.tsx   # Hero with stats + terminal
│   ├── AboutSection.tsx  # About + info table
│   ├── SkillsSection.tsx # Skills grid
│   ├── ProjectsSection.tsx
│   ├── HackathonsSection.tsx
│   ├── GitHubSection.tsx # Async server component — fetches GitHub API
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── lib/
    ├── data.ts           # All typed content (projects, skills, hackathons)
    └── github.ts         # GitHub API fetch utility
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your resume
# Place your PDF at: public/Yash_Patel_Resume.pdf

# 3. Run dev server
npm run dev

# 4. Build for production
npm run build
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

## Updating Content

All content is in `src/lib/data.ts`. Edit that file to:
- Add/remove projects
- Update skills
- Add hackathon entries
- Change stat card numbers

No other files need to be touched for content changes.
