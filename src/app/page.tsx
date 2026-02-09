import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Education from "@/components/Education";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <Education />
      <About />
      <Footer />
    </main>
  );
}
