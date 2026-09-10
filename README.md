# Multi-Page Portfolio Website

This portfolio website has been converted from a single-page scrolling design to a proper multi-page website with separate routes for each section.

## 🌐 Website Structure

### Pages
- **Home** → `/` or `/index.html`
- **About** → `/about.html`
- **Skills** → `/skills.html`
- **Projects** → `/projects.html`
- **Internships** → `/internships.html`
- **Achievements** → `/achievements.html`
- **Contact** → `/contact.html`

## 🏗️ Architecture

### Component-Based Design
The website uses a component-based architecture with shared navbar and footer:

```
portfolio/
├── index.html              # Home page with hero section
├── about.html             # About page
├── skills.html            # Skills page
├── projects.html          # Projects page
├── internships.html       # Internships page
├── achievements.html      # Achievements page
├── contact.html           # Contact page
├── components/
│   ├── navbar.html        # Shared navigation bar
│   ├── footer.html        # Shared footer
│   └── loader.js          # Component loader script
├── script.js              # Main JavaScript
├── style.css              # Main stylesheet
├── assets/                # Images and media
└── certificates/          # Certificate images
```

### How It Works

1. **Component Loading**: Each page includes placeholders for navbar and footer:
   ```html
   <div id="navbar-placeholder"></div>
   <!-- Page content -->
   <div id="footer-placeholder"></div>
   ```

2. **Dynamic Injection**: The `loader.js` script fetches and injects navbar/footer HTML into placeholders on page load.

3. **Active State**: The loader automatically sets the active nav link based on the current page URL.

4. **Theme Persistence**: Theme preference (dark/light) is stored in localStorage and persists across pages.

## 🚀 Running Locally

### Option 1: Python HTTP Server
```bash
cd portfolio
python3 -m http.server 8888
```
Then open: http://localhost:8888

### Option 2: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js http-server
```bash
npx http-server -p 8888
```

## 📱 Features

✅ **Multi-page Navigation** - Each section is a separate page  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Dark/Light Theme** - Toggle with persistence across pages  
✅ **Component Reusability** - Shared navbar and footer  
✅ **Active Nav States** - Current page highlighted in navigation  
✅ **Certificate Modal** - View certificates in modal overlay  
✅ **Project Filtering** - Filter projects by category  
✅ **Smooth Animations** - Scroll reveal and hover effects  
✅ **Mobile Navigation** - Hamburger menu for mobile devices  
✅ **Back to Top** - Quick scroll to top button  

## 🎨 Design Preserved

All existing visual elements have been preserved:
- Modern dark/light theme colors
- Gradient accents and effects
- Card-based layouts
- Skill progress bars
- Project cards with overlays
- Achievement certificates
- Contact form styling
- Floating elements and animations

## 🔗 Navigation Links

### Main Navigation
All navigation links use absolute paths to ensure they work from any page:
- `/about.html`
- `/skills.html`
- `/projects.html`
- `/internships.html`
- `/achievements.html`
- `/contact.html`

### Home Page Highlights
The home page includes call-to-action cards that link to each section, providing quick access to:
- About Me
- Skills & Technologies
- Featured Projects
- Internships
- Achievements
- Get In Touch

## 🔧 Customization

### Adding New Pages
1. Create a new HTML file (e.g., `education.html`)
2. Add navbar and footer placeholders:
   ```html
   <div id="navbar-placeholder"></div>
   <!-- Your content -->
   <div id="footer-placeholder"></div>
   ```
3. Include loader and main scripts:
   ```html
   <script src="components/loader.js"></script>
   <script src="script.js"></script>
   ```
4. Add navigation link to `components/navbar.html`

### Updating Navbar
Edit `components/navbar.html` to add, remove, or modify navigation links.

### Updating Footer
Edit `components/footer.html` to modify footer content.

## 📦 Deployment

### GitHub Pages
1. Push the repository to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Add a `.nojekyll` file to the root if using custom directories

### Netlify / Vercel
1. Connect your repository
2. Set build command: (none needed - static HTML)
3. Set publish directory: `/`
4. Deploy!

### Important for SPA-like Behavior
If you want all routes to work without `.html` extensions, configure your hosting platform:

**Netlify** - Add `_redirects` file:
```
/about    /about.html    200
/skills   /skills.html   200
/projects /projects.html 200
# ... etc
```

**Vercel** - Add `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/about", "destination": "/about.html" },
    { "source": "/skills", "destination": "/skills.html" }
  ]
}
```

## 📄 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Changes from Single-Page

### Before (Single-Page)
- All sections on one page
- Navigation used `#anchor` links
- Smooth scroll to sections
- Active nav based on scroll position

### After (Multi-Page)
- Each section is a separate page
- Navigation uses page URLs (`/about.html`)
- Standard page navigation
- Active nav based on current URL
- Shared components loaded dynamically

## 📞 Support

For issues or questions about this portfolio:
- Email: amritkashyap3680@gmail.com
- GitHub: [@amritupadhyay45](https://github.com/amritupadhyay45)

---

**Built with** ❤️ **by Amrit Kashyap**
