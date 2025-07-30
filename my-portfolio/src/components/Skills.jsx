const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 65 },
        { name: "Linux", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>My technical expertise and tools I work with</p>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">Redux</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Jest</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Agile</span>
            <span className="skill-tag">Scrum</span>
            <span className="skill-tag">RESTful APIs</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills