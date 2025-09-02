import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductHero from "../components/ProductHero";
import ProductFeatures from "../components/ProductFeatures";
import ProductDemo from "../components/ProductDemo";
import ProductComparison from "../components/ProductComparison";
import ProductCTA from "../components/ProductCTA";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ProductHero />
        <ProductFeatures />
        <ProductDemo />
        <ProductComparison />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
