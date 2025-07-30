# MyPortfolio

A modern, responsive developer portfolio built with **React** and **Vite**. Showcases projects, skills, and contact information in a clean, interactive interface with smooth animations and professional styling.

![Portfolio Screenshot](public/bidmaster.jpg)

---

## 🚀 Live Demo

> _[Add your live URL here when deployed!]_

---

## ✨ Features

- **Single Page Application** with smooth navigation and scroll animations
- **Interactive Hero Section** with animated text transitions and professional profile display
- **Project Showcase** with filtering capabilities (All, Frontend, Backend, Full Stack)
- **Skills Section** with visual progress bars and proficiency indicators
- **Responsive Design** optimized for desktop, tablet, and mobile devices
- **Contact Form** for easy communication
- **Loading Animation** for enhanced user experience
- **Modern UI/UX** with custom CSS animations and hover effects
- **Professional Profile Display** with circular avatar and centered image positioning

---

## 🛠️ Built With

### Core Technologies
- **React 19.1.0** - UI library for building interactive components
- **Vite 7.0.4** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features and syntax
- **CSS3** - Custom styling with advanced animations and responsive design

### Development Tools
- **ESLint** - Code linting and quality assurance
- **gh-pages** - GitHub Pages deployment
- **Git & GitHub** - Version control and hosting

### Featured Project Technologies
- **Socket.io** - Real-time communication
- **Node.js** - Server-side JavaScript runtime
- **MongoDB** - NoSQL database
- **Express.js** - Web application framework
- **Stripe** - Payment processing
- **Styled-Components** - CSS-in-JS styling

---

## 📁 Project Structure


my-portfolio/
├── public/
│   ├── cvid.jpg          # Profile picture
│   └── bidmaster.jpg     # Project images
├── src/
│   ├── components/
│   │   ├── About.jsx     # About section component
│   │   ├── Contact.jsx   # Contact form component
│   │   ├── Hero.jsx      # Hero section with animated text
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Projects.jsx  # Projects showcase with filtering
│   │   ├── Skills.jsx    # Skills display with progress bars
│   │   └── Footer.jsx    # Footer component
│   ├── App.jsx           # Main application component
│   ├── App.css           # Main stylesheet with advanced styling
│   ├── index.css         # Global styles and font imports
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation


## 🖥️ Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   sh
   git clone https://github.com/LiliPoornima/MyPortfolio.git
   cd MyPortfolio/my-portfolio
   

2. **Install dependencies:**
   sh
   npm install
  

3. **Start development server:**
   sh
   npm run dev
   

4. **Open your browser:**
   Navigate to `http://localhost:5173`



## 🎨 Key Features Explained

### Hero Section
- **Animated Text**: Rotating titles (Full Stack Developer, UI/UX Designer, etc.)
- **Profile Display**: Circular avatar with centered image positioning
- **Smooth Navigation**: Buttons that scroll to different sections

### Projects Section
- **Filtering System**: Filter projects by category (All, Frontend, Backend, Full Stack)
- **Project Cards**: Modern card design with hover effects
- **Technology Tags**: Visual representation of technologies used
- **GitHub Links**: Direct links to project repositories

### Skills Section
- **Progress Bars**: Visual representation of skill proficiency
- **Categorized Skills**: Organized by Frontend, Backend, and Tools
- **Additional Skills**: Tag-based display of additional competencies

---

## 🧑‍💻 Author

- **Poornima Liyanage**  
  [GitHub](https://github.com/LiliPoornima)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Socket.io](https://socket.io/) - Real-time communication
- [Express.js](https://expressjs.com/) - Web framework
- [GitHub Pages](https://pages.github.com/) - Hosting platform

---

## 🔧 Customization

### Adding New Projects
Edit the `projects` array in `src/components/Projects.jsx`:
```javascript
{
  id: 9,
  title: "Your Project Name",
  subtitle: "Optional subtitle",
  description: "Project description",
  image: "your-image.jpg",
  technologies: ["React", "Node.js"],
  category: "fullstack",
  githubUrl: "https://github.com/yourusername/your-repo"
}
```

### Updating Skills
Edit the `skillCategories` array in `src/components/Skills.jsx`:
```javascript
{
  category: "Your Category",
  skills: [
    { name: "Skill Name", level: 85 }
  ]
}
```

### Styling Changes
- Main styles: `src/App.css`
- Global styles: `src/index.css`
- Component-specific styles can be added to individual component files

---

> _Feel free to customize this portfolio to better reflect your personal style and experience!_
