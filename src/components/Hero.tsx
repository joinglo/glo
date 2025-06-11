
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isFollowHovered, setIsFollowHovered] = useState(false);

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
    <section className="min-h-screen flex flex-col items-center justify-start pt-8 px-4 sm:px-6 text-center bg-background relative overflow-hidden">
      {/* Sparkle effects */}
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Follow button */}
        <div className="mb-8 flex justify-center">
          <button
            className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-full font-medium hover:scale-105 transition-all duration-200 text-white text-sm border border-purple-400/30 shadow-lg hover:shadow-purple-500/25"
            onMouseEnter={() => setIsFollowHovered(true)}
            onMouseLeave={() => setIsFollowHovered(false)}
          >
            <span className="relative">Follow on 𝕏</span>
          </button>
        </div>

        {/* Main heading */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-4 sm:mb-6">
            Join "GLO"
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black gradient-text relative">
            Global Entrepreneurs Hub
            {/* Additional sparkles around the gradient text */}
            <span className="absolute -top-2 sm:-top-3 -right-4 sm:-right-6 text-yellow-400 text-xl sm:text-2xl animate-pulse">✨</span>
            <span className="absolute -bottom-2 sm:-bottom-3 -left-4 sm:-left-6 text-yellow-400 text-lg sm:text-xl animate-pulse" style={{animationDelay: '0.5s'}}>✨</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16 space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground max-w-5xl mx-auto">
            Silicon Valley's High-Traction Tech Community Builder.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground max-w-5xl mx-auto">
            Exclusive Events, Private Slack Communities and over $4.6M
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground max-w-5xl mx-auto">
            in B2B SaaS perks for members.
          </p>
        </div>

        {/* Rating and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl sm:text-4xl md:text-5xl">★</span>
              ))}
            </div>
            <span className="text-muted-foreground text-lg sm:text-xl md:text-2xl font-bold">
              members are ballers
            </span>
          </div>
          
          <Button 
            size="lg" 
            className="minimal-button px-8 sm:px-10 py-4 sm:py-5 font-black rounded-full text-lg sm:text-xl md:text-2xl hover:scale-105 transition-all duration-200"
            onClick={scrollToIntakeForm}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
