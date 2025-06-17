
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
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 text-center bg-background relative overflow-hidden h-[90vh]">
      <div className="max-w-6xl mx-auto relative z-10 w-full animate-fade-in">
        {/* Follow button */}
        <div className="mb-6 flex justify-center">
          <button
            className="relative flex items-center gap-2 px-4 py-2 bg-transparent rounded-md font-medium hover:scale-105 transition-all duration-200 text-white text-base border border-purple-400/30 shadow-lg hover:shadow-purple-500/25"
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
            
            {/* Sophisticated animated stars positioned around the gradient text */}
            <span className="absolute -top-6 sm:-top-8 -left-12 sm:-left-16 text-yellow-300 text-xl sm:text-2xl animate-pulse opacity-70" style={{animationDelay: '0s', animationDuration: '3s'}}>✦</span>
            <span className="absolute -top-4 sm:-top-6 right-4 sm:right-8 text-yellow-400 text-lg sm:text-xl animate-pulse opacity-80" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}>✧</span>
            <span className="absolute top-2 sm:top-4 -left-8 sm:-left-12 text-yellow-200 text-sm sm:text-base animate-pulse opacity-60" style={{animationDelay: '1s', animationDuration: '3.5s'}}>⭐</span>
            <span className="absolute -bottom-5 sm:-bottom-7 right-12 sm:right-20 text-yellow-300 text-xl sm:text-2xl animate-pulse opacity-75" style={{animationDelay: '1.5s', animationDuration: '2.8s'}}>✦</span>
            <span className="absolute bottom-1 sm:bottom-2 -left-10 sm:-left-14 text-yellow-400 text-lg sm:text-xl animate-pulse opacity-85" style={{animationDelay: '2s', animationDuration: '3.2s'}}>✧</span>
            <span className="absolute -top-2 sm:-top-3 left-1/4 text-yellow-200 text-sm sm:text-base animate-pulse opacity-65" style={{animationDelay: '0.3s', animationDuration: '2.7s'}}>⭐</span>
            <span className="absolute bottom-0 sm:bottom-1 right-1/3 text-yellow-300 text-base sm:text-lg animate-pulse opacity-70" style={{animationDelay: '1.2s', animationDuration: '3.1s'}}>✦</span>
            <span className="absolute -bottom-3 sm:-bottom-5 left-1/2 text-yellow-400 text-lg sm:text-xl animate-pulse opacity-80" style={{animationDelay: '0.8s', animationDuration: '2.9s'}}>✧</span>
            <span className="absolute top-6 sm:top-8 right-1/4 text-yellow-200 text-sm sm:text-base animate-pulse opacity-60" style={{animationDelay: '1.8s', animationDuration: '3.3s'}}>⭐</span>
            <span className="absolute -top-8 sm:-top-10 left-1/2 text-yellow-300 text-base sm:text-lg animate-pulse opacity-75" style={{animationDelay: '2.3s', animationDuration: '2.6s'}}>✦</span>
            <span className="absolute top-8 sm:top-10 -left-6 sm:-left-10 text-yellow-400 text-sm sm:text-base animate-pulse opacity-65" style={{animationDelay: '0.7s', animationDuration: '3.4s'}}>✧</span>
            <span className="absolute -bottom-8 sm:-bottom-10 left-1/3 text-yellow-200 text-base sm:text-lg animate-pulse opacity-70" style={{animationDelay: '1.7s', animationDuration: '2.4s'}}>⭐</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8 space-y-1">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-tight">
            Silicon Valley's Elite $1M ARR+ Entrepreneur Community
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-6">
          <button 
            className="px-8 py-3 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 border-2 border-orange-400/50 rounded-full hover:scale-110 transition-all duration-200 font-normal text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 scale-105 ring-2 ring-orange-400/30 shadow-[0_0_20px_rgba(251,146,60,0.4)]"
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
