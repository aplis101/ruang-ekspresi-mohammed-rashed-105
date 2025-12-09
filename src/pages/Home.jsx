import React from "react";
import HeroSection from "../components/HeroSection";
import PilarSection from "../components/PilarSection";
import JadwalSection from "../components/JadwalSection";
import ProjectShowcase from "../components/ProjectShowcase";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <section id="hero" className="py-20">
        <HeroSection />
      </section>

      <section id="pilar" className="py-20">
        <PilarSection />
      </section>

      <section id="jadwal" className="py-20">
        <JadwalSection />
      </section>

      <section id="projects" className="py-20">
        <ProjectShowcase />
      </section>

      <section id="testimonials" className="py-20">
        <Testimonials />
      </section>

      <Footer />
    </div>
  );
}
