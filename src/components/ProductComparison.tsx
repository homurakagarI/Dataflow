import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Check, X, Star, Crown, Zap } from "lucide-react";

const ProductComparison = () => {
  const competitors = [
    {
      name: "Our Platform",
      logo: "🚀",
      pricing: "$49/month",
      badge: "Recommended",
      badgeVariant: "default" as const,
      highlight: true
    },
    {
      name: "Zapier",
      logo: "⚡",
      pricing: "$73/month",
      badge: "Popular",
      badgeVariant: "secondary" as const,
      highlight: false
    },
    {
      name: "Microsoft Power Automate",
      logo: "🏢",
      pricing: "$99/month",
      badge: "Enterprise",
      badgeVariant: "outline" as const,
      highlight: false
    },
    {
      name: "Integromat (Make)",
      logo: "🔧",
      pricing: "$79/month",
      badge: null,
      badgeVariant: "secondary" as const,
      highlight: false
    }
  ];

  const features = [
    {
      category: "Core Features",
      items: [
        {
          name: "Visual Workflow Builder",
          ours: true,
          zapier: true,
          powerAutomate: true,
          integromat: true
        },
        {
          name: "AI Research Agent",
          ours: true,
          zapier: false,
          powerAutomate: false,
          integromat: false
        },
        {
          name: "Real-time Data Sync",
          ours: true,
          zapier: "limited",
          powerAutomate: true,
          integromat: "limited"
        },
        {
          name: "Custom API Integrations",
          ours: true,
          zapier: true,
          powerAutomate: "limited",
          integromat: true
        }
      ]
    },
    {
      category: "Data & Analytics",
      items: [
        {
          name: "Built-in Data Warehouse",
          ours: true,
          zapier: false,
          powerAutomate: false,
          integromat: false
        },
        {
          name: "Advanced Analytics Dashboard",
          ours: true,
          zapier: false,
          powerAutomate: "limited",
          integromat: false
        },
        {
          name: "ML-Powered Insights",
          ours: true,
          zapier: false,
          powerAutomate: false,
          integromat: false
        },
        {
          name: "Custom Reporting",
          ours: true,
          zapier: "limited",
          powerAutomate: true,
          integromat: "limited"
        }
      ]
    },
    {
      category: "Enterprise Features",
      items: [
        {
          name: "SOC 2 Compliance",
          ours: true,
          zapier: true,
          powerAutomate: true,
          integromat: "limited"
        },
        {
          name: "SSO & Advanced Security",
          ours: true,
          zapier: "enterprise",
          powerAutomate: true,
          integromat: "enterprise"
        },
        {
          name: "Dedicated Support",
          ours: true,
          zapier: "enterprise",
          powerAutomate: "enterprise",
          integromat: "enterprise"
        },
        {
          name: "SLA Guarantee",
          ours: "99.9%",
          zapier: "99.5%",
          powerAutomate: "99.9%",
          integromat: "99.0%"
        }
      ]
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-4 w-4 text-green-500" />;
    } else if (value === false) {
      return <X className="h-4 w-4 text-red-500" />;
    } else if (value === "limited") {
      return <span className="text-yellow-600 text-xs">Limited</span>;
    } else if (value === "enterprise") {
      return <span className="text-blue-600 text-xs">Enterprise</span>;
    } else {
      return <span className="text-xs">{value}</span>;
    }
  };

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Comparison
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How we compare to the competition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why leading companies choose our platform over alternatives. 
            Compare features, pricing, and capabilities side by side.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-2xl font-bold">4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">User satisfaction rating</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Zap className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold">10x</span>
              </div>
              <p className="text-sm text-muted-foreground">Faster than manual processes</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Crown className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold">300K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Active users worldwide</p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">Feature Comparison</CardTitle>
            <CardDescription>
              Detailed comparison of key features and capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-64 sticky left-0 bg-background">Feature</TableHead>
                    {competitors.map((competitor, index) => (
                      <TableHead key={index} className="text-center min-w-40">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{competitor.logo}</span>
                            <div>
                              <div className="font-semibold text-sm">{competitor.name}</div>
                              <div className="text-xs text-muted-foreground">{competitor.pricing}</div>
                            </div>
                          </div>
                          {competitor.badge && (
                            <Badge variant={competitor.badgeVariant} className="text-xs">
                              {competitor.badge}
                            </Badge>
                          )}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((category, categoryIndex) => (
                    <>
                      <TableRow key={`category-${categoryIndex}`}>
                        <TableCell 
                          colSpan={5} 
                          className="sticky left-0 bg-muted/50 font-semibold text-sm py-3"
                        >
                          {category.category}
                        </TableCell>
                      </TableRow>
                      {category.items.map((feature, featureIndex) => (
                        <TableRow key={`feature-${categoryIndex}-${featureIndex}`}>
                          <TableCell className="sticky left-0 bg-background font-medium">
                            {feature.name}
                          </TableCell>
                          <TableCell className="text-center">
                            {renderFeatureValue(feature.ours)}
                          </TableCell>
                          <TableCell className="text-center">
                            {renderFeatureValue(feature.zapier)}
                          </TableCell>
                          <TableCell className="text-center">
                            {renderFeatureValue(feature.powerAutomate)}
                          </TableCell>
                          <TableCell className="text-center">
                            {renderFeatureValue(feature.integromat)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-3">Ready to make the switch?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join thousands of teams who have already upgraded their automation workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  Compare Plans
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
