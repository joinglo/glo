
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, Check, X } from "lucide-react";

export interface IntakeFormRef {
  expandForm: () => void;
}

const IntakeForm = forwardRef<IntakeFormRef>((props, ref) => {
  const { toast } = useToast();
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fieldValid, setFieldValid] = useState<Record<string, boolean>>({});
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

  // Phone number validation and formatting
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters except + at the start
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // If it starts with +, keep it, otherwise remove any + in the middle
    if (cleaned.startsWith('+')) {
      return '+' + cleaned.slice(1).replace(/\+/g, '');
    }
    return cleaned.replace(/\+/g, '');
  };

  const validatePhoneNumber = (phone: string) => {
    // Basic phone validation - should start with + followed by digits, or just digits
    const phoneRegex = /^(\+\d{1,3})?\d{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Numeric validation for financial fields
  const formatNumericField = (value: string) => {
    // Remove all non-numeric characters except decimal point
    return value.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
  };

  // URL normalization
  const normalizeUrl = (url: string) => {
    if (!url) return url;
    
    // Remove any existing protocol
    let cleanUrl = url.replace(/^https?:\/\//, '');
    
    // Add https:// prefix
    return `https://${cleanUrl}`;
  };

  const validateField = (field: string, value: string) => {
    let error = '';
    let isValid = false;

    switch (field) {
      case 'whatsapp':
        if (value && !validatePhoneNumber(value)) {
          error = 'Please enter a valid phone number';
        } else if (value) {
          isValid = true;
        }
        break;
      case 'mrr':
      case 'arr':
      case 'raised':
        if (value && isNaN(Number(value))) {
          error = 'Numbers only please';
        } else if (value) {
          isValid = true;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          error = 'Please enter a valid email';
        } else if (value) {
          isValid = true;
        }
        break;
      default:
        if (value.trim()) {
          isValid = true;
        }
    }

    setFieldErrors(prev => ({ ...prev, [field]: error }));
    setFieldValid(prev => ({ ...prev, [field]: isValid }));
  };

  const handleInputChange = (field: string, value: string) => {
    let processedValue = value;

    // Apply field-specific formatting
    switch (field) {
      case 'whatsapp':
        processedValue = formatPhoneNumber(value);
        break;
      case 'mrr':
      case 'arr':
      case 'raised':
        processedValue = formatNumericField(value);
        break;
      case 'linkedin':
      case 'companyUrl':
        // Store the raw input, normalize on submit
        processedValue = value;
        break;
    }

    setFormData(prev => ({ ...prev, [field]: processedValue }));
    validateField(field, processedValue);
  };

  const renderFieldIcon = (field: string) => {
    if (fieldValid[field]) {
      return <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />;
    }
    if (fieldErrors[field]) {
      return <X className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 w-4 h-4" />;
    }
    return null;
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

    // Check for any validation errors
    const hasErrors = Object.values(fieldErrors).some(error => error);
    if (hasErrors) {
      toast({
        title: "Please fix validation errors",
        description: "Some fields need to be corrected before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Form submitted:", formData);

    try {
      // Prepare data with normalized URLs
      const submitData = {
        ...formData,
        linkedin: normalizeUrl(formData.linkedin),
        companyUrl: normalizeUrl(formData.companyUrl),
        timestamp: new Date().toISOString(),
        source: "GLO Website Application Form"
      };

      // Send data to webhook
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
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
        setFieldErrors({});
        setFieldValid({});
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
                <div className="relative">
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Full Name *"
                    required
                  />
                  {renderFieldIcon("fullName")}
                </div>

                <div className="relative">
                  <Input
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="LinkedIn *"
                    required
                  />
                  {renderFieldIcon("linkedin")}
                </div>

                <div className="relative">
                  <Input
                    id="companyUrl"
                    value={formData.companyUrl}
                    onChange={(e) => handleInputChange("companyUrl", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Company URL *"
                    required
                  />
                  {renderFieldIcon("companyUrl")}
                </div>

                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Email *"
                    required
                  />
                  {renderFieldIcon("email")}
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="WhatsApp *"
                    required
                  />
                  {renderFieldIcon("whatsapp")}
                  {fieldErrors.whatsapp && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.whatsapp}</p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Job Title *"
                    required
                  />
                  {renderFieldIcon("jobTitle")}
                </div>

                <div className="relative">
                  <Input
                    id="mrr"
                    value={formData.mrr}
                    onChange={(e) => handleInputChange("mrr", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Monthly Revenue *"
                    required
                  />
                  {renderFieldIcon("mrr")}
                  {fieldErrors.mrr && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.mrr}</p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    id="arr"
                    value={formData.arr}
                    onChange={(e) => handleInputChange("arr", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="2025 ARR Projection *"
                    required
                  />
                  {renderFieldIcon("arr")}
                  {fieldErrors.arr && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.arr}</p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    id="raised"
                    value={formData.raised}
                    onChange={(e) => handleInputChange("raised", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="Capital Raised *"
                    required
                  />
                  {renderFieldIcon("raised")}
                  {fieldErrors.raised && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.raised}</p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    id="cities"
                    value={formData.cities}
                    onChange={(e) => handleInputChange("cities", e.target.value)}
                    className="w-full h-14 px-4 pr-10 bg-background border border-muted-foreground/20 rounded-md text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    placeholder="City(s) *"
                    required
                  />
                  {renderFieldIcon("cities")}
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
      </div>
    </section>
  );
});

IntakeForm.displayName = "IntakeForm";

export default IntakeForm;
