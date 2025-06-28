import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

  const mrrOptions = [
    { value: "pre-revenue", label: "Pre-Revenue" },
    { value: "< $250K", label: "< $250K" },
    { value: "$250K - $1M", label: "$250K - $1M" },
    { value: "$1M - $10M", label: "$1M - $10M" },
    { value: "$10M - $100M", label: "$10M - $100M" },
    { value: "$100M - $1B", label: "$100M - $1B" },
    { value: "> $1B", label: "> $1B" },
  ];

  const arrOptions = [
    { value: "pre-revenue", label: "Pre-Revenue" },
    { value: "< $100K", label: "< $100K" },
    { value: "$100K - $500K", label: "$100K - $500K" },
    { value: "$500K - $1M", label: "$500K - $1M" },
    { value: "$1M - $10M", label: "$1M - $10M" },
    { value: "$10M - $100M", label: "$10M - $100M" },
    { value: "> $100M", label: "> $100M" },
    { value: "does-not-apply", label: "Does Not Apply" },
  ];

  const raisedOptions = [
    { value: "pre-funding", label: "Pre-Funding" },
    { value: "bootstrapping", label: "Bootstrapping" },
    { value: "< $250K", label: "< $250K" },
    { value: "> $250K", label: "> $250K" },
    { value: "> $500K", label: "> $500K" },
    { value: "> $1M", label: "> $1M" },
    { value: "> $5M", label: "> $5M" },
    { value: "> $10M", label: "> $10M" },
    { value: "> $25M", label: "> $25M" },
    { value: "> $100M", label: "> $100M" },
    { value: "> $250M", label: "> $250M" },
    { value: "> $500M", label: "> $500M" },
    { value: "> $1B", label: "> $1B" },
    { value: "> $5B", label: "> $5B" },
    { value: "does-not-apply", label: "Does Not Apply" },
  ];

  const roleOptions = [
    { value: "founder-ceo", label: "Founder/CEO" },
    { value: "investor", label: "Investor" },
    { value: "c-suite-executive", label: "C-Suite Executive" },
    { value: "influencer-creator", label: "Influencer/Creator" },
    { value: "other", label: "Other" },
  ];

  useImperativeHandle(ref, () => ({
    expandForm: () => {
      setIsFormExpanded(true);
    }
  }));

  // Enhanced phone number parsing and formatting
  const parsePhoneNumber = (input: string) => {
    // Remove all non-numeric characters except + at the start
    let cleaned = input.replace(/[^\d+]/g, '');
    
    // Handle various input formats
    const originalInput = input.trim();
    
    // If it already starts with +, keep it as is (just clean it)
    if (originalInput.startsWith('+')) {
      return cleaned;
    }
    
    // Extract numbers only for pattern matching
    const numbersOnly = input.replace(/\D/g, '');
    
    // Handle North American formats (10 or 11 digits)
    if (numbersOnly.length === 10) {
      // Assume US/Canada if 10 digits: 4165551234 -> +14165551234
      return `+1${numbersOnly}`;
    } else if (numbersOnly.length === 11 && numbersOnly.startsWith('1')) {
      // US/Canada with country code: 14165551234 -> +14165551234
      return `+${numbersOnly}`;
    }
    
    // For other lengths, require explicit country code
    if (numbersOnly.length >= 10 && numbersOnly.length <= 15) {
      // If no country code provided, we can't reliably determine it
      return `+${numbersOnly}`;
    }
    
    return cleaned;
  };

  const formatPhoneForDisplay = (value: string) => {
    // Remove all non-numeric characters except + at the start
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // If it starts with +1 (North America), format nicely
    if (cleaned.startsWith('+1') && cleaned.length > 2) {
      const digits = cleaned.slice(2);
      if (digits.length <= 3) {
        return `+1 (${digits}`;
      } else if (digits.length <= 6) {
        return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else {
        return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      }
    } else if (cleaned.startsWith('+') && cleaned.length > 1) {
      // International format: +XX XXX XXX XXXX
      const countryAndNumber = cleaned.slice(1);
      if (countryAndNumber.length <= 3) {
        return `+${countryAndNumber}`;
      } else if (countryAndNumber.length <= 6) {
        return `+${countryAndNumber.slice(0, 3)} ${countryAndNumber.slice(3)}`;
      } else if (countryAndNumber.length <= 9) {
        return `+${countryAndNumber.slice(0, 3)} ${countryAndNumber.slice(3, 6)} ${countryAndNumber.slice(6)}`;
      } else {
        return `+${countryAndNumber.slice(0, 3)} ${countryAndNumber.slice(3, 6)} ${countryAndNumber.slice(6, 9)} ${countryAndNumber.slice(9, 13)}`;
      }
    }
    
    return cleaned;
  };

  const validatePhoneNumber = (phone: string) => {
    const parsed = parsePhoneNumber(phone);
    console.log("Validating phone:", phone, "-> parsed:", parsed);
    
    // Must be in E.164 format: +[1-9][0-9]{1,14}
    const e164Regex = /^\+[1-9]\d{1,14}$/;
    const isValid = e164Regex.test(parsed);
    
    console.log("Phone validation result:", isValid);
    return isValid;
  };

  const getE164Phone = (phone: string) => {
    return parsePhoneNumber(phone);
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
      case 'linkedin':
      case 'companyUrl':
        // Basic URL validation - must contain a dot and have reasonable length
        const urlRegex = /^[^\s]*\.[^\s]+$/;
        if (value && !urlRegex.test(value.replace(/^https?:\/\//, ''))) {
          error = 'Please enter a valid URL';
        } else if (value) {
          isValid = true;
        }
        break;
      case 'whatsapp':
        if (!value) {
          error = 'WhatsApp number is required';
        } else if (!validatePhoneNumber(value)) {
          error = 'Please enter a valid phone number (e.g., 416-555-1234, +1 416 555 1234)';
        } else {
          isValid = true;
        }
        break;
      case 'mrr':
      case 'arr':
      case 'raised':
      case 'jobTitle':
        // These are now select fields, so if there's a value, it's valid
        if (value) {
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
        // If user starts typing numbers without +, help them out
        if (value && !value.startsWith('+') && /^\d/.test(value)) {
          // Don't automatically add + here, let them type naturally
          processedValue = value;
        }
        // Format for display
        if (value) {
          processedValue = formatPhoneForDisplay(value);
        }
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

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
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
      // Prepare data with normalized URLs and E.164 phone format
      const submitData = {
        ...formData,
        linkedin: normalizeUrl(formData.linkedin),
        companyUrl: normalizeUrl(formData.companyUrl),
        whatsapp: getE164Phone(formData.whatsapp), // Convert to E.164 for submission
        timestamp: new Date().toISOString(),
        source: "GLO Website Application Form"
      };

      console.log("Submitting data with E.164 phone:", submitData.whatsapp);

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
        
        // Reset form completely including select fields
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
        
        // Force re-render to reset select components
        setTimeout(() => {
          setIsFormExpanded(false);
          setTimeout(() => setIsFormExpanded(true), 100);
        }, 1000);
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
                  {fieldErrors.linkedin && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.linkedin}</p>
                  )}
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
                  {fieldErrors.companyUrl && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.companyUrl}</p>
                  )}
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
                  <Select 
                    value={formData.jobTitle} 
                    onValueChange={(value) => handleSelectChange("jobTitle", value)} 
                    required
                  >
                    <SelectTrigger className="w-full h-14 px-4 bg-muted/10 border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
                      <SelectValue placeholder="Role *" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-muted-foreground/20 rounded-md shadow-lg z-50">
                      {roleOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                          className="text-foreground hover:bg-muted/50 cursor-pointer px-4 py-2"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.jobTitle && (
                    <Check className="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4 pointer-events-none" />
                  )}
                </div>

                <div className="relative">
                  <Select 
                    value={formData.mrr} 
                    onValueChange={(value) => handleSelectChange("mrr", value)} 
                    required
                  >
                    <SelectTrigger className="w-full h-14 px-4 bg-muted/10 border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
                      <SelectValue placeholder="Monthly Revenue *" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-muted-foreground/20 rounded-md shadow-lg z-50">
                      {mrrOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                          className="text-foreground hover:bg-muted/50 cursor-pointer px-4 py-2"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.mrr && (
                    <Check className="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4 pointer-events-none" />
                  )}
                </div>

                <div className="relative">
                  <Select 
                    value={formData.arr} 
                    onValueChange={(value) => handleSelectChange("arr", value)} 
                    required
                  >
                    <SelectTrigger className="w-full h-14 px-4 bg-muted/10 border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
                      <SelectValue placeholder="2025 ARR Projection *" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-muted-foreground/20 rounded-md shadow-lg z-50">
                      {arrOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                          className="text-foreground hover:bg-muted/50 cursor-pointer px-4 py-2"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.arr && (
                    <Check className="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4 pointer-events-none" />
                  )}
                </div>

                <div className="relative">
                  <Select 
                    value={formData.raised} 
                    onValueChange={(value) => handleSelectChange("raised", value)} 
                    required
                  >
                    <SelectTrigger className="w-full h-14 px-4 bg-muted/10 border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
                      <SelectValue placeholder="Capital Raised *" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-muted-foreground/20 rounded-md shadow-lg z-50">
                      {raisedOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                          className="text-foreground hover:bg-muted/50 cursor-pointer px-4 py-2"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.raised && (
                    <Check className="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4 pointer-events-none" />
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
