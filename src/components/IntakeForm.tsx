import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronUp } from "lucide-react";

const IntakeForm = () => {
  const { toast } = useToast();
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    company: "",
    jobTitle: "",
    yearsExperience: "",
    industry: "",
    techStack: "",
    currentRevenue: "",
    fundingStage: "",
    teamSize: "",
    whyJoin: "",
    expectations: "",
    networkingGoals: "",
    commitment: "",
    referralSource: "",
    agreeTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying to GLO. We'll review your application and get back to you soon.",
    });
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Tell us about yourself and your entrepreneurial journey. This helps us understand 
            how you'll contribute to and benefit from the GLO community.
          </p>
          
          <Button
            onClick={() => setIsFormExpanded(!isFormExpanded)}
            className="minimal-button px-8 py-4 font-semibold rounded-full text-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            {isFormExpanded ? "Hide Application Form" : "Start Application"}
            {isFormExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
        </div>

        {isFormExpanded && (
          <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border rounded-2xl p-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-foreground mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="bg-secondary border-border text-foreground"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="bg-secondary border-border text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-foreground">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange("linkedin", e.target.value)}
                  className="bg-secondary border-border text-foreground"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Professional Background */}
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-foreground mb-4">Professional Background</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Current Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-foreground">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground">Years of Experience *</Label>
                  <RadioGroup 
                    value={formData.yearsExperience} 
                    onValueChange={(value) => handleInputChange("yearsExperience", value)}
                    className="flex flex-wrap gap-6"
                  >
                    {["0-2 years", "3-5 years", "6-10 years", "10+ years"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="text-foreground">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-foreground">Industry *</Label>
                    <Input
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => handleInputChange("industry", e.target.value)}
                      className="bg-background border-border text-foreground"
                      placeholder="e.g., SaaS, Fintech, E-commerce"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="techStack" className="text-foreground">Tech Stack</Label>
                    <Input
                      id="techStack"
                      value={formData.techStack}
                      onChange={(e) => handleInputChange("techStack", e.target.value)}
                      className="bg-background border-border text-foreground"
                      placeholder="e.g., React, Python, AWS"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-foreground mb-4">Business Information</h3>
                
                <div className="space-y-3">
                  <Label className="text-foreground">Current Annual Revenue</Label>
                  <RadioGroup 
                    value={formData.currentRevenue} 
                    onValueChange={(value) => handleInputChange("currentRevenue", value)}
                    className="flex flex-wrap gap-6"
                  >
                    {["Pre-revenue", "$0-$100K", "$100K-$1M", "$1M-$10M", "$10M+"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="text-foreground">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground">Funding Stage</Label>
                  <RadioGroup 
                    value={formData.fundingStage} 
                    onValueChange={(value) => handleInputChange("fundingStage", value)}
                    className="flex flex-wrap gap-6"
                  >
                    {["Bootstrapped", "Pre-seed", "Seed", "Series A", "Series B+"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="text-foreground">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize" className="text-foreground">Team Size</Label>
                  <Input
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange("teamSize", e.target.value)}
                    className="bg-secondary border-border text-foreground"
                    placeholder="e.g., 5-10 people"
                  />
                </div>
              </div>

              {/* Application Questions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-foreground mb-4">Application Questions</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="whyJoin" className="text-foreground">Why do you want to join GLO? *</Label>
                  <Textarea
                    id="whyJoin"
                    value={formData.whyJoin}
                    onChange={(e) => handleInputChange("whyJoin", e.target.value)}
                    className="bg-background border-border text-foreground min-h-[100px]"
                    placeholder="Tell us about your motivation and what you hope to gain from the community..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectations" className="text-foreground">What are your expectations from the GLO community? *</Label>
                  <Textarea
                    id="expectations"
                    value={formData.expectations}
                    onChange={(e) => handleInputChange("expectations", e.target.value)}
                    className="bg-background border-border text-foreground min-h-[100px]"
                    placeholder="Describe what you hope to achieve through networking, events, and resources..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="networkingGoals" className="text-foreground">What are your networking goals?</Label>
                  <Textarea
                    id="networkingGoals"
                    value={formData.networkingGoals}
                    onChange={(e) => handleInputChange("networkingGoals", e.target.value)}
                    className="bg-background border-border text-foreground min-h-[80px]"
                    placeholder="What type of connections are you looking to make?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="commitment" className="text-foreground">How do you plan to contribute to the community? *</Label>
                  <Textarea
                    id="commitment"
                    value={formData.commitment}
                    onChange={(e) => handleInputChange("commitment", e.target.value)}
                    className="bg-background border-border text-foreground min-h-[100px]"
                    placeholder="Describe how you would give back to fellow community members..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referralSource" className="text-foreground">How did you hear about GLO?</Label>
                  <Input
                    id="referralSource"
                    value={formData.referralSource}
                    onChange={(e) => handleInputChange("referralSource", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="e.g., Twitter, LinkedIn, friend referral, etc."
                  />
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeTerms" className="text-foreground">
                    I agree to the terms and conditions and privacy policy *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="minimal-button w-full md:w-auto px-12 py-4 font-semibold rounded-full text-lg hover:scale-105 transition-all duration-200"
                >
                  Submit Application
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default IntakeForm;
