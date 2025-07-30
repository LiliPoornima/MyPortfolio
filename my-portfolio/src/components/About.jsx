const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate developer with a love for creating innovative solutions 
              and beautiful user experiences. With a strong foundation in both frontend 
              and backend development, I enjoy tackling complex problems and turning 
              ideas into reality.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="detail-card">
              <h4>Experience</h4>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Senior Developer</h5>
                    <p>Tech Company • 2022 - Present</p>
                    <p>Leading development teams and architecting scalable solutions</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Full Stack Developer</h5>
                    <p>Startup • 2020 - 2022</p>
                    <p>Built and maintained web applications using modern technologies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="detail-card">
              <h4>Education</h4>
              <div className="education">
                <div className="education-item">
                  <h5>Bachelor's in Computer Science</h5>
                  <p>University Name • 2016 - 2020</p>
                </div>
                <div className="education-item">
                  <h5>Certifications</h5>
                  <p>AWS Certified Developer, Google Cloud Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About