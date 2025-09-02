import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Trophy,
  Award,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Send,
  FileText,
  Building,
  Globe,
  Star
} from "lucide-react";
import { useState } from "react";

const Company = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    coverLetter: "",
    resume: null
  });

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push boundaries to create cutting-edge solutions that transform how businesses operate."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our customers' success is our success. We're committed to delivering exceptional value and support."
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and building trust through transparency."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building technology that makes a positive impact on businesses and communities worldwide."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at TechCorp with 15+ years building scalable platforms. Stanford CS graduate passionate about automation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face&auto=format",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in distributed systems and AI. MIT PhD with expertise in machine learning and data infrastructure.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Dr. Jennifer Park",
      role: "Head of AI Research",
      bio: "Former researcher at DeepMind with 20+ publications in ML. Leading our AI initiatives and research partnerships.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Thompson",
      role: "VP of Product",
      bio: "Product leader with experience at Salesforce and HubSpot. Expert in user experience and product strategy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Lisa Wong",
      role: "Head of Customer Success",
      bio: "Customer success expert with proven track record of driving adoption and retention at enterprise scale.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Robert Kim",
      role: "VP of Engineering",
      bio: "Infrastructure expert with experience scaling platforms to millions of users. Former tech lead at Netflix.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Sarah and Michael start the company with a vision to democratize data automation.",
      milestone: "Founded"
    },
    {
      year: "2021",
      title: "Seed Funding",
      description: "Raised $5M seed round led by Sequoia Capital to build our MVP and initial team.",
      milestone: "$5M Raised"
    },
    {
      year: "2022",
      title: "Product Launch",
      description: "Launched our platform publicly with 50+ integrations and gained first 1,000 customers.",
      milestone: "1K Customers"
    },
    {
      year: "2023",
      title: "Series A",
      description: "Secured $25M Series A to expand globally and enhance AI capabilities.",
      milestone: "$25M Series A"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in London and Singapore, reached 100,000+ active users.",
      milestone: "100K Users"
    },
    {
      year: "2025",
      title: "Enterprise Focus",
      description: "Launched enterprise platform with advanced security and compliance features.",
      milestone: "Enterprise Ready"
    }
  ];

  const jobs = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our frontend team to build beautiful, performant user interfaces that delight our customers.",
      requirements: ["React/TypeScript expertise", "Experience with modern tooling", "UX/UI design sensibility", "Remote collaboration skills"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time", 
      experience: "3+ years",
      description: "Drive product strategy and roadmap for our core automation platform.",
      requirements: ["Product management experience", "Technical background", "Customer-focused mindset", "Data-driven approach"]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Help our enterprise customers succeed with their automation initiatives.",
      requirements: ["Customer success experience", "Technical aptitude", "Excellent communication", "Problem-solving skills"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/GCP experience", "Kubernetes expertise", "CI/CD knowledge", "Security best practices"]
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Best Data Platform",
      organization: "TechCrunch Awards",
      description: "Recognized for innovation in data automation and user experience.",
      icon: "🏆"
    },
    {
      year: "2024",
      title: "Fastest Growing Startup",
      organization: "Forbes Cloud 100",
      description: "Listed in Forbes Cloud 100 for exceptional growth and market impact.",
      icon: "📈"
    },
    {
      year: "2023",
      title: "SOC 2 Type II Certified",
      organization: "Security Compliance",
      description: "Achieved enterprise-grade security certification for data protection.",
      icon: "🔒"
    },
    {
      year: "2023",
      title: "Customer Choice Award",
      organization: "G2 Software Reviews",
      description: "Highest rated platform in automation category based on customer reviews.",
      icon: "⭐"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden bg-gradient-to-br from-background via-muted/10 to-primary/5">
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6">
                About DataFlow
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Building the future of{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  data automation
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
                We're on a mission to democratize data automation and empower every business 
                to unlock the full potential of their data.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">300K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$30M</div>
                  <div className="text-sm text-muted-foreground">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To democratize data automation and make powerful workflow tools accessible 
                    to businesses of all sizes, enabling them to focus on what matters most.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A world where every business can harness the power of their data through 
                    intelligent automation, driving innovation and growth across industries.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Our Promise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To build technology that not only solves problems but empowers people, 
                    creates opportunities, and makes work more meaningful and productive.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a simple idea to a platform trusted by hundreds of thousands of users worldwide.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden md:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                      <Card className="inline-block group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <Badge variant="outline" className="mb-3">{item.milestone}</Badge>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-3">{item.description}</p>
                          <div className="text-sm font-medium text-primary">{item.year}</div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative z-10 hidden md:block">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>
                    
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate individuals from diverse backgrounds united by a shared vision to transform how businesses work with data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=random`;
                        }}
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and want to make a meaningful impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Job Listings */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
                <div className="space-y-4">
                  {jobs.map((job, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {job.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-4 mt-2">
                              <span>{job.department}</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {job.location}
                              </span>
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline">{job.type}</Badge>
                            <div className="text-xs text-muted-foreground mt-1">{job.experience}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                        <div className="mb-4">
                          <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full group-hover:scale-105 transition-transform">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Apply</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Submit Your Application</CardTitle>
                    <CardDescription>
                      Interested in joining our team? Send us your information and we'll get back to you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Full Name</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Position of Interest</label>
                        <Input
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          placeholder="e.g., Senior Frontend Engineer"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Cover Letter</label>
                        <Textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          placeholder="Tell us why you'd be a great fit for our team..."
                          rows={4}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Resume/CV</label>
                        <Input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="cursor-pointer"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Press */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Recognition & Awards</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're honored to be recognized by industry leaders and organizations for our innovation and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{award.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold">{award.title}</h3>
                          <Badge variant="outline">{award.year}</Badge>
                        </div>
                        <p className="text-sm font-medium text-primary mb-2">{award.organization}</p>
                        <p className="text-sm text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Media Inquiries</h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in learning more about our story or speaking with our team?
                  </p>
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Press Team
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Company;
