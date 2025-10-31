# Netlify Deployment Fix

## Problem
The Netlify deploy is failing because the **Publish directory** is set to `.next` in the Netlify UI, which conflicts with the `@netlify/plugin-nextjs` plugin.

## Root Cause
- The error: "Your publish directory does not contain expected Next.js build output"
- The resolved config shows: `publish: /opt/build/repo/.next` and `publishOrigin: ui`
- The `@netlify/plugin-nextjs` expects to manage Next.js output itself and produces files under `.netlify/`
- Setting publish to `.next` makes the plugin think expected output is missing

## Solution

### Step 1: Clear the Publish Directory in Netlify UI

1. Go to your Netlify site dashboard
2. Navigate to: **Site settings** → **Build & deploy** → **Continuous Deployment**
3. Under **Build settings**, click **Edit settings**
4. Find the **Publish directory** field (currently set to `.next`)
5. **Clear/delete** the `.next` value (leave it empty)
6. Click **Save**

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
2. Click **Trigger deploy** → **Deploy site**
3. The build should now succeed

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
