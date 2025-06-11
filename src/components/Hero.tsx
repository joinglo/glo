
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isFollowHovered, setIsFollowHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        {/* Follow button */}
        <div className="mb-12">
          <button
            className="glow-button px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsFollowHovered(true)}
            onMouseLeave={() => setIsFollowHovered(false)}
          >
            Follow on 𝕏
          </button>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            Join "GLO"
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">
            Global Entrepreneurs Hub
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12 space-y-2">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Silicon Valley's High-Traction Tech Community Builder.
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive Events, Private Slack Communities and over $4.6M
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
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
            <span className="text-gray-400 text-sm">
              members are ballers
            </span>
          </div>
          
          <Button 
            size="lg" 
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full text-lg shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
