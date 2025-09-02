import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTA = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section ref={elementRef} className="section-padding">
      <div className="container-custom">
        <div className={`bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white relative overflow-hidden transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 animate-float">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="fill-current">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in-delay-200' : 'opacity-0'}`}>
              Ready to transform your workflow?
            </h2>
            <p className={`text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'animate-fade-in-delay-300' : 'opacity-0'}`}>
              Join thousands of teams already using DataFlow to automate their processes, 
              reduce costs, and accelerate growth.
            </p>
            
            <Button 
              size="lg"
              variant="secondary"
              className={`group bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 ${isVisible ? 'animate-fade-in-delay-400' : 'opacity-0'}`}
            >
              Start your free trial today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className={`mt-6 text-sm opacity-80 transition-all duration-700 ${isVisible ? 'animate-fade-in-delay-500' : 'opacity-0'}`}>
              ✓ No setup fees  •  ✓ Cancel anytime  •  ✓ 24/7 support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;