import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Powerful, scalable data solutions built for enterprise needs.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">Enterprise Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Security & Compliance</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• SOC 2 Type II compliance</li>
                  <li>• Enterprise-grade encryption</li>
                  <li>• GDPR & CCPA compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Scale & Performance</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Unlimited data processing</li>
                  <li>• 99.9% uptime SLA</li>
                  <li>• Global infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
