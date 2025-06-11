import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export interface IntakeFormRef {
  expandForm: () => void;
}

const IntakeForm = forwardRef<IntakeFormRef>((props, ref) => {
  const { toast } = useToast();
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
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

  const steps = [
    { title: "Personal Information", fields: ["firstName", "lastName", "email", "phone", "linkedin"] },
    { title: "Professional Background", fields: ["company", "jobTitle", "yearsExperience", "industry", "techStack"] },
    { title: "Business Information", fields: ["currentRevenue", "fundingStage", "teamSize"] },
    { title: "Application Questions", fields: ["whyJoin", "expectations", "networkingGoals", "commitment", "referralSource"] },
    { title: "Review & Submit", fields: ["agreeTerms"] }
  ];

  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  useImperativeHandle(ref, () => ({
    expandForm: () => {
      setIsFormExpanded(true);
    }
  }));

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground font-semibold">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="bg-secondary border-border text-foreground"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground font-semibold">Last Name *</Label>
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
                <Label htmlFor="email" className="text-foreground font-semibold">Email Address *</Label>
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
                <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number</Label>
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
              <Label htmlFor="linkedin" className="text-foreground font-semibold">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleInputChange("linkedin", e.target.value)}
                className="bg-secondary border-border text-foreground"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Professional Background</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-semibold">Current Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="bg-background border-border text-foreground"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-foreground font-semibold">Job Title *</Label>
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
              <Label className="text-foreground font-semibold">Years of Experience *</Label>
              <RadioGroup 
                value={formData.yearsExperience} 
                onValueChange={(value) => handleInputChange("yearsExperience", value)}
                className="flex flex-wrap gap-6"
              >
                {["0-2 years", "3-5 years", "6-10 years", "10+ years"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="text-foreground font-medium">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="industry" className="text-foreground font-semibold">Industry *</Label>
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
                <Label htmlFor="techStack" className="text-foreground font-semibold">Tech Stack</Label>
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
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Business Information</h3>
            
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">Current Annual Revenue</Label>
              <RadioGroup 
                value={formData.currentRevenue} 
                onValueChange={(value) => handleInputChange("currentRevenue", value)}
                className="flex flex-wrap gap-6"
              >
                {["Pre-revenue", "$0-$100K", "$100K-$1M", "$1M-$10M", "$10M+"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="text-foreground font-medium">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="text-foreground font-semibold">Funding Stage</Label>
              <RadioGroup 
                value={formData.fundingStage} 
                onValueChange={(value) => handleInputChange("fundingStage", value)}
                className="flex flex-wrap gap-6"
              >
                {["Bootstrapped", "Pre-seed", "Seed", "Series A", "Series B+"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="text-foreground font-medium">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize" className="text-foreground font-semibold">Team Size</Label>
              <Input
                id="teamSize"
                value={formData.teamSize}
                onChange={(e) => handleInputChange("teamSize", e.target.value)}
                className="bg-secondary border-border text-foreground"
                placeholder="e.g., 5-10 people"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Application Questions</h3>
            
            <div className="space-y-2">
              <Label htmlFor="whyJoin" className="text-foreground font-semibold">Why do you want to join GLO? *</Label>
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
              <Label htmlFor="expectations" className="text-foreground font-semibold">What are your expectations from the GLO community? *</Label>
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
              <Label htmlFor="networkingGoals" className="text-foreground font-semibold">What are your networking goals?</Label>
              <Textarea
                id="networkingGoals"
                value={formData.networkingGoals}
                onChange={(e) => handleInputChange("networkingGoals", e.target.value)}
                className="bg-background border-border text-foreground min-h-[80px]"
                placeholder="What type of connections are you looking to make?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="commitment" className="text-foreground font-semibold">How do you plan to contribute to the community? *</Label>
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
              <Label htmlFor="referralSource" className="text-foreground font-semibold">How did you hear about GLO?</Label>
              <Input
                id="referralSource"
                value={formData.referralSource}
                onChange={(e) => handleInputChange("referralSource", e.target.value)}
                className="bg-background border-border text-foreground"
                placeholder="e.g., Twitter, LinkedIn, friend referral, etc."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Review & Submit</h3>
            
            <div className="bg-secondary rounded-lg p-6 space-y-4">
              <h4 className="font-semibold text-foreground">Application Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Name:</span>
                  <span className="ml-2 text-foreground">{formData.firstName} {formData.lastName}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <span className="ml-2 text-foreground">{formData.email}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Company:</span>
                  <span className="ml-2 text-foreground">{formData.company}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Title:</span>
                  <span className="ml-2 text-foreground">{formData.jobTitle}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
              />
              <Label htmlFor="agreeTerms" className="text-foreground font-medium">
                I agree to the terms and conditions and privacy policy *
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="intake-form" className="py-12 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-semibold">
            Tell us about yourself and your entrepreneurial journey. This helps us understand 
            how you'll contribute to and benefit from the GLO community.
          </p>
          
          {!isFormExpanded && (
            <Button
              onClick={() => setIsFormExpanded(true)}
              className="minimal-button px-8 py-4 font-bold rounded-full text-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
              data-expand-form
            >
              Start Application
              <ChevronDown size={20} />
            </Button>
          )}
        </div>

        {isFormExpanded && (
          <div className="bg-card border border-border rounded-2xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Step {currentStep + 1} of {totalSteps}: {steps[currentStep].title}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step Content */}
              <div className="min-h-[400px]">
                {renderStep()}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft size={16} />
                  Previous
                </Button>

                {currentStep === totalSteps - 1 ? (
                  <Button 
                    type="submit" 
                    className="minimal-button px-8 py-2 font-bold rounded-full hover:scale-105 transition-all duration-200"
                  >
                    Submit Application
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="minimal-button px-8 py-2 font-bold rounded-full hover:scale-105 transition-all duration-200 flex items-center gap-2"
                  >
                    Next
                    <ChevronRight size={16} />
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
});

IntakeForm.displayName = "IntakeForm";

export default IntakeForm;

}
