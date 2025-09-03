import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border animate-slide-in-left">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Always visible on the left */}
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors duration-300 flex-shrink-0">
              DataFlow
            </Link>
          </div>

          {/* Desktop Navigation */}
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
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-primary/5">
                Login
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-black hover:border-gray-600 hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
            >
              Get a demo
            </Button>
            <Link to="/signup">
              <Button 
                size="sm" 
                className="bg-black hover:bg-gray-800 text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link to="/product" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-md">
                Product
              </Link>
              <Link to="/solutions" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-md">
                Solutions
              </Link>
              <Link to="/resources" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-md">
                Resources
              </Link>
              <Link to="/company" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-md">
                Company
              </Link>
              <Link to="/enterprise" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-md">
                Enterprise
              </Link>
              <Link to="/pricing" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-md">
                Pricing
              </Link>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex flex-col space-y-3 px-3">
                  <Link to="/login" onClick={closeMenu}>
                    <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-primary/5 w-full">
                      Login
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-black hover:border-gray-600 hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
                  >
                    Get a demo
                  </Button>
                  <Link to="/signup" onClick={closeMenu}>
                    <Button 
                      size="sm" 
                      className="bg-black hover:bg-gray-800 text-white transition-all duration-300 hover:shadow-lg w-full"
                    >
                      Sign up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;