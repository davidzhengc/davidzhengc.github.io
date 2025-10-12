import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gamer Planet",
    description: "A full-stack e-commerce platform with user authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "PostgreSQL"],
    github: "https://github.com/davidzhengc/tdiw-project",
    image: "/main_page.jpg",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe Web App",
    description:
      "A modern, interactive Tic Tac Toe game built with React and TypeScript.",
    technologies: ["React", "Typescript", "CSS"],
    github: "https://github.com/davidzhengc/tic-tac-toe-react",
    demo: "https://tic-tac-toe-react-dz.vercel.app/",
    image: "/tictactoe.png",
  },
  {
    id: 3,
    title: "Kaggle Case Study",
    description:
      "Machine Learning model that predicts League of Legends match outcomes using game statistics",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    github:
      "https://github.com/jimlin829/Cas-Kaggle-League-of-Legends-Diamond-Ranked-Games",
    image: "/kaggle.png",
  },

  {
    id: 4,
    title: "CalcUABlator",
    description:
      "A robot capable of doing mathematical operations using Computer Vision and a robotic arm.",
    technologies: ["Python", "C++"],
    github: "https://github.com/davidzhengc/CalcUABlator",
    image: "/calcUABlator.png",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-text">
          Here are some of the projects I've worked on.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github"
                  >
                    <FaGithub className="btn-icon" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-demo"
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
