
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    story: "",
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
    <section id="intake-form" className="py-16 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Explore a membership to our private community of startup founders.
          </h2>
          
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
          <div className="bg-background max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground/80 mb-2">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-foreground/80 mb-2">
                    LinkedIn <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="LinkedIn"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="companyUrl" className="block text-sm font-medium text-foreground/80 mb-2">
                    Company URL <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="companyUrl"
                    type="url"
                    value={formData.companyUrl}
                    onChange={(e) => handleInputChange("companyUrl", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Company URL"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground/80 mb-2">
                    WhatsApp <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="WhatsApp"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground/80 mb-2">
                    Job Title <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Job Title"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mrr" className="block text-sm font-medium text-foreground/80 mb-2">
                    MRR <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="mrr"
                    value={formData.mrr}
                    onChange={(e) => handleInputChange("mrr", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Current monthly recurring revenue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="arr" className="block text-sm font-medium text-foreground/80 mb-2">
                    ARR <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="arr"
                    value={formData.arr}
                    onChange={(e) => handleInputChange("arr", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Projected 2025 annual recurring revenue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="raised" className="block text-sm font-medium text-foreground/80 mb-2">
                    Raised <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="raised"
                    value={formData.raised}
                    onChange={(e) => handleInputChange("raised", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Raised"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cities" className="block text-sm font-medium text-foreground/80 mb-2">
                    City(s) <span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="cities"
                    value={formData.cities}
                    onChange={(e) => handleInputChange("cities", e.target.value)}
                    className="w-full h-12 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="City(s)"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <Label htmlFor="story" className="text-sm font-medium text-foreground/80 mb-2 block">
                  Tell us your story
                </Label>
                <p className="text-xs text-muted-foreground mb-3">
                  What will you bring to the community? (company goals: fundraise/invest, sales/GTM, other; personal goals: financial freedom, relationships, health, peace of mind)
                </p>
                <Textarea
                  id="story"
                  value={formData.story}
                  onChange={(e) => handleInputChange("story", e.target.value)}
                  className="w-full min-h-[100px] px-4 py-3 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Share your journey and aspirations..."
                />
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-3 h-12 font-semibold rounded-md text-base min-w-[200px]"
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
