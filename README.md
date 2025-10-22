# Feedlas

> Collect and Analyze user feedback to build better products

Feedlas helps you collect and organize feature requests to better understand customer needs and prioritize your roadmap. From feedback collection to feature release, Feedlas helps your team complete the feedback loop.

## Features

- **Feedback Collection** - Centralize user feedback from multiple channels
- **Feature Requests** - Organize and prioritize customer requests
- **Sentiment Analysis** - Understand what your customers are really saying
- **Analytics Dashboard** - Track feedback trends and insights
- **Integration Support** - Connect with your existing tools
- **Team Collaboration** - Work together to manage customer feedback

## Quick Start

### Prerequisites

- Node.js 14 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd feedlas
```

2. Install dependencies (optional for static site)
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
GOOGLE_ANALYTICS_ID=your-google-analytics-id
```

4. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production (renames page.html to index.html) |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Deploy to Vercel in production mode |

## Project Structure

```
feedlas/
├── index.html                    # Home page
├── favicon.ico                   # Favicon (root)
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── package.json                  # NPM scripts and metadata
├── vercel.json                   # Vercel deployment configuration
├── build.js                      # Build script for production
│
├── images/                       # Local image assets
│   ├── favicon-light.png        # Favicon (light mode)
│   ├── favicon-dark.png         # Favicon (dark mode)
│   ├── apple-touch-icon.png     # iOS home screen icon
│   └── og-image.png             # Social media preview image
│
├── features/
│   └── index.html               # Features page
├── pricing/
│   └── index.html               # Pricing page
├── blogs/
│   ├── index.html               # Blog listing
│   ├── sentiment-analysis-101-how-to-understand-what-your-customers-are-really-saying/
│   │   └── index.html
│   └── top-5-strategies-for-managing-customer-feedback-in-2025/
│       └── index.html
├── contact/
│   └── index.html               # Contact page
├── careers/
│   └── index.html               # Careers page
├── integrations/
│   └── index.html               # Integrations page
├── privacy-policy/
│   └── index.html               # Privacy policy
├── security/
│   └── index.html               # Security page
└── terms-and-conditions/
    └── index.html               # Terms and conditions
```

## Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to production:
```bash
npm run deploy
# or
vercel --prod
```

#### Option 2: Using Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Configure project settings (optional)
6. Click "Deploy"

Vercel will automatically:
- Detect it's a static site
- Deploy to a global CDN
- Provide HTTPS automatically
- Give you a production URL

### Deploy to Other Platforms

This is a static HTML site and can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder or connect via Git
- **GitHub Pages**: Push to `gh-pages` branch
- **AWS S3**: Upload files to an S3 bucket with static hosting
- **Cloudflare Pages**: Connect your repository
- **Firebase Hosting**: Use Firebase CLI to deploy

## SEO and Optimization

### Built-in SEO Features

✅ **Meta Tags**
- Unique title and description for each page
- Open Graph tags for social media sharing
- Twitter Card tags for Twitter previews
- Viewport meta for mobile responsiveness

✅ **Images and Assets**
- All images served locally (no external dependencies)
- Favicon with light/dark mode support
- Apple Touch Icon for iOS devices
- Optimized social preview images (1200x630px)

✅ **Performance**
- Static HTML (no JavaScript frameworks)
- Preconnect to Google Fonts
- Font display swap for better loading
- Security headers via vercel.json

✅ **Analytics**
- Google Analytics integration (G-NYV9XCHB0E)
- Configure your tracking ID in `.env`

### Image Assets

All images are self-hosted in the `/images/` directory:

| Asset | Size | Purpose |
|-------|------|---------|
| `favicon-light.png` | 1.9 KB | Favicon for light mode |
| `favicon-dark.png` | 4.1 KB | Favicon for dark mode |
| `apple-touch-icon.png` | 1.9 KB | iOS home screen icon |
| `og-image.png` | 1.8 MB | Social media preview |

**Benefits:**
- Complete independence from external CDN services
- Better performance (same-origin)
- Full control over asset versions
- No broken links if external services change

## Technologies Used

- **HTML5** - Semantic markup
- **CSS** - Custom styling with CSS variables
- **JavaScript** - Minimal vanilla JS for interactions
- **Google Fonts** - DM Sans, Inter, Satoshi, Chivo Mono, DM Mono
- **Google Analytics** - User tracking and analytics
- **Framer** - Original design tool (exported to HTML)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Google Analytics
GOOGLE_ANALYTICS_ID=G-NYV9XCHB0E

# Add your custom environment variables here
```

**Note:** The `.env` file is gitignored. Use `.env.example` as a template.

### Vercel Configuration

The `vercel.json` file includes:

- Clean URLs (removes .html extensions)
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Cache control for images
- Redirects configuration

## Build Process

The build script (`build.js`) automatically:

1. Scans all directories recursively
2. Renames `page.html` files to `index.html`
3. Skips files if `index.html` already exists
4. Provides detailed build logs

Run the build:
```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or support:
- Visit our [Contact Page](./contact)
- Check out our [Documentation](./features)
- Read our [Blog](./blogs) for tips and best practices

---

**Built with ❤️ for product teams who listen to their customers**
