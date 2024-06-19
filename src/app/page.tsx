import Image from "next/image";
import {Hero} from "@/app/components/Hero";
import {Navbar} from "@/app/components/Navbar";
import {AboutSection} from "@/app/components/AboutSection";
import {ProjectsSection} from "@/app/components/ProjectsSection";
import {ContactSection} from "@/app/components/GetInTouchSection";
import {Footer} from "@/app/components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar/>
            <div className="container mt-24 mx-auto px-10 py-4">
                <Hero/>
                <AboutSection/>
                <ProjectsSection />
                <ContactSection/>
                <Footer/>
            </div>
        </main>
    );
}
