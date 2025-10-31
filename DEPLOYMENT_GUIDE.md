# Deployment Guide for Marwan Awny Website

This guide covers deploying your website to Vercel with the custom domain **marwanawny.com**, integrating Contentful CMS, Google Analytics, and Google Search Console.

---

## 📦 Prerequisites

Before deploying, ensure you have:
1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. A Contentful account (sign up at [contentful.com](https://contentful.com))
3. A Google Analytics account
4. Access to your domain registrar for **marwanawny.com**

---

## 🚀 Step 1: Install Dependencies

First, install the required packages:

```bash
npm install contentful @contentful/rich-text-react-renderer @next/third-parties
```

---

## 🎨 Step 2: Set Up Contentful CMS

### 2.1 Create a Contentful Space

1. Log in to [Contentful](https://app.contentful.com)
2. Create a new space (e.g., "Marwan Website")
3. Note your **Space ID** and **Content Delivery API - access token**

### 2.2 Create Content Models

Create the following content types in Contentful:

#### **News Content Type**
- **Content Type ID**: `news`
- Fields:
  - `title` (Short text, required)
  - `slug` (Short text, required, unique)
  - `date` (Date & time, required)
  - `excerpt` (Long text, required)
  - `content` (Rich text, required)
  - `image` (Media, optional)
  - `category` (Short text, optional)

#### **Work Plan Content Type**
- **Content Type ID**: `workPlan`
- Fields:
  - `title` (Short text, required)
  - `description` (Long text, required)
  - `startDate` (Date & time, required)
  - `endDate` (Date & time, optional)
  - `status` (Short text, required) - Options: "planned", "in-progress", "completed"
  - `category` (Short text, required)

#### **Gallery Image Content Type**
- **Content Type ID**: `galleryImage`
- Fields:
  - `title` (Short text, required)
  - `description` (Long text, optional)
  - `image` (Media, required)
  - `category` (Short text, optional)

### 2.3 Enable Localization

1. Go to Settings → Locales
2. Add Arabic (ar) locale alongside English (en-US)
3. For each content entry, you can now provide translations

---

## 📊 Step 3: Set Up Google Analytics

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for your website
3. Select **Web** as the platform
4. Enter your website URL: `https://marwanawny.com`
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

---

## 🔧 Step 4: Configure Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://marwanawny.com

# Contact Email
CONTACT_EMAIL=your-email@example.com

# Contentful CMS Configuration
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_contentful_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# SMTP Configuration (if using email)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 🌐 Step 5: Deploy to Vercel

### 5.1 Connect Your Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will auto-detect Next.js

### 5.2 Configure Build Settings

Vercel should automatically detect these settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### 5.3 Add Environment Variables

In the Vercel project settings:
1. Go to **Settings** → **Environment Variables**
2. Add all variables from your `.env.local` file:
   - `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
   - `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `CONTACT_EMAIL`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (if using email)

3. Make sure to add them for **Production**, **Preview**, and **Development** environments

### 5.4 Deploy

Click **"Deploy"** and wait for the build to complete.

---

## 🌍 Step 6: Configure Custom Domain (marwanawny.com)

### 6.1 Add Domain in Vercel

1. In your Vercel project, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter `marwanawny.com`
4. Also add `www.marwanawny.com` (recommended)

### 6.2 Update DNS Records

Vercel will provide DNS records. Go to your domain registrar and add:

**For apex domain (marwanawny.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Note**: DNS propagation can take up to 48 hours, but usually completes within a few hours.

### 6.3 Verify Domain

Once DNS records are updated, Vercel will automatically verify and issue an SSL certificate.

---

## 🔍 Step 7: Set Up Google Search Console

### 7.1 Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Choose **"URL prefix"** and enter `https://marwanawny.com`

### 7.2 Verify Ownership

Choose one of these verification methods:

**Method 1: HTML Tag (Recommended)**
1. Copy the meta tag provided by Search Console
2. Add it to `src/app/layout.tsx` in the `<head>` section
3. Deploy the changes
4. Click "Verify" in Search Console

**Method 2: DNS Verification**
1. Add the TXT record provided by Search Console to your domain's DNS
2. Click "Verify"

### 7.3 Submit Sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter `sitemap.xml` in the "Add a new sitemap" field
3. Click **"Submit"**

Your sitemap is automatically generated at `https://marwanawny.com/sitemap.xml`

### 7.4 Request Indexing

1. Use the **URL Inspection** tool in Search Console
2. Enter your homepage URL: `https://marwanawny.com`
3. Click **"Request Indexing"**
4. Repeat for important pages

---

## 📝 Step 8: Using Contentful CMS

### 8.1 Add Content

1. Log in to Contentful
2. Go to **Content** → **Add entry**
3. Select the content type (News, Work Plan, or Gallery Image)
4. Fill in the fields
5. Click **"Publish"**

### 8.2 Update Your Website

The website will automatically fetch content from Contentful. To integrate it into your pages:

**Example: Fetching News in a Page**

```typescript
import { getNewsEntries } from '@/lib/contentful';

export default async function NewsPage() {
  const news = await getNewsEntries('en-US');
  
  return (
    <div>
      {news.map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

---

## 📈 Step 9: Monitor Analytics

### 9.1 View Google Analytics

1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property
3. View real-time data and reports

### 9.2 View Search Console Data

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Monitor:
   - Search performance (clicks, impressions, CTR)
   - Coverage (indexed pages)
   - Enhancements (mobile usability, Core Web Vitals)

---

## 🔄 Step 10: Continuous Deployment

Every time you push changes to your Git repository:
1. Vercel automatically builds and deploys
2. The new version goes live within minutes
3. You can preview changes in pull requests before merging

---

## ✅ Checklist

- [ ] Install dependencies (`contentful`, `@contentful/rich-text-react-renderer`, `@next/third-parties`)
- [ ] Create Contentful space and content models
- [ ] Set up Google Analytics property
- [ ] Configure environment variables in `.env.local`
- [ ] Deploy to Vercel
- [ ] Add custom domain `marwanawny.com`
- [ ] Update DNS records
- [ ] Verify domain and SSL certificate
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Search Console
- [ ] Add content to Contentful
- [ ] Test website functionality
- [ ] Monitor analytics and search performance

---

## 🆘 Troubleshooting

### Domain Not Working
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Verify DNS records match Vercel's requirements
- Wait up to 48 hours for full propagation

### Analytics Not Tracking
- Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
- Check browser console for errors
- Use Google Analytics DebugView for real-time testing

### Contentful Content Not Showing
- Verify environment variables are set in Vercel
- Check that content is published (not draft) in Contentful
- Ensure content type IDs match the ones in `src/lib/contentful.ts`

### Build Failures
- Check Vercel build logs for specific errors
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

---

## 📞 Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Contentful Documentation**: [contentful.com/developers/docs](https://www.contentful.com/developers/docs/)
- **Google Analytics Help**: [support.google.com/analytics](https://support.google.com/analytics)
- **Google Search Console Help**: [support.google.com/webmasters](https://support.google.com/webmasters)

---

## 🎉 You're All Set!

Your website is now:
- ✅ Deployed on Vercel
- ✅ Accessible at marwanawny.com
- ✅ Integrated with Contentful CMS for easy content updates
- ✅ Tracking visitors with Google Analytics
- ✅ Indexed by Google via Search Console

Happy deploying! 🚀
