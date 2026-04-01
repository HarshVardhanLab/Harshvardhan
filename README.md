# Harsh Vardhan - 3D Portfolio

A cutting-edge 3D portfolio website built with Next.js, React Three Fiber, and Framer Motion. Features an immersive "Obsidian Architect" design system with glassmorphism, 3D elements, and smooth animations.

## Features

- **3D Interactive Elements**: Built with React Three Fiber and Three.js
- **Smooth Animations**: Powered by Framer Motion
- **Obsidian Design System**: Dark, premium aesthetic with cyber-orange accents
- **Fully Responsive**: Mobile-first design approach
- **Performance Optimized**: Dynamic imports and code splitting
- **Type-Safe**: Built with TypeScript

## Tech Stack

- **Framework**: Next.js 14
- **3D Graphics**: React Three Fiber, Three.js, @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Typography**: Space Grotesk, Inter, Fira Code
- **Language**: TypeScript

## Design System

The portfolio follows "The Obsidian Architect" design philosophy:

### Colors
- **Primary**: `#ffb690` / `#f97316` (Cyber Orange)
- **Secondary**: `#c3c0ff` / `#3626ce` (Logic Layer Violet)
- **Surface**: `#0c1322` (Obsidian Base)

### Typography
- **Headlines**: Space Grotesk (futuristic, wide-aperture)
- **Body**: Inter (high-legibility)
- **Technical**: Fira Code (monospace for metadata)

### Key Principles
- No 1px borders - use tonal shifts instead
- Glassmorphism for floating elements
- Ambient shadows with tinted colors
- High-contrast spacing
- 3D depth through layering

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects showcase
│   ├── skills/         # Skills & technologies
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Top navigation bar
│   ├── SideNav.tsx     # Side social links
│   ├── Footer.tsx      # Footer component
│   ├── Scene3D.tsx     # 3D scene for home
│   └── HeroScene3D.tsx # 3D scene for about
```

## Pages

- **Home** (`/`): Hero section with 3D elements, featured projects, and core philosophy
- **About** (`/about`): Personal story, timeline, and expertise
- **Projects** (`/projects`): Portfolio showcase with project cards
- **Skills** (`/skills`): Technical skills and tools
- **Contact** (`/contact`): Contact form and information

## Customization

### Update Personal Information

Edit the content in each page component:
- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About page content
- `src/app/projects/page.tsx` - Projects data
- `src/app/skills/page.tsx` - Skills data
- `src/app/contact/page.tsx` - Contact information

### Modify 3D Scenes

Edit the 3D components:
- `src/components/Scene3D.tsx` - Home page 3D scene
- `src/components/HeroScene3D.tsx` - About page 3D scene

### Update Colors

Modify `tailwind.config.ts` to change the color scheme.

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Harsh Vardhan. All rights reserved.
