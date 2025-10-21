import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 David Zheng. All rights reserved.</p>
          <div className="social-links">
            <a
              id="footer-github"
              href="https://github.com/davidzhengc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="btn-icon" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/david-zheng-2b4a1428b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="btn-icon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
