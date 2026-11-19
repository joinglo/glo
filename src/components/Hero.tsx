import { Link } from "react-router-dom";
import AnimatedStars from "@/components/AnimatedStars";
import { TAGLINE } from "@/seo";

const Hero = () => (
  <section className="flex flex-col items-center justify-center px-4 sm:px-6 text-center bg-background relative overflow-hidden min-h-[60vh] sm:min-h-[75vh] py-12">
    <div className="max-w-6xl mx-auto relative z-10 w-full animate-fade-in">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-3 sm:mb-4 opacity-80">
          GLO Fellows
        </h1>
        <div className="relative inline-block">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black gradient-text relative z-10">
            Global Entrepreneurs Hub
          </p>
          <AnimatedStars />
        </div>
      </div>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-tight mb-8">
        {TAGLINE}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/membership"
          className="px-8 py-3 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 border-2 border-orange-400/50 rounded-full hover:scale-105 transition-all duration-200 text-base sm:text-lg shadow-xl"
        >
          How election works
        </Link>
        <Link
          to="/nominate"
          className="px-8 py-3 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 text-base sm:text-lg"
        >
          Nominate
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
