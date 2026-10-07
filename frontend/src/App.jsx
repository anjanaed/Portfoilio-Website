import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Techs from "./components/techs";
import Educationn from "./components/education";
import Project from "./components/projects";
import Footer from "./components/footer";

const App = () => (
  <div className="pf" id="top">
    <div className="glow glow-1" aria-hidden="true" />
    <div className="glow glow-2" aria-hidden="true" />
    <div className="glow glow-3" aria-hidden="true" />
    <div className="dotgrid" aria-hidden="true" />

    <Navbar />
    <main>
      <Hero />
      {/* old sections, moving these over one by one */}
      <div className="container mx-auto px-7">
        <About />
        <Techs />
        <Educationn />
        <Project />
        <Footer />
      </div>
    </main>
  </div>
);

export default App;
