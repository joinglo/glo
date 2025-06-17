
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown } from "lucide-react";

export interface IntakeFormRef {
  expandForm: () => void;
}

const IntakeForm = forwardRef<IntakeFormRef>((props, ref) => {
  const { toast } = useToast();
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    linkedin: "",
    companyUrl: "",
    email: "",
    whatsapp: "",
    jobTitle: "",
    mrr: "",
    arr: "",
    raised: "",
    cities: "",
  });

  useImperativeHandle(ref, () => ({
    expandForm: () => {
      setIsFormExpanded(true);
    }
  }));

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for required fields
    const requiredFields = [
      'fullName', 'linkedin', 'companyUrl', 'email', 'whatsapp', 
      'jobTitle', 'mrr', 'arr', 'raised', 'cities'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Label htmlFor="linkedin" className="text-foreground font-semibold">LinkedIn *</Label>
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
                  <Label htmlFor="companyUrl" className="text-foreground font-semibold">Company URL *</Label>
                  <Input
                    id="companyUrl"
                    type="url"
                    value={formData.companyUrl}
                    onChange={(e) => handleInputChange("companyUrl", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="https://yourcompany.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground font-semibold">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="+1234567890"
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
                    placeholder="CEO, Founder, etc."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mrr" className="text-foreground font-semibold">MRR * (current monthly recurring revenue)</Label>
                  <Input
                    id="mrr"
                    value={formData.mrr}
                    onChange={(e) => handleInputChange("mrr", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="e.g., $50,000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arr" className="text-foreground font-semibold">ARR * (projected 2025 annual recurring revenue)</Label>
                  <Input
                    id="arr"
                    value={formData.arr}
                    onChange={(e) => handleInputChange("arr", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="e.g., $1,200,000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="raised" className="text-foreground font-semibold">Raised *</Label>
                  <Input
                    id="raised"
                    value={formData.raised}
                    onChange={(e) => handleInputChange("raised", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="e.g., $2M Series A"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cities" className="text-foreground font-semibold">City(s) *</Label>
                  <Input
                    id="cities"
                    value={formData.cities}
                    onChange={(e) => handleInputChange("cities", e.target.value)}
                    className="bg-background border-border text-foreground"
                    placeholder="San Francisco, New York, etc."
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  className="minimal-button px-8 py-3 font-bold rounded-full hover:scale-105 transition-all duration-200"
                >
                  Submit Application
                </Button>
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
