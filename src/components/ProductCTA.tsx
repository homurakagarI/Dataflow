import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, Users, Clock, Shield } from "lucide-react";

const ProductCTA = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "14-day free trial"
    },
    {
      icon: Users,
      text: "No credit card required"
    },
    {
      icon: Clock,
      text: "Setup in under 5 minutes"
    },
    {
      icon: Shield,
      text: "Enterprise-grade security"
    }
  ];

  const stats = [
    {
      number: "10x",
      label: "Faster processing"
    },
    {
      number: "99.9%",
      label: "Uptime SLA"
    },
    {
      number: "300K+",
      label: "Active users"
    },
    {
      number: "4.9/5",
      label: "User rating"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            Limited Time Offer
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              data workflows?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Join thousands of teams who have already automated their processes and 
            achieved remarkable efficiency gains. Start your journey today.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <benefit.icon className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:shadow-primary/20"
            >
              Try for free
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

          <div className="text-sm text-muted-foreground">
            Join 300,000+ users • No setup fees • Cancel anytime
          </div>
        </div>

        {/* Testimonial */}
        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-8">
            <div className="text-center">
              <blockquote className="text-lg italic text-muted-foreground mb-6">
                "This platform has completely transformed how we handle data automation. 
                What used to take our team hours now happens automatically in minutes. 
                The ROI was evident within the first month."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JS
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jessica Smith</div>
                  <div className="text-sm text-muted-foreground">VP of Operations, TechCorp</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            🔒 Your data is protected with bank-level security and SOC 2 compliance
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
