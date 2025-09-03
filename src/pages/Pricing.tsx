import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Choose the plan that best fits your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <div className="text-3xl font-bold mb-4">$29<span className="text-sm text-muted-foreground">/month</span></div>
              <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                <li>• Up to 1,000 records</li>
                <li>• Basic analytics</li>
                <li>• Email support</li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-black">
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <div className="text-3xl font-bold mb-4">$99<span className="text-sm text-muted-foreground">/month</span></div>
              <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                <li>• Up to 10,000 records</li>
                <li>• Advanced analytics</li>
                <li>• Priority support</li>
                <li>• API access</li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">Custom</div>
              <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                <li>• Unlimited records</li>
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
                <li>• SLA guarantee</li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Contact Sales</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
