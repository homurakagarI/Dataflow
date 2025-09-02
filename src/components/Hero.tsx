import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, Users, Clock, CreditCard } from "lucide-react";
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
            {/* Trust Badge */}
              
            
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-fade-in">
              Transform your business with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
                intelligent data automation
              </span>
            </h1>
            
            {/* Enhanced Value Proposition */}
            <div className="">
              <p className="text-lg sm:text-xl font-semibold text-foreground mb-4 text-balance">
                Cut costs, access data faster, and automate growth with our comprehensive platform.
              </p>
              <p className="text-base text-black-foreground text-balance mb-8">
                Join 300,000+ teams already transforming their workflows with intelligent automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-fade-in-delay-300">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-primary/20"
              >
                Start building for free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group px-8 py-4 text-lg font-semibold border-2 border-border hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get a demo
              </Button>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="animate-fade-in-delay-500">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2 text-black-600 font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-black-600 font-medium">
                  <Clock className="h-4 w-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2 text-black-600 font-medium">
                  <CreditCard className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
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