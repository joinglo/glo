import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AnimatedStars from "@/components/AnimatedStars";

const STAR_COLORS = ["#e879f9", "#c084fc", "#a18fff"];
const STAR_SIZES = ["1.25rem", "1.5rem", "2rem", "2.5rem", "3rem", "3.5rem"]; // rem for text- sizes
const STAR_ROTATIONS = ["-20deg", "-10deg", "0deg", "10deg", "20deg", "30deg", "-30deg"];
const STAR_COUNT = 7;
const HUB_ZONE = { min: 500, max: 700 };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Hero = () => {
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
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 text-center bg-background relative overflow-hidden h-[70vh] sm:h-[90vh] pt-8 sm:pt-0 pb-4 sm:pb-0">
      <div className="max-w-6xl mx-auto relative z-10 w-full animate-fade-in">
        {/* Main heading */}
        <div className="mb-2 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-3 sm:mb-4 opacity-80">
            Join GLO
          </h1>
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black gradient-text relative z-10">
              Global Entrepreneurs Hub
            </h2>
            {/* Animated sparkle stars with golden-white glow and mini stars */}
            <AnimatedStars />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8 space-y-1">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-tight">
            Silicon Valley's $1M ARR+ Community
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
          <span className="text-muted-foreground text-sm sm:text-base italic">
            members are ballers.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
