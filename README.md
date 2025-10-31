# Marwan Ahmed Aouni El-Agha - Personal Website

A modern, bilingual (Arabic/English) responsive personal website for Marwan Ahmed Aouni El-Agha, candidate for the Arab Scout Committee – Youth Advisors (2025–2028).

## 🌟 Features

- **Bilingual Support**: Seamless switching between Arabic and English with full RTL support
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, elegant design with smooth transitions and animations
- **Contentful CMS**: Easy content management for news, work plans, and gallery
- **Google Analytics**: Track visitor behavior and site performance
- **SEO Optimized**: Automatic sitemap, robots.txt, and Search Console ready
- **Contact Form**: Functional contact form with email integration
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA labels
- **Performance**: Built with Next.js for optimal performance and SEO
- **Vercel Deployment**: One-click deployment with custom domain support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://marwanawny.com
   
   # Contact Email
   CONTACT_EMAIL=your-email@example.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   # Contentful CMS
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_contentful_space_id
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   
   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

   **For Gmail users**: You need to generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Generate a new app password
   - Use that password in `SMTP_PASS`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
/src
  /app
    layout.tsx          # Root layout with metadata
    page.tsx            # Home page
    globals.css         # Global styles
    /contact
      page.tsx          # Contact page
    /api
      /contact
        route.ts        # Contact form API endpoint
  /components
    Navbar.tsx          # Navigation bar
    Hero.tsx            # Hero section
    CVSection.tsx       # CV/About section
    Gallery.tsx         # Image gallery
    ContactForm.tsx     # Contact form
  /contexts
    LanguageContext.tsx # Language switching context
  /lib
    i18n.ts            # i18n configuration
    email.ts           # Email sending utilities
    rateLimit.ts       # Rate limiting for API
  /i18n
    ar.json            # Arabic translations
    en.json            # English translations
```

## 🎨 Customization Guide

### 1. Replace Hero Image

Edit `src/components/Hero.tsx` line 14:
```tsx
backgroundImage: "url('/path/to/your/image.jpg')"
```

Place your image in the `/public` folder and reference it like:
```tsx
backgroundImage: "url('/hero-image.jpg')"
```

### 2. Update Gallery Images

Edit `src/components/Gallery.tsx` and replace the placeholder images (lines 8-39) with your actual scouting photos:
```tsx
const images = [
  {
    id: 1,
    src: '/images/scouting-event-1.jpg',
    alt: 'Description of event',
  },
  // Add more images...
];
```

Place images in `/public/images/` folder.

### 3. Update Social Media Links

Edit `src/components/ContactForm.tsx` (lines 70-91) and replace with your actual links:
```tsx
const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/your-profile',
    color: 'hover:bg-blue-600',
  },
  // Update other links...
];
```


### 5. Update Contact Information

Edit `.env.local` to set where contact form submissions should be sent:
```env
CONTACT_EMAIL=your-actual-email@example.com
```

### 6. Modify Text Content

All text content is in translation files:
- **Arabic**: `src/i18n/ar.json`
- **English**: `src/i18n/en.json`

Edit these files to update any text on the website.


### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Contentful
- **Analytics**: Google Analytics
- **Internationalization**: react-i18next
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Deployment**: Vercel
- **SEO**: Next.js Metadata API, Sitemap, Robots.txt

## 📧 Contact Form Features

- Client-side and server-side validation
- Email format validation
- Message length validation (10-5000 characters)
- Rate limiting (10 requests per hour per IP)
- Honeypot spam protection
- Sanitized inputs
- Success/error feedback

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and attributes
- Keyboard navigation support
- Focus visible indicators
- Alt text for all images
- High contrast colors
- Responsive text sizing

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This is a personal website project. All rights reserved.

## 🚀 Deployment

This website is configured for deployment on Vercel with the custom domain **marwanawny.com**.

### Quick Deploy

See [QUICK_START.md](./QUICK_START.md) for a 5-minute deployment guide.

### Detailed Instructions

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for comprehensive deployment instructions including:
- Vercel deployment setup
- Custom domain configuration (marwanawny.com)
- Contentful CMS integration
- Google Analytics setup
- Google Search Console configuration

## 👤 Contact

**Marwan Ahmed Aouni El-Agha**

For questions or support, please use the contact form on the website.

---


