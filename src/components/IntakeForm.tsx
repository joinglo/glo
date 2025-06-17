
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
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
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
          <div className="bg-background">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="LinkedIn"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="companyUrl"
                    type="url"
                    value={formData.companyUrl}
                    onChange={(e) => handleInputChange("companyUrl", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="Company URL"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="WhatsApp"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="Job Title"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="mrr"
                    value={formData.mrr}
                    onChange={(e) => handleInputChange("mrr", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="MRR (current monthly recurring revenue)"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="arr"
                    value={formData.arr}
                    onChange={(e) => handleInputChange("arr", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="ARR (projected 2025 annual recurring revenue)"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="raised"
                    value={formData.raised}
                    onChange={(e) => handleInputChange("raised", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="Raised"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="cities"
                    value={formData.cities}
                    onChange={(e) => handleInputChange("cities", e.target.value)}
                    className="bg-muted/30 border-muted text-foreground h-12 text-base placeholder:text-muted-foreground/60"
                    placeholder="City(s)"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 h-12 font-semibold rounded-md text-base"
                >
                  Submit
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
