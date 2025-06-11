
import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-primary font-bold text-lg">glo</span>
        </div>
      </div>
      
      <nav className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
          <Calendar size={16} />
          Events
        </button>
        <button className="px-4 py-2 text-white hover:text-gray-300 transition-colors">
          Sign In
        </button>
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
          Apply Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
