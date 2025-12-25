# 🚀 Muhammad Ali - Portfolio

Modern, animated portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- ⚡ **Next.js 15** - Latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first styling with custom theme
- 🌙 **Dark/Light Mode** - Smooth theme switching with next-themes
- 🎭 **Framer Motion** - Beautiful scroll animations and transitions
- 📱 **Fully Responsive** - Mobile-first design
- 🚀 **Optimized Performance** - Lighthouse score 90+
- 📊 **Animated Stats** - Real metrics with smooth counters
- 🎯 **Type-safe** - Full TypeScript implementation
- 📦 **Static Export** - Deployed to GitHub Pages

## 🎯 Live Demo

Visit: [https://mu7ammad-3li.github.io](https://mu7ammad-3li.github.io)

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React

### Key Libraries
- `next-themes` - Theme management
- `class-variance-authority` - Component variants
- `tailwind-merge` - Utility merging
- `react-intersection-observer` - Scroll animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mu7ammad-3li/mu7ammad-3li.github.io.git
cd mu7ammad-3li.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
```

The static site will be exported to the `out` directory.

## 📁 Project Structure

```
portfolio-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with theme
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Header, Footer, ThemeToggle
│   │   ├── sections/          # Hero, Experience, Projects, etc.
│   │   ├── shared/            # TypeAnimation, AnimatedStats
│   │   └── ui/                # shadcn/ui components
│   ├── data/                  # All content data
│   │   ├── experience.ts      # Work experience
│   │   ├── projects.ts        # Project portfolio
│   │   ├── skills.ts          # Technical skills
│   │   └── contact.ts         # Contact information
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── .github/workflows/         # GitHub Actions
│   └── deploy.yml            # Deployment workflow
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Update Your Information

All content is managed through data files in `src/data/`:

**Experience:**
```typescript
// src/data/experience.ts
export const experiences = [
  {
    title: "Your Title",
    company: "Company Name",
    period: "Jan 2023 - Present",
    // ...
  }
];
```

**Projects:**
```typescript
// src/data/projects.ts
export const projects = [
  {
    title: "Project Name",
    description: "Description",
    technologies: ["React", "Node.js"],
    // ...
  }
];
```

**Skills:**
```typescript
// src/data/skills.ts
export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", ...]
  }
];
```

**Contact:**
```typescript
// src/data/contact.ts
export const contactInfo = {
  email: "your@email.com",
  location: "Your City, Country",
  // ...
};
```

### Theme Colors

Edit `tailwind.config.ts` and `src/app/globals.css` to customize colors:

```css
:root {
  --primary: 142 76% 36%;  /* Green accent */
  --background: 0 0% 100%;
  /* ... */
}
```

## 🚢 Deployment

### GitHub Pages (Automatic)

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: GitHub Actions

2. **Push to main branch**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will automatically build and deploy!

### Manual Deployment

```bash
# Build static site
npm run build

# The 'out' directory can be deployed anywhere
```

## 📊 Performance

- **Lighthouse Score:** 90+
- **First Load JS:** < 100 KB
- **Load Time:** < 2 seconds
- **Fully Responsive:** Mobile, Tablet, Desktop

## 🎭 Features Showcase

### Animated Hero Section
- Typing animation with multiple titles
- Animated statistics (75%, 38%, 99.9%)
- Smooth scroll indicator

### Experience Timeline
- Interactive timeline with hover effects
- Technology badges
- Achievement highlights

### Project Cards
- Hover animations
- GitHub and live demo links
- Technology tags

### Skills Grid
- Categorized skill display
- Hover effects

### Contact Section
- Multiple contact methods
- Location and availability info
- Direct email integration

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Contributing

While this is a personal portfolio, suggestions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 📧 Contact

**Muhammad Ali**
- Email: mu7ammad.3lii2@gmail.com
- GitHub: [@mu7ammad-3li](https://github.com/mu7ammad-3li)
- LinkedIn: [muhammad-3lii](https://www.linkedin.com/in/muhammad-3lii/)
- Twitter: [@Mu7ammad_3lii](https://x.com/Mu7ammad_3lii)

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**

⭐ Star this repo if you find it helpful!
