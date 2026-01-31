import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { MacbookScrollDemo } from "@/components/sections/MacbookDemo";
import GlobalReach from "@/components/sections/GlobalReach";
import ClientLogos from "@/components/sections/ClientLogos";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <MacbookScrollDemo />
                <Services />
                <GlobalReach />
                <ClientLogos />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
