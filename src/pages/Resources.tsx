import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Search, 
  BookOpen, 
  Download, 
  Play, 
  Calendar, 
  Clock, 
  User,
  FileText,
  Video,
  HelpCircle,
  ArrowRight,
  Filter,
  Tag
} from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Data Automation Best Practices for 2024",
      excerpt: "Discover the essential strategies that leading companies use to maximize their data automation ROI and streamline operations.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Best Practices",
      image: "📊",
      tags: ["Automation", "Data", "Best Practices"]
    },
    {
      id: 2,
      title: "Complete Guide to CRM Integration",
      excerpt: "Learn how to seamlessly connect your CRM with other business tools for a unified customer experience.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Integration",
      image: "🔗",
      tags: ["CRM", "Integration", "Sales"]
    },
    {
      id: 3,
      title: "AI-Powered Lead Scoring: A Deep Dive",
      excerpt: "Understand how machine learning algorithms can transform your lead qualification process and boost conversion rates.",
      author: "Dr. Jennifer Park",
      date: "Dec 10, 2024",
      readTime: "15 min read",
      category: "AI & ML",
      image: "🤖",
      tags: ["AI", "Lead Scoring", "Machine Learning"]
    },
    {
      id: 4,
      title: "Security & Compliance in Data Automation",
      excerpt: "Essential security practices and compliance requirements for automated data workflows in enterprise environments.",
      author: "Robert Kim",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Security",
      image: "🔒",
      tags: ["Security", "Compliance", "Enterprise"]
    },
    {
      id: 5,
      title: "ROI Calculator: Measuring Automation Success",
      excerpt: "A comprehensive framework for calculating and demonstrating the return on investment of your automation initiatives.",
      author: "Lisa Wong",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Business Value",
      image: "💰",
      tags: ["ROI", "Business Value", "Metrics"]
    },
    {
      id: 6,
      title: "Building Your First Workflow: Step-by-Step",
      excerpt: "A beginner-friendly tutorial that walks you through creating your first automated workflow from start to finish.",
      author: "David Thompson",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Tutorial",
      image: "🚀",
      tags: ["Tutorial", "Beginner", "Workflow"]
    }
  ];

  const downloadableResources = [
    {
      title: "The Complete Data Automation Playbook",
      description: "A comprehensive 50-page guide covering strategy, implementation, and optimization of data automation workflows.",
      type: "eBook",
      pages: "50 pages",
      format: "PDF",
      category: "Strategy",
      downloads: "12.5K",
      image: "📚"
    },
    {
      title: "Enterprise Integration Checklist",
      description: "Essential checklist for planning and executing large-scale data integrations in enterprise environments.",
      type: "Checklist",
      pages: "8 pages",
      format: "PDF",
      category: "Enterprise",
      downloads: "8.2K",
      image: "✅"
    },
    {
      title: "ROI Calculator Template",
      description: "Spreadsheet template for calculating the return on investment of your automation projects with real examples.",
      type: "Template",
      pages: "Excel",
      format: "XLSX",
      category: "Business Value",
      downloads: "15.3K",
      image: "📊"
    },
    {
      title: "API Integration Best Practices",
      description: "Technical whitepaper covering API design patterns, security considerations, and performance optimization.",
      type: "Whitepaper",
      pages: "32 pages",
      format: "PDF",
      category: "Technical",
      downloads: "6.8K",
      image: "🔧"
    },
    {
      title: "Compliance Framework Guide",
      description: "Detailed guide for maintaining SOC 2, GDPR, and HIPAA compliance in automated data workflows.",
      type: "Guide",
      pages: "28 pages",
      format: "PDF",
      category: "Compliance",
      downloads: "9.1K",
      image: "🛡️"
    },
    {
      title: "Workflow Templates Library",
      description: "Collection of 25+ pre-built workflow templates for common business processes across industries.",
      type: "Templates",
      pages: "Bundle",
      format: "JSON",
      category: "Templates",
      downloads: "22.4K",
      image: "📁"
    }
  ];

  const videoResources = [
    {
      title: "Getting Started with Data Automation",
      description: "Learn the fundamentals of data automation and how to build your first workflow in under 30 minutes.",
      duration: "28:45",
      views: "45.2K",
      category: "Getting Started",
      level: "Beginner",
      image: "🎬",
      type: "Tutorial"
    },
    {
      title: "Advanced Workflow Patterns",
      description: "Deep dive into complex workflow patterns including conditional logic, error handling, and parallel processing.",
      duration: "52:30",
      views: "18.7K",
      category: "Advanced",
      level: "Expert",
      image: "🔄",
      type: "Tutorial"
    },
    {
      title: "Customer Success: TechCorp Case Study",
      description: "See how TechCorp achieved 300% productivity gains through strategic automation implementation.",
      duration: "35:20",
      views: "12.3K",
      category: "Case Study",
      level: "All Levels",
      image: "🏢",
      type: "Case Study"
    },
    {
      title: "Weekly Product Demo",
      description: "Live demonstration of new features and capabilities, including Q&A with our product team.",
      duration: "45:00",
      views: "8.9K",
      category: "Product Demo",
      level: "All Levels",
      image: "📺",
      type: "Webinar"
    },
    {
      title: "Security Best Practices Webinar",
      description: "Comprehensive overview of security considerations for enterprise data automation implementations.",
      duration: "41:15",
      views: "15.6K",
      category: "Security",
      level: "Intermediate",
      image: "🔐",
      type: "Webinar"
    },
    {
      title: "API Integration Masterclass",
      description: "Technical deep dive into API integrations, webhooks, and real-time data synchronization strategies.",
      duration: "67:30",
      views: "9.8K",
      category: "Technical",
      level: "Advanced",
      image: "⚡",
      type: "Masterclass"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with the platform?",
      answer: "Getting started is easy! Sign up for a free trial, choose from our pre-built templates, or follow our step-by-step onboarding guide. Our support team is also available to help you set up your first workflow."
    },
    {
      question: "What integrations are available?",
      answer: "We support 200+ integrations including popular CRMs (Salesforce, HubSpot), databases (MySQL, PostgreSQL), cloud services (AWS, Google Cloud), and business tools (Slack, Teams, Jira). You can also create custom integrations using our REST API."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, security is our top priority. We maintain SOC 2 Type II compliance, use end-to-end encryption, and offer enterprise features like SSO, role-based access control, and audit logs. Your data is always encrypted both in transit and at rest."
    },
    {
      question: "How much does it cost?",
      answer: "We offer flexible pricing plans starting from $49/month for small teams, with enterprise plans available for larger organizations. All plans include a 14-day free trial with no credit card required."
    },
    {
      question: "Can I migrate from another automation platform?",
      answer: "Absolutely! We provide migration tools and dedicated support to help you transition from platforms like Zapier, Microsoft Power Automate, or custom solutions. Our team will work with you to ensure a smooth migration."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer multiple support channels including email support, live chat, comprehensive documentation, video tutorials, and community forums. Enterprise customers also get dedicated account managers and priority support."
    },
    {
      question: "Do you offer training and onboarding?",
      answer: "Yes! We provide comprehensive onboarding for all customers, including live training sessions, documentation, video tutorials, and best practice guides. Enterprise customers receive dedicated training and implementation support."
    },
    {
      question: "Can I customize workflows for my specific needs?",
      answer: "Definitely! Our platform is designed to be highly customizable. You can build custom workflows using our visual builder, create custom integrations via API, and even develop custom functions for specialized business logic."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you before you reach your limits and offer options to upgrade your plan. We never stop your workflows unexpectedly - you'll always have time to adjust your usage or upgrade as needed."
    },
    {
      question: "Is there a mobile app?",
      answer: "While we don't have a dedicated mobile app yet, our web platform is fully responsive and works great on mobile devices. You can monitor workflows, receive notifications, and perform basic management tasks from any device."
    }
  ];

  const filteredBlogs = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredResources = downloadableResources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = videoResources.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden bg-gradient-to-br from-background via-muted/10 to-primary/5">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6">
                Knowledge Hub
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Learn, grow, and{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  succeed together
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
                Access our comprehensive library of guides, tutorials, case studies, and best practices 
                to maximize your automation success.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search resources, guides, tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-2 hover:border-primary/50 focus:border-primary"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="articles" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Articles</span>
                </TabsTrigger>
                <TabsTrigger value="downloads" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Downloads</span>
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  <span className="hidden sm:inline">Videos</span>
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">FAQ</span>
                </TabsTrigger>
              </TabsList>

              {/* Articles Tab */}
              <TabsContent value="articles">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Latest Articles & Insights</h2>
                  <p className="text-muted-foreground">
                    Stay up-to-date with the latest trends, best practices, and insights from our team and industry experts.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map((post) => (
                    <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-2xl">{post.image}</div>
                          <Badge variant="outline">{post.category}</Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="group-hover:bg-primary/5">
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Downloads Tab */}
              <TabsContent value="downloads">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Downloadable Resources</h2>
                  <p className="text-muted-foreground">
                    Free guides, templates, and tools to help you succeed with data automation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-2xl">{resource.image}</div>
                          <div className="flex gap-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            <Badge variant="secondary">{resource.category}</Badge>
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-4">
                            <span>{resource.pages}</span>
                            <span>{resource.format}</span>
                          </div>
                          <span>{resource.downloads} downloads</span>
                        </div>
                        <Button className="w-full group-hover:scale-105 transition-transform">
                          <Download className="mr-2 h-4 w-4" />
                          Download Free
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Video Library</h2>
                  <p className="text-muted-foreground">
                    Learn through video tutorials, webinars, and case studies from our experts and customers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((video, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-2xl">{video.image}</div>
                          <div className="flex gap-2">
                            <Badge variant="outline">{video.type}</Badge>
                            <Badge variant="secondary">{video.level}</Badge>
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          {video.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {video.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            {video.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <Play className="h-3 w-3" />
                            {video.views} views
                          </div>
                        </div>
                        <Button variant="outline" className="w-full group-hover:bg-primary/5">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground">
                    Find answers to common questions about our platform, features, and pricing.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                        <AccordionTrigger className="text-left hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2 pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="text-center mt-12">
                  <Card className="inline-block">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
                      <p className="text-muted-foreground mb-4">
                        Our support team is here to help you succeed.
                      </p>
                      <div className="flex gap-3 justify-center">
                        <Button>Contact Support</Button>
                        <Button variant="outline">Join Community</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
