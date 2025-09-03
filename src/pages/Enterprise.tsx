import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Enterprise = () => {
  const [selectedFeatureTab, setSelectedFeatureTab] = useState<"smb" | "enterprise">("enterprise");

  const enterpriseBenefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "SOC 2 Type II, GDPR compliance, SSO integration, and advanced encryption to protect your most sensitive data."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Infinite Scalability",
      description: "Process billions of data points with auto-scaling infrastructure that grows with your organization's needs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Compliance Ready",
      description: "Built-in compliance frameworks for HIPAA, SOX, PCI DSS, and other industry regulations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Dedicated Support",
      description: "24/7 priority support with dedicated customer success managers and custom SLA agreements."
    }
  ];

  const featureComparison = {
    smb: {
      title: "Small & Medium Business",
      features: [
        { feature: "Data Records", value: "Up to 100K/month" },
        { feature: "API Calls", value: "50K/month" },
        { feature: "Support", value: "Email support" },
        { feature: "Integrations", value: "Standard integrations" },
        { feature: "Security", value: "Standard encryption" },
        { feature: "SLA", value: "99.5% uptime" },
        { feature: "Custom Fields", value: "Limited" },
        { feature: "Data Retention", value: "1 year" }
      ]
    },
    enterprise: {
      title: "Enterprise",
      features: [
        { feature: "Data Records", value: "Unlimited" },
        { feature: "API Calls", value: "Unlimited" },
        { feature: "Support", value: "24/7 phone & chat" },
        { feature: "Integrations", value: "Custom + 200+ pre-built" },
        { feature: "Security", value: "SOC 2 + Advanced encryption" },
        { feature: "SLA", value: "99.99% uptime guarantee" },
        { feature: "Custom Fields", value: "Unlimited custom fields" },
        { feature: "Data Retention", value: "Custom retention policies" }
      ]
    }
  };

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      logo: "TC",
      challenge: "Manual data processing was taking 40+ hours per week across multiple teams",
      solution: "Implemented DataFlow's enterprise platform with custom API integrations",
      results: "95% reduction in manual work, $2M annual cost savings, 99.9% data accuracy",
      quote: "DataFlow transformed our data operations. We went from spending days on data enrichment to having real-time insights that drive our business decisions.",
      author: "Sarah Mitchell, CTO"
    },
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      logo: "FF",
      challenge: "Needed GDPR and SOX compliant data enrichment for customer onboarding",
      solution: "Deployed secure enterprise solution with custom compliance controls",
      results: "50% faster customer onboarding, 100% compliance audit success, enhanced fraud detection",
      quote: "The compliance features and security standards exceeded our expectations. DataFlow is now critical to our customer acquisition strategy.",
      author: "Michael Chen, Head of Compliance"
    },
    {
      company: "HealthSystem Plus",
      industry: "Healthcare",
      logo: "HS",
      challenge: "Required HIPAA-compliant patient data enrichment across 50+ locations",
      solution: "Implemented enterprise platform with healthcare-specific security controls",
      results: "40% improvement in patient outcomes, seamless multi-location data sharing, zero security incidents",
      quote: "DataFlow's healthcare compliance features allowed us to enhance patient care while maintaining the highest security standards.",
      author: "Dr. Jennifer Rodriguez, Chief Medical Officer"
    }
  ];

  const integrationPartners = [
    {
      category: "CRM Platforms",
      partners: [
        { name: "Salesforce", description: "Native Salesforce integration with real-time sync" },
        { name: "HubSpot", description: "Seamless lead enrichment and contact management" },
        { name: "Microsoft Dynamics", description: "Enterprise CRM integration with custom workflows" },
        { name: "Pipedrive", description: "Automated sales pipeline data enrichment" }
      ]
    },
    {
      category: "Marketing Automation",
      partners: [
        { name: "Marketo", description: "Advanced lead scoring and campaign optimization" },
        { name: "Pardot", description: "B2B marketing automation with enriched prospect data" },
        { name: "Mailchimp", description: "Enhanced email segmentation and personalization" },
        { name: "Campaign Monitor", description: "Improved email deliverability and targeting" }
      ]
    },
    {
      category: "Analytics & BI",
      partners: [
        { name: "Tableau", description: "Rich data visualization with enriched datasets" },
        { name: "Power BI", description: "Microsoft BI integration with real-time data feeds" },
        { name: "Looker", description: "Advanced analytics with enhanced data quality" },
        { name: "Snowflake", description: "Data warehouse integration for enterprise analytics" }
      ]
    },
    {
      category: "Customer Success",
      partners: [
        { name: "Gainsight", description: "Customer health scoring with enriched data" },
        { name: "ChurnZero", description: "Proactive churn prevention with data insights" },
        { name: "Totango", description: "Customer success automation with enriched profiles" },
        { name: "ClientSuccess", description: "Account management with comprehensive data views" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Enterprise Data Platform
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Scale your data operations with enterprise-grade security, compliance, and unlimited processing power. 
                  Built for organizations that demand the highest standards.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" className="bg-black hover:bg-gray-800">
                    Talk to Sales
                  </Button>
                  <Button size="lg" variant="outline" className="border-black hover:bg-gray-100">
                    View Demo
                  </Button>
                </div>
                <div className="flex items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    SOC 2 Certified
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    99.99% SLA
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24/7 Support
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {enterpriseBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3 text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-sm mb-2">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SMB vs Enterprise Comparison
              </h2>
              <p className="text-xl text-muted-foreground">
                See how our enterprise features compare to standard plans
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setSelectedFeatureTab("smb")}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                    selectedFeatureTab === "smb"
                      ? "bg-black text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {featureComparison.smb.title}
                </button>
                <button
                  onClick={() => setSelectedFeatureTab("enterprise")}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                    selectedFeatureTab === "enterprise"
                      ? "bg-black text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {featureComparison.enterprise.title}
                </button>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {featureComparison[selectedFeatureTab].features.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{item.feature}</span>
                      <span className={`font-semibold ${selectedFeatureTab === "enterprise" ? "text-black" : "text-gray-600"}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-black hover:bg-gray-800">
                    {selectedFeatureTab === "enterprise" ? "Contact Sales" : "Upgrade to Enterprise"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Enterprise Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                See how leading organizations transform their data operations with DataFlow
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Company Info */}
                    <div className="lg:border-r border-gray-200 lg:pr-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xl">
                          {study.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{study.company}</h3>
                          <p className="text-muted-foreground">{study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-2">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-2">Solution</h4>
                          <p className="text-sm text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="lg:border-r border-gray-200 lg:pr-8">
                      <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-4">Results</h4>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <p className="text-muted-foreground">{study.results}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-4">Testimonial</h4>
                      <blockquote className="relative">
                        <div className="text-4xl text-black absolute -top-2 -left-2">"</div>
                        <p className="text-muted-foreground italic pl-6 mb-4">{study.quote}</p>
                        <footer className="pl-6">
                          <cite className="text-black font-medium not-italic">— {study.author}</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integration Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground">
                Connect DataFlow with your existing tech stack through 200+ integrations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {integrationPartners.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{partner.name}</h4>
                          <p className="text-sm text-muted-foreground">{partner.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Data Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ enterprise customers who trust DataFlow to power their data-driven growth. 
              Get a custom demo and see how we can transform your data strategy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold">
                Talk to Sales
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Schedule Demo
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Enterprise Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">1B+</div>
                <div className="text-gray-300">Records Processed Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
