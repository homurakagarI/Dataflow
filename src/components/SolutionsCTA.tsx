import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Play, CheckCircle, Users, Clock, Shield, Zap } from "lucide-react";

const SolutionsCTA = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Setup in under 30 minutes"
    },
    {
      icon: Users,
      text: "Dedicated solution architect"
    },
    {
      icon: Shield,
      text: "Enterprise-grade security"
    },
    {
      icon: Zap,
      text: "Instant ROI tracking"
    }
  ];

  const ctaOptions = [
    {
      title: "See How It Works",
      description: "Watch a personalized demo tailored to your industry",
      icon: Play,
      action: "Get Custom Demo",
      variant: "default" as const,
      popular: true
    },
    {
      title: "Start Building Today", 
      description: "Begin with our free trial and pre-built templates",
      icon: Zap,
      action: "Start Free Trial",
      variant: "outline" as const,
      popular: false
    },
    {
      title: "Book a Consultation",
      description: "Speak with our solution experts about your specific needs",
      icon: Calendar,
      action: "Schedule Call",
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            Ready to Get Started?
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Choose the perfect solution{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              for your team
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            Whether you're looking to automate a specific process or transform your entire operation, 
            we have the right solution for you.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <benefit.icon className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${option.popular ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{option.description}</p>
                <Button 
                  variant={option.variant}
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  {option.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <Card className="inline-block bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Specific CTAs */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Or explore industry-specific solutions</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["E-commerce", "SaaS", "Healthcare", "Financial Services", "Manufacturing", "Education"].map((industry, index) => (
              <Button key={index} variant="ghost" size="sm" className="hover:bg-primary/5">
                {industry} Solutions
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
