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

### Project Filtering
```javascript
// Projects are filtered by data-category attribute
<div class="project-card" data-category="web">
```
Categories: `all`, `web`, `mobile`, `design`, `branding`, `data`

### Form Validation
The contact form includes:
- Real-time field validation
- Email format verification
- Minimum character requirements
- Success/error message display

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
