import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Creative Thinker"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="animated-text">{texts[currentText]}</span>
            </h2>
            <p className="hero-description">
              Passionate about creating innovative solutions and beautiful user experiences. 
              I love turning ideas into reality through code and design.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Your Name</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero