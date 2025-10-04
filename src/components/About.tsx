const About = () => {
  const skills = [
    "C++",
    "Python",
    "HTML/CSS",
    "JavaScript/TypeScript",
    "React",
    "PHP",
    "SQL",
    "Git",
  ];

  return (
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate developer with experience in creating web
            applications and solving complex problems. I love learning new
            technologies and building projects.
          </p>
          <p>
            Currently pursuing my degree in Computer Engineering, I'm constantly
            expanding my skills and knowledge in the field. I'm eager to take on
            new challenges and contribute to exciting projects.
          </p>

          <div className="skills">
            <h3>Technologies I Have Worked With:</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
