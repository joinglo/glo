
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Communities = () => {
  const highTractionFeatures = [
    "Revenue over $1M ARR",
    "OR Funding over $3M",
    "OR Big Contracts",
    "Oft. Seed/Series A+ or Bootstrapped",
    "Partners or above at a $100M+ Fund",
    "Influencers or Creators",
    "C-Suite Operators, Heads at $25M ARR"
  ];

  const earlyTractionFeatures = [
    "Early-traction",
    "High-potential",
    "Oft. Pre-Seed+ or Bootstrapped",
    "Associate or above at a $25M+ Fund",
    "Influencers or Creators",
    "Operators, PMs, Heads of",
    "Oft. YC, Techstars, EF, Z-Fellows"
  ];

  const scrollToIntakeForm = () => {
    const intakeForm = document.getElementById('intake-form');
    if (intakeForm) {
      intakeForm.scrollIntoView({ behavior: 'smooth' });
      // Expand the form after scrolling
      setTimeout(() => {
        const expandButton = document.querySelector('[data-expand-form]') as HTMLButtonElement;
        if (expandButton) {
          expandButton.click();
        }
      }, 500);
    }
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            <span className="text-orange-400 font-black">GLO</span> communities.
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-semibold">
            Members run, operate & invest in some of the fastest-growing startups in the world, across a wide array of industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* High-Traction Community */}
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </span>
            </div>
            
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2">High-Traction</h3>
              <div className="text-muted-foreground space-y-1 font-medium text-sm">
                <div>General Benchmarks</div>
                <div>Case by case</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {highTractionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-green-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-full"
              onClick={scrollToIntakeForm}
            >
              Apply Now
            </Button>
          </div>

          {/* Early-Traction Community */}
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-6">
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2">Early-Traction</h3>
              <div className="text-muted-foreground space-y-1 font-medium text-sm">
                <div>General Benchmarks</div>
                <div>Case by case</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {earlyTractionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-green-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-secondary hover:bg-secondary/80 text-foreground font-bold py-3 rounded-full border border-border"
              onClick={scrollToIntakeForm}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;
