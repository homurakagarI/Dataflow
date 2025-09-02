import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Database, Building, Rocket, ArrowRight } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Target,
      title: "Marketing Teams",
      description: "Automate campaigns, score leads, and personalize outreach at scale",
      features: ["Lead scoring", "Campaign automation", "Personalization", "Analytics"],
      cta: "See Marketing Solutions"
    },
    {
      icon: Users,
      title: "Sales Teams",
      description: "Streamline prospecting, automate CRM updates, and accelerate deal closure",
      features: ["Prospect research", "CRM automation", "Pipeline optimization", "Sales sequences"],
      cta: "Explore Sales Tools"
    },
    {
      icon: Database,
      title: "Data Teams",
      description: "Build robust data pipelines, automate ETL processes, and ensure data quality",
      features: ["Data pipelines", "ETL automation", "Quality monitoring", "Integration"],
      cta: "View Data Solutions"
    },
    {
      icon: Building,
      title: "Enterprise",
      description: "Scale securely with enterprise-grade automation and compliance features",
      features: ["Enterprise security", "Compliance", "Scale", "Support"],
      cta: "Contact Enterprise Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
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

        {/* Solutions Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Solutions tailored for your team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how different teams leverage our platform to solve their unique challenges 
                and achieve remarkable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {solution.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {solution.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full group-hover:scale-105 transition-transform">
                        {solution.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <div className="text-center">
              <Card className="inline-block">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to transform your workflows?</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Join thousands of teams who have already automated their processes with our platform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" size="lg">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
