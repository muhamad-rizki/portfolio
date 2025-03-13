import AboutSection from "@/components/ui/about-section";
import Container from "@/components/ui/container";
import IntroSection from "@/components/ui/intro-section";
import ProjectsSection from "@/components/ui/projects-section";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Container>
        <div className="relative">
          <div className="relative">
            <section id="intro">
              <IntroSection />
            </section>
            <section id="about">
              <AboutSection />
            </section>
            <section id="projects">
              <ProjectsSection />
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
