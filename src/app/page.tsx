import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import GlobalReach from "@/components/sections/GlobalReach";
import ClientLogos from "@/components/sections/ClientLogos";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GlobalReach />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
