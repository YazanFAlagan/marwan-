# Image Upload Instructions

## What I Did
I've updated the Gallery component (`src/components/Gallery.tsx`) to reorder the photos:
- **Position 1** (first photo): Now points to `/images/scout-photo-new.jpg` (the new photo you uploaded)
- **Position 3** (third photo): Now points to `/1.jpg` (the original first photo)

## What You Need to Do

### Save the Uploaded Image

You need to save the uploaded scout photo to the correct location:

1. **Save the image you uploaded** to this exact path:
   ```
   C:\Users\Yosuf\CascadeProjects\marwan\public\images\scout-photo-new.jpg
   ```

2. The image should be the photo showing two scouts in uniform (one in blue with purple scarf, one in red uniform)

### How to Save It

**Option 1: From your browser/download**
- Find where you saved the uploaded image
- Copy it to: `C:\Users\Yosuf\CascadeProjects\marwan\public\images\scout-photo-new.jpg`

**Option 2: Drag and drop in VS Code**
- Open the `public/images/` folder in VS Code file explorer
- Drag the image file into that folder
- Rename it to `scout-photo-new.jpg`

## Result

After saving the image:
- ✅ The new scout photo will appear as the **first photo** in the gallery
- ✅ The original first photo will appear as the **third photo** in the gallery
- ✅ The website will automatically update (hot reload)

## Verify

1. Save the image to the location above
2. Refresh your browser at http://localhost:3000
3. The gallery should show your new photo first
