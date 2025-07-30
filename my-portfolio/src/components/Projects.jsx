import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+App",
      technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
      image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App",
      technologies: ["JavaScript", "HTML/CSS", "Chart.js", "API"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Blog API",
      description: "A RESTful API for a blog platform with user authentication, CRUD operations, and file upload functionality.",
      image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Blog+API",
      technologies: ["Express.js", "JWT", "Multer", "PostgreSQL"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and styled with CSS animations and smooth transitions.",
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio",
      technologies: ["React", "CSS3", "JavaScript", "Responsive"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with socket.io, featuring private messaging, group chats, and file sharing capabilities.",
      image: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Chat+App",
      technologies: ["Socket.io", "Node.js", "React", "MongoDB"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Some of my recent work and personal projects</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in working together?</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects