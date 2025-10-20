# Bisman Logic LLC Website

Professional website for Bisman Logic LLC - a software engineering company specializing in secure custom applications using Electron and React.

## About

Bisman Logic LLC is a professional software engineering company dedicated to creating secure, custom applications for businesses and organizations. We specialize in:

- **Desktop Applications**: Cross-platform desktop apps built with Electron
- **Web Applications**: Modern, responsive web applications using React
- **Security-First Development**: Applications designed with security as a core principle
- **Custom Solutions**: Tailored software solutions for unique business requirements

## Technology Stack

This website is built with:
- **React** - Modern UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom responsive styling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Bisman-Logic/web.git
cd web
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

### Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live Site:** https://bisman-logic.github.io/web/

#### How GitHub Pages Deployment Works

1. When you push to the `main` branch, GitHub Actions automatically:
   - Builds the project using `npm run build`
   - Deploys the `dist/` folder to GitHub Pages

2. The site is available at: https://bisman-logic.github.io/web/

#### Manual Deployment

If you need to deploy manually, you can run:
```bash
npm run deploy
```

This will build the project locally. The GitHub Actions workflow will handle the actual deployment to GitHub Pages.

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ Professional gradient design with modern UI
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Sections: About, Services, Technology Stack, Contact
- ✅ Fast load times with Vite
- ✅ Clean, maintainable code
- ✅ SEO-friendly structure

## License

© 2025 Bisman Logic LLC. All rights reserved.
