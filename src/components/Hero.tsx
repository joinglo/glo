
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

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Follow button */}
        <div className="mb-12">
          <button
            className="flex items-center gap-2 px-8 py-4 bg-secondary border border-purple-500 rounded-full font-bold hover:scale-105 transition-all duration-200 text-foreground text-lg"
            onMouseEnter={() => setIsFollowHovered(true)}
            onMouseLeave={() => setIsFollowHovered(false)}
          >
            Follow on 𝕏
          </button>
        </div>

        {/* Main heading */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-6">
            Join "GLO"
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black gradient-text relative">
            Global Entrepreneurs Hub
            {/* Additional sparkles around the gradient text */}
            <span className="absolute -top-4 -right-8 text-yellow-400 text-3xl animate-pulse">✨</span>
            <span className="absolute -bottom-4 -left-8 text-yellow-400 text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>✨</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-16 space-y-2">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-muted-foreground max-w-5xl mx-auto">
            Silicon Valley's High-Traction Tech Community Builder.
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-muted-foreground max-w-5xl mx-auto">
            Exclusive Events, Private Slack Communities and over $4.6M
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-muted-foreground max-w-5xl mx-auto">
            in B2B SaaS perks for members.
          </p>
        </div>

        {/* Rating and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl md:text-4xl">★</span>
              ))}
            </div>
            <span className="text-muted-foreground text-lg md:text-xl font-bold">
              members are ballers
            </span>
          </div>
          
          <Button 
            size="lg" 
            className="minimal-button px-12 py-6 font-black rounded-full text-xl md:text-2xl hover:scale-105 transition-all duration-200"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
