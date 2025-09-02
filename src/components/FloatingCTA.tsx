import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 animate-slide-in-right">
      <div className="text-center sm:text-left mb-3">
        <div className="text-sm font-medium text-foreground mb-1">
          🚀 Ready to get started?
        </div>
        <div className="text-xs text-muted-foreground">
          Join 300,000+ teams • No credit card required
        </div>
      </div>
      <Button 
        size="sm" 
        className="w-full bg-primary hover:bg-primary-hover group shadow-2xl"
      >
        <Zap className="mr-2 h-4 w-4" />
        Start Free Trial
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
