import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IsGloForYou = () => {
  const { ref, isVisible } = useScrollAnimation();

  const gloIsFor = [
    "Full-time founders either high-traction or early traction/high potential (2 communities).",
    "Ready to learn, actively contribute and add value to the growing community.",
    "B2B SaaS, Consumer, Deeptech, Hardware, D2C Brands & more.",
    "Active investors moving significant capital to founders in the last 3 months.",
    "Veteran c-suite operators or Heads of successful tech companies.",
    "Influencers or Creators w/ high engagement on platforms looking to collab or grow their brand.",
    "High-integrity people, products & companies with clear mission statements."
  ];

  const gloIsNotFor = [
    "Part-timers, window-shoppers, inactive investors, unseasoned operators",
    "Folks uninterested in contributing, sharing insights, or growing a quality community.",
    "Low-integrity people, products, or companies"
  ];

  return (
    <section 
      ref={ref}
      className={`py-8 px-6 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left side - Description */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Is <span className="text-orange-400 font-black">GLO</span> for you?
            </h2>
            <p className="text-muted-foreground leading-relaxed font-semibold text-sm">
              Curated community of high-traction founders/CEOs, active investors, influencers & c-suite operators. 
              Bootstrapped or backed by the likes of YC, Techstars, a16z, 500 global, General Catalyst & so much more.
            </p>
          </div>

          {/* Middle - GLO is for */}
          <div className="bg-card/30 backdrop-blur-sm border border-orange-500 rounded-2xl p-5">
            <h3 className="text-lg font-black text-orange-400 mb-4">GLO is for:</h3>
            <div className="space-y-3">
              {gloIsFor.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="text-green-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-xs leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - GLO is not for */}
          <div className="bg-card/30 backdrop-blur-sm border border-red-500 rounded-2xl p-5 w-auto h-auto">
            <h3 className="text-lg font-black text-red-400 mb-4">GLO is not for:</h3>
            <div className="space-y-3">
              {gloIsNotFor.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <X className="text-red-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-xs leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsGloForYou;
