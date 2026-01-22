# Russian Frontend Portfolio

Modern, responsive single-page portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive layout optimized for all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Interactive Portfolio**: Filterable project gallery with detailed case studies
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **TypeScript**: Type-safe codebase for better development experience
- **Animations**: Smooth transitions and effects using Framer Motion

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
portfolio-ru-new/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── sections/    # Page sections (Hero, Portfolio, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── data/            # Content data files
│   │   ├── content.ts   # General content (bio, services, testimonials)
│   │   └── projects.ts  # Portfolio projects data
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## 📝 Content Management

### Updating Portfolio Projects

Edit `src/data/projects.ts` to add or modify portfolio projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  category: 'landing' | 'app' | 'ecommerce' | 'saas',
  shortDescription: 'Brief description',
  fullDescription: 'Detailed description',
  tags: ['React', 'TypeScript'],
  metrics: [
    { label: 'Metric Name', value: 'Value' }
  ],
  colors: {
    primary: '#hexcolor',
    secondary: '#hexcolor'
  },
  caseDetails: {
    challenge: 'Problem description',
    solution: 'How it was solved',
    result: 'Results achieved'
  }
}
```

### Updating Services

Edit `src/data/content.ts` to modify services offered:

```typescript
{
  id: 'service-id',
  name: 'Service Name',
  description: 'Service description',
  priceRange: 'от 30,000₽',
  timeline: '5-7 дней',
  features: ['Feature 1', 'Feature 2']
}
```

### Updating Bio and Contact Info

Modify the `bio`, `skills`, `contactInfo`, and `socialLinks` in `src/data/content.ts`.

## 🎨 Customization

### Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  accent: {
    blue: '#3b82f6',
    purple: '#a855f7',
    // Add more colors
  }
}
```

### Fonts

The project uses Inter and Manrope fonts from Google Fonts. To change fonts, update:
1. Font imports in `src/index.css`
2. Font family settings in `tailwind.config.js`

## 🖼️ Image Assets Guide

### Recommended Image Specifications

For optimal performance and visual quality, use the following specifications:

#### Project Thumbnails
- **Size**: 800x600px (4:3 ratio)
- **Format**: JPG or WebP
- **Location**: `/public/assets/thumbs/`
- **Naming**: `project-name.jpg`

#### Hero Images
- **Size**: 1920x1080px (16:9 ratio)
- **Format**: JPG or WebP
- **Location**: `/public/assets/hero/`
- **Naming**: `project-name-hero.jpg`

#### Case Study Images
- **Size**: Various (maintain consistency)
- **Format**: JPG, PNG, or WebP
- **Location**: `/public/assets/cases/`

### AI Image Generation Prompts

Use these prompts with AI image generators (Midjourney, DALL-E, Stable Diffusion):

#### For E-commerce Projects:
```
Modern e-commerce website interface, clean product grid layout, 
shopping cart icon, professional photography, minimalist design, 
soft shadows, white background, 4k, ui/ux design
```

#### For SaaS Dashboards:
```
Professional SaaS dashboard interface, data visualization charts, 
analytics graphs, modern UI design, dark mode, clean layout, 
gradient accents, high-tech aesthetic, 4k
```

#### For Landing Pages:
```
Modern landing page hero section, gradient background, 
abstract geometric shapes, vibrant colors, professional web design, 
clean typography, 4k, marketing website
```

#### For Mobile Apps:
```
Mobile app interface mockup, iPhone screen, modern UI design, 
clean app layout, colorful interface, user-friendly design, 
floating device mockup, 4k
```

### Image Optimization Tips

1. **Compress images** before adding to the project
2. Use **WebP format** for better compression
3. Implement **lazy loading** for images below the fold
4. Consider using a **CDN** for production
5. Add **alt text** for accessibility

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production-ready files
# Upload to your hosting provider
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Erik**
- GitHub: [@Erik03132](https://github.com/Erik03132)

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons by [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)
