import IntroSection from "@/components/ui/intro-section";
import AboutSection from "@/components/ui/about-section";
import ProjectsSection from "@/components/ui/projects-section";
import Footer from "@/components/ui/footer";
import TopNavigation from "@/components/ui/top-navigation";
import Container from "@/components/ui/container";

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
