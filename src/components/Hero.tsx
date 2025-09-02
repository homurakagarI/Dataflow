import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import heroAbstractBg from "@/assets/hero-abstract-bg.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-float"
          style={{ backgroundImage: `url(${heroAbstractBg})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-fade-in">
              Transform your business with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
                intelligent data automation
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-balance animate-fade-in-delay-200">
              Cut costs, access data faster, and automate growth with our comprehensive platform. 
              Join 300,000+ teams already transforming their workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-fade-in-delay-300">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-primary/20"
              >
                Start building for free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group px-8 py-3 text-lg font-semibold border-2 border-border hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get a demo
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground animate-fade-in-delay-400">
              ✓ No credit card required  •  ✓ 14-day free trial  •  ✓ Cancel anytime
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last animate-fade-in-delay-500">
            <div className="relative z-10">
              <img 
                src={dashboardMockup}
                alt="DataFlow Dashboard Interface"
                className="w-full h-auto rounded-2xl shadow-custom-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-50 animate-glow" style={{ background: 'var(--gradient-glow)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;