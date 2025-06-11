
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isFollowHovered, setIsFollowHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-16 px-6 text-center bg-background relative overflow-hidden">
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
        <div className="mb-8">
          <button
            className="flex items-center gap-2 px-6 py-3 bg-secondary border border-purple-500 rounded-full font-bold hover:scale-105 transition-all duration-200 text-foreground text-base"
            onMouseEnter={() => setIsFollowHovered(true)}
            onMouseLeave={() => setIsFollowHovered(false)}
          >
            Follow on 𝕏
          </button>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            Join "GLO"
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black gradient-text relative">
            Global Entrepreneurs Hub
            {/* Additional sparkles around the gradient text */}
            <span className="absolute -top-3 -right-6 text-yellow-400 text-2xl animate-pulse">✨</span>
            <span className="absolute -bottom-3 -left-6 text-yellow-400 text-xl animate-pulse" style={{animationDelay: '0.5s'}}>✨</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12 space-y-1">
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground max-w-5xl mx-auto">
            Silicon Valley's High-Traction Tech Community Builder.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground max-w-5xl mx-auto">
            Exclusive Events, Private Slack Communities and over $4.6M
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground max-w-5xl mx-auto">
            in B2B SaaS perks for members.
          </p>
        </div>

        {/* Rating and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl md:text-3xl">★</span>
              ))}
            </div>
            <span className="text-muted-foreground text-base md:text-lg font-bold">
              members are ballers
            </span>
          </div>
          
          <Button 
            size="lg" 
            className="minimal-button px-8 py-4 font-black rounded-full text-lg md:text-xl hover:scale-105 transition-all duration-200"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
