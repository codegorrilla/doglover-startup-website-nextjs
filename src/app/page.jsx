import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
