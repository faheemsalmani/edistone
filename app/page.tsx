import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Amenities />
      <Contact />
      <Footer />
    </main>
  );
}
