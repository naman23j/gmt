import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubHero from './components/SubHero';
import ServicesGrid from './components/ServicesGrid';
import QuoteBanner from './components/QuoteBanner';
import ExpertiseGrid from './components/ExpertiseGrid';
import AboutMaya from './components/AboutMaya';
import SpecialtyCards from './components/SpecialtyCards';
import OurOffice from './components/OurOffice';
import FaqSection from './components/FaqSection';
import ScheduleCTA from './components/ScheduleCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 selection:bg-terracotta-100 selection:text-terracotta-600">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SubHero />
        <ServicesGrid />
        <QuoteBanner />
        <ExpertiseGrid />
        <AboutMaya />
        <SpecialtyCards />
        <OurOffice />
        <FaqSection />
        <ScheduleCTA />
      </main>
      <Footer />
    </div>
  );
}
