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
    { value: "Pre-Revenue", label: "Pre-Revenue" },
    { value: "< $100K", label: "< $100K" },
    { value: "$100K - $250K", label: "$100K - $250K" },
    { value: "$250K - $999K", label: "$250K - $999K" },
    { value: "$1M - $5M", label: "$1M - $5M" },
    { value: "$5M - $10M", label: "$5M - $10M" },
    { value: "$10M - $25M", label: "$10M - $25M" },
    { value: "$25M - $100M", label: "$25M - $100M" },
    { value: "$100M+", label: "$100M+" },
    { value: "Does Not Apply", label: "Does Not Apply" },
  ];

  const arrOptions = [
    { value: "Pre-Revenue", label: "Pre-Revenue" },
    { value: "< $999K", label: "< $999K" },
    { value: "$1M - $5M", label: "$1M - $5M" },
    { value: "$5M - $10M", label: "$5M - $10M" },
    { value: "$10M - $25M", label: "$10M - $25M" },
    { value: "$25M - $100M", label: "$25M - $100M" },
    { value: "$100M - $500M", label: "$100M - $500M" },
    { value: "$500M - $1B", label: "$500M - $1B" },
    { value: "$1B+", label: "$1B+" },
    { value: "Does Not Apply", label: "Does Not Apply" },
  ];

  const raisedOptions = [
    { value: "Pre-Funding", label: "Pre-Funding" },
    { value: "Bootstrapping", label: "Bootstrapping" },
    { value: "< $100K", label: "< $100K" },
    { value: "$100K - $500K", label: "$100K - $500K" },
    { value: "$500K - $999K", label: "$500K - $999K" },
    { value: "$1M - $5M", label: "$1M - $5M" },
    { value: "$5M - $10M", label: "$5M - $10M" },
    { value: "$10M - $25M", label: "$10M - $25M" },
    { value: "$25M - $100M", label: "$25M - $100M" },
    { value: "$100M - $500M", label: "$100M - $500M" },
    { value: "$500M - $1B", label: "$500M - $1B" },
    { value: "$1B+", label: "$1B+" },
    { value: "Does Not Apply", label: "Does Not Apply" },
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

  // Enhanced phone number parsing and formatting for E.164
  const parsePhoneToE164 = (input: string) => {
    if (!input || input.trim() === '') return '';
    
    // Remove all non-numeric characters
    const numbersOnly = input.replace(/\D/g, '');
    console.log("Parsing phone input:", input, "-> numbers only:", numbersOnly);
    
    // Handle different input lengths
    if (numbersOnly.length === 10) {
      // Assume US/Canada: 4165551234 -> +14165551234
      const result = `+1${numbersOnly}`;
      console.log("10 digits, adding +1:", result);
      return result;
    } else if (numbersOnly.length === 11 && numbersOnly.startsWith('1')) {
      // US/Canada with country code: 14165551234 -> +14165551234
      const result = `+${numbersOnly}`;
      console.log("11 digits starting with 1:", result);
      return result;
    } else if (numbersOnly.length >= 7 && numbersOnly.length <= 15) {
      // International format, add + if not present
      const result = `+${numbersOnly}`;
      console.log("International format:", result);
      return result;
    }
    
    console.log("Could not parse phone number:", input);
    return '';
  };

  const formatPhoneForDisplay = (value: string) => {
    // Remove all non-numeric characters
    const numbersOnly = value.replace(/\D/g, '');
    
    // Handle North American formatting for display
    if (numbersOnly.length <= 3) {
      return numbersOnly;
    } else if (numbersOnly.length <= 6) {
      return `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3)}`;
    } else if (numbersOnly.length <= 10) {
      return `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3, 6)}-${numbersOnly.slice(6)}`;
    } else if (numbersOnly.length === 11 && numbersOnly.startsWith('1')) {
      // 11 digits starting with 1 (North American with country code)
      const withoutCountryCode = numbersOnly.slice(1);
      return `+1 (${withoutCountryCode.slice(0, 3)}) ${withoutCountryCode.slice(3, 6)}-${withoutCountryCode.slice(6)}`;
    } else {
      // International format: show + and group digits
      return `+${numbersOnly}`;
    }
  };

  const validatePhoneNumber = (phone: string) => {
    const e164 = parsePhoneToE164(phone);
    console.log("Validating phone:", phone, "-> E.164:", e164);
    
    // Must be in E.164 format: +[1-9][0-9]{1,14}
    const e164Regex = /^\+[1-9]\d{1,14}$/;
    const isValid = e164Regex.test(e164) && e164.length >= 8; // Minimum reasonable phone length
    
    console.log("Phone validation result:", isValid);
    return isValid;
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
          error = 'Please enter a valid phone number';
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
        // Format for display while user types
        processedValue = formatPhoneForDisplay(value);
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
      // Convert phone to clean E.164 format
      const e164Phone = parsePhoneToE164(formData.whatsapp);
      console.log("Converting phone for submission:", formData.whatsapp, "->", e164Phone);
      
      // Validate the final E.164 format
      if (!e164Phone || !/^\+[1-9]\d{1,14}$/.test(e164Phone)) {
        console.error("Invalid phone format for submission:", e164Phone);
        throw new Error("Invalid phone number format for submission");
      }

      // Prepare data with normalized URLs and clean E.164 phone format
      const submitData = {
        ...formData,
        linkedin: normalizeUrl(formData.linkedin),
        companyUrl: normalizeUrl(formData.companyUrl),
        whatsapp: e164Phone, // Send clean E.164 format: +14165551234
        timestamp: new Date().toISOString(),
        source: "GLO Website Application Form"
      };

      console.log("Final submission data:", submitData);
      console.log("WhatsApp field being sent:", submitData.whatsapp);

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
                    placeholder="WhatsApp Number *"
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
                    <SelectTrigger className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
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
                    <SelectTrigger className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
                      <SelectValue placeholder="Monthly Revenue ($MRR) *" />
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
                    <SelectTrigger className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
                      <SelectValue placeholder="Annual Revenue 2025 ($ARR) *" />
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
                    <SelectTrigger className="w-full h-14 px-4 bg-background border border-muted-foreground/20 rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary text-sm data-[placeholder]:text-muted-foreground">
                      <SelectValue placeholder="Funding Raised *" />
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
