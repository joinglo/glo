# Glo - Community Platform

A modern community platform built with React, TypeScript, and Tailwind CSS, featuring a beautiful UI with shadcn/ui components.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (see `.nvmrc`)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/fareeha-s/glo.git
cd glo

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080/`

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Tech Stack
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM
- **Forms:** React Hook Form with Zod validation
- **Icons:** Lucide React
- **Animations:** Tailwind CSS Animate
- **Carousel:** Embla Carousel
- **Charts:** Recharts
- **Toasts:** Sonner

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # App entry point
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) - a collection of reusable components built on top of Radix UI and Tailwind CSS. All components are located in `src/components/ui/`.

### Adding New Components
```bash
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Automatic Deployment
This project is automatically deployed through **Cloudflare Pages**:

1. **Repository:** Connected to GitHub repo
2. **Framework Preset:** Vite
3. **Build Command:** `npm run build`
4. **Build Output Directory:** `dist`
5. **Custom Domain:** `joinglocommunity.com`

### Manual Deployment
If needed, you can deploy manually using Wrangler:
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name glo
```

### DNS Configuration
The domain `joinglocommunity.com` is configured with:
- CNAME record pointing to `glo-1ev.pages.dev`
- Cloudflare proxy enabled (orange cloud)
- Automatic HTTPS

## 📝 Development History

### Initial Development
- **Built with:** [Lovable](https://lovable.dev/) - AI-powered development platform
- **Edited with:** [Cursor](https://cursor.sh/) - AI-enhanced code editor
- **Design System:** shadcn/ui components for consistent UI/UX

### Key Features
- Responsive design with mobile-first approach
- Modern animations and transitions
- SEO optimized
- Performance optimized with Vite
- Type-safe development with TypeScript

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration (port 8080, host "::")
- `tailwind.config.ts` - Tailwind CSS configuration
- `wrangler.toml` - Cloudflare Pages deployment configuration
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change port in `vite.config.ts` or kill existing process

2. **Build failures**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

3. **Deployment not updating**
   - Check Cloudflare Pages dashboard for build logs
   - Verify GitHub repository connection
   - Ensure changes are pushed to main branch

### Development Tips
- Use `npm run lint` before committing
- Test on mobile devices for responsive design
- Check browser console for any errors
- Use React DevTools for component debugging

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

**Note:** This project was initially built using Lovable and has been extensively edited and refined using Cursor. The deployment is fully automated through Cloudflare Pages with automatic builds on every push to the main branch.
