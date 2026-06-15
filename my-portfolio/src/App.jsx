import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg-base text-text-primary font-body">
      <BackgroundEffect />
      <CursorGlow />
      
      <div className="relative z-20">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;