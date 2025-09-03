import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Product = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<"enrichment" | "analytics" | "integrations" | "security">("enrichment");
  const [playingDemo, setPlayingDemo] = useState(false);

  const featureTabs = {
    enrichment: {
      title: "Data Enrichment",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        {
          title: "Real-time Data Enhancement",
          description: "Instantly enrich contact and company data with 50+ data points including email, phone, social profiles, and firmographics."
        },
        {
          title: "AI-Powered Matching",
          description: "Advanced machine learning algorithms ensure 99.5% accuracy in data matching and enrichment across all records."
        },
        {
          title: "Bulk Processing",
          description: "Process millions of records simultaneously with our high-performance enrichment engine designed for enterprise scale."
        },
        {
          title: "Custom Data Fields",
          description: "Define and enrich custom data fields specific to your business needs with our flexible enrichment framework."
        }
      ]
    },
    analytics: {
      title: "Advanced Analytics",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: [
        {
          title: "Interactive Dashboards",
          description: "Beautiful, customizable dashboards that provide real-time insights into your data quality, enrichment rates, and ROI metrics."
        },
        {
          title: "Data Quality Scoring",
          description: "Comprehensive data quality scores with detailed breakdowns to help you understand and improve your data health."
        },
        {
          title: "Enrichment Analytics",
          description: "Track enrichment success rates, coverage metrics, and identify gaps in your data to optimize your strategy."
        },
        {
          title: "Custom Reports",
          description: "Generate detailed reports on data operations, team performance, and business impact with scheduled delivery options."
        }
      ]
    },
    integrations: {
      title: "Seamless Integrations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        {
          title: "CRM Integration",
          description: "Native integrations with Salesforce, HubSpot, Pipedrive, and 50+ other CRM platforms for seamless data flow."
        },
        {
          title: "Marketing Automation",
          description: "Connect with Marketo, Pardot, Mailchimp, and other marketing tools to enrich leads and improve campaign performance."
        },
        {
          title: "Data Warehouses",
          description: "Direct integration with Snowflake, BigQuery, Redshift, and other data warehouses for enterprise data operations."
        },
        {
          title: "Custom APIs",
          description: "Robust REST APIs and webhooks for custom integrations and real-time data synchronization with any system."
        }
      ]
    },
    security: {
      title: "Enterprise Security",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        {
          title: "SOC 2 Compliance",
          description: "SOC 2 Type II certified infrastructure ensuring the highest standards of data security and operational controls."
        },
        {
          title: "Data Encryption",
          description: "End-to-end encryption for data in transit and at rest using AES-256 encryption and TLS 1.3 protocols."
        },
        {
          title: "Access Controls",
          description: "Role-based access controls, SSO integration, and multi-factor authentication for secure team collaboration."
        },
        {
          title: "Privacy Compliance",
          description: "GDPR, CCPA, and HIPAA compliant data processing with comprehensive privacy controls and audit trails."
        }
      ]
    }
  };

  const competitorComparison = [
    {
      feature: "Data Coverage",
      dataflow: "100M+ contacts, 50M+ companies",
      competitor1: "50M contacts, 20M companies",
      competitor2: "75M contacts, 30M companies",
      competitor3: "40M contacts, 15M companies"
    },
    {
      feature: "Accuracy Rate",
      dataflow: "99.5%",
      competitor1: "92%",
      competitor2: "94%",
      competitor3: "89%"
    },
    {
      feature: "Real-time Enrichment",
      dataflow: "✅ < 100ms",
      competitor1: "❌ Batch only",
      competitor2: "✅ < 500ms",
      competitor3: "❌ Batch only"
    },
    {
      feature: "API Rate Limits",
      dataflow: "10,000 req/min",
      competitor1: "1,000 req/min",
      competitor2: "5,000 req/min",
      competitor3: "500 req/min"
    },
    {
      feature: "SOC 2 Compliance",
      dataflow: "✅ Type II",
      competitor1: "❌",
      competitor2: "✅ Type I",
      competitor3: "❌"
    },
    {
      feature: "Custom Integrations",
      dataflow: "✅ Full API",
      competitor1: "❌",
      competitor2: "✅ Limited",
      competitor3: "❌"
    },
    {
      feature: "Pricing Model",
      dataflow: "Usage-based",
      competitor1: "Seat-based",
      competitor2: "Seat-based",
      competitor3: "Fixed plans"
    },
    {
      feature: "Support SLA",
      dataflow: "99.99% uptime",
      competitor1: "99.5% uptime",
      competitor2: "99.9% uptime",
      competitor3: "99% uptime"
    }
  ];

  const currentFeature = featureTabs[activeFeatureTab];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Product Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  The Complete Data Enrichment Platform
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform incomplete data into actionable insights with our AI-powered enrichment platform. 
                  Enrich millions of records instantly with 99.5% accuracy and enterprise-grade security.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" className="bg-black hover:bg-gray-800">
                    Try for Free
                  </Button>
                  <Button size="lg" variant="outline" className="border-black hover:bg-gray-100">
                    Get a Demo
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black">99.5%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">100M+</div>
                    <div className="text-sm text-muted-foreground">Data Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">&lt;100ms</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                </div>
              </div>
              
              {/* Product Mockup */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-500">DataFlow Dashboard</div>
                  </div>
                  
                  {/* Mock Dashboard Interface */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <h3 className="font-semibold">Data Enrichment Pipeline</h3>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600">Live</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Records Processed</div>
                        <div className="text-2xl font-bold">2.4M</div>
                        <div className="text-xs text-green-600">↑ 23% today</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Enrichment Rate</div>
                        <div className="text-2xl font-bold">99.5%</div>
                        <div className="text-xs text-green-600">↑ 0.2%</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Email Enrichment</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span>Phone Enrichment</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span>Social Profiles</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown in Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Features for Every Use Case
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover why leading companies choose DataFlow for their data enrichment needs
              </p>
            </div>

            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(featureTabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveFeatureTab(key as typeof activeFeatureTab)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeFeatureTab === key
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className={activeFeatureTab === key ? 'text-white' : 'text-gray-400'}>
                    {tab.icon}
                  </div>
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">{currentFeature.title}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {currentFeature.features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See DataFlow in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Watch how easy it is to enrich your data and unlock powerful insights in just minutes
            </p>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div 
                className={`aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  playingDemo ? 'bg-black' : 'hover:from-gray-200 hover:to-gray-300'
                }`}
                onClick={() => setPlayingDemo(!playingDemo)}
              >
                {!playingDemo ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-800 transition-colors duration-200">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Demo</h3>
                    <p className="text-muted-foreground">3 minutes • Learn how to enrich 10,000 records</p>
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>Loading demo video...</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                Try for Free
              </Button>
              <Button size="lg" variant="outline" className="border-black hover:bg-gray-100">
                Schedule Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How DataFlow Compares
              </h2>
              <p className="text-xl text-muted-foreground">
                See why DataFlow outperforms the competition across key metrics
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold bg-black text-white">DataFlow</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Competitor A</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Competitor B</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Competitor C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorComparison.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-black bg-gray-25">
                          {row.dataflow}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-600">{row.competitor1}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-600">{row.competitor2}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-600">{row.competitor3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-black hover:bg-gray-800">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using DataFlow to enrich their data and accelerate growth. 
              Start your free trial today and see results in minutes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Try for Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Get a Demo
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">5 Minutes</div>
                <div className="text-gray-300">Setup Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
