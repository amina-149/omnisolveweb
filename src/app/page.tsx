import Hero from "@/Components/Hero";
import TrustMarquee from "@/Components/TrustMarquee";
import AboutMission from "@/Components/AboutMission";
import Services from "@/Components/Services";
import CaseStudiesSection from "@/Components/CaseStudiesSection";
import PartnersRecognition from "@/Components/PartnersRecognition";
import Milestones from "@/Components/Milestones";
import CallToAction from "@/Components/CallToAction";


export default function Home() {
  return (<>
    <Hero />
    <TrustMarquee />
    <AboutMission />
    <Services />
    <CaseStudiesSection />
    <PartnersRecognition />
    <Milestones />
    <CallToAction />
    
  </>);
}
