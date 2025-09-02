import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  Users, 
  Database, 
  Building, 
  Rocket,
  TrendingUp,
  Mail,
  Phone,
  BarChart3,
  Workflow,
  Shield,
  Globe,
  Cpu,
  Clock
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      id: "marketing",
      title: "Marketing Teams",
      icon: Target,
      description: "Automate campaigns, score leads, and personalize outreach at scale",
      color: "from-pink-500 to-rose-400",
      benefits: [
        "Automated lead scoring and segmentation",
        "Personalized email campaigns at scale", 
        "Real-time campaign performance tracking",
        "Cross-platform data synchronization"
      ],
      workflow: [
        { step: 1, title: "Capture Leads", description: "Automatically collect leads from multiple sources" },
        { step: 2, title: "Score & Segment", description: "AI-powered lead scoring and intelligent segmentation" },
        { step: 3, title: "Personalize Outreach", description: "Generate personalized content for each segment" },
        { step: 4, title: "Track & Optimize", description: "Monitor performance and optimize campaigns" }
      ],
      metrics: [
        { label: "Lead Quality", value: "+85%" },
        { label: "Campaign ROI", value: "+120%" },
        { label: "Time Saved", value: "15hrs/week" }
      ],
      cta: "See Marketing Solutions"
    },
    {
      id: "sales",
      title: "Sales Teams",
      icon: Users,
      description: "Streamline prospecting, automate CRM updates, and accelerate deal closure",
      color: "from-blue-500 to-cyan-400",
      benefits: [
        "Automated prospect research and enrichment",
        "Smart CRM data management",
        "Deal pipeline optimization",
        "Personalized sales sequences"
      ],
      workflow: [
        { step: 1, title: "Find Prospects", description: "AI-powered prospect identification and research" },
        { step: 2, title: "Enrich Data", description: "Automatically gather contact info and company data" },
        { step: 3, title: "Engage Prospects", description: "Personalized outreach across multiple channels" },
        { step: 4, title: "Track Progress", description: "Monitor engagement and optimize sequences" }
      ],
      metrics: [
        { label: "Pipeline Growth", value: "+65%" },
        { label: "Conversion Rate", value: "+40%" },
        { label: "Research Time", value: "-80%" }
      ],
      cta: "Explore Sales Tools"
    },
    {
      id: "data",
      title: "Data Teams",
      icon: Database,
      description: "Build robust data pipelines, automate ETL processes, and ensure data quality",
      color: "from-purple-500 to-indigo-400",
      benefits: [
        "Automated data pipeline creation",
        "Real-time data quality monitoring",
        "Scalable ETL processes",
        "Advanced analytics integration"
      ],
      workflow: [
        { step: 1, title: "Connect Sources", description: "Integrate with 200+ data sources seamlessly" },
        { step: 2, title: "Transform Data", description: "Clean, normalize, and transform data automatically" },
        { step: 3, title: "Monitor Quality", description: "Real-time data quality checks and alerts" },
        { step: 4, title: "Deliver Insights", description: "Push clean data to analytics platforms" }
      ],
      metrics: [
        { label: "Data Accuracy", value: "+99.9%" },
        { label: "Processing Speed", value: "10x faster" },
        { label: "Pipeline Reliability", value: "99.9%" }
      ],
      cta: "View Data Solutions"
    },
    {
      id: "startups",
      title: "Startups",
      icon: Rocket,
      description: "Scale quickly with automated growth systems and lean operations",
      color: "from-green-500 to-emerald-400",
      benefits: [
        "Rapid deployment and setup",
        "Cost-effective automation solutions",
        "Scalable growth infrastructure",
        "Integrated business operations"
      ],
      workflow: [
        { step: 1, title: "Quick Setup", description: "Get started in minutes with pre-built templates" },
        { step: 2, title: "Automate Growth", description: "Set up lead generation and nurturing systems" },
        { step: 3, title: "Scale Operations", description: "Automate repetitive tasks as you grow" },
        { step: 4, title: "Monitor Success", description: "Track KPIs and optimize performance" }
      ],
      metrics: [
        { label: "Setup Time", value: "< 1 hour" },
        { label: "Cost Savings", value: "70%" },
        { label: "Growth Rate", value: "+200%" }
      ],
      cta: "Start Building"
    },
    {
      id: "enterprise",
      title: "Enterprise",
      icon: Building,
      description: "Scale securely with enterprise-grade automation and compliance features",
      color: "from-orange-500 to-amber-400",
      benefits: [
        "Enterprise-grade security and compliance",
        "Advanced workflow orchestration",
        "Multi-tenant architecture support",
        "Dedicated support and SLAs"
      ],
      workflow: [
        { step: 1, title: "Assess Needs", description: "Comprehensive audit of existing processes" },
        { step: 2, title: "Design Solution", description: "Custom architecture and implementation plan" },
        { step: 3, title: "Deploy Securely", description: "Phased rollout with security compliance" },
        { step: 4, title: "Scale & Optimize", description: "Continuous optimization and support" }
      ],
      metrics: [
        { label: "Security Score", value: "SOC 2" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Process Efficiency", value: "+300%" }
      ],
      cta: "Contact Enterprise Sales"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Solutions tailored for your team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how different teams leverage our platform to solve their unique challenges 
            and achieve remarkable results.
          </p>
        </div>

        <Tabs defaultValue="marketing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2">
                <useCase.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Overview */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center`}>
                          <useCase.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{useCase.title}</CardTitle>
                          <CardDescription className="text-base">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {useCase.metrics.map((metric, index) => (
                      <Card key={index} className="text-center">
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button className="w-full">
                    {useCase.cta}
                  </Button>
                </div>

                {/* Right Column - Workflow */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Workflow className="h-5 w-5" />
                        How it works
                      </CardTitle>
                      <CardDescription>
                        See the automated workflow in action
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {useCase.workflow.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white font-semibold text-sm`}>
                              {step.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                      
                      <div className="pt-4 border-t">
                        <Button variant="outline" className="w-full">
                          <Clock className="mr-2 h-4 w-4" />
                          See Full Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
