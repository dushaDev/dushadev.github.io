"use client";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Learn from "@/components/Learn/Learn";

export default function Page() {
  return (
    //globalBackground
    <>
      <div className="overflow-x-hidden grid grid-cols-1 gap-10">
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
        <section id="learn">
          <Learn/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
