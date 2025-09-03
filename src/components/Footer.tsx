import { FaLinkedin, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="bg-gray-50 bg-cover bg-no-repeat bg-center min-h-[1600px] relative"
      style={{
        backgroundImage:
          "url('https://assets.clayrun.dev/Clay%20brand/img-clay-footer-garden.png')",
        backgroundPosition: "center 200px",
      }}
    >
      {/* Top CTA Section (separate, outside card) */}
      <div className="text-center py-20 px-6 md:px-10 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Turn your growth <br className="hidden md:block" />
          ideas into reality today
        </h1>
        <p className="text-gray-600 mb-6">
          Start your 14-day Pro trial today. No credit card required.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
            Start building for free →
          </button>
          <button className="px-6 py-3 border border-black rounded-full font-medium hover:bg-gray-100 transition">
            Get a demo →
          </button>
        </div>
      </div>

      {/* Footer Card containing middle CTA + links */}
      <footer className="absolute left-1/2 transform -translate-x-1/2 translate-y-[180px] bg-white text-black py-16 px-6 md:px-20 max-w-7xl w-full rounded-3xl shadow-lg mt-20">
        <div className="rounded-3xl bg-white p-8 shadow-md">
          {/* Middle CTA Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Go to market with unique data <br className="hidden md:block" />
              <span className="font-normal">— and the ability to act on it</span>
            </h2>
            <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
              Start building for free →
            </button>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li>Login</li>
                <li>Integrations</li>
                <li>Multi-product data enrichment</li>
                <li>AI formula generator</li>
                <li>AI Research agent</li>
                <li>Personalized copywriting</li>
                <li>Pricing</li>
                <li>Changelog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Tools</h3>
              <ul className="space-y-2">
                <li>Email finder</li>
                <li>Headcount finder</li>
                <li>Checks calculator</li>
                <li>Chrome extension</li>
                <li>Lookup WIKI/ISIN</li>
                <li>CIM calculator</li>
                <li>Margin calculator</li>
                <li>Headcount directory</li>
                <li>Glossary</li>
                <li>Job board</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Blog</h3>
              <ul className="space-y-2">
                <li>Why we built the first GTM</li>
                <li>AI for sales prospecting</li>
                <li>Why good GTM data matters</li>
                <li>Google maps lead generation</li>
                <li>5 easy steps</li>
                <li>Outbound data automation</li>
                <li>Scraping data from websites</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Customers</h3>
              <ul className="space-y-2">
                <li>OpenAI</li>
                <li>Vanta</li>
                <li>Vercel</li>
                <li>Salesforce</li>
                <li>Anthropic</li>
                <li>Coursera</li>
                <li>Rippling</li>
                <li>Customer stories</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>Get started lesson</li>
                <li>University</li>
                <li>Chapters</li>
                <li>Templates</li>
                <li>Inputs</li>
                <li>Join Slack</li>
                <li>Community</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>Wall of love</li>
                <li>About</li>
                <li>Careers</li>
                <li>Creator program</li>
                <li>Integrate with Clay</li>
                <li>Status</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6778506d788ebf16fef48551_Clay%20primary%20logo.avif"
                alt="Clay logo"
                className="h-6"
              />
              <span className="text-xs text-gray-500">© Clay 2025</span>
            </div>
            <div className="flex space-x-4 text-xl text-gray-600">
              <FaLinkedin className="hover:text-black cursor-pointer" />
              <FaYoutube className="hover:text-black cursor-pointer" />
              <FaTwitter className="hover:text-black cursor-pointer" />
              <FaGithub className="hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
