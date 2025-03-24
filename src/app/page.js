import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";

export default function Page() {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>

    </>
  );
}
