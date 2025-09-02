import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Award, Zap } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const ProductHero = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Rated 4.9/5 by 10,000+ users</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-fade-in">
              The complete{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                data automation
              </span>{" "}
              platform
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
              Build powerful workflows, automate data enrichment, and scale your operations with our 
              enterprise-grade platform trusted by Fortune 500 companies.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span>10x faster processing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-primary" />
                <span>99.9% uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-primary" />
                <span>SOC 2 compliant</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Try for free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group px-8 py-3 text-lg font-semibold border-2 border-border hover:border-primary/50 hover:bg-primary/5"
              >
                <Play className="mr-2 h-5 w-5" />
                Get a demo
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              ✓ No credit card required  •  ✓ 14-day free trial  •  ✓ Enterprise support
            </div>
          </div>

          {/* Product Images */}
          <div className="relative lg:order-last">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                  <img 
                    src={dashboardMockup}
                    alt="Analytics Dashboard"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                  <div className="h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Workflow Builder</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                  <div className="h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Data Integrations</span>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                  <div className="h-20 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">AI Assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
