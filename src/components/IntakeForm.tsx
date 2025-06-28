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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const WEBHOOK_URL = "https://hook.us2.make.com/cormdw65d4eejdwsvpqryytpwvw2stne";

  useImperativeHandle(ref, () => ({
    expandForm: () => {
      setIsFormExpanded(true);
    }
  }));

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);
    console.log("Form submitted:", formData);

    try {
      // Send data to webhook
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "GLO Website Application Form"
        }),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for applying to GLO. We'll review your application and get back to you soon.",
        });
        
        // Reset form
        setFormData({
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
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="intake-form" className="py-4 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
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
          <div className="bg-background max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Full Name *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="LinkedIn *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="companyUrl"
                    type="url"
                    value={formData.companyUrl}
                    onChange={(e) => handleInputChange("companyUrl", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Company URL *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Email *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="WhatsApp *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Job Title *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="mrr"
                    value={formData.mrr}
                    onChange={(e) => handleInputChange("mrr", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Monthly Revenue *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="arr"
                    value={formData.arr}
                    onChange={(e) => handleInputChange("arr", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="2025 ARR Projection *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="raised"
                    value={formData.raised}
                    onChange={(e) => handleInputChange("raised", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Capital Raised *"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="cities"
                    value={formData.cities}
                    onChange={(e) => handleInputChange("cities", e.target.value)}
                    className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="City(s) *"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  What unique value will you contribute to our community? Share your company objectives and personal aspirations.
                </p>
                <Textarea
                  id="story"
                  value={formData.story}
                  onChange={(e) => handleInputChange("story", e.target.value)}
                  className="w-full min-h-[120px] px-4 py-3 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary resize-none text-sm"
                  placeholder="Describe your entrepreneurial journey and vision..."
                />
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-3 h-12 font-semibold rounded-md text-base min-w-[200px] disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Enhanced Airtable Form Section */}
        <div className="mt-20 max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Alternative Application Form
            </h3>
            <p className="text-muted-foreground text-sm">
              Prefer a different format? Use our streamlined application form below.
            </p>
          </div>
          
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25"></div>
            
            {/* Main form container */}
            <div className="relative bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-2xl">
              <div className="bg-background/80 border border-border/30 rounded-xl overflow-hidden shadow-inner">
                <iframe 
                  className="w-full h-[533px] border-0 rounded-xl"
                  src="https://airtable.com/embed/appsw9HMZglMGtXbx/pag1Ojag3YiMPtz9Z/form" 
                  style={{ 
                    background: 'transparent',
                    filter: 'brightness(0.95) contrast(1.05)',
                  }}
                />
              </div>
              
              {/* Bottom accent */}
              <div className="mt-4 flex justify-center">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

IntakeForm.displayName = "IntakeForm";

export default IntakeForm;
