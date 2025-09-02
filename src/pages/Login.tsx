import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { 
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Chrome,
  Github,
  Shield,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log("Login attempt:", { email, password, rememberMe });
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center section-padding bg-gradient-to-br from-background via-muted/10 to-primary/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Side - Hero Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                    Welcome{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      back
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
                    Sign in to your DataFlow account to continue automating your workflows 
                    and boosting your team's productivity.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Secure Login</div>
                      <div className="text-xs text-muted-foreground">256-bit SSL encryption</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Trusted by 10K+</div>
                      <div className="text-xs text-muted-foreground">Companies worldwide</div>
                    </div>
                  </div>
                </div>

                {/* Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format"
                    alt="Team collaboration"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
                    <CardDescription>
                      Enter your credentials to access your account
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Social Login Buttons */}
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full h-11 group hover:bg-red-50 hover:border-red-200 transition-all duration-300"
                        onClick={() => handleSocialLogin('Google')}
                      >
                        <Chrome className="mr-3 h-5 w-5 text-red-500" />
                        Continue with Google
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full h-11 group hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                        onClick={() => handleSocialLogin('GitHub')}
                      >
                        <Github className="mr-3 h-5 w-5" />
                        Continue with GitHub
                      </Button>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                      <Separator />
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-muted-foreground">
                        or continue with email
                      </span>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 h-11 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            required
                          />
                        </div>
                      </div>

                      {/* Password Field */}
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10 h-11 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Remember Me & Forgot Password */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setRememberMe(checked === true)}
                          />
                          <Label htmlFor="remember" className="text-sm cursor-pointer">
                            Remember me
                          </Label>
                        </div>
                        <Link 
                          to="/forgot-password" 
                          className="text-sm text-primary hover:text-primary-hover transition-colors underline-offset-4 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      {/* Login Button */}
                      <Button 
                        type="submit" 
                        className="w-full h-11 bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Signing in...
                          </div>
                        ) : (
                          <>
                            Sign In
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>

                    {/* Sign Up Link */}
                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link 
                          to="/signup" 
                          className="text-primary hover:text-primary-hover transition-colors font-medium underline-offset-4 hover:underline"
                        >
                          Sign up for free
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    By signing in, you agree to our{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
