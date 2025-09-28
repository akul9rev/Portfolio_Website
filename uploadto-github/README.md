# Akul's Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, achievements, and contact information.

## 🚀 Live Demo

[View Live Website](https://akul-portfolio.vercel.app) *(Update this URL after deployment)*

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Sections**: 
  - Hero section with call-to-action buttons
  - About section with skills showcase
  - Featured projects with live demos and GitHub links
  - Achievements and recognition section
  - Contact form with social media links
  - Resume download functionality
- **Smooth Scrolling**: Seamless navigation between sections
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Performance**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended) or Netlify
- **Icons**: Heroicons and custom SVGs

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Achievements.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
│   └── resume.pdf
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akul/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change name, title, and description
   - Update profile image/avatar

2. **About Section** (`src/components/About.tsx`):
   - Update bio and personal description
   - Modify skills array with your technologies

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update GitHub and live demo links
   - Add project descriptions and technologies

4. **Achievements Section** (`src/components/Achievements.tsx`):
   - Add your certifications, awards, and recognitions
   - Update dates and descriptions

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email and location
   - Add your social media links
   - Customize contact form behavior

6. **Resume**:
   - Replace `public/resume.pdf` with your resume

### Styling

- Colors and themes can be customized in `src/app/globals.css`
- Component-specific styles are in individual component files using Tailwind classes
- Update the color scheme by modifying Tailwind classes throughout the components

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify or use Netlify's GitHub integration

### Environment Variables

No environment variables are required for basic functionality.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Subtle hover effects and smooth transitions
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized images and lazy loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/akul/portfolio-website/issues).

## 📞 Contact

- **Email**: akul@example.com
- **LinkedIn**: [linkedin.com/in/akul](https://linkedin.com/in/akul)
- **GitHub**: [github.com/akul](https://github.com/akul)

---

⭐ If you found this project helpful, please give it a star!