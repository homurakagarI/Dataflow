import { 
  Users, 
  Bot, 
  Database, 
  FileText, 
  Workflow,
  Shield
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Features = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: Users,
      title: "CRM enrichment",
      description: "Automatically enrich your customer data with real-time insights and contact information."
    },
    {
      icon: Bot,
      title: "AI research agent",
      description: "Let AI handle your research tasks with intelligent data gathering and analysis."
    },
    {
      icon: Database,
      title: "Data integrations",
      description: "Connect seamlessly with 200+ data sources and third-party applications."
    },
    {
      icon: FileText,
      title: "Personalized copywriting",
      description: "Generate compelling, personalized content that resonates with your audience."
    },
    {
      icon: Workflow,
      title: "Workflow automation",
      description: "Build complex workflows with drag-and-drop simplicity and conditional logic."
    },
    {
      icon: Shield,
      title: "Enterprise security",
      description: "Bank-level security with SOC 2 compliance and end-to-end encryption."
    }
  ];

  return (
    <section ref={elementRef} className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-50" style={{ background: 'var(--gradient-secondary)' }} />
      
      <div className="container-custom relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful features for modern teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline operations, boost productivity, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-card border border-border rounded-xl p-6 hover:shadow-custom-lg hover:-translate-y-2 transition-all duration-500 group cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;