import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import StatusBar from "@/components/StatusBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// GitHubSection is an async Server Component.
// It fetches GitHub API data at request time (server-side, revalidates every hour).
// No client-side fetch = no loading dashes, no API failure flash.

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <HackathonsSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
      <StatusBar />
    </>
  );
}
