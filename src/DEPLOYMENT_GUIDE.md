# Complete Deployment Guide for matthewlshaw.org

## 🎯 Goal

Replace all files in your existing GitHub repository with this new portfolio website.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account access
- Access to your repository: https://github.com/Mshaw1999/Matthewlshaw.org

## 🚀 Step-by-Step Deployment

### Step 1: Download Your Project Files

1. **From Figma Make**: Export/download all your project files
2. **Create a local folder**: `mkdir matthewlshaw-portfolio`
3. **Copy all files** from this project into that folder

### Step 2: Clone Your Existing Repository

```bash
# Navigate to where you want to work
cd ~/Desktop  # or wherever you prefer

# Clone your existing repository
git clone https://github.com/Mshaw1999/Matthewlshaw.org.git
cd Matthewlshaw.org
```

### Step 3: Backup Existing Files (Optional)

```bash
# Create a backup branch of current content
git checkout -b backup-old-site
git push origin backup-old-site

# Return to main branch
git checkout main
```

### Step 4: Replace All Files

```bash
# Remove all existing files (except .git folder)
# On Windows:
for /f %i in ('dir /b /a-d') do del "%i"
for /f %i in ('dir /b /ad') do rd /s /q "%i"

# On Mac/Linux:
find . -not -path './.git*' -delete
```

### Step 5: Copy New Project Files

```bash
# Copy all files from your downloaded project
# Replace "path/to/downloaded/project" with actual path
cp -r /path/to/downloaded/project/* .

# Or manually copy-paste all files except .git folder
```

### Step 6: Commit and Push Changes

```bash
# Add all new files
git add .

# Commit with descriptive message
git commit -m "Complete portfolio website redesign

- Modern React + Tailwind CSS design
- Added professional photo
- Contact form with Supabase backend
- Multiple resume pages
- Professional timeline
- Smooth animations and responsive design"

# Push to GitHub
git push origin main
```

### Step 7: Set Up Deployment Platform

#### Option A: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your `Matthewlshaw.org` repository
5. Configure build settings:
   - **Framework Preset**: React
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add your custom domain: `matthewlshaw.org`
7. Deploy!

#### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Add custom domain in site settings
7. Deploy!

## 🔧 Manual Editing for Future Updates

### Method 1: Edit Directly on GitHub

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit this file)
4. Make your changes
5. Scroll down and commit changes

### Method 2: Edit Locally and Push

1. **Clone repository locally** (if not already done):

   ```bash
   git clone https://github.com/Mshaw1999/Matthewlshaw.org.git
   cd Matthewlshaw.org
   ```

2. **Make your edits** using any text editor:
   - Visual Studio Code (recommended)
   - Sublime Text
   - Notepad++ (Windows)
   - TextEdit (Mac)

3. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Updated portfolio content"
   git push origin main
   ```

### Method 3: Using GitHub Desktop (User-Friendly)

1. Download GitHub Desktop app
2. Clone your repository
3. Edit files with any text editor
4. Use GitHub Desktop to commit and push

## 📝 Common Files to Edit

### Personal Information:

- `/components/HomePage.tsx` - Name, title, bio, stats
- `/components/ContactPage.tsx` - Email, phone, location
- `/App.tsx` - Social media links

### Content Updates:

- `/components/ResumesPage.tsx` - Resume descriptions
- `/components/TimelinePage.tsx` - Career timeline
- `/README.md` - Project documentation

### Styling:

- `/styles/globals.css` - Colors, fonts, theme

## 🌐 Setting Up Custom Domain

### If you own matthewlshaw.org:

1. **In your domain registrar** (GoDaddy, Namecheap, etc.):
   - Point A record to your hosting provider's IP
   - Or point CNAME to your hosting URL

2. **In Vercel/Netlify**:
   - Add custom domain in settings
   - Verify domain ownership
   - Enable HTTPS

## 🔍 Troubleshooting

### If deployment fails:

1. Check build logs in your hosting platform
2. Ensure all dependencies are listed in package.json
3. Verify file paths are correct
4. Check for any missing files

### If contact form doesn't work:

1. Verify Supabase environment variables are set
2. Check API endpoints are correctly configured
3. Ensure CORS settings allow your domain

### If updates don't appear:

1. Clear browser cache
2. Check if deployment completed successfully
3. Verify changes were committed and pushed

## 📞 Need Help?

If you encounter issues:

1. Check GitHub repository for recent commits
2. Review deployment logs in your hosting platform
3. Verify all files copied correctly
4. Test locally if possible

## 🎉 You're Done!

Your portfolio should now be live at matthewlshaw.org with:

- ✅ Modern professional design
- ✅ Your actual professional photo
- ✅ Working contact form
- ✅ Multiple resume pages
- ✅ Professional timeline
- ✅ Smooth animations