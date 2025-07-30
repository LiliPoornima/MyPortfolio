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
              I'm a passionate full-stack developer with a strong interest in data science. I specialize in both frontend and backend development, crafting clean, responsive, and user-friendly applications. I love solving real-world problems with code and bringing ideas to life through thoughtful design and functionality.
            </p>
            <p>
              When I'm not coding, I spend time exploring new technologies, contributing to open-source projects, and sharing knowledge within the developer community. I also engage in civil engineering–related work during my free time, combining my technical skills with real-world applications. I believe in continuous learning and always stay up-to-date with the latest industry trends.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>3+
                </h4>
                <p>Years Learning</p>
              </div>
              <div className="stat">
                <h4>6+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Happy Groups</p>
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
                    <h5>Group Projects – Full Stack Developer</h5>
    <p>Academic Work • Ongoing</p>
    <p>Collaborated with team members to build functional full-stack applications, practicing Agile methodologies and version control tools like Git.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Individual Projects – Full Stack Developer</h5>
    <p>Academic Work • Ongoing</p>
    <p>Independently developed responsive and interactive web applications, focusing on both UI/UX and backend logic using technologies such as React, Node.js, and MySQL.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="detail-card">
              <h4>Education</h4>
              <div className="education">
                <div className="education-item">
                  <h5>Undergraduate in Bsc Honours in Information Technology Specialized in Data Science</h5>
                  <p>Sri Lanka Institute of Information Technology • 2023 - 2027</p>
                </div>
              
                <div className="education-item">
                  <h5>Undergraduate in Bsc Honours in Engineering Specialized in Civil Engineering</h5>
                  <p>Open University of Sri Lanka • 2022 - 2027</p>
                </div>
                <div className="education-item">
                  <h5>National Certificate in Engineering Draughtsmanship</h5>
                  <p>Department of Technical Education and Training • 2021 - 2022</p>
                </div>
                <div className="education-item">

                  <h5>Certifications</h5>
                  <p>IBM Certified Developer, Python for Data Science, AI & Development</p>
                  <p>National Certification in Professional English</p>
                  <p>IBM Certified Developer, Python for Data Science, AI & Development</p>
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