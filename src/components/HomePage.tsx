import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Education from '@/components/Education';
import About from '@/components/About';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <Team />
      <Education />
      <About />
    </main>
  );
}
