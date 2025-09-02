import { TrendingDown, Zap, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Benefits = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const benefits = [
    {
      icon: TrendingDown,
      title: "Cut costs",
      description: "Reduce operational expenses by up to 60% with automated workflows and intelligent resource optimization."
    },
    {
      icon: Zap,
      title: "Access data faster",
      description: "Get real-time insights in seconds, not hours, with our lightning-fast data processing engine."
    },
    {
      icon: TrendingUp,
      title: "Automate growth",
      description: "Scale your business effortlessly with AI-powered automation that adapts to your growing needs."
    }
  ];

  return (
    <section ref={elementRef} className="section-padding">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why choose DataFlow?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business operations with our comprehensive suite of intelligent tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`text-center group hover:scale-105 transition-all duration-500 cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${index * 200}ms` : '0ms' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;