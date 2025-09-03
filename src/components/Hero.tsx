import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-32 pb-20">
      {/* Flower Decorations */}
      {/* Top Left Flower - Purple */}
      <div className="absolute top-16 left-8 z-5 animate-float" style={{ animationDelay: '0s' }}>
        <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
          <g transform="translate(60,60)">
            {/* Petals */}
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(0)"/>
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(45)"/>
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(90)"/>
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(135)"/>
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(180)"/>
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(225)"/>
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(270)"/>
            <ellipse cx="0" cy="-35" rx="12" ry="25" fill="#a855f7" opacity="0.9" transform="rotate(315)"/>
            {/* Center */}
            <circle cx="0" cy="0" r="8" fill="#fbbf24"/>
          </g>
        </svg>
      </div>

      {/* Top Right Flower - Blue */}
      <div className="absolute top-20 right-12 z-5 animate-float" style={{ animationDelay: '1s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-lg">
          <g transform="translate(50,50)">
            {/* Petals */}
            <ellipse cx="0" cy="-30" rx="10" ry="20" fill="#3b82f6" opacity="0.9" transform="rotate(0)"/>
            <ellipse cx="0" cy="-30" rx="10" ry="20" fill="#3b82f6" opacity="0.9" transform="rotate(60)"/>
            <ellipse cx="0" cy="-30" rx="10" ry="20" fill="#3b82f6" opacity="0.9" transform="rotate(120)"/>
            <ellipse cx="0" cy="-30" rx="10" ry="20" fill="#3b82f6" opacity="0.9" transform="rotate(180)"/>
            <ellipse cx="0" cy="-30" rx="10" ry="20" fill="#3b82f6" opacity="0.9" transform="rotate(240)"/>
            <ellipse cx="0" cy="-30" rx="10" ry="20" fill="#3b82f6" opacity="0.9" transform="rotate(300)"/>
            {/* Center */}
            <circle cx="0" cy="0" r="7" fill="#fbbf24"/>
          </g>
        </svg>
      </div>

      {/* Bottom Left Flower - Orange/Red */}
      <div className="absolute bottom-24 left-16 z-5 animate-float" style={{ animationDelay: '2s' }}>
        <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-lg">
          <g transform="translate(70,70)">
            {/* Petals */}
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#f97316" opacity="0.9" transform="rotate(0)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#ef4444" opacity="0.9" transform="rotate(40)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#f97316" opacity="0.9" transform="rotate(80)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#ef4444" opacity="0.9" transform="rotate(120)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#f97316" opacity="0.9" transform="rotate(160)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#ef4444" opacity="0.9" transform="rotate(200)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#f97316" opacity="0.9" transform="rotate(240)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#ef4444" opacity="0.9" transform="rotate(280)"/>
            <ellipse cx="0" cy="-40" rx="14" ry="28" fill="#f97316" opacity="0.9" transform="rotate(320)"/>
            {/* Center */}
            <circle cx="0" cy="0" r="9" fill="#fbbf24"/>
          </g>
        </svg>
      </div>

      {/* Middle Right Small Flower - Green */}
      <div className="absolute top-1/2 right-8 z-5 animate-float" style={{ animationDelay: '3s' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
          <g transform="translate(40,40)">
            {/* Petals */}
            <ellipse cx="0" cy="-25" rx="8" ry="15" fill="#22c55e" opacity="0.9" transform="rotate(0)"/>
            <ellipse cx="0" cy="-25" rx="8" ry="15" fill="#22c55e" opacity="0.9" transform="rotate(72)"/>
            <ellipse cx="0" cy="-25" rx="8" ry="15" fill="#22c55e" opacity="0.9" transform="rotate(144)"/>
            <ellipse cx="0" cy="-25" rx="8" ry="15" fill="#22c55e" opacity="0.9" transform="rotate(216)"/>
            <ellipse cx="0" cy="-25" rx="8" ry="15" fill="#22c55e" opacity="0.9" transform="rotate(288)"/>
            {/* Center */}
            <circle cx="0" cy="0" r="6" fill="#fbbf24"/>
          </g>
        </svg>
      </div>

      {/* Flowing Vine/Stem Elements */}
      <div className="absolute top-32 left-24 z-4">
        <svg width="300" height="200" viewBox="0 0 300 200" className="opacity-60">
          <path 
            d="M20,20 Q80,80 140,60 T260,120" 
            stroke="#16a34a" 
            strokeWidth="6" 
            fill="none" 
            strokeLinecap="round"
            className="animate-pulse"
          />
          {/* Small leaves along the vine */}
          <ellipse cx="60" cy="50" rx="8" ry="15" fill="#16a34a" opacity="0.8" transform="rotate(45 60 50)"/>
          <ellipse cx="120" cy="65" rx="8" ry="15" fill="#16a34a" opacity="0.8" transform="rotate(-30 120 65)"/>
          <ellipse cx="180" cy="85" rx="8" ry="15" fill="#16a34a" opacity="0.8" transform="rotate(60 180 85)"/>
        </svg>
      </div>

      <div className="absolute bottom-32 right-24 z-4">
        <svg width="250" height="150" viewBox="0 0 250 150" className="opacity-60">
          <path 
            d="M220,20 Q160,60 100,40 T20,100" 
            stroke="#16a34a" 
            strokeWidth="5" 
            fill="none" 
            strokeLinecap="round"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          {/* Small leaves along the vine */}
          <ellipse cx="180" cy="35" rx="6" ry="12" fill="#16a34a" opacity="0.8" transform="rotate(-45 180 35)"/>
          <ellipse cx="130" cy="50" rx="6" ry="12" fill="#16a34a" opacity="0.8" transform="rotate(30 130 50)"/>
          <ellipse cx="80" cy="65" rx="6" ry="12" fill="#16a34a" opacity="0.8" transform="rotate(-60 80 65)"/>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="font-semibold text-6xl sm:text-7xl lg:text-8xl text-black leading-tight tracking-tight animate-fade-in-delay-100">
              Go to market with{" "}
              <span className="relative">
                unique data
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 animate-fade-in-delay-300" style={{ animation: 'scaleX 1s ease-out 0.8s forwards' }}></div>
              </span>
              —and the ability to act on it
            </h1>
            
            <div className="space-y-4 animate-fade-in-delay-200">
              <p className="text-xl sm:text-2xl font-semibold text-black leading-relaxed max-w-4xl mx-auto">
                Access 130+ premium data sources and GTM's most beloved AI research agent. Then automate growth workflows to turn insights into revenue.
              </p>
            </div>
            
            <div className="flex justify-center animate-fade-in-delay-300 mb-8">
              <Button 
                size="lg" 
                className="group bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg"
              >
                Start building for free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Trust Message */}
            <div className="animate-fade-in-delay-400 space-y-6">
              <p className="text-sm text-gray-600 font-medium tracking-wide">
                Trusted by more than 300,000 leading GTM teams of all sizes
              </p>
              <div className="flex justify-center items-center gap-6 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span>4.9 rating</span>
                </div>
                <div>
                  20K+ GTM engineering community
                </div>
              </div>
              
              {/* Company Logos */}
              <div className="pt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center max-w-5xl mx-auto">
                  {/* Row 1 */}
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-500">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Google
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-600">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      HubSpot
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-700">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Vanta
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-800">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Intercom
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-900">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      OpenAI
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-1000">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Webflow
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-1100">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Cursor
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-1200">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Anthropic
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-1300">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Notion
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-1400">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Perplexity
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-1500">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Figma
                    </div>
                  </div>
                  <div className="group flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 animate-fade-in-delay-1600">
                    <div className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      Uber
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enrichment Coverage Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-24 max-w-7xl mx-auto">
          {/* Left side - Text */}
          <div className="space-y-6 animate-fade-in-delay-700">
            {/* Feature Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors duration-200">
                Best data + AI agents
              </button>
              <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors duration-200">
                Flexible workflows
              </button>
              <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors duration-200">
                GTM stack consolidation
              </button>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="text-black">Boost your enrichment coverage</span>{" "}
              <span className="text-gray-600">—including unique data your competitors miss</span>
            </h2>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="group bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-lg shadow-lg"
              >
                Start building for free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative animate-fade-in-delay-800">
            <div className="aspect-video rounded-2xl overflow-hidden p-12">
              <img 
                src="https://images-ext-1.discordapp.net/external/ULF1b8ZC62TDfVUWeibcnBpD0jiyv0EuXTZmijRSbTw/https/cdn.prod.website-files.com/61477f2c24a826836f969afe/678feb2c80e96ce6b8333da2_Watering-Can-Yellow.avif"
                alt="Data enrichment dashboard showing unique data sources"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;