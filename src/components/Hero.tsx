
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isFollowHovered, setIsFollowHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background relative overflow-hidden">
      {/* Sparkle effects */}
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Follow button */}
        <div className="mb-12">
          <button
            className="flex items-center gap-2 px-6 py-3 bg-secondary border border-purple-500 rounded-full font-medium hover:scale-105 transition-all duration-200 text-foreground"
            onMouseEnter={() => setIsFollowHovered(true)}
            onMouseLeave={() => setIsFollowHovered(false)}
          >
            Follow on 𝕏
          </button>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-4">
            Join "GLO"
          </h1>
          <h2 className="text-4xl md:text-6xl font-black gradient-text relative">
            Global Entrepreneurs Hub
            {/* Additional sparkles around the gradient text */}
            <span className="absolute -top-2 -right-4 text-yellow-400 text-2xl animate-pulse">✨</span>
            <span className="absolute -bottom-2 -left-4 text-yellow-400 text-xl animate-pulse" style={{animationDelay: '0.5s'}}>✨</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12 space-y-2">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Silicon Valley's High-Traction Tech Community Builder.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Exclusive Events, Private Slack Communities and over $4.6M
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            in B2B SaaS perks for members.
          </p>
        </div>

        {/* Rating and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              members are ballers
            </span>
          </div>
          
          <Button 
            size="lg" 
            className="minimal-button px-8 py-4 font-semibold rounded-full text-lg hover:scale-105 transition-all duration-200"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
