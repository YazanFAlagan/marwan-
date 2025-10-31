# ⚠️ URGENT: Clear Publish Directory in Netlify

## The Problem (Confirmed in Build Log)
Your latest build log shows:
```
publish: /opt/build/repo/.next
publishOrigin: ui
```

This means the **Publish directory is STILL set to `.next` in the Netlify UI**.

## Step-by-Step Fix (WITH SCREENSHOTS GUIDE)

### 1. Log in to Netlify
- Go to: **https://app.netlify.com**
- Log in with your account

### 2. Select Your Site
- Click on your site (the marwan website)
- You should see the site overview/dashboard

### 3. Go to Site Settings
- Look for the top navigation tabs: **Overview**, **Deploys**, **Site settings**, etc.
- Click on **"Site settings"** (usually in the top right area)

### 4. Navigate to Build Settings
- In the left sidebar, find **"Build & deploy"**
- Click on it to expand
- Click on **"Continuous Deployment"**

### 5. Find Build Settings Section
- Scroll down until you see a section titled **"Build settings"**
- You'll see:
  - **Base directory**: (probably empty)
  - **Build command**: npm run build
  - **Publish directory**: `.next` ← **THIS IS THE PROBLEM**
  - **Functions directory**: (probably empty)

### 6. Edit the Settings
- Click the **"Edit settings"** button in the Build settings section
- A form will appear with editable fields

### 7. Clear the Publish Directory
- Find the **"Publish directory"** field
- It currently contains: `.next`
- **DELETE THIS TEXT** - make the field completely empty
- The field should be blank or show a placeholder like "e.g., public"

### 8. Save Changes
- Click the **"Save"** button at the bottom of the form
- Wait for confirmation that settings were saved

### 9. Verify It's Cleared
- After saving, the Build settings section should show:
  - **Publish directory**: (empty or "Not set")
- If it still shows `.next`, repeat steps 6-8

### 10. Trigger New Deploy
- Go to the **"Deploys"** tab (top navigation)
- Click **"Trigger deploy"** dropdown
- Select **"Clear cache and deploy site"**
- Watch the build log

## Expected Result
After clearing the publish directory, the build log should show:
```
publish: (not set or empty)
```

And the build will complete successfully with:
```
✅ Site is live
```

## Still Having Issues?
If you've cleared the publish directory and it still shows `.next` in the build log:

1. **Hard refresh** your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. **Log out** of Netlify and log back in
3. **Check again** in Site settings → Build & deploy → Continuous Deployment
4. Make sure you clicked **Save** after clearing the field

## Visual Checklist
- [ ] Logged into Netlify
- [ ] Selected the marwan site
- [ ] Went to Site settings
- [ ] Clicked Build & deploy → Continuous Deployment
- [ ] Found the "Build settings" section
- [ ] Clicked "Edit settings"
- [ ] Cleared the "Publish directory" field (removed `.next`)
- [ ] Clicked "Save"
- [ ] Verified the field is now empty
- [ ] Triggered a new deploy with "Clear cache and deploy site"

## Why This Matters
The `@netlify/plugin-nextjs` plugin **cannot work** when a publish directory is set. It needs to manage the deployment itself. The UI setting overrides everything else, which is why your build keeps failing even though the code is perfect.
