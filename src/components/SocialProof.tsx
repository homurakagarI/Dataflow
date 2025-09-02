import { Star } from "lucide-react";
import testimonialPhoto from "@/assets/testimonial-photo.jpg";
import { useCountAnimation, useScrollAnimation } from "@/hooks/use-scroll-animation";

const SocialProof = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();
  const { elementRef: ratingRef, count: ratingCount } = useCountAnimation(49, 2000, 300);
  const { elementRef: communityRef, count: communityCount } = useCountAnimation(20, 2000, 600);
  const { elementRef: teamsRef, count: teamsCount } = useCountAnimation(300, 2000, 900);
  
  const logos = [
    "Microsoft", "Google", "Amazon", "Stripe", "Shopify", "Netflix"
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-muted/30">
      <div className="container-custom">
        {/* Trust Logos */}
        <div className="text-center mb-12">
          <p className={`text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div 
                key={logo} 
                className={`text-center text-lg font-semibold text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-110 cursor-pointer grayscale hover:grayscale-0 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ 
                  animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                  filter: 'grayscale(1) hover:grayscale(0)'
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div ref={ratingRef} className={`text-center transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="flex items-center justify-center mb-2">
              <Star className="h-5 w-5 text-warning fill-current animate-pulse" />
              <Star className="h-5 w-5 text-warning fill-current animate-pulse" style={{ animationDelay: '0.1s' }} />
              <Star className="h-5 w-5 text-warning fill-current animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Star className="h-5 w-5 text-warning fill-current animate-pulse" style={{ animationDelay: '0.3s' }} />
              <Star className="h-5 w-5 text-warning fill-current animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <div className="text-2xl font-bold text-foreground">
              {ratingCount / 10}.{ratingCount % 10} rating
            </div>
            <div className="text-sm text-muted-foreground">Based on 2,000+ reviews</div>
          </div>
          
          <div ref={communityRef} className={`text-center transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-foreground mb-1">
              {communityCount}K+ community
            </div>
            <div className="text-sm text-muted-foreground">Active developers building</div>
          </div>
          
          <div ref={teamsRef} className={`text-center transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl font-bold text-foreground mb-1">
              {teamsCount},000+ teams
            </div>
            <div className="text-sm text-muted-foreground">Trust our platform</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-custom hover:shadow-custom-lg transition-all duration-500 group">
            <div className="text-center">
              <blockquote className="text-lg text-foreground mb-6 italic group-hover:scale-105 transition-transform duration-300">
                "DataFlow has completely transformed how we handle our data operations. 
                We've reduced processing time by 80% and our team is more productive than ever."
              </blockquote>
              <div className="flex items-center justify-center">
                <img 
                  src={testimonialPhoto} 
                  alt="Sarah Chen" 
                  className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">CTO, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;