import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects"></section>
      <Footer />
    </div>
  );
}

export default App;
