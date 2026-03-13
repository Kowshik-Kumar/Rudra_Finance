# Rudra Tax & Business Solution Website

A modern, professional website built with React.js for a tax consulting firm based in Durgapur, West Bengal.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Easy Navigation**: Smooth scrolling and intuitive routing

## 📋 Pages

1. **Home** - Hero section, services overview, client testimonials
2. **About Us** - Company information, mission, vision, and values
3. **Services** - Detailed service listings with features and pricing
4. **Contact** - Contact form, office information, and Google Maps integration

## 🛠️ Tech Stack

- **React 18** - Frontend library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
rudra-tax-business-solution/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── ContactForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Color Palette

- **Primary Color**: #1e3a8a (Dark Blue)
- **Secondary Color**: #d4af37 (Gold)
- **Background**: White and Light Gray
- **Text**: Dark Gray and Blue tones

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Business Information

Edit the following files to update business information:
- `src/components/Footer.jsx` - Footer contact details
- `src/components/Navbar.jsx` - Phone number in header
- `src/pages/Contact.jsx` - Contact page details and Google Maps embed

### Update Services

Edit `src/pages/Services.jsx` and `src/components/ServicesSection.jsx` to modify service offerings.

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#1e3a8a', // Your primary color
    light: '#3b82f6',
    dark: '#1e293b',
  },
  secondary: {
    DEFAULT: '#d4af37', // Your secondary color
    light: '#fbbf24',
  },
}
```

## 📞 Contact Information

**Business Name**: Rudra Tax & Business Solution

**Address**: SHIV MANDIR, NUTAN PALLY, E1/11C, near ISHANESHWAR, Bhiringi, Benachity, Durgapur, West Bengal 713213, India

**Phone**: +91 98328 33434

**Working Hours**: Open Daily - Closes at 10 PM

**Google Rating**: 5.0 (1 review)

## 📄 License

This project is created for Rudra Tax & Business Solution.

## 🤝 Support

For any issues or questions, please contact the development team.

---

Built with ❤️ using React.js and Tailwind CSS
