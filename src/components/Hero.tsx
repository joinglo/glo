
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
        <div className="mb-8 flex justify-center">
          <button
            className="relative flex items-center gap-2 px-6 py-3 bg-black border border-purple-400 rounded-lg font-semibold hover:scale-105 transition-all duration-200 text-white text-sm shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
            onMouseEnter={() => setIsFollowHovered(true)}
            onMouseLeave={() => setIsFollowHovered(false)}
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50"></span>
            <span className="relative">Follow on 𝕏</span>
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
