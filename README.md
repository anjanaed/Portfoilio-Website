# Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a full-stack developer and blockchain enthusiast.

## About

This is the personal portfolio of Anjana Edirisinghe, a 3rd year IT & Management undergraduate at the University of Moratuwa, Sri Lanka. The website highlights my expertise in full-stack web development, blockchain technologies, and various projects I've worked on.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop, with a mobile menu and touch-friendly controls
- **3D Hero**: Pure CSS 3D scene with a photo reveal on the name
- **Problems Carousel**: Short write-ups of problems I have solved, with autoplay and swipe support
- **Project Showcase**: Detailed project cards with pipelines, highlights, and links to GitHub and live demos
- **Journey Timeline**: Education and work experience
- **Technology Stack**: Skills and technologies I work with
- **Contact Information**: Ways to get in touch

## Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Plain CSS with custom properties
- **Animations**: CSS keyframes and 3D transforms
- **Fonts**: Bricolage Grotesque, Instrument Sans, Instrument Serif, JetBrains Mono (Google Fonts)
- **Build Tool**: Vite
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anjanaed/Portfoilio-Website.git
   cd Portfoilio-Website/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
frontend/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, content data, and project screenshots
│   ├── components/   # React components (Hero, Profile, Projects, Journey, etc.)
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Deployment

The project is built with Vite and can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

To build for production:
```bash
npm run build
```

The built files will be in the `dist` folder.

## Contributing

This is a personal portfolio project, but feel free to fork and use it as a template for your own portfolio. If you find any issues or have suggestions, please open an issue on GitHub.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: anjanaape@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/anjana-ed
- **GitHub**: https://github.com/anjanaed

---

Built with ❤️ by Anjana Edirisinghe
