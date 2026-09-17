import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-[100dvh]">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
