# Cloudflare Pages Deployment Guide

This guide explains how to deploy your Adonis ODM documentation site to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Automatic Deployment via Git Integration (Recommended)

1. **Connect Repository to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your Git provider and authorize Cloudflare
   - Select your repository

2. **Configure Build Settings:**
   - **Framework preset:** None (or Custom)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty if repository root)

3. **Environment Variables (if needed):**
   - No special environment variables are required for this static site

4. **Deploy:**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - Future pushes to your main branch will trigger automatic deployments

### Method 2: Manual Deployment via Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the site:**
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy dist --project-name adonis-odm-docs
   ```

## Build Configuration

The site is configured with the following build settings:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18+ (recommended)

## Performance Optimizations

The deployment includes several optimizations:

### Caching Headers (`public/_headers`)
- Static assets cached for 1 year
- HTML files cached for 1 hour
- Pagefind search files cached for 1 day

### Redirects (`public/_redirects`)
- Trailing slash redirects for clean URLs
- SEO-friendly URL structure

### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter your domain (e.g., `docs.yourdomain.com`)
5. Follow the DNS configuration instructions

## Environment-Specific Configuration

Update the `site` URL in `astro.config.mjs` to match your production domain:

```javascript
export default defineConfig({
  site: "https://your-actual-domain.com",
  // ... other config
});
```

## Monitoring and Analytics

Consider adding:
- Cloudflare Web Analytics (free)
- Google Analytics
- Error tracking (Sentry, etc.)

## Troubleshooting

### Build Failures
- Check Node.js version (18+ recommended)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare Pages dashboard

### Search Not Working
- Ensure Pagefind runs after Astro build
- Check that `dist/pagefind/` directory exists after build
- Verify search component is properly configured

### Performance Issues
- Enable Cloudflare's optimization features
- Use Cloudflare's image optimization
- Consider enabling Brotli compression

## Support

For issues specific to:
- **Astro:** [Astro Documentation](https://docs.astro.build/)
- **Cloudflare Pages:** [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- **This project:** Check the repository issues
