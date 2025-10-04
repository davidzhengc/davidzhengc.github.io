import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <Typewriter
            options={{
              strings: [`Hi, I'm <span class="highlight"> David Zheng</span>`],
              wrapperClassName: "hero-title",
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
            }}
          ></Typewriter>
          <p className="hero-subtitle">
            Computer Engineering Student at Universitat Autònoma de Barcelona
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
