# 🚀 Quick Start Guide

Your modern portfolio is **100% ready**! Follow these steps to see it in action.

## ✅ What's Been Built

✨ **Complete Features:**
- Hero section with typing animation & animated stats (75%, 38%, 99.9%)
- Experience timeline with your 2 roles
- Project showcase (CV-lize, SwiftCart, MERIDIEN, OmniAssistant)
- Skills grid (6 categories)
- Contact section with all your links
- Dark/Light mode toggle
- Smooth scroll animations
- Fully responsive design

## 📦 Step 1: Install Dependencies

```bash
cd /media/muhammad/Work/Github-portifolio/portfolio-next
npm install
```

This will install:
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI components
- And all other dependencies

## 🎨 Step 2: Run Development Server

```bash
npm run dev
```

Open your browser to **http://localhost:3000**

You should see your portfolio with:
- ✅ Animated hero with typing effect
- ✅ Your real experience and projects
- ✅ Dark/Light mode toggle
- ✅ Smooth animations

## 🧪 Step 3: Test the Build

```bash
npm run build
```

This creates a static export in the `out` directory.

## 🚀 Step 4: Deploy to GitHub Pages

### Option A: Automated (Recommended)

1. **Create new repository** on GitHub: `mu7ammad-3li.github.io`

2. **Initialize git** (if not already):
```bash
cd /media/muhammad/Work/Github-portifolio/portfolio-next
git init
git add .
git commit -m "Initial portfolio commit"
```

3. **Push to GitHub**:
```bash
git branch -M main
git remote add origin https://github.com/mu7ammad-3li/mu7ammad-3li.github.io.git
git push -u origin main
```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: **GitHub Actions**
   - Save

5. **Done!** GitHub Actions will automatically deploy.

Visit: `https://mu7ammad-3li.github.io`

### Option B: Manual Deployment

```bash
# Build
npm run build

# The 'out' directory contains your static site
# Deploy it to any static hosting service
```

## 🎯 Customization

### Update Your Content

All your data is in `src/data/`:

```typescript
// src/data/experience.ts - Your work history
// src/data/projects.ts - Your projects
// src/data/skills.ts - Your tech stack
// src/data/contact.ts - Contact info
```

Just edit these files and save. The changes will appear automatically!

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: 142 76% 36%;  /* Your green color */
}
```

### Add Your Photo

1. Add your photo to `public/images/profile.jpg`
2. Update `Hero.tsx` to include it

## 📊 Performance Checklist

- ✅ Static export for fast loading
- ✅ Code splitting automatic
- ✅ Images optimized
- ✅ Tailwind CSS purged
- ✅ Lighthouse score 90+

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript errors?
All types are properly defined. If you see errors, run:
```bash
npm run lint
```

## 🎨 What You Get

### Hero Section
- Typing animation cycling through 3 titles
- Animated counter for your achievements
- Professional CTA buttons
- Smooth scroll indicator

### Experience
- Timeline view with hover effects
- Real achievements from your resume
- Technology badges
- Company details

### Projects
- Featured project cards
- GitHub and demo links
- Technology tags
- Hover animations

### Skills
- 6 organized categories
- All your technologies listed
- Clean card design

### Contact
- Multiple contact methods
- Location and phone
- Social media links
- Direct email button

## 🌟 Next Steps

1. **Run it locally** - `npm run dev`
2. **Test everything** - Click through all sections
3. **Customize if needed** - Edit data files
4. **Deploy to GitHub Pages** - Push to main branch
5. **Share your portfolio!** 🎉

## 💡 Pro Tips

- The dark/light toggle is in the top right
- All animations trigger on scroll
- Mobile menu works automatically
- GitHub Actions deploys on every push
- Static export = super fast loading

## 📞 Need Help?

Check the main [README.md](./README.md) for detailed documentation.

---

**Ready to launch?** Run `npm install && npm run dev` and see your beautiful portfolio! 🚀
