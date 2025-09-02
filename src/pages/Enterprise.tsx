import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../components/ui/table";
import { 
  Shield, 
  Scale, 
  Lock, 
  Users, 
  Building, 
  CheckCircle,
  X,
  ArrowRight,
  Phone,
  Calendar,
  Mail,
  Star,
  Quote,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Database,
  Settings,
  BarChart3,
  FileCheck,
  HeadphonesIcon,
  Clock
} from "lucide-react";

const Enterprise = () => {
  const enterpriseBenefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliance, SSO integration, end-to-end encryption, and advanced threat protection.",
      features: ["Multi-factor authentication", "Role-based access control", "Audit logging", "Data residency options"]
    },
    {
      icon: Scale,
      title: "Unlimited Scalability",
      description: "Handle millions of operations with auto-scaling infrastructure and dedicated resources.",
      features: ["Auto-scaling workflows", "Dedicated infrastructure", "99.99% uptime SLA", "Global data centers"]
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Built-in compliance frameworks for GDPR, HIPAA, SOX, and industry-specific regulations.",
      features: ["GDPR compliance", "HIPAA ready", "SOX controls", "Industry certifications"]
    },
    {
      icon: HeadphonesIcon,
      title: "Premium Support",
      description: "24/7 dedicated support, customer success manager, and priority response times.",
      features: ["24/7 phone support", "Dedicated CSM", "Priority tickets", "Implementation assistance"]
    }
  ];

  const featureComparison = {
    categories: [
      {
        name: "Core Platform",
        features: [
          { name: "Workflow Builder", smb: true, enterprise: true },
          { name: "Pre-built Templates", smb: "50+", enterprise: "200+" },
          { name: "API Calls per Month", smb: "100K", enterprise: "Unlimited" },
          { name: "Data Retention", smb: "90 days", enterprise: "Unlimited" }
        ]
      },
      {
        name: "Security & Compliance",
        features: [
          { name: "SOC 2 Compliance", smb: false, enterprise: true },
          { name: "SSO Integration", smb: false, enterprise: true },
          { name: "Advanced Encryption", smb: "Standard", enterprise: "Advanced" },
          { name: "Audit Logs", smb: "Basic", enterprise: "Advanced" }
        ]
      },
      {
        name: "Administration",
        features: [
          { name: "User Management", smb: "Basic", enterprise: "Advanced" },
          { name: "Role-based Access", smb: false, enterprise: true },
          { name: "Team Workspaces", smb: "3", enterprise: "Unlimited" },
          { name: "Custom Branding", smb: false, enterprise: true }
        ]
      },
      {
        name: "Support & Services",
        features: [
          { name: "Email Support", smb: true, enterprise: true },
          { name: "Phone Support", smb: false, enterprise: true },
          { name: "Dedicated CSM", smb: false, enterprise: true },
          { name: "Implementation Support", smb: false, enterprise: true }
        ]
      }
    ]
  };

  const caseStudies = [
    {
      company: "Global Financial Services Corp",
      industry: "Financial Services",
      logo: "🏦",
      employees: "50,000+",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format",
      challenge: "Manual compliance reporting across 40+ countries was taking weeks and prone to errors, creating regulatory risks.",
      solution: "Implemented automated compliance workflows with real-time monitoring and cross-border data governance.",
      results: [
        { metric: "Reporting Time", value: "-95%", icon: Clock },
        { metric: "Compliance Accuracy", value: "99.9%", icon: CheckCircle },
        { metric: "Regulatory Risk", value: "-80%", icon: Shield },
        { metric: "Operational Cost", value: "-60%", icon: TrendingUp }
      ],
      testimonial: {
        quote: "The platform transformed our compliance operations. What used to take our team weeks now happens automatically in hours, with complete audit trails and zero compliance issues.",
        author: "Chief Compliance Officer",
        company: "Global Financial Services Corp"
      }
    },
    {
      company: "Healthcare Network International",
      industry: "Healthcare",
      logo: "🏥",
      employees: "25,000+",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop&auto=format",
      challenge: "Patient data scattered across multiple systems, making care coordination difficult and HIPAA compliance complex.",
      solution: "Built unified patient data platform with automated workflows and HIPAA-compliant data processing.",
      results: [
        { metric: "Care Coordination", value: "+75%", icon: Users },
        { metric: "Data Processing Speed", value: "10x faster", icon: Zap },
        { metric: "HIPAA Violations", value: "Zero", icon: Shield },
        { metric: "Patient Satisfaction", value: "+45%", icon: Star }
      ],
      testimonial: {
        quote: "Our patient outcomes have improved dramatically with unified data and automated care workflows. The HIPAA compliance features give us complete peace of mind.",
        author: "Chief Medical Officer",
        company: "Healthcare Network International"
      }
    },
    {
      company: "Manufacturing Solutions Inc",
      industry: "Manufacturing",
      logo: "🏭",
      employees: "15,000+",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&auto=format",
      challenge: "Supply chain disruptions and manual inventory management causing production delays and excess costs.",
      solution: "Automated supply chain orchestration with real-time inventory tracking and predictive analytics.",
      results: [
        { metric: "Production Efficiency", value: "+40%", icon: BarChart3 },
        { metric: "Inventory Costs", value: "-35%", icon: TrendingUp },
        { metric: "Supply Chain Visibility", value: "100%", icon: Globe },
        { metric: "Delivery Performance", value: "+60%", icon: CheckCircle }
      ],
      testimonial: {
        quote: "The automated supply chain workflows have revolutionized our operations. We now have complete visibility and can predict and prevent disruptions before they impact production.",
        author: "VP of Operations",
        company: "Manufacturing Solutions Inc"
      }
    }
  ];

  const integrationPartners = [
    {
      category: "CRM & Sales",
      partners: [
        { name: "Salesforce", logo: "☁️", description: "Complete CRM integration with real-time sync" },
        { name: "HubSpot", logo: "🧡", description: "Marketing automation and lead management" },
        { name: "Microsoft Dynamics", logo: "🔷", description: "Enterprise CRM and business applications" },
        { name: "Pipedrive", logo: "🔗", description: "Sales pipeline automation and tracking" }
      ]
    },
    {
      category: "Enterprise Systems",
      partners: [
        { name: "SAP", logo: "🔵", description: "ERP integration and business process automation" },
        { name: "Oracle", logo: "🔴", description: "Database and enterprise application integration" },
        { name: "Workday", logo: "⚡", description: "HR and financial management systems" },
        { name: "ServiceNow", logo: "🟢", description: "IT service management and workflows" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      partners: [
        { name: "AWS", logo: "🧡", description: "Cloud infrastructure and services integration" },
        { name: "Microsoft Azure", logo: "🔷", description: "Enterprise cloud platform connectivity" },
        { name: "Google Cloud", logo: "🔴", description: "Data analytics and machine learning" },
        { name: "Snowflake", logo: "❄️", description: "Data warehouse and analytics platform" }
      ]
    },
    {
      category: "Security & Identity",
      partners: [
        { name: "Okta", logo: "🔐", description: "Identity and access management integration" },
        { name: "Auth0", logo: "🛡️", description: "Authentication and authorization services" },
        { name: "CyberArk", logo: "🔒", description: "Privileged access management" },
        { name: "Ping Identity", logo: "🎯", description: "Enterprise identity solutions" }
      ]
    }
  ];

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
        <section className="relative section-padding overflow-hidden bg-gradient-to-br from-background via-muted/10 to-primary/5">
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-6">
                  Enterprise Solution
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Enterprise-grade{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    automation platform
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
                  Secure, scalable, and compliant automation solutions designed for large organizations. 
                  Transform your enterprise operations with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Talk to Sales
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-green-500" />
                    <span>99.99% Uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span>500+ Enterprise Customers</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format"
                  alt="Enterprise Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Built for enterprise requirements
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every feature designed with enterprise security, compliance, and scalability in mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {enterpriseBenefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {benefit.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {benefit.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                SMB vs Enterprise comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our Enterprise plan provides advanced capabilities for large organizations.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-64">Feature Category</TableHead>
                      <TableHead className="text-center min-w-40">
                        <div className="flex flex-col items-center gap-2">
                          <Building className="h-5 w-5" />
                          <div>
                            <div className="font-semibold">SMB Plan</div>
                            <div className="text-xs text-muted-foreground">Up to 100 users</div>
                          </div>
                        </div>
                      </TableHead>
                      <TableHead className="text-center min-w-40">
                        <div className="flex flex-col items-center gap-2">
                          <Shield className="h-5 w-5" />
                          <div>
                            <div className="font-semibold">Enterprise</div>
                            <div className="text-xs text-muted-foreground">Unlimited users</div>
                          </div>
                          <Badge className="text-xs">Recommended</Badge>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {featureComparison.categories.map((category, categoryIndex) => (
                      <>
                        <TableRow key={`category-${categoryIndex}`} className="bg-muted/50">
                          <TableCell colSpan={3} className="font-semibold py-3">
                            {category.name}
                          </TableCell>
                        </TableRow>
                        {category.features.map((feature, featureIndex) => (
                          <TableRow key={`feature-${categoryIndex}-${featureIndex}`}>
                            <TableCell className="font-medium">{feature.name}</TableCell>
                            <TableCell className="text-center">
                              {renderFeatureValue(feature.smb)}
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

        {/* Case Studies */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Enterprise success stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how leading enterprises have transformed their operations with our platform.
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img 
                        src={study.image} 
                        alt={study.company}
                        className="w-full h-full object-cover min-h-96"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-3xl mb-2">{study.logo}</div>
                        <div className="font-bold text-xl">{study.company}</div>
                        <div className="text-sm opacity-90">{study.industry} • {study.employees} employees</div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Results</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="bg-muted/50 rounded-lg p-4 text-center">
                                <result.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                                <div className="font-bold text-lg text-primary">{result.value}</div>
                                <div className="text-xs text-muted-foreground">{result.metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                          <Quote className="h-5 w-5 text-primary mb-3" />
                          <blockquote className="text-sm italic mb-3">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="text-sm">
                            <div className="font-medium">{study.testimonial.author}</div>
                            <div className="text-muted-foreground">{study.testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Enterprise ecosystem
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Seamlessly integrate with your existing enterprise tools and systems.
              </p>
            </div>

            <div className="space-y-12">
              {integrationPartners.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <Card key={partnerIndex} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                        <CardContent className="p-6">
                          <div className="text-3xl mb-3">{partner.logo}</div>
                          <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">{partner.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see your tool? We support 200+ integrations and custom API connections.
              </p>
              <Button variant="outline">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to transform your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  enterprise operations?
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
                Join hundreds of enterprises that have already automated their critical business processes 
                with our secure, scalable platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Sales
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Custom implementation included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Dedicated customer success manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>99.99% uptime SLA</span>
                </div>
              </div>
            </div>

            <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Call Sales</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Speak directly with our enterprise sales team
                    </p>
                    <Button variant="outline" size="sm">
                      <Phone className="mr-2 h-4 w-4" />
                      +1 (555) 123-4567
                    </Button>
                  </div>
                  <div>
                    <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Send us your requirements and we'll respond within 24 hours
                    </p>
                    <Button variant="outline" size="sm">
                      <Mail className="mr-2 h-4 w-4" />
                      enterprise@dataflow.com
                    </Button>
                  </div>
                  <div>
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Book a Demo</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      See a personalized demo of our enterprise features
                    </p>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
