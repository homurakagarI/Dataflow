import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, TrendingUp, Users, Clock, DollarSign, Star } from "lucide-react";

const IndustryCaseStudies = () => {
  const caseStudies = [
    {
      industry: "E-commerce",
      company: "RetailFlow Inc.",
      logo: "🛒",
      size: "Series B Startup",
      challenge: "Manual order processing and inventory management causing delays and errors",
      solution: "Automated order-to-fulfillment pipeline with real-time inventory tracking",
      results: [
        { metric: "Order Processing Time", improvement: "-75%", icon: Clock },
        { metric: "Inventory Accuracy", improvement: "+99.2%", icon: TrendingUp },
        { metric: "Customer Satisfaction", improvement: "+45%", icon: Users },
        { metric: "Operational Costs", improvement: "-60%", icon: DollarSign }
      ],
      testimonial: {
        quote: "This platform transformed our entire fulfillment process. What used to take hours now happens in minutes, and our accuracy has never been better.",
        author: "Sarah Chen",
        role: "VP of Operations",
        rating: 5
      },
      tags: ["E-commerce", "Inventory Management", "Order Processing"]
    },
    {
      industry: "SaaS",
      company: "CloudTech Solutions",
      logo: "☁️",
      size: "Fortune 500",
      challenge: "Fragmented customer data across multiple platforms affecting support quality",
      solution: "Unified customer data platform with automated support ticket routing",
      results: [
        { metric: "Data Unification", improvement: "100%", icon: TrendingUp },
        { metric: "Support Response Time", improvement: "-65%", icon: Clock },
        { metric: "Customer Retention", improvement: "+28%", icon: Users },
        { metric: "Support Team Efficiency", improvement: "+150%", icon: DollarSign }
      ],
      testimonial: {
        quote: "Having all our customer data in one place with automated workflows has revolutionized our support operations. Our team can now focus on solving complex problems instead of hunting for information.",
        author: "Michael Rodriguez",
        role: "Head of Customer Success",
        rating: 5
      },
      tags: ["SaaS", "Customer Support", "Data Integration"]
    },
    {
      industry: "Financial Services",
      company: "FinSecure Bank",
      logo: "🏦",
      size: "Regional Bank",
      challenge: "Compliance reporting taking weeks to compile with risk of human error",
      solution: "Automated compliance reporting with real-time risk monitoring",
      results: [
        { metric: "Reporting Time", improvement: "-90%", icon: Clock },
        { metric: "Compliance Accuracy", improvement: "+99.9%", icon: TrendingUp },
        { metric: "Risk Detection", improvement: "+200%", icon: Users },
        { metric: "Regulatory Costs", improvement: "-40%", icon: DollarSign }
      ],
      testimonial: {
        quote: "The automated compliance reporting has been a game-changer for us. We've reduced our reporting cycle from weeks to hours while significantly improving accuracy.",
        author: "Jennifer Park",
        role: "Chief Compliance Officer",
        rating: 5
      },
      tags: ["Financial Services", "Compliance", "Risk Management"]
    },
    {
      industry: "Healthcare",
      company: "MedFlow Systems",
      logo: "🏥",
      size: "Healthcare Network",
      challenge: "Patient data silos affecting care coordination and treatment outcomes",
      solution: "Integrated patient data platform with automated care workflows",
      results: [
        { metric: "Care Coordination", improvement: "+85%", icon: Users },
        { metric: "Treatment Speed", improvement: "-50%", icon: Clock },
        { metric: "Patient Satisfaction", improvement: "+40%", icon: TrendingUp },
        { metric: "Administrative Costs", improvement: "-35%", icon: DollarSign }
      ],
      testimonial: {
        quote: "Our patient care has improved dramatically with automated workflows and unified data. Doctors now have complete patient histories at their fingertips.",
        author: "Dr. Amanda Foster",
        role: "Chief Medical Officer",
        rating: 5
      },
      tags: ["Healthcare", "Patient Care", "Data Integration"]
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real results from real companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how organizations across different industries have transformed their operations 
            and achieved measurable success with our platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{study.logo}</div>
                    <div>
                      <CardTitle className="text-lg">{study.company}</CardTitle>
                      <CardDescription>{study.size} • {study.industry}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{study.industry}</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-red-600 mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Results Grid */}
                <div>
                  <h4 className="font-medium mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <result.icon className="h-4 w-4 text-primary" />
                          <span className="text-lg font-bold text-primary">
                            {result.improvement}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <blockquote className="text-sm italic mb-3">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{study.testimonial.author}</div>
                          <div className="text-xs text-muted-foreground">{study.testimonial.role}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(study.testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Full Case Study
                  </Button>
                  <Button size="sm" className="flex-1">
                    Book a Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-3">Ready to write your success story?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join hundreds of companies that have transformed their operations with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg">
                  Start Your Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustryCaseStudies;
