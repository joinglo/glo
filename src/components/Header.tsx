
import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-6 flex items-center justify-between bg-background">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
          <span className="text-background font-semibold text-sm">glo</span>
        </div>
      </div>
      
      <nav className="flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 text-foreground border border-border rounded-full hover:bg-muted transition-all duration-200">
          <Calendar size={16} />
          Events
        </button>
        <button className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors">
          Sign In
        </button>
        <button className="minimal-button px-6 py-2 rounded-full font-medium">
          Apply Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
