import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground py-3 px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hidden sm:inline-flex">
              🎉 Limited Time
            </Badge>
          </div>
          
          <div className="flex-1 max-w-4xl">
            <span className="font-semibold text-sm sm:text-base">
              Cut costs, access data faster, and automate growth with our comprehensive platform. 
              <span className="hidden sm:inline"> Join 300,000+ teams already transforming their workflows.</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs sm:text-sm font-medium group hidden sm:inline-flex"
            >
              Start Free Trial
              <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Trust Indicators - Mobile */}
        <div className="flex items-center justify-center gap-4 mt-2 text-xs sm:hidden">
          <span className="flex items-center gap-1">
            ✓ No credit card required
          </span>
          <span className="flex items-center gap-1">
            ✓ 14-day free trial
          </span>
          <span className="flex items-center gap-1">
            ✓ Cancel anytime
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
