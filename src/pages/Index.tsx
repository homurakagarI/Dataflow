import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <Features />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;