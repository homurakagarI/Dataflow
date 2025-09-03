import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Company = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    position: "",
    resume: "",
    coverLetter: ""
  });

  const teamMembers = [
    {
      name: "Sarah Chen",
      position: "CEO & Co-Founder",
      bio: "Former VP of Engineering at TechCorp with 15+ years building scalable data platforms. MIT Computer Science graduate passionate about democratizing data access.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8b5?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/sarahchen"
    },
    {
      name: "Michael Rodriguez",
      position: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in machine learning and data infrastructure. Stanford PhD in Computer Science with expertise in distributed systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/michaelrodriguez"
    },
    {
      name: "Dr. Emily Watson",
      position: "Head of Data Science",
      bio: "Former Amazon Principal Scientist with 12+ years in AI/ML. Berkeley PhD in Statistics, published researcher in data enrichment algorithms.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/emilywatson"
    },
    {
      name: "David Kim",
      position: "VP of Engineering",
      bio: "Previously led engineering teams at Stripe and Airbnb. Expert in building high-performance systems that process billions of data points daily.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/davidkim"
    },
    {
      name: "Jennifer Liu",
      position: "VP of Sales",
      bio: "Former Salesforce enterprise sales leader with 10+ years helping Fortune 500 companies optimize their data strategies and achieve growth.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/jenniferliu"
    },
    {
      name: "Alex Thompson",
      position: "Head of Product",
      bio: "Ex-Microsoft product manager with deep expertise in enterprise software. Passionate about creating intuitive experiences for complex data workflows.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/alexthompson"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "DataFlow was founded by Sarah Chen and Michael Rodriguez with a vision to democratize data enrichment for businesses of all sizes."
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $15M Series A led by Accel Partners to accelerate product development and expand our engineering team."
    },
    {
      year: "2022",
      title: "1000+ Customers",
      description: "Reached our first major milestone of 1,000 active customers, processing over 100M data points monthly."
    },
    {
      year: "2023",
      title: "SOC 2 Compliance",
      description: "Achieved SOC 2 Type II certification, enabling us to serve enterprise customers with the highest security standards."
    },
    {
      year: "2024",
      title: "Series B & Global Expansion",
      description: "Raised $45M Series B and expanded to serve customers across 50+ countries with 24/7 support."
    },
    {
      year: "2025",
      title: "AI-Powered Platform",
      description: "Launched next-generation AI-powered data enrichment platform, processing 1B+ data points daily."
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Join our engineering team to build scalable data processing systems that handle billions of records. Work with React, Node.js, and distributed systems.",
      requirements: ["5+ years full-stack development", "Experience with React/Node.js", "Distributed systems knowledge", "Bachelor's in CS or equivalent"]
    },
    {
      id: 2,
      title: "Data Scientist",
      department: "Data Science",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Develop machine learning models to improve data quality and enrichment accuracy. Work with large datasets and cutting-edge AI technologies.",
      requirements: ["PhD/MS in Data Science or related field", "Python/R proficiency", "Machine learning expertise", "Experience with large datasets"]
    },
    {
      id: 3,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Drive go-to-market strategy for our enterprise data products. Work closely with sales and product teams to accelerate growth.",
      requirements: ["5+ years product marketing", "B2B SaaS experience", "Enterprise sales knowledge", "Excellent communication skills"]
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help enterprise customers maximize value from DataFlow. Build relationships and drive adoption across customer organizations.",
      requirements: ["3+ years customer success", "Enterprise software experience", "Strong analytical skills", "Customer-first mindset"]
    }
  ];

  const awards = [
    {
      title: "Best Data Platform 2024",
      organization: "TechCrunch Awards",
      year: "2024",
      description: "Recognized for innovation in data enrichment and processing technology."
    },
    {
      title: "Fastest Growing Startup",
      organization: "Inc. 5000",
      year: "2024",
      description: "Ranked #47 on Inc. 5000 list of fastest-growing private companies in America."
    },
    {
      title: "AI Excellence Award",
      organization: "AI Breakthrough",
      year: "2023",
      description: "Honored for breakthrough achievements in AI-powered data processing."
    },
    {
      title: "Enterprise Security Leader",
      organization: "CyberSecurity Excellence",
      year: "2023",
      description: "Recognized for outstanding commitment to enterprise data security and compliance."
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", applicationForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About DataFlow
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to democratize data enrichment and empower every business to make data-driven decisions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                Join Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-black hover:bg-gray-100">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize access to high-quality data enrichment tools, enabling businesses of all sizes to harness the power of their data for growth and innovation.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To create a world where every business decision is powered by accurate, real-time data insights, making data enrichment as essential as email or internet connectivity.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="text-muted-foreground text-left space-y-2">
                  <li>• Customer-first approach</li>
                  <li>• Data privacy & security</li>
                  <li>• Innovation & excellence</li>
                  <li>• Transparency & trust</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                World-class talent building the future of data enrichment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-black font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                From startup to industry leader - here's how we've grown
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                      <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                We're looking for talented individuals to help us shape the future of data
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Job Listings */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
                <div className="space-y-4">
                  {jobListings.map((job) => (
                    <div
                      key={job.id}
                      className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedJob === job.id ? 'border-2 border-black' : 'border border-gray-200'
                      }`}
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold">{job.title}</h4>
                          <p className="text-muted-foreground text-sm">{job.department} • {job.location}</p>
                        </div>
                        <span className="bg-black text-white px-3 py-1 rounded text-sm">{job.type}</span>
                      </div>
                      
                      {selectedJob === job.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          <div className="mb-4">
                            <h5 className="font-semibold mb-2">Requirements:</h5>
                            <ul className="space-y-1">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="text-sm text-muted-foreground">• {req}</li>
                              ))}
                            </ul>
                          </div>
                          <Button size="sm" className="bg-black hover:bg-gray-800">
                            Apply Now
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Apply Today</h3>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Position</label>
                      <select
                        value={applicationForm.position}
                        onChange={(e) => setApplicationForm({...applicationForm, position: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      >
                        <option value="">Select a position</option>
                        {jobListings.map((job) => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Resume URL</label>
                      <input
                        type="url"
                        value={applicationForm.resume}
                        onChange={(e) => setApplicationForm({...applicationForm, resume: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="https://..."
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Letter</label>
                      <textarea
                        value={applicationForm.coverLetter}
                        onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Tell us why you'd be a great fit..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                      Submit Application
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Awards & Recognition
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry recognition for our innovation and excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 010 2h2a1 1 0 011 1v2a1 1 0 01-2 0V6h-2a1 1 0 010-2h1V3a1 1 0 011-1zm7 5a1 1 0 110 2h-1v1a1 1 0 11-2 0V9h-1a1 1 0 110-2h1V6a1 1 0 112 0v1h1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                      <p className="text-black font-medium mb-2">{award.organization} • {award.year}</p>
                      <p className="text-muted-foreground text-sm">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
