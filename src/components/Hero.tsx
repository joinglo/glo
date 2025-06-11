
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    <section className="min-h-screen flex flex-col items-center justify-start pt-6 px-4 sm:px-6 text-center bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 w-full animate-fade-in">
        {/* Follow button */}
        <div className="mb-6 flex justify-center">
          <button
            className="relative flex items-center gap-2 px-4 py-2 bg-transparent rounded-full font-medium hover:scale-105 transition-all duration-200 text-white text-base border border-purple-400/30 shadow-lg hover:shadow-purple-500/25"
            onMouseEnter={() => setIsFollowHovered(true)}
            onMouseLeave={() => setIsFollowHovered(false)}
          >
            <span className="relative">Follow on 𝕏</span>
          </button>
        </div>

        {/* Main heading */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-3 sm:mb-4">
            JOIN GLO.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black gradient-text relative">
            Global Entrepreneurs Hub
            
            {/* Star sparkles positioned around the gradient text */}
            <span className="absolute -top-4 sm:-top-6 -left-8 sm:-left-12 text-yellow-400 text-lg sm:text-xl animate-pulse">✦</span>
            <span className="absolute -top-2 sm:-top-4 right-0 sm:right-4 text-yellow-400 text-sm sm:text-lg animate-pulse" style={{animationDelay: '0.3s'}}>✧</span>
            <span className="absolute top-2 sm:top-4 -left-4 sm:-left-8 text-yellow-400 text-xs sm:text-sm animate-pulse" style={{animationDelay: '0.6s'}}>⭐</span>
            <span className="absolute -bottom-3 sm:-bottom-5 right-8 sm:right-16 text-yellow-400 text-lg sm:text-xl animate-pulse" style={{animationDelay: '0.9s'}}>✦</span>
            <span className="absolute bottom-1 sm:bottom-2 -left-6 sm:-left-10 text-yellow-400 text-sm sm:text-lg animate-pulse" style={{animationDelay: '1.2s'}}>✧</span>
            <span className="absolute -top-1 sm:-top-2 left-1/4 text-yellow-400 text-xs sm:text-sm animate-pulse" style={{animationDelay: '0.15s'}}>⭐</span>
            <span className="absolute bottom-0 sm:bottom-1 right-1/3 text-yellow-400 text-xs sm:text-sm animate-pulse" style={{animationDelay: '0.75s'}}>✦</span>
            <span className="absolute -bottom-2 sm:-bottom-4 left-1/2 text-yellow-400 text-sm sm:text-lg animate-pulse" style={{animationDelay: '0.45s'}}>✧</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8 space-y-1">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-tight">
            Silicon Valley's High-Traction Tech Community Builder.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-tight">
            Exclusive Events, Private Slack Communities and over $4.6M
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-tight">
            in B2B SaaS perks for members.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-6">
          <button 
            className="px-8 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 border border-orange-400/30 rounded-full hover:scale-110 transition-all duration-200 font-medium text-2xl sm:text-3xl md:text-4xl shadow-xl hover:shadow-2xl scale-105"
            onClick={scrollToIntakeForm}
          >
            Apply Now
          </button>
        </div>

        {/* Rating with profile pictures */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm sm:text-base">★</span>
            ))}
          </div>
          <div className="flex -space-x-1 mx-2">
            <Avatar className="w-6 h-6 border-2 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="text-xs">A</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="text-xs">B</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="text-xs">C</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-muted-foreground text-sm sm:text-base font-bold">
            members are ballers
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
