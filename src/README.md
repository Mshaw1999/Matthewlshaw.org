# Matthew Lynn Shaw Portfolio

A modern, responsive portfolio website showcasing my professional experience as an IT Systems Engineer, built with React, Tailwind CSS, and Motion animations.

## 🚀 Live Site
[matthewlshaw.org](https://matthewlshaw.org)

## 📁 Project Structure
```
├── App.tsx                 # Main application component with routing
├── components/             # React components
│   ├── HomePage.tsx        # Hero section and overview
│   ├── ResumesPage.tsx     # Tailored resumes for different roles
│   ├── TimelinePage.tsx    # Professional timeline
│   ├── ContactPage.tsx     # Contact form with backend integration
│   └── ui/                 # ShadCN UI components
├── styles/
│   └── globals.css         # Tailwind CSS styles and custom variables
├── supabase/
│   └── functions/
│       └── server/         # Backend API for contact form
└── utils/                  # Utility functions
```

## 🛠️ Manual Editing Guide

### To Edit Content:
1. **Homepage Content**: Edit `/components/HomePage.tsx`
   - Update name, title, description
   - Modify stats and skills sections
   - Change professional photo

2. **Resume Information**: Edit `/components/ResumesPage.tsx`
   - Update resume descriptions
   - Add/remove resume types
   - Modify skills lists

3. **Timeline Events**: Edit `/components/TimelinePage.tsx`
   - Add new positions
   - Update job descriptions
   - Modify timeline dates

4. **Contact Information**: Edit `/components/ContactPage.tsx`
   - Update email, phone, location
   - Modify contact form fields
   - Change availability status

5. **Navigation & Links**: Edit `/App.tsx`
   - Update social media links
   - Modify navigation items
   - Change header/footer content

### To Edit Styles:
- **Colors & Theme**: Edit `/styles/globals.css`
- **Component Styling**: Edit individual component files
- **Animations**: Modify Motion components in each file

## 🔧 Adding New Features

### Adding a New Page:
1. Create new component in `/components/NewPage.tsx`
2. Add route to `App.tsx`:
   ```tsx
   // Add to navigationItems array
   { id: 'newpage', label: 'New Page', icon: YourIcon }
   
   // Add to renderPage function
   case 'newpage':
     return <NewPage />;
   ```

### Adding New Components:
1. Create component file in `/components/`
2. Import and use in desired page component

## 📦 Dependencies
- React 18+
- Motion (Framer Motion)
- Tailwind CSS v4
- Lucide React (icons)
- ShadCN UI components
- Supabase (backend)

## 🚀 Deployment Instructions

### Initial Setup:
```bash
# Clone this repository locally
git clone https://github.com/Mshaw1999/Matthewlshaw.org.git
cd Matthewlshaw.org

# Install dependencies (if running locally)
npm install
```

### Updating the Website:
1. **Make your changes** to the files locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. **Deploy** automatically via your hosting platform (Vercel/Netlify)

## 🌐 Hosting Options

### Option 1: Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Deploy automatically on every push
3. Custom domain: matthewlshaw.org

### Option 2: Netlify
1. Connect your GitHub repo to Netlify
2. Configure build settings
3. Deploy automatically

### Option 3: GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for deployment

## 🔗 Backend Features

### Contact Form:
- Stores submissions in Supabase database
- Email notifications for new contacts
- Form validation and error handling

### API Endpoints:
- `POST /contact` - Submit contact form
- `GET /contacts` - Retrieve all contacts (admin)
- `PUT /contact/:id/status` - Update contact status

## 📱 Features
- ✅ Fully responsive design
- ✅ Dark theme with cyan/teal accents
- ✅ Smooth page transitions
- ✅ Professional photo integration
- ✅ Contact form with backend
- ✅ Multiple resume formats
- ✅ Professional timeline
- ✅ SEO optimized
- ✅ Fast loading animations

## 📧 Contact
For questions about this portfolio or potential collaborations:
- Email: matthew.shaw@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Mshaw1999](https://github.com/Mshaw1999)

---
Built with ❤️ using React, Tailwind CSS, and modern web technologies.