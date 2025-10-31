# Netlify Deployment Fix - URGENT ACTION REQUIRED

## Problem
The Netlify deploy is failing with: **"Build script returned non-zero exit code: 2"**

This happens because the **Publish directory is set to `.next` in the Netlify UI**, which conflicts with the `@netlify/plugin-nextjs` plugin.

## Root Cause
- The build completes successfully (Next.js generates all pages)
- But Netlify's plugin fails because it expects NO publish directory to be set
- The resolved config shows: `publish: /opt/build/repo/.next` and `publishOrigin: ui`
- The `@netlify/plugin-nextjs` manages Next.js output itself and produces files under `.netlify/`
- Setting publish to `.next` makes the plugin fail during the packaging step

## Solution - CRITICAL STEPS

### Step 1: Clear the Publish Directory in Netlify UI (MUST DO THIS)

**This is the ONLY fix needed - the code is correct!**

1. Log in to Netlify: https://app.netlify.com
2. Select your site (marwan website)
3. Go to: **Site settings** → **Build & deploy** → **Continuous Deployment**
4. Scroll to **Build settings** section
5. Click **Edit settings** button
6. Find the **Publish directory** field - it currently shows `.next`
7. **DELETE the `.next` text completely** (leave the field EMPTY or blank)
8. Click **Save** button
9. The field should now be empty or show a placeholder like "e.g., public"

### Step 2: Verify netlify.toml Configuration

Your `netlify.toml` is already correct:

```toml
[build]
  command = "npm run build"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

✅ **No changes needed** - the file does NOT set a publish directory, which is correct.

### Step 3: Re-deploy

After clearing the publish directory in the UI:
1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** → **Clear cache and deploy site** (recommended)
3. Watch the build log - it should now complete successfully
4. The site will be live at your Netlify URL

**Expected result:** Build will complete with "Site is live" message

## Why This Works

- The `@netlify/plugin-nextjs` plugin automatically handles Next.js deployment
- It creates the necessary runtime artifacts in `.netlify/` and other locations
- When you manually set `publish = ".next"`, it bypasses the plugin's logic
- Leaving publish unset allows the plugin to work correctly

## Alternative: Static Export (if needed)

If you want to deploy as a static site instead:

1. Update `next.config.js` to enable static export:
   ```js
   output: 'export',
   ```

2. Update `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = "out"
   ```

3. Remove the Next.js plugin from `netlify.toml`

**Note:** Static export has limitations (no API routes, no server-side rendering, etc.)

## Current Status

✅ `netlify.toml` is correctly configured  
❌ Netlify UI has incorrect publish directory setting  
📝 Action required: Clear publish directory in Netlify UI
