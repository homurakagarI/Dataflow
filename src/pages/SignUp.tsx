import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { 
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Chrome,
  Github,
  Shield,
  CheckCircle,
  Zap,
  Users
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      terms?: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle sign up logic here
      console.log("Sign up attempt:", { ...formData, agreeToTerms });
    }, 1000);
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
    // Handle social sign up logic here
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
                    Create your{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      account
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
                    Join thousands of teams who use DataFlow to automate their workflows 
                    and boost productivity. Get started for free in minutes.
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Free Forever Plan</div>
                      <div className="text-xs text-muted-foreground">No credit card required</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Quick Setup</div>
                      <div className="text-xs text-muted-foreground">Ready in 2 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Team Collaboration</div>
                      <div className="text-xs text-muted-foreground">Invite unlimited members</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Enterprise Security</div>
                      <div className="text-xs text-muted-foreground">SOC 2 compliant</div>
                    </div>
                  </div>
                </div>

                {/* Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format"
                    alt="Team working together"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Right Side - Sign Up Form */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
                    <CardDescription>
                      Create your account and start automating today
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Social Sign Up Buttons */}
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full h-11 group hover:bg-red-50 hover:border-red-200 transition-all duration-300"
                        onClick={() => handleSocialSignUp('Google')}
                      >
                        <Chrome className="mr-3 h-5 w-5 text-red-500" />
                        Continue with Google
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full h-11 group hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                        onClick={() => handleSocialSignUp('GitHub')}
                      >
                        <Github className="mr-3 h-5 w-5" />
                        Continue with GitHub
                      </Button>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                      <Separator />
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-muted-foreground">
                        or create with email
                      </span>
                    </div>

                    {/* Sign Up Form */}
                    <form onSubmit={handleSignUp} className="space-y-5">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`pl-10 h-11 transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                              errors.name ? 'border-red-500 focus:border-red-500' : ''
                            }`}
                            required
                          />
                        </div>
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`pl-10 h-11 transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                              errors.email ? 'border-red-500 focus:border-red-500' : ''
                            }`}
                            required
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email}</p>
                        )}
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
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className={`pl-10 pr-10 h-11 transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                              errors.password ? 'border-red-500 focus:border-red-500' : ''
                            }`}
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
                        {errors.password && (
                          <p className="text-xs text-red-500">{errors.password}</p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Must be at least 8 characters long
                        </p>
                      </div>

                      {/* Confirm Password Field */}
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            className={`pl-10 pr-10 h-11 transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                              errors.confirmPassword ? 'border-red-500 focus:border-red-500' : ''
                            }`}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-xs text-red-500">{errors.confirmPassword}</p>
                        )}
                      </div>

                      {/* Terms & Conditions */}
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="terms"
                            checked={agreeToTerms}
                            onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
                            className={errors.terms ? 'border-red-500' : ''}
                          />
                          <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                            I agree to the{" "}
                            <Link to="/terms" className="text-primary hover:text-primary-hover underline-offset-4 hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link to="/privacy" className="text-primary hover:text-primary-hover underline-offset-4 hover:underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>
                        {errors.terms && (
                          <p className="text-xs text-red-500 ml-6">{errors.terms}</p>
                        )}
                      </div>

                      {/* Sign Up Button */}
                      <Button 
                        type="submit" 
                        className="w-full h-11 bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Creating account...
                          </div>
                        ) : (
                          <>
                            Create Account
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>

                    {/* Login Link */}
                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link 
                          to="/login" 
                          className="text-primary hover:text-primary-hover transition-colors font-medium underline-offset-4 hover:underline"
                        >
                          Log in
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    By creating an account, you acknowledge that you have read and understood our{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
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

export default SignUp;
