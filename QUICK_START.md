# Quick Start Guide

## 🚀 Deploy to Vercel in 5 Minutes

### 1. Install Dependencies (when network is stable)
```bash
npm install contentful @contentful/rich-text-react-renderer @next/third-parties
```

### 2. Set Up Contentful
- Create account at [contentful.com](https://contentful.com)
- Create a new space
- Copy your Space ID and Access Token

### 3. Set Up Google Analytics
- Go to [analytics.google.com](https://analytics.google.com)
- Create a new property
- Copy your Measurement ID (G-XXXXXXXXXX)

### 4. Configure Environment Variables in Vercel
When deploying to Vercel, add these environment variables:

```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://marwanawny.com
```

### 5. Deploy to Vercel
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Add environment variables
6. Click "Deploy"

### 6. Add Custom Domain
1. In Vercel project settings, go to "Domains"
2. Add `marwanawny.com`
3. Update DNS records at your domain registrar:
   - A record: `@` → `76.76.21.21`
   - CNAME record: `www` → `cname.vercel-dns.com`

### 7. Set Up Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://marwanawny.com`
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap: `https://marwanawny.com/sitemap.xml`

---

## 📝 Content Models for Contentful

Create these content types in Contentful:

### News (ID: `news`)
- title (Short text)
- slug (Short text, unique)
- date (Date & time)
- excerpt (Long text)
- content (Rich text)
- image (Media)
- category (Short text)

### Work Plan (ID: `workPlan`)
- title (Short text)
- description (Long text)
- startDate (Date & time)
- endDate (Date & time)
- status (Short text: "planned", "in-progress", "completed")
- category (Short text)

### Gallery Image (ID: `galleryImage`)
- title (Short text)
- description (Long text)
- image (Media)
- category (Short text)

---

## ✅ Verification Checklist

- [ ] Dependencies installed
- [ ] Contentful space created
- [ ] Google Analytics property created
- [ ] Environment variables configured
- [ ] Deployed to Vercel
- [ ] Custom domain added
- [ ] DNS records updated
- [ ] Google Search Console verified
- [ ] Sitemap submitted

---

For detailed instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
