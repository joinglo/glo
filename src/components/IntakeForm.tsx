
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    fullName: "",
    linkedin: "",
    companyWebsite: "",
    mrr: "",
    arr: "",
    raised: "",
    companyGoals: "",
    professionalGoals: "",
    personalGoals: "",
    whatWillYouBring: "",
  });

  const steps = [
    { title: "Basic Information", fields: ["fullName", "linkedin", "companyWebsite"] },
    { title: "Business Metrics", fields: ["mrr", "arr", "raised"] },
    { title: "Goals & Contribution", fields: ["companyGoals", "professionalGoals", "personalGoals", "whatWillYouBring"] }
  ];

  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  useImperativeHandle(ref, () => ({
    expandForm: () => {
      setIsFormExpanded(true);
    }
  }));

  const handleInputChange = (field: string, value: string) => {
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
    
    // Basic validation for required fields
    if (!formData.fullName || !formData.linkedin || !formData.whatWillYouBring) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields to continue.",
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
            <h3 className="text-2xl font-bold text-foreground mb-4">Basic Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-semibold">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="bg-background border-border text-foreground"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-foreground font-semibold">LinkedIn Profile *</Label>
              <Input
                id="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleInputChange("linkedin", e.target.value)}
                className="bg-background border-border text-foreground"
                placeholder="https://linkedin.com/in/yourprofile"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyWebsite" className="text-foreground font-semibold">Company Website</Label>
              <Input
                id="companyWebsite"
                type="url"
                value={formData.companyWebsite}
                onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
                className="bg-background border-border text-foreground"
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Business Metrics</h3>
            
            <div className="space-y-2">
              <Label htmlFor="mrr" className="text-foreground font-semibold">MRR (Current Monthly Recurring Revenue)</Label>
              <Input
                id="mrr"
                value={formData.mrr}
                onChange={(e) => handleInputChange("mrr", e.target.value)}
                className="bg-background border-border text-foreground"
                placeholder="e.g., $50,000"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="arr" className="text-foreground font-semibold">ARR (Projected Annual Recurring Revenue This Year)</Label>
              <Input
                id="arr"
                value={formData.arr}
                onChange={(e) => handleInputChange("arr", e.target.value)}
                className="bg-background border-border text-foreground"
                placeholder="e.g., $1,200,000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="raised" className="text-foreground font-semibold">Amount Raised</Label>
              <Input
                id="raised"
                value={formData.raised}
                onChange={(e) => handleInputChange("raised", e.target.value)}
                className="bg-background border-border text-foreground"
                placeholder="e.g., $2M Series A"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Goals & Contribution</h3>
            
            <div className="space-y-2">
              <Label htmlFor="companyGoals" className="text-foreground font-semibold">Company Goals (Optional)</Label>
              <Textarea
                id="companyGoals"
                value={formData.companyGoals}
                onChange={(e) => handleInputChange("companyGoals", e.target.value)}
                className="bg-background border-border text-foreground min-h-[80px]"
                placeholder="What are your company's main objectives for this year?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="professionalGoals" className="text-foreground font-semibold">Professional Goals (Optional)</Label>
              <Textarea
                id="professionalGoals"
                value={formData.professionalGoals}
                onChange={(e) => handleInputChange("professionalGoals", e.target.value)}
                className="bg-background border-border text-foreground min-h-[80px]"
                placeholder="What are your professional development goals?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="personalGoals" className="text-foreground font-semibold">Personal Goals (Optional)</Label>
              <Textarea
                id="personalGoals"
                value={formData.personalGoals}
                onChange={(e) => handleInputChange("personalGoals", e.target.value)}
                className="bg-background border-border text-foreground min-h-[80px]"
                placeholder="What are your personal aspirations?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatWillYouBring" className="text-foreground font-semibold">What will you bring to the community? *</Label>
              <Textarea
                id="whatWillYouBring"
                value={formData.whatWillYouBring}
                onChange={(e) => handleInputChange("whatWillYouBring", e.target.value)}
                className="bg-background border-border text-foreground min-h-[100px]"
                placeholder="Tell us about your skill share, experience, expertise, or 'sauce' you'd contribute to fellow entrepreneurs..."
                required
              />
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
