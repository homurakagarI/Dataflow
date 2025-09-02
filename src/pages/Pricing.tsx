import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { 
  CheckCircle,
  X,
  ArrowRight,
  Star,
  Users,
  Building,
  Zap,
  Shield,
  Phone,
  Calendar,
  Mail,
  CreditCard,
  HelpCircle,
  TrendingUp,
  Lock,
  Settings,
  BarChart3,
  HeadphonesIcon,
  Globe,
  Database,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers = [
    {
      name: "Free",
      description: "Perfect for individuals and small teams getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      badge: null,
      features: [
        "Up to 1,000 operations/month",
        "5 active workflows",
        "Basic templates",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "Community access"
      ],
      limitations: [
        "Limited to 2 team members",
        "Basic support only",
        "Standard security",
        "Community support"
      ],
      cta: "Start Free",
      ctaVariant: "outline" as const,
      popular: false,
      icon: Sparkles
    },
    {
      name: "Pro",
      description: "Advanced features for growing businesses and teams",
      monthlyPrice: 49,
      annualPrice: 39,
      badge: "Most Popular",
      features: [
        "Up to 100,000 operations/month",
        "Unlimited active workflows",
        "Premium templates",
        "Priority email & chat support",
        "Advanced integrations",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "Custom connectors",
        "Workflow scheduling",
        "Data transformation tools"
      ],
      limitations: [],
      cta: "Start Free Trial",
      ctaVariant: "default" as const,
      popular: true,
      icon: TrendingUp
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations with advanced needs",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      badge: "Contact Sales",
      features: [
        "Unlimited operations",
        "Unlimited workflows",
        "White-label solution",
        "24/7 phone & email support",
        "All integrations included",
        "Advanced analytics & BI",
        "Dedicated customer success manager",
        "Custom integrations",
        "Advanced workflow engine",
        "Enterprise data tools",
        "SOC 2 compliance",
        "SSO & advanced security",
        "On-premise deployment options",
        "SLA guarantees",
        "Training & onboarding"
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
      popular: false,
      icon: Building
    }
  ];

  const featureComparison = [
    {
      category: "Usage & Limits",
      features: [
        { name: "Operations per month", free: "1,000", pro: "100,000", enterprise: "Unlimited" },
        { name: "Active workflows", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Team members", free: "2", pro: "25", enterprise: "Unlimited" },
        { name: "Data retention", free: "30 days", pro: "1 year", enterprise: "Unlimited" }
      ]
    },
    {
      category: "Features & Capabilities",
      features: [
        { name: "Workflow templates", free: "Basic", pro: "Premium", enterprise: "All + Custom" },
        { name: "Custom connectors", free: false, pro: true, enterprise: true },
        { name: "Advanced scheduling", free: false, pro: true, enterprise: true },
        { name: "Conditional logic", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
        { name: "Data transformation", free: false, pro: true, enterprise: true },
        { name: "Error handling", free: "Basic", pro: "Advanced", enterprise: "Advanced" }
      ]
    },
    {
      category: "Security & Compliance",
      features: [
        { name: "SSL encryption", free: true, pro: true, enterprise: true },
        { name: "SOC 2 compliance", free: false, pro: false, enterprise: true },
        { name: "SSO integration", free: false, pro: false, enterprise: true },
        { name: "Advanced access controls", free: false, pro: "Basic", enterprise: "Advanced" },
        { name: "Audit logs", free: false, pro: "Basic", enterprise: "Advanced" },
        { name: "Data residency options", free: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Support & Services",
      features: [
        { name: "Email support", free: true, pro: true, enterprise: true },
        { name: "Chat support", free: false, pro: true, enterprise: true },
        { name: "Phone support", free: false, pro: false, enterprise: true },
        { name: "Dedicated CSM", free: false, pro: false, enterprise: true },
        { name: "Implementation support", free: false, pro: false, enterprise: true },
        { name: "Training & onboarding", free: false, pro: false, enterprise: true }
      ]
    }
  ];

  const faqItems = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. If you downgrade, you'll retain access to premium features until your current billing period ends."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our PCI-compliant payment system."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! Our Free plan gives you full access to core features with usage limits. For Pro features, we offer a 14-day free trial with no credit card required. Enterprise customers can request a custom trial period."
    },
    {
      question: "How does annual billing work?",
      answer: "Annual billing provides up to 20% savings compared to monthly billing. You'll be charged once per year and receive the full discount immediately. You can switch between monthly and annual billing at any time."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you approach your limits. For operations, we provide a small buffer before any restrictions. You can upgrade at any time to increase your limits, or we'll help you optimize your workflows to stay within bounds."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied for any reason, contact us within 30 days of your initial purchase for a full refund. No questions asked."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your current billing period, then automatically transition to the Free plan."
    },
    {
      question: "Are there any setup fees or hidden costs?",
      answer: "No hidden fees, ever. The price you see is what you pay. Enterprise plans may include optional implementation services, but these are clearly outlined in your custom quote with no surprises."
    },
    {
      question: "Do you offer discounts for nonprofits or education?",
      answer: "Yes! We offer 50% discounts for qualified nonprofits, educational institutions, and open-source projects. Contact our sales team with your organization details to apply for these special rates."
    },
    {
      question: "How secure is my payment information?",
      answer: "Your payment information is completely secure. We use industry-standard encryption and are PCI DSS compliant. We never store your full credit card information - all payments are processed through our secure payment partners."
    }
  ];

  const getPrice = (tier) => {
    if (typeof tier.monthlyPrice === 'string') return tier.monthlyPrice;
    const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
    return price === 0 ? 'Free' : `$${price}`;
  };

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />;
    } else if (value === false) {
      return <X className="h-4 w-4 text-red-500 mx-auto" />;
    } else {
      return <span className="text-sm text-center">{value}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-muted/10 to-primary/5">
          <div className="container-custom">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6">
                Simple, Transparent Pricing
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Choose the perfect{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  plan for your team
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
                Start free and scale as you grow. No hidden fees, no surprises. 
                Switch plans anytime with flexible monthly or annual billing.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <Label htmlFor="billing-toggle" className={`font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </Label>
                <Switch
                  id="billing-toggle"
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                />
                <Label htmlFor="billing-toggle" className={`font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annual
                </Label>
                {isAnnual && (
                  <Badge variant="secondary" className="ml-2">
                    Save up to 20%
                  </Badge>
                )}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'border-primary shadow-lg scale-105' : 'hover:-translate-y-2'
                }`}>
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className={tier.popular ? 'bg-primary' : 'bg-accent'}>
                        {tier.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <tier.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-foreground mb-2">
                        {getPrice(tier)}
                        {typeof tier.monthlyPrice === 'number' && tier.monthlyPrice > 0 && (
                          <span className="text-lg font-normal text-muted-foreground">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        )}
                      </div>
                      {isAnnual && typeof tier.monthlyPrice === 'number' && tier.monthlyPrice > 0 && (
                        <div className="text-sm text-muted-foreground">
                          ${tier.monthlyPrice}/month billed annually
                        </div>
                      )}
                    </div>

                    <Button 
                      className={`w-full mb-6 ${tier.popular ? 'bg-primary hover:bg-primary-hover' : ''}`}
                      variant={tier.ctaVariant}
                      size="lg"
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="space-y-3 text-left">
                      <div className="font-semibold text-sm text-foreground mb-3">
                        Everything in {tier.name}:
                      </div>
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {tier.limitations.length > 0 && (
                        <>
                          <div className="border-t pt-3 mt-4">
                            <div className="font-semibold text-sm text-muted-foreground mb-3">
                              Limitations:
                            </div>
                            {tier.limitations.map((limitation, limitIndex) => (
                              <div key={limitIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>{limitation}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Need something custom? We'll work with you to find the perfect solution.
              </p>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Talk to Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Compare all features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See exactly what's included in each plan with our detailed feature comparison.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-64">Feature</TableHead>
                      <TableHead className="text-center min-w-32">
                        <div className="flex flex-col items-center gap-2">
                          <Sparkles className="h-5 w-5" />
                          <div className="font-semibold">Free</div>
                        </div>
                      </TableHead>
                      <TableHead className="text-center min-w-32">
                        <div className="flex flex-col items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          <div className="font-semibold">Pro</div>
                          <Badge variant="secondary" className="text-xs">Popular</Badge>
                        </div>
                      </TableHead>
                      <TableHead className="text-center min-w-32">
                        <div className="flex flex-col items-center gap-2">
                          <Building className="h-5 w-5" />
                          <div className="font-semibold">Enterprise</div>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {featureComparison.map((category, categoryIndex) => (
                      <>
                        <TableRow key={`category-${categoryIndex}`} className="bg-muted/50">
                          <TableCell colSpan={4} className="font-semibold py-3">
                            {category.category}
                          </TableCell>
                        </TableRow>
                        {category.features.map((feature, featureIndex) => (
                          <TableRow key={`feature-${categoryIndex}-${featureIndex}`}>
                            <TableCell className="font-medium">{feature.name}</TableCell>
                            <TableCell className="text-center">
                              {renderFeatureValue(feature.free)}
                            </TableCell>
                            <TableCell className="text-center">
                              {renderFeatureValue(feature.pro)}
                            </TableCell>
                            <TableCell className="text-center">
                              {renderFeatureValue(feature.enterprise)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about pricing, billing, and subscriptions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-semibold">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to get started?
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                Join thousands of teams who trust DataFlow to automate their workflows. 
                Start free and upgrade when you're ready.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold">
                  <Star className="mr-2 h-5 w-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Sales
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
