import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Journey from "./components/journey";
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
      <Profile />
      <Projects />
      <Journey />
      {/* old sections, moving these over one by one */}
      <div className="container mx-auto px-7">
        <Footer />
      </div>
    </main>
  </div>
);

export default App;
