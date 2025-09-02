import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Bot, 
  Workflow, 
  Shield, 
  Zap, 
  Users,
  BarChart3,
  Globe,
  Clock,
  Cpu,
  Lock,
  RefreshCw
} from "lucide-react";

const ProductFeatures = () => {
  const featureCategories = [
    {
      id: "automation",
      label: "Automation",
      icon: Workflow,
      features: [
        {
          icon: Workflow,
          title: "Workflow Builder",
          description: "Drag-and-drop workflow creation with conditional logic and branching.",
          badge: "Most Popular"
        },
        {
          icon: Bot,
          title: "AI Research Agent",
          description: "Intelligent data gathering and analysis powered by advanced AI models.",
          badge: "New"
        },
        {
          icon: RefreshCw,
          title: "Real-time Sync",
          description: "Keep your data synchronized across all platforms in real-time.",
          badge: null
        },
        {
          icon: Clock,
          title: "Scheduled Tasks",
          description: "Automate recurring processes with flexible scheduling options.",
          badge: null
        }
      ]
    },
    {
      id: "integrations",
      label: "Integrations",
      icon: Database,
      features: [
        {
          icon: Database,
          title: "200+ Data Sources",
          description: "Connect to CRMs, databases, APIs, and cloud services seamlessly.",
          badge: "Enterprise"
        },
        {
          icon: Globe,
          title: "REST API",
          description: "Full REST API access for custom integrations and third-party tools.",
          badge: null
        },
        {
          icon: Zap,
          title: "Webhooks",
          description: "Real-time event notifications and data synchronization.",
          badge: null
        },
        {
          icon: Users,
          title: "CRM Enrichment",
          description: "Automatically enrich customer data with contact information and insights.",
          badge: "Popular"
        }
      ]
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      features: [
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description: "Deep insights with customizable dashboards and reporting tools.",
          badge: null
        },
        {
          icon: Cpu,
          title: "ML Insights",
          description: "Machine learning-powered predictions and trend analysis.",
          badge: "Pro"
        },
        {
          icon: Database,
          title: "Data Warehouse",
          description: "Centralized data storage with query optimization and indexing.",
          badge: null
        },
        {
          icon: Globe,
          title: "Custom Reports",
          description: "Create and share custom reports with stakeholders.",
          badge: null
        }
      ]
    },
    {
      id: "security",
      label: "Security",
      icon: Shield,
      features: [
        {
          icon: Shield,
          title: "SOC 2 Compliance",
          description: "Bank-level security with comprehensive compliance certifications.",
          badge: "Enterprise"
        },
        {
          icon: Lock,
          title: "End-to-End Encryption",
          description: "Military-grade encryption for data in transit and at rest.",
          badge: null
        },
        {
          icon: Users,
          title: "Role-Based Access",
          description: "Granular permissions and access controls for team members.",
          badge: null
        },
        {
          icon: RefreshCw,
          title: "Audit Logs",
          description: "Comprehensive logging and monitoring of all system activities.",
          badge: null
        }
      ]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive feature breakdown
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our powerful capabilities organized by category. Each feature is designed 
            to integrate seamlessly with your existing workflows.
          </p>
        </div>

        <Tabs defaultValue="automation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {featureCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {featureCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <feature.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {feature.title}
                            </CardTitle>
                          </div>
                        </div>
                        {feature.badge && (
                          <Badge variant={feature.badge === "New" ? "default" : "secondary"}>
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductFeatures;
