import React from "react";
import { Star, Quote } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const SocialProof = () => {
  return (
    <section className="min-h-screen py-20 flex items-center" style={{ backgroundColor: '#0667d9' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enrichment Dialog */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl">
              {/* Dialog Header */}
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Add enrichment</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="p-6 border-b border-gray-200">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">Discover</button>
                <button className="px-6 py-3 text-gray-500 font-medium">Integrations</button>
                <button className="px-6 py-3 text-gray-500 font-medium">Templates</button>
                <button className="px-6 py-3 text-gray-500 font-medium">Recipes</button>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Person Info Section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Person info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">Enrich Person from Profile</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">Personal Email</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">+5</span>
                        <span className="text-xs text-gray-500">-7</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">Mobile Phone (US and Canada)</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">+19</span>
                        <span className="text-xs text-gray-500">-10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">Current Company</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">+2</span>
                        <span className="text-xs text-gray-500">-2</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tools Section */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Tools</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">Perform Search</span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">1 / row</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">Scrape Website</span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">1 / row</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">Use AI</span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">0.5 / row</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm text-gray-700">HTTP API</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Right side - Text */}
          <div className="space-y-6 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Search 100+ providers for any data point: no contracts needed
            </h2>
            
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90">
              Complete GTM coverage demands data from multiple premium sources. On Clay, connect with vetted data providers for any GTM category—and use your API keys with existing providers for free. That includes…
            </p>
            
            <div className="space-y-3 text-lg text-white">
              <div><span className="text-white/70">•</span> Contact information</div>
              <div><span className="text-white/70">•</span> Firmographics</div>
              <div><span className="text-white/70">•</span> Technographics</div>
              <div><span className="text-white/70">•</span> Funding information</div>
              <div><span className="text-white/70">•</span> & more</div>
            </div>
            
            {/* Case Study Card */}
            <div className="mt-8">
              <div className="flex items-end gap-6">
                <div className="flex flex-col">
                  <div className="text-5xl font-bold text-white bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                    &gt;2x
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-3 text-lg mt-0">
                    OpenAI more than doubled enrichment <br /> coverage from low 40% to high 80%
                  </p>
                </div>
              </div>
              {/* White line separator */}
              <div className="w-full h-0.5 bg-white mt-4 mb-4"></div>
              <div className="flex items-center justify-between">
                <div className="text-white/80 text-base">
                  OpenAI
                </div>
                <button className="text-white/80 hover:text-white transition-colors duration-200 text-base flex items-center gap-2">
                  Read case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PurpleSection = () => {
  return (
    <section className="min-h-screen py-20 flex items-center" style={{ backgroundColor: '#8b045c' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - AI Templates Dialog */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl">
              {/* Dialog Header */}
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Templates for Use AI</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="p-6 border-b border-gray-200">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Filters */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-gray-700">Filters</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-blue-500 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700">All</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <span className="text-sm text-gray-600">Public</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <span className="text-sm text-gray-600">Workspace</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <span className="text-sm text-gray-600">You</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Templates List */}
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Thought Leadership Research</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Check if domain uses Google for...</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Mapping claymates to candidate l...</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Normalize company name</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Find Company Domain from Com...</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Ranking Claygent Prompts</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Recent Company News</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Domain Validation</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Company LinkedIn</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Right side - Text */}
          <div className="space-y-6 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Get unique data points with AI research agents
            </h2>
            
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90">
              Automate manual research at scale to uncover data that traditional providers miss. Our agents (with tens of millions of monthly runs!) can:
            </p>
            
            <div className="space-y-3 text-lg text-white">
              <div><span className="text-white/70">•</span> Flag fraudulent domains</div>
              <div><span className="text-white/70">•</span> Summarize job posts or financial docs</div>
              <div><span className="text-white/70">•</span> Create lead scoring models</div>
              <div><span className="text-white/70">•</span> Clean and format data</div>
              <div><span className="text-white/70">•</span> Enrich SMBs like hotels, restaurants, auto shops, etc.</div>
            </div>
            
            {/* Testimonial Card */}
            <div className="mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-white font-medium text-lg mb-4">
                  "Clay has substantially automated and simplified our research process, which previously require manual work from external contractors."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-base">
                      Davide Grieco
                    </div>
                    <div className="text-white/80 text-sm">
                      Head of Growth, Verkada
                    </div>
                  </div>
                </div>
              </div>
              
              {/* White line separator */}
              <div className="w-full h-0.5 bg-white mt-4 mb-4"></div>
              
              {/* Company and Case Study Section */}
              <div className="flex items-center justify-between">
                <div className="text-white/80 text-base font-semibold">
                  VERKADA
                </div>
                <button className="text-white/80 hover:text-white transition-colors duration-200 text-base flex items-center gap-2">
                  Read case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GreenSection = () => {
  return (
    <section className="min-h-screen py-20 flex items-center" style={{ backgroundColor: '#02693e' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Clay Table Interface */}
          <div className="relative">
            {/* Intent Signal Cards */}
            <div className="absolute top-0 left-0 z-10">
              <div className="bg-white rounded-lg shadow-lg p-4 mb-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Tsunoda</p>
                    <p className="text-xs text-gray-500">Visited your site</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-24 left-32 z-10">
              <div className="bg-white rounded-lg shadow-lg p-4 mb-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Peter</p>
                    <p className="text-xs text-gray-500">Changed job</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-12 right-0 z-10">
              <div className="bg-white rounded-lg shadow-lg p-4 mb-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Melissa</p>
                    <p className="text-xs text-gray-500">Was promoted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Clay Table */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl mt-20">
              {/* Table Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-lg font-semibold text-gray-900">Clay table</span>
                  </div>
                </div>
              </div>

              {/* Table Controls */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Default view</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                      Sort
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">0 / 43,918 Rows Selected</span>
                </div>
              </div>

              {/* Table Column Headers */}
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500">
                  <div className="col-span-1"></div>
                  <div className="col-span-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Event: Job Change
                  </div>
                  <div className="col-span-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Preview Company
                  </div>
                  <div className="col-span-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    New Company
                  </div>
                  <div className="col-span-2"></div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    <div className="col-span-1 text-gray-400">1</div>
                    <div className="col-span-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-900">Megan Rose</span>
                    </div>
                    <div className="col-span-3 text-gray-600">Coupa Software</div>
                    <div className="col-span-3 text-gray-600">ServiceNow</div>
                    <div className="col-span-2"></div>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    <div className="col-span-1 text-gray-400">2</div>
                    <div className="col-span-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-900">Aditi Sinha</span>
                    </div>
                    <div className="col-span-3 text-gray-600">Alteryx</div>
                    <div className="col-span-3 text-gray-600">Datadog</div>
                    <div className="col-span-2"></div>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    <div className="col-span-1 text-gray-400">3</div>
                    <div className="col-span-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-900">Nicole Cheng</span>
                    </div>
                    <div className="col-span-3 text-gray-600">Twilio</div>
                    <div className="col-span-3 text-gray-600">Zendesk</div>
                    <div className="col-span-2"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Right side - Text */}
          <div className="space-y-6 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Time your outreach perfectly with real-time intent signals
            </h2>
            
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90">
              Never miss a buying signal. Automatically track and act on key customer events—constantly.
            </p>
            
            <div className="space-y-3 text-lg text-white">
              <div><span className="text-white/70">•</span> Reach out to customers who've changed jobs</div>
              <div><span className="text-white/70">•</span> Congratulate customers on promotions</div>
              <div><span className="text-white/70">•</span> Build lists of companies that just raised funding</div>
              <div><span className="text-white/70">•</span> Email prospects based on new product news</div>
            </div>
            
            {/* Case Study Card */}
            <div className="mt-8">
              <div className="flex items-end gap-6">
                <div className="flex flex-col">
                  <div className="text-5xl font-bold text-white bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                    3M+
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-3 text-lg mt-0">
                    Automated monitoring buying signals from 3M+ companies to prioritize outreach
                  </p>
                </div>
              </div>
              
              <div className="flex items-end gap-6 mt-6">
                <div className="flex flex-col">
                  <div className="text-5xl font-bold text-white bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                    5x
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-3 text-lg mt-0">
                    Added 200+ demos per month and 5x'd team output
                  </p>
                </div>
              </div>
              
              {/* White line separator */}
              <div className="w-full h-0.5 bg-white mt-4 mb-4"></div>
              <div className="flex items-center justify-between">
                <div className="text-white/80 text-base">
                  Coverflex
                </div>
                <button className="text-white/80 hover:text-white transition-colors duration-200 text-base flex items-center gap-2">
                  Read case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const testimonials = [
    {
      quote: "In my professional opinion, Clay has one of the most practical and exciting applications of AI, in a decades-old practice that has long been stale.",
      name: "Keith Jones",
      title: "GTM Systems Lead",
      company: "OpenAI",
      backgroundColor: "#8b045c", // Purple
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clay should be an essential pillar of every company's GTM stack, enabling outbound built on the highest quality data foundation possible. Now you can automate hours of manual research so sales teams can focus on selling.",
      name: "Stevie Case",
      title: "CRO",
      company: "Vanta",
      backgroundColor: "#02693e", // Green
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b8b5?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "This job has always been about creativity, despite how it might seem, and Clay enables me to answer more 'what if we could...' questions from our GTM teams than I ever could before.",
      name: "Alexander DeMoulin",
      title: "Director of Revenue Operations",
      company: "Rippling",
      backgroundColor: "#0667d9", // Blue
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "I love using and working with Clay.com because its extensive customization options allow it to seamlessly integrate into various systems, making it an essential part of our tech stack.",
      name: "David Bulmer",
      title: "Sales Ops",
      company: "Verkada",
      backgroundColor: "#8b045c", // Purple
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clay is a game changer for marketing, data, and operations. We have tripled our enrichment rate with Clay's combination of data providers vs. our previous solution.",
      name: "Adam Wall",
      title: "Head of Sales Operations",
      company: "Notion",
      backgroundColor: "#02693e", // Green
      profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clay is a central part of our outbound campaign program. It's helped us fully automate lead enrichment that previously required expensive and time consuming manual research.",
      name: "Davide Grieco",
      title: "Director of Growth",
      company: "Stripe",
      backgroundColor: "#0667d9", // Blue
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program. Our auto-approval rate has jumped to ~40%.",
      name: "Josh Kim",
      title: "Head of Growth Programs",
      company: "Y Combinator",
      backgroundColor: "#8b045c", // Purple
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clay helps automate mundane tasks like contact data enrichment, so SDRs can focus their time on prioritized selling and spend their days more effectively.",
      name: "Kris Rudegraap",
      title: "CEO",
      company: "Outreach",
      backgroundColor: "#02693e", // Green
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Not having Clay would hugely reduce our ability to run good outbound campaigns. With Clay, we have a reliable source of data enrichment and can run dynamic sequences.",
      name: "Julien Reiman",
      title: "Head of Sales",
      company: "Snowflake",
      backgroundColor: "#0667d9", // Blue
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clay is the Rippling marketing team's secret weapon. It has helped us build an experimentation-driven GTM motion that iterates on ideas and scales what works.",
      name: "Ryan Narod",
      title: "VP, Corporate and Integrated Marketing",
      company: "Rippling",
      backgroundColor: "#8b045c", // Purple
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b8b5?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  // Auto-advance carousel every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen py-20 flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What our customers say about us...
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-sm text-gray-500 font-medium">
                Previous
              </span>
              <span className="text-sm text-gray-500 font-medium">
                Next
              </span>
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <div 
                    className="rounded-2xl p-8 h-full text-white relative overflow-hidden"
                    style={{ backgroundColor: testimonial.backgroundColor }}
                  >
                    {/* Quote */}
                    <div className="mb-8">
                      <p className="text-white text-base leading-relaxed font-medium">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    {/* Divider Line */}
                    <div className="w-full h-0.5 bg-white/30 mb-6"></div>
                    
                    {/* Bottom Section with Profile and Company */}
                    <div className="flex items-center justify-between">
                      {/* Profile Section */}
                      <div className="flex items-center gap-3">
                        <img 
                          src={testimonial.profileImage}
                          alt={`${testimonial.name} profile`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-white text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-white/80 text-xs">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      
                      {/* Company Logo/Name */}
                      <div className="text-right">
                        <p className="text-white font-bold text-lg">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: testimonials.length - 2 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SecuritySection = () => {
  return (
    <section className="min-h-screen py-20 flex items-center bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl">
          {/* Title and Button */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Backed by enterprise-grade security and scale
            </h2>
            <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mb-8">
              Security at Clay
            </button>
          </div>
          
          {/* Security Compliance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* SOC 2 Type II */}
            <div className="text-center">
              {/* SOC 2 Badge Image */}
              <div className="w-64 h-64 mx-auto mb-6">
                <img 
                  src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/678ff28d3da7210678ba8646_SOC2-0001.avif"
                  alt="SOC 2 Type II Compliance Badge"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  We are SOC 2 Type II compliant. Request our SOC 2 in our Trust Center.
                </p>
              </div>
            </div>
            
            {/* GDPR */}
            <div className="text-center">
              {/* GDPR Badge Image */}
              <div className="w-64 h-64 mx-auto mb-6">
                <img 
                  src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/67896c1edb3f2f384f819b99_GDPR-0001.avif"
                  alt="GDPR Compliance Badge"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  Go to market anywhere in the world — let us handle compliance with local laws.
                </p>
              </div>
            </div>
            
            {/* CCPA */}
            <div className="text-center">
              {/* CCPA Badge Image */}
              <div className="w-64 h-64 mx-auto mb-6">
                <img 
                  src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/67896c1edb3f2f384f819b99_GDPR-0001.avif"
                  alt="CCPA Compliance Badge"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  Support your customer base with opt out and DNC support.
                </p>
              </div>
            </div>
            
            {/* ISO 27001 */}
            <div className="text-center">
              {/* ISO 27001 Badge Image */}
              <div className="w-64 h-64 mx-auto mb-6">
                <img 
                  src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/67896c1e53f87da7d3ee3d10_ISO-0001.avif"
                  alt="ISO 27001 Compliance Badge"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  Securely connect your CRM and other systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
export { PurpleSection, GreenSection, TestimonialsSection, SecuritySection };