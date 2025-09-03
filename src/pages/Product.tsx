import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Product
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the powerful features and capabilities of DataFlow.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">Product Features</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Advanced data processing capabilities</li>
              <li>• Real-time analytics and insights</li>
              <li>• Scalable infrastructure</li>
              <li>• Enterprise-grade security</li>
              <li>• Easy integration with existing systems</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
