
import { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export interface IntakeFormRef {
  expandForm: () => void;
}

const IntakeForm = forwardRef<IntakeFormRef>((props, ref) => {
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  useImperativeHandle(ref, () => ({
    expandForm: () => {
      setIsFormExpanded(true);
    }
  }));

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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Application Form</h3>
              <p className="text-muted-foreground">
                Complete the form below to apply for GLO membership.
              </p>
            </div>
            
            <div className="w-full">
              <iframe 
                className="w-full rounded-lg border border-border shadow-lg"
                src="https://airtable.com/embed/appsw9HMZglMGtXbx/pagdJuQumjh4VIqm1/form" 
                frameBorder="0" 
                width="100%" 
                height="600"
                style={{ 
                  background: 'transparent',
                  minHeight: '600px'
                }}
                title="GLO Application Form"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

IntakeForm.displayName = "IntakeForm";

export default IntakeForm;
