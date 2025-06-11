
import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-6 flex items-center justify-between bg-background">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/558b4ef1-fd58-48d7-ae03-bc5034b3e530.png" 
            alt="GLO"
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>
      
      <nav className="flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium">
          <Calendar size={16} />
          Events
        </button>
        <button className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors font-medium">
          Sign In
        </button>
        <button className="minimal-button px-6 py-2 rounded-full font-bold">
          Apply Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
