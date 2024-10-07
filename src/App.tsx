import "./App.css";

import Certificates from "./Sections/Certificates";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Sections/Projects";
import AboutMe from "./Sections/AboutMe";

function App() {
  return (
    <div className="App w-screen m-0">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
