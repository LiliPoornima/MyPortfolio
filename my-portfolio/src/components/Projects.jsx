import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Online Auction System",
      subtitle: "BidMaster",
      description: "Bid Master is a full-featured online auction platform built with the MERN stack, designed for real-time bidding, secure payments, and seamless item management. It features live auction updates with WebSockets, Stripe-powered transactions, role-based access control, and automated email notifications—all wrapped in a responsive, user-friendly interface.",
      image: "bidm.jpg",
      technologies: ["JavaScript", "Node.js", "React", "MongoDB","Express","JWT","Stripe"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/LiliPoornima"
    },
    {
      id: 2,
      title: "Finance Tracker",
      subtitle: "SpendMaster",
      description: "SpendMaster is a modern Android app built with Kotlin and MVVM architecture for intuitive expense tracking and financial analytics. It features a clean Material Design UI, local data storage with Room, customizable categories, and insightful visualizations. Designed with scalability and maintainability in mind, it follows modular architecture and Android development best practices, offering a fast, offline-first experience with support for unit and UI testing.",
      image: "spendm.png",
      technologies: ["Kotlin", "MVVM", "Material Design", "RoomDatabase "],
      category: ["frontend","backend"],
      liveUrl: "#",
      githubUrl: "https://github.com/LiliPoornima"
    },
    {
      id: 3,
      title: "Portfolio Website",
      subtitle: "MyPortfolio",
      description: "A sleek and modern personal portfolio website to showcase my projects, skills, and experience. Built with React and styled-components for a fast, responsive, and visually appealing user experience.",
      image: "portfolio.png",
      technologies: ["React","Vite", "JavaScript","CSS"],
      category: ["frontend","backend"],
      liveUrl: "#",
      githubUrl: "https://github.com/LiliPoornima"
    },
    {
      id: 4,
      title: "Finace Tracker",
      subtitle: "SpendMaster2",
      description: "A sleek and modern personal finance app built with Kotlin and MVVM architecture to track income, expenses, and budgets. Features interactive charts with MPAndroidChart, secure authentication, smart budget alerts, and export/import options for a fast, responsive, and visually appealing user experience.",
      image: "spendm2.png",
      technologies: ["Kotlin", "MVVM", "Material Design", "SharedPreferences "],
      category: ["frontend","backend"],
      liveUrl: "#",
      githubUrl: "https://github.com/LiliPoornima"
    },
    {
      id: 5,
      title: "Home Maintenance App",
      subtitle: "HomeRescue",
      description: "HomeRescue is a modern Android app built with Kotlin, designed to connect homeowners with professional service providers for tasks like plumbing, electrical work, cleaning, and more. Featuring secure authentication, a clean user interface, and responsive design, it offers a seamless experience for booking home services with just a few taps.",
      image: "homerescue.png",
      technologies: ["Kotlin", "XML","Gradle","Android SDK"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "https://github.com/LiliPoornima"
    },
    {
      id: 6,
      title: "Employee Management System",
      subtitle: "WorkNest",
      description: "WorkNest is a secure web-based Employee Management System built with Java Servlets, JSP, and MySQL. It features role and designation management with full CRUD operations, user authentication, and a responsive interface. Designed for clarity and scalability, WorkNest simplifies HR tasks like managing organizational roles through a clean and intuitive user experience.",
      image: "emp.jpg",
      technologies: ["Java", "Java Servlets", "MySQL", "JDBC", "JSP","HTML","CSS","Tomcat"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/LiliPoornima"
    },
    {
      id: 7,
      title: "Bus Scheduling & Ticket Booking System",
      subtitle: "RouteMaster",
      description: "RouteMaster is a web-based bus scheduling and booking system built with PHP and MySQL, designed to simplify and streamline public transportation management. It features real-time bus search, secure seat reservation, integrated payment processing, and dedicated dashboards for passengers, drivers, and administrators—all within a responsive, user-friendly interface.",
      image: "bus.png",
      technologies: ["JavaScript", "PHP", "MySQL", "Apache/XAMPP", "HTML", "CSS"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/LiliPoornima"
    },
    
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
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                {project.subtitle && <h4 className="project-subtitle">{project.subtitle}</h4>}
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
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