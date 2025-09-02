import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Volume2, VolumeX, Maximize, RotateCcw, FastForward } from "lucide-react";
import { useState } from "react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const ProductDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const demoSteps = [
    {
      title: "Connect Your Data Sources",
      description: "Easily integrate with 200+ platforms including CRMs, databases, and APIs with our visual connector.",
      timestamp: "0:15"
    },
    {
      title: "Build Automated Workflows",
      description: "Drag and drop components to create complex automation workflows without coding.",
      timestamp: "0:45"
    },
    {
      title: "AI-Powered Data Processing",
      description: "Watch our AI research agent automatically enrich and analyze your data in real-time.",
      timestamp: "1:20"
    },
    {
      title: "Monitor & Optimize",
      description: "Track performance with detailed analytics and optimize your workflows for maximum efficiency.",
      timestamp: "2:00"
    }
  ];

  const features = [
    { label: "Visual Workflow Builder", time: "See it at 0:45" },
    { label: "Real-time Data Sync", time: "Demo at 1:20" },
    { label: "AI Research Agent", time: "Watch at 1:35" },
    { label: "Custom Analytics", time: "View at 2:00" }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Interactive Demo
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See our platform in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how teams use our platform to automate their data workflows and 
            achieve 10x faster processing times.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black rounded-t-lg">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img 
                    src={dashboardMockup}
                    alt="Product Demo"
                    className="w-full h-full object-cover opacity-80"
                  />
                  
                  {/* Play Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button 
                        size="lg"
                        onClick={() => setIsPlaying(true)}
                        className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-black hover:text-black shadow-2xl"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                  )}

                  {/* Video Controls */}
                  {isPlaying && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/80 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="text-white hover:text-white hover:bg-white/20"
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => setIsMuted(!isMuted)}
                            className="text-white hover:text-white hover:bg-white/20"
                          >
                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </Button>
                          <span className="text-white text-sm">1:23 / 2:30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            className="text-white hover:text-white hover:bg-white/20"
                          >
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            className="text-white hover:text-white hover:bg-white/20"
                          >
                            <FastForward className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            className="text-white hover:text-white hover:bg-white/20"
                          >
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl mb-2">Complete Product Walkthrough</CardTitle>
                    <CardDescription>
                      2:30 minutes • Learn how to set up and use all major features
                    </CardDescription>
                  </div>
                  <Badge>HD Quality</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{feature.label}</span>
                      <span className="text-primary font-medium">{feature.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo Timeline */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demo Timeline</CardTitle>
                <CardDescription>
                  Jump to specific sections of the walkthrough
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="flex gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm">{step.title}</h4>
                        <span className="text-xs text-primary">{step.timestamp}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Ready to try it yourself?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Start your free trial and explore all features with sample data.
                </p>
                <Button className="w-full">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
