import { forwardRef, useImperativeHandle } from "react";

export interface IntakeFormRef {
  expandForm: () => void;
}

const IntakeForm = forwardRef<IntakeFormRef>((props, ref) => {
  useImperativeHandle(ref, () => ({
    expandForm: () => {},
  }));

  return (
    <section id="intake-form" className="py-12 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Explore a membership to our private community of startup founders.
          </h2>
        </div>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appsw9HMZglMGtXbx/pagdJuQumjh4VIqm1/form"
          frameBorder="0"
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </div>
    </section>
  );
});

IntakeForm.displayName = "IntakeForm";

export default IntakeForm;
