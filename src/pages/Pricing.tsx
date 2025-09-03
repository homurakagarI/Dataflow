import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import React from "react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricingTiers = {
    monthly: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Perfect for individuals and small projects",
        features: [
          "Up to 1,000 records/month",
          "Basic data enrichment",
          "Email support",
          "Standard integrations",
          "Basic analytics",
          "1 user included"
        ],
        limitations: [
          "Limited API calls",
          "Standard data quality",
          "Basic support only"
        ],
        cta: "Start Free Trial",
        ctaVariant: "outline" as const,
        popular: false
      },
      {
        name: "Pro",
        price: "$99",
        period: "/month",
        description: "Ideal for growing businesses and teams",
        features: [
          "Up to 10,000 records/month",
          "Advanced data enrichment",
          "Priority email & chat support",
          "Advanced integrations",
          "Custom fields & workflows",
          "Team collaboration (up to 5 users)",
          "Advanced analytics & reporting",
          "API access",
          "Data export capabilities",
          "99.5% uptime SLA"
        ],
        limitations: [],
        cta: "Start Free Trial",
        ctaVariant: "default" as const,
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Built for large organizations with advanced needs",
        features: [
          "Unlimited records",
          "Enterprise-grade security",
          "24/7 phone & chat support",
          "Custom integrations",
          "Dedicated customer success manager",
          "Unlimited users",
          "Advanced analytics & BI tools",
          "SOC 2 compliance",
          "Custom SLA agreements",
          "White-label options",
          "On-premise deployment",
          "Custom training & onboarding"
        ],
        limitations: [],
        cta: "Contact Sales",
        ctaVariant: "default" as const,
        popular: false
      }
    ],
    annual: [
      {
        name: "Free",
        price: "$0",
        period: "/year",
        description: "Perfect for individuals and small projects",
        features: [
          "Up to 1,000 records/month",
          "Basic data enrichment",
          "Email support",
          "Standard integrations",
          "Basic analytics",
          "1 user included"
        ],
        limitations: [
          "Limited API calls",
          "Standard data quality",
          "Basic support only"
        ],
        cta: "Start Free Trial",
        ctaVariant: "outline" as const,
        popular: false
      },
      {
        name: "Pro",
        price: "$990",
        period: "/year",
        originalPrice: "$1,188",
        savings: "Save $198",
        description: "Ideal for growing businesses and teams",
        features: [
          "Up to 10,000 records/month",
          "Advanced data enrichment",
          "Priority email & chat support",
          "Advanced integrations",
          "Custom fields & workflows",
          "Team collaboration (up to 5 users)",
          "Advanced analytics & reporting",
          "API access",
          "Data export capabilities",
          "99.5% uptime SLA"
        ],
        limitations: [],
        cta: "Start Free Trial",
        ctaVariant: "default" as const,
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Built for large organizations with advanced needs",
        features: [
          "Unlimited records",
          "Enterprise-grade security",
          "24/7 phone & chat support",
          "Custom integrations",
          "Dedicated customer success manager",
          "Unlimited users",
          "Advanced analytics & BI tools",
          "SOC 2 compliance",
          "Custom SLA agreements",
          "White-label options",
          "On-premise deployment",
          "Custom training & onboarding"
        ],
        limitations: [],
        cta: "Contact Sales",
        ctaVariant: "default" as const,
        popular: false
      }
    ]
  };

  const featureComparison = [
    {
      category: "Core Features",
      features: [
        { name: "Monthly Records", free: "1,000", pro: "10,000", enterprise: "Unlimited" },
        { name: "Data Enrichment", free: "Basic", pro: "Advanced", enterprise: "Enterprise" },
        { name: "API Access", free: "❌", pro: "✅", enterprise: "✅" },
        { name: "Custom Fields", free: "❌", pro: "✅", enterprise: "✅" },
        { name: "Workflows", free: "❌", pro: "✅", enterprise: "✅" }
      ]
    },
    {
      category: "Integrations",
      features: [
        { name: "Standard Integrations", free: "✅", pro: "✅", enterprise: "✅" },
        { name: "Advanced Integrations", free: "❌", pro: "✅", enterprise: "✅" },
        { name: "Custom Integrations", free: "❌", pro: "❌", enterprise: "✅" },
        { name: "Webhooks", free: "❌", pro: "✅", enterprise: "✅" }
      ]
    },
    {
      category: "Support & Security",
      features: [
        { name: "Support", free: "Email", pro: "Email & Chat", enterprise: "24/7 Phone & Chat" },
        { name: "SLA", free: "❌", pro: "99.5%", enterprise: "99.99%" },
        { name: "SOC 2 Compliance", free: "❌", pro: "❌", enterprise: "✅" },
        { name: "SSO", free: "❌", pro: "❌", enterprise: "✅" },
        { name: "Custom Security", free: "❌", pro: "❌", enterprise: "✅" }
      ]
    },
    {
      category: "Analytics & Reporting",
      features: [
        { name: "Basic Analytics", free: "✅", pro: "✅", enterprise: "✅" },
        { name: "Advanced Reports", free: "❌", pro: "✅", enterprise: "✅" },
        { name: "Custom Dashboards", free: "❌", pro: "❌", enterprise: "✅" },
        { name: "Data Export", free: "❌", pro: "✅", enterprise: "✅" }
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes up to 1,000 records per month, basic data enrichment, email support, and standard integrations. It's perfect for individuals and small projects to get started with DataFlow."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments on your next invoice."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers. All payments are processed securely through Stripe."
    },
    {
      question: "Is there a discount for annual billing?",
      answer: "Yes! Annual billing saves you approximately 17% compared to monthly billing. For the Pro plan, you'll save $198 per year when paying annually."
    },
    {
      question: "What happens if I exceed my record limit?",
      answer: "If you exceed your monthly record limit, we'll notify you and give you the option to upgrade your plan. We won't charge overage fees without your explicit consent."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "How does Enterprise pricing work?",
      answer: "Enterprise pricing is customized based on your specific needs, including data volume, integrations, support requirements, and deployment options. Contact our sales team for a personalized quote."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account dashboard. Your access will continue until the end of your current billing period."
    }
  ];

  const currentTiers = pricingTiers[billingPeriod];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your needs. Start free, upgrade as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-black' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${
                    billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingPeriod === 'annual' ? 'text-black' : 'text-muted-foreground'}`}>
                Annual
                <span className="ml-2 inline-flex items-center rounded-full bg-black px-2 py-0.5 text-xs font-medium text-white">
                  Save 17%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {currentTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                    tier.popular ? 'border-2 border-black' : 'border border-gray-200'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-black text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${tier.popular ? 'pt-16' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                          {tier.period && (
                            <span className="text-muted-foreground text-sm">{tier.period}</span>
                          )}
                        </div>
                        {tier.originalPrice && (
                          <div className="mt-2">
                            <span className="text-sm text-muted-foreground line-through">{tier.originalPrice}</span>
                            <span className="ml-2 text-sm font-medium text-green-600">{tier.savings}</span>
                          </div>
                        )}
                      </div>
                      
                      <Button
                        className={`w-full ${
                          tier.ctaVariant === 'outline'
                            ? 'border-black hover:bg-gray-100'
                            : 'bg-black hover:bg-gray-800'
                        }`}
                        variant={tier.ctaVariant}
                        size="lg"
                      >
                        {tier.cta}
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                        <ul className="space-y-2">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {tier.limitations.length > 0 && (
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                          <ul className="space-y-2">
                            {tier.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-500">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Feature Comparison
              </h2>
              <p className="text-xl text-muted-foreground">
                Compare all features across our pricing tiers
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Free</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold bg-black text-white">Pro</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.map((category, categoryIndex) => (
                      <React.Fragment key={categoryIndex}>
                        <tr className="bg-gray-25">
                          <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-25">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-900">{feature.name}</td>
                            <td className="px-6 py-4 text-sm text-center text-gray-600">{feature.free}</td>
                            <td className="px-6 py-4 text-sm text-center text-gray-900 font-medium">{feature.pro}</td>
                            <td className="px-6 py-4 text-sm text-center text-gray-600">{feature.enterprise}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-black hover:bg-gray-800">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about billing and subscriptions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using DataFlow to enrich their data and drive growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Contact Sales
              </Button>
            </div>

            <p className="text-sm text-gray-400">
              No credit card required • 30-day money-back guarantee • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
