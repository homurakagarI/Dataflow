import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border animate-slide-in-left">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors duration-300">
              DataFlow
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/product" className="nav-link text-muted-foreground hover:text-foreground transition-colors relative group">
                Product
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/solutions" className="nav-link text-muted-foreground hover:text-foreground transition-colors relative group">
                Solutions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/resources" className="nav-link text-muted-foreground hover:text-foreground transition-colors relative group">
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/company" className="nav-link text-muted-foreground hover:text-foreground transition-colors relative group">
                Company
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/enterprise" className="nav-link text-muted-foreground hover:text-foreground transition-colors relative group">
                Enterprise
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/pricing" className="nav-link text-muted-foreground hover:text-foreground transition-colors relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-primary/5">
                Login
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-md"
            >
              Get a demo
            </Button>
            <Link to="/signup">
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;