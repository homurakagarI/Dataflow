import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Building, Zap, Target } from "lucide-react";

const SolutionsHero = () => {
  const solutions = [
    {
      icon: Target,
      title: "Marketing Teams",
      description: "Automate campaigns and lead scoring"
    },
    {
      icon: Users,
      title: "Sales Teams", 
      description: "Streamline CRM and prospect research"
    },
    {
      icon: Zap,
      title: "Data Teams",
      description: "Build powerful data pipelines"
    },
    {
      icon: Building,
      title: "Enterprises",
      description: "Scale operations securely"
    }
  ];

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-background via-muted/10 to-primary/5">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            Solutions for Every Team
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Transform your workflows with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              tailored solutions
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            Discover how teams across different industries and functions use our platform 
            to automate processes, enhance productivity, and drive growth.
          </p>

          {/* Quick Solutions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-lg font-semibold"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
