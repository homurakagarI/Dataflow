import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("marketing");

  const useCases = {
    marketing: {
      title: "Marketing Teams",
      subtitle: "Supercharge your campaigns with data-driven insights",
      benefits: [
        "Identify high-intent prospects with 95% accuracy",
        "Automate lead scoring and qualification",
        "Personalize outreach at scale",
        "Track campaign ROI in real-time"
      ],
      metrics: [
        { value: "3x", label: "Higher conversion rates" },
        { value: "70%", label: "Reduction in acquisition costs" },
        { value: "5x", label: "Faster lead qualification" }
      ],
      workflow: [
        "Import your target accounts",
        "AI enriches with buying signals",
        "Automated scoring & prioritization",
        "Launch personalized campaigns"
      ],
      testimonial: {
        quote: "DataFlow helped us increase our pipeline by 400% in just 3 months. The AI-powered insights are game-changing.",
        author: "Sarah Chen",
        title: "VP of Marketing",
        company: "TechCorp"
      }
    },
    sales: {
      title: "Sales Teams",
      subtitle: "Close more deals with intelligent prospect insights",
      benefits: [
        "Find ready-to-buy prospects instantly",
        "Get conversation starters for every call",
        "Track competitor mentions and job changes",
        "Automate follow-up sequences"
      ],
      metrics: [
        { value: "45%", label: "Increase in close rates" },
        { value: "2.5x", label: "More qualified meetings" },
        { value: "60%", label: "Shorter sales cycles" }
      ],
      workflow: [
        "Upload your prospect list",
        "Get enriched contact data",
        "Receive buying signal alerts",
        "Execute targeted outreach"
      ],
      testimonial: {
        quote: "Our sales team now knows exactly when to reach out. We've doubled our meeting booking rate since using DataFlow.",
        author: "Mike Rodriguez",
        title: "Sales Director",
        company: "GrowthCo"
      }
    },
    data: {
      title: "Data Teams",
      subtitle: "Build robust data pipelines without the complexity",
      benefits: [
        "Connect 100+ data sources instantly",
        "Real-time data synchronization",
        "Advanced data transformation tools",
        "Enterprise-grade security & compliance"
      ],
      metrics: [
        { value: "80%", label: "Faster data pipeline setup" },
        { value: "99.9%", label: "Data accuracy guarantee" },
        { value: "50%", label: "Reduction in data engineering costs" }
      ],
      workflow: [
        "Connect your data sources",
        "Configure transformation rules",
        "Set up automated workflows",
        "Monitor data quality metrics"
      ],
      testimonial: {
        quote: "DataFlow eliminated months of data engineering work. We went from idea to insights in days, not quarters.",
        author: "Dr. Emily Watson",
        title: "Head of Data Science",
        company: "DataFirst Inc"
      }
    },
    startups: {
      title: "Startups",
      subtitle: "Scale faster with enterprise-grade data tools",
      benefits: [
        "Start with free tier, scale as you grow",
        "No technical setup required",
        "Built-in best practices and templates",
        "24/7 support from data experts"
      ],
      metrics: [
        { value: "10x", label: "Faster time to market" },
        { value: "90%", label: "Reduction in data costs" },
        { value: "5x", label: "Higher customer acquisition" }
      ],
      workflow: [
        "Sign up in under 2 minutes",
        "Choose from startup templates",
        "Import your existing data",
        "Start generating insights"
      ],
      testimonial: {
        quote: "As a bootstrap startup, DataFlow gave us enterprise capabilities without the enterprise costs. Essential for our growth.",
        author: "Alex Kim",
        title: "Founder & CEO",
        company: "StartupFlow"
      }
    },
    enterprise: {
      title: "Enterprise",
      subtitle: "Enterprise-scale data solutions with guaranteed compliance",
      benefits: [
        "SOC 2 Type II certified infrastructure",
        "GDPR & CCPA compliance built-in",
        "Dedicated customer success manager",
        "Custom integrations and SLAs"
      ],
      metrics: [
        { value: "99.99%", label: "Uptime guarantee" },
        { value: "500M+", label: "Records processed daily" },
        { value: "24/7", label: "Enterprise support" }
      ],
      workflow: [
        "Enterprise consultation call",
        "Custom solution architecture",
        "White-glove implementation",
        "Ongoing optimization & support"
      ],
      testimonial: {
        quote: "DataFlow handles our most sensitive data with military-grade security. The compliance features saved us months of work.",
        author: "Jennifer Liu",
        title: "Chief Data Officer",
        company: "Fortune 500 Corp"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Solutions for Every Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how DataFlow transforms workflows across Marketing, Sales, Data Teams, Startups, and Enterprises
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-black hover:bg-gray-100">
                See All Use Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(useCases).map(([key, useCase]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {useCase.title}
                </button>
              ))}
            </div>

            {/* Active Use Case Content */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {useCases[activeTab].title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      {useCases[activeTab].subtitle}
                    </p>
                    
                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {useCases[activeTab].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="bg-black hover:bg-gray-800">
                        See How It Works
                      </Button>
                      <Button size="lg" variant="outline" className="border-black hover:bg-gray-100">
                        Book a Demo
                      </Button>
                    </div>
                  </div>

                  {/* Metrics & Workflow Side */}
                  <div className="space-y-8">
                    {/* Success Metrics */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Success Metrics</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {useCases[activeTab].metrics.map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-black">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Workflow Steps */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">How It Works</h3>
                      <div className="space-y-3">
                        {useCases[activeTab].workflow.map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-sm text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-12 bg-gradient-to-r from-gray-800 to-black rounded-xl p-8 text-white">
                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-lg italic mb-4">"{useCases[activeTab].testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold">{useCases[activeTab].testimonial.author}</div>
                        <div className="text-gray-300">{useCases[activeTab].testimonial.title}, {useCases[activeTab].testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industry Case Studies
              </h2>
              <p className="text-xl text-muted-foreground">
                See how leading companies in different industries use DataFlow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* FinTech Case Study */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600"></div>
                <div className="p-6">
                  <div className="text-sm text-black font-semibold mb-2">FINTECH</div>
                  <h3 className="text-xl font-bold mb-3">PaymentCorp</h3>
                  <p className="text-muted-foreground mb-4">
                    Reduced fraud detection time by 85% and improved customer onboarding speed by 3x.
                  </p>
                  <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                    Read Case Study
                  </Button>
                </div>
              </div>

              {/* E-commerce Case Study */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-500 to-black"></div>
                <div className="p-6">
                  <div className="text-sm text-black font-semibold mb-2">E-COMMERCE</div>
                  <h3 className="text-xl font-bold mb-3">ShopFast</h3>
                  <p className="text-muted-foreground mb-4">
                    Increased conversion rates by 40% through personalized product recommendations.
                  </p>
                  <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                    Read Case Study
                  </Button>
                </div>
              </div>

              {/* SaaS Case Study */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                <div className="p-6">
                  <div className="text-sm text-black font-semibold mb-2">SAAS</div>
                  <h3 className="text-xl font-bold mb-3">CloudTech</h3>
                  <p className="text-muted-foreground mb-4">
                    Reduced customer churn by 50% with predictive analytics and automated interventions.
                  </p>
                  <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                    Read Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already using DataFlow to accelerate their growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
