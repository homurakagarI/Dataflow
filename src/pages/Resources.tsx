import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const blogArticles = [
    {
      id: 1,
      title: "10 Data Enrichment Strategies That Drive Revenue",
      excerpt: "Learn how top companies use data enrichment to boost their sales pipeline and increase conversion rates by 300%.",
      category: "Strategy",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "GDPR Compliance in Data Processing: A Complete Guide",
      excerpt: "Everything you need to know about staying compliant while processing customer data in 2024.",
      category: "Compliance",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "AI-Powered Lead Scoring: Best Practices",
      excerpt: "Discover how machine learning can transform your lead qualification process and boost sales efficiency.",
      category: "AI & Machine Learning",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Building Scalable Data Pipelines for Startups",
      excerpt: "A step-by-step guide to setting up robust data infrastructure without breaking the bank.",
      category: "Technical",
      readTime: "10 min read",
      date: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
    }
  ];

  const downloadableGuides = [
    {
      title: "The Complete Data Enrichment Handbook",
      description: "130-page comprehensive guide covering everything from data collection to implementation.",
      type: "PDF Guide",
      pages: "130 pages",
      downloads: "2.3K downloads"
    },
    {
      title: "GDPR Compliance Checklist",
      description: "Step-by-step checklist to ensure your data processing meets GDPR requirements.",
      type: "Checklist",
      pages: "12 pages",
      downloads: "1.8K downloads"
    },
    {
      title: "Sales Data Analytics Playbook",
      description: "Proven strategies and templates to analyze and optimize your sales data.",
      type: "Playbook",
      pages: "85 pages",
      downloads: "3.1K downloads"
    },
    {
      title: "API Integration Best Practices",
      description: "Technical guide for developers on integrating DataFlow with your existing systems.",
      type: "Technical Guide",
      pages: "45 pages",
      downloads: "950 downloads"
    }
  ];

  const webinars = [
    {
      title: "Mastering B2B Data Enrichment in 2024",
      presenter: "Sarah Chen, VP of Marketing at TechCorp",
      duration: "45 mins",
      views: "1.2K views",
      date: "Live on Dec 20, 2024",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop",
      isLive: true
    },
    {
      title: "From Data Chaos to Pipeline Perfection",
      presenter: "Mike Rodriguez, Data Engineering Lead",
      duration: "38 mins",
      views: "2.8K views",
      date: "Dec 8, 2024",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      isLive: false
    },
    {
      title: "AI-Driven Sales Intelligence Deep Dive",
      presenter: "Dr. Emily Watson, Head of Data Science",
      duration: "52 mins",
      views: "3.5K views",
      date: "Nov 15, 2024",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop",
      isLive: false
    },
    {
      title: "Enterprise Data Security & Compliance",
      presenter: "Jennifer Liu, Chief Security Officer",
      duration: "41 mins",
      views: "1.9K views",
      date: "Nov 2, 2024",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
      isLive: false
    }
  ];

  const faqs = [
    {
      question: "How does DataFlow ensure data privacy and security?",
      answer: "We implement enterprise-grade security measures including SOC 2 Type II compliance, end-to-end encryption, and GDPR/CCPA compliance. All data is processed in secure, audited environments with strict access controls."
    },
    {
      question: "What data sources can I connect to DataFlow?",
      answer: "DataFlow supports 100+ data sources including CRMs (Salesforce, HubSpot), databases (PostgreSQL, MySQL), cloud storage (AWS S3, Google Cloud), and APIs. We also provide custom integration support for enterprise clients."
    },
    {
      question: "How accurate is the data enrichment?",
      answer: "Our data enrichment achieves 95%+ accuracy through multiple data sources, AI validation, and real-time verification. We provide confidence scores for each data point and offer a data accuracy guarantee."
    },
    {
      question: "Can I try DataFlow before purchasing?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can process up to 1,000 records during the trial period."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 email support for all plans, priority support for Professional plans, and dedicated customer success managers for Enterprise clients. We also provide comprehensive documentation and video tutorials."
    },
    {
      question: "How does pricing work?",
      answer: "Pricing is based on the number of records processed per month. We offer three main plans: Starter ($29/month for 1K records), Professional ($99/month for 10K records), and custom Enterprise pricing for unlimited usage."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your data remains accessible during your billing period even after cancellation."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we provide custom integration development for Enterprise clients. Our technical team can work with you to build specific connectors or modify existing integrations to meet your unique requirements."
    }
  ];

  const categories = ["all", "Strategy", "Technical", "Compliance", "AI & Machine Learning"];

  const filteredArticles = blogArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Resources & Knowledge Base
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to master data enrichment, from beginner guides to advanced techniques
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles, guides, webinars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                Browse All Resources
              </Button>
              <Button size="lg" variant="outline" className="border-black hover:bg-gray-100">
                Join Our Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category === "all" ? "All Categories" : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-black text-white px-2 py-1 rounded">{article.category}</span>
                      <span>{article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-gray-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                      Read Article
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Downloadable Guides</h2>
              <p className="text-xl text-muted-foreground">
                In-depth resources to help you implement and optimize your data strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {downloadableGuides.map((guide, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-black rounded-lg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      📊
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-100 text-black px-2 py-1 rounded text-sm font-medium">
                          {guide.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{guide.pages}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                      <p className="text-muted-foreground mb-4">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{guide.downloads}</span>
                        <Button size="sm" className="bg-black hover:bg-gray-800">
                          Download Free
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Webinars & Video Library</h2>
              <p className="text-xl text-muted-foreground">
                Learn from industry experts and DataFlow specialists
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {webinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    {webinar.isLive && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        LIVE
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{webinar.duration}</span>
                      <span>{webinar.views}</span>
                      <span>{webinar.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                    <p className="text-muted-foreground mb-4">{webinar.presenter}</p>
                    <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                      {webinar.isLive ? "Register Now" : "Watch Recording"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about DataFlow
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
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
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with the Latest Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get weekly insights, new guides, and exclusive content delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
