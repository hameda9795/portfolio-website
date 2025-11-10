# Professional Portfolio Website

A modern, responsive portfolio website built with vanilla HTML5, CSS3, and JavaScript. Features a dark theme with glassmorphism effects, smooth animations, and interactive elements.

## 🌟 Features

### Design
- **Dark Theme**: Beautiful dark color scheme with midnight blue (#0a0e27) and dark blue (#0F1C3F)
- **Accent Colors**: Vibrant cyan (#00F0FF) and purple (#8B5CF6) accents
- **Glassmorphism**: Modern glass-effect cards with backdrop blur
- **Asymmetrical Layout**: Unique, non-centered design patterns
- **Typography**: Bold Poppins headers with elegant Inter body text

### Interactive Elements
- Smooth scroll-triggered animations
- Project cards with hover effects (scale + glow)
- Filter projects by category
- Ripple effect on button clicks
- Mobile-responsive hamburger menu
- Real-time form validation
- Lazy loading images
- Parallax effects (optional)

### Pages
1. **index.html** - Homepage with hero section and featured projects
2. **projects.html** - All projects with filtering functionality
3. **project-detail.html** - Detailed case study template
4. **about.html** - Professional bio, skills, timeline, and certifications
5. **contact.html** - Contact form with validation and FAQ section

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or simply drag `index.html` into your browser window.

### Folder Structure
```
portfolio-website/
├── index.html              # Homepage
├── projects.html           # Projects listing
├── project-detail.html     # Project case study template
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── style.css          # All styles
├── js/
│   └── script.js          # All JavaScript
├── images/                # Your project images
└── README.md
```

## 📱 Responsive Breakpoints

- **Mobile Portrait**: 480px
- **Mobile Landscape / Tablet**: 768px
- **Tablet / Small Desktop**: 1024px
- **Desktop**: 1440px+

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-dark-blue: #0F1C3F;
    --color-midnight: #0a0e27;
    --color-cyan: #00F0FF;
    --color-purple: #8B5CF6;
    /* Add your custom colors */
}
```

### Content
1. **Personal Information**: Update name, bio, and contact details in HTML files
2. **Projects**: Add your projects in `projects.html` and create detail pages
3. **Skills**: Modify skills section in `about.html`
4. **Images**: Replace placeholder images with your own in the `images/` folder
5. **Social Links**: Update social media URLs in footer sections

### Fonts
Default fonts (Google Fonts):
- Headers: Poppins (300, 400, 600, 700, 800)
- Body: Inter (300, 400, 500, 600)

Change in `css/style.css`:
```css
@import url('your-google-fonts-url');
```

## ✨ Key Features Explained

### Advanced Animations & Micro-interactions

**CSS Animations:**
- ✅ Staggered fade-in animations for project cards
- ✅ Enhanced hover effects with elevation and glow
- ✅ Pulse animation for CTA buttons
- ✅ Success checkmark animation for form submission
- ✅ Smooth input focus transitions
- ✅ Loading spinner animations
- ✅ Shimmer effect for image loading states
- ✅ Parallax effects for floating elements
- ✅ Slide-in animations from left/right

**JavaScript Interactions:**
- ✅ Scroll progress indicator at top of page
- ✅ Enhanced lazy loading with skeleton screens
- ✅ Tooltips on skill icons and social links
- ✅ Loading spinner during form submission
- ✅ Keyboard navigation (Tab, Enter, Arrow keys, Escape)
- ✅ Enhanced parallax with mouse movement
- ✅ Performance monitoring and logging
- ✅ Accessibility announcements for screen readers

### Accessibility Features

**Keyboard Navigation:**
- Tab through all interactive elements
- Enter/Space to activate buttons
- Arrow keys to navigate filter buttons
- Escape to close mobile menu
- Focus indicators on all interactive elements

**Screen Reader Support:**
- ARIA labels on all interactive elements
- Live regions for dynamic content updates
- Semantic HTML structure
- Alt text on all images
- Proper heading hierarchy

**Visual Accessibility:**
- High contrast mode support
- Focus-visible states
- Reduced motion support (respects user preferences)
- Color contrast WCAG 2.1 compliant
- Minimum touch target size (48px)

### Performance Optimizations

**Image Optimization:**
- Lazy loading with IntersectionObserver
- Skeleton screens while loading
- Progressive image loading
- Optimized image formats

**Code Optimization:**
- CSS animations use transform/opacity (GPU accelerated)
- Debounced scroll events
- Will-change hints for animations
- Performance monitoring
- Efficient DOM queries

**Best Practices:**
- Semantic HTML5
- Mobile-first responsive design
- Print stylesheet
- SEO meta tags
- Accessible color selection

### Project Filtering
```javascript
// Projects are filtered by data-category attribute
<div class="project-card" data-category="web">
```
Categories: `all`, `web`, `mobile`, `design`, `branding`, `data`

Features:
- Smooth filtering transitions
- Keyboard accessible
- Screen reader announcements
- Active state indicators

### Form Validation
The contact form includes:
- Real-time field validation
- Email format verification
- Minimum character requirements
- Success/error message display
- Loading spinner during submission
- Animated success checkmark
- Keyboard accessible

### Scroll Animations
Elements with `scroll-animate` class fade in when scrolling:
```html
<div class="scroll-animate">Your content</div>
```

### Glassmorphism Cards
```html
<div class="glass-card">
    <!-- Your content -->
</div>
```

## 🛠️ Advanced Features

### Optional Features (Commented Out)
- **Cursor Trail Effect**: Uncomment in `js/script.js`
- **Typing Effect**: Add `typing-text` class and data attribute
- **Theme Toggle**: Light/dark mode switching (implementation included)

### Adding New Projects

1. In `projects.html`, add a new card:
```html
<div class="project-card glass-card" data-category="your-category">
    <img src="your-image.jpg" alt="Project Name" class="project-card-image">
    <div class="project-card-overlay">
        <span class="project-category">Category</span>
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Description...</p>
        <a href="project-detail.html?id=X" class="btn btn-primary">View Case Study</a>
    </div>
</div>
```

2. Duplicate `project-detail.html` and customize for your project

## 📦 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings > Pages
3. Select your branch and save
4. Your site will be live at `https://yourusername.github.io/portfolio-website/`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be live instantly with a custom domain option

### Vercel
```bash
npm i -g vercel
vercel
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Checklist

- [ ] Update personal information (name, email, phone)
- [ ] Replace placeholder images with your photos
- [ ] Add your actual projects and case studies
- [ ] Update skills and technologies
- [ ] Modify timeline with your experience
- [ ] Add your social media links
- [ ] Customize colors to match your brand
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics (optional)
- [ ] Test contact form submission
- [ ] Add your resume/CV download link

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Classes, modules, async/await
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Unsplash**: Placeholder images (replace with your own)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 💡 Tips

1. **Images**: Use optimized images (WebP format recommended)
2. **Performance**: Enable lazy loading for images
3. **SEO**: Update meta tags in each HTML file
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Analytics**: Add Google Analytics or similar for tracking
6. **Forms**: Connect contact form to a backend service (FormSpree, Netlify Forms, etc.)

## 📸 Screenshots

### Homepage
![Homepage](screenshots/home.png)

### Projects Page
![Projects](screenshots/projects.png)

### About Page
![About](screenshots/about.png)

### Contact Page
![Contact](screenshots/contact.png)

---

**Happy Coding!** 🚀

If you found this helpful, please give it a ⭐️
