import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/product", label: "Product" },
    { href: "/solutions", label: "Solutions" },
    { href: "/resources", label: "Resources" },
    { href: "/company", label: "Company" },
    { href: "/enterprise", label: "Enterprise" },
    { href: "/pricing", label: "Pricing" },
  ];

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border animate-slide-in-left">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors duration-300">
              DataFlow
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="nav-link text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-2"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b">
                    <Link 
                      to="/" 
                      className="font-bold text-xl text-foreground"
                      onClick={closeMobileMenu}
                    >
                      DataFlow
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={closeMobileMenu}
                      className="p-2"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 px-6 py-6">
                    <div className="space-y-4 mb-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                          onClick={closeMobileMenu}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    {/* Mobile CTA Buttons */}
                    <div className="space-y-4">
                      <Link to="/login" onClick={closeMobileMenu}>
                        <Button 
                          variant="outline" 
                          className="w-full py-3 text-lg font-medium border-2 hover:border-primary/50 hover:bg-primary/5"
                        >
                          Login
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full py-3 text-lg font-medium border-2 hover:border-primary/50 hover:bg-primary/5"
                      >
                        Get a demo
                      </Button>
                      <Link to="/signup" onClick={closeMobileMenu}>
                        <Button 
                          className="w-full py-3 text-lg font-medium bg-primary hover:bg-primary-hover"
                        >
                          Sign up
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 border-t bg-muted/20">
                    <p className="text-sm text-muted-foreground text-center">
                      Join 300,000+ teams worldwide
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;