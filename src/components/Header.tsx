
import { Calendar, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToIntakeForm = () => {
    const intakeForm = document.getElementById('intake-form');
    if (intakeForm) {
      intakeForm.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between bg-background">
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src="/lovable-uploads/558b4ef1-fd58-48d7-ae03-bc5034b3e530.png" 
            alt="GLO"
            className="w-12 h-12 sm:w-14 sm:h-14 object-cover"
          />
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium">
          <Calendar size={16} />
          Events
        </button>
        <button className="px-4 py-2 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium">
          Sign In
        </button>
        <button 
          className="minimal-button px-6 py-2 rounded-full font-bold glow-effect"
          onClick={scrollToIntakeForm}
        >
          Apply Now
        </button>
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px]">
          <div className="flex flex-col gap-4 mt-8">
            <button className="flex items-center gap-2 px-4 py-3 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium w-full justify-center">
              <Calendar size={16} />
              Events
            </button>
            <button className="px-4 py-3 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium text-center">
              Sign In
            </button>
            <button 
              className="minimal-button px-6 py-3 rounded-full font-bold w-full"
              onClick={scrollToIntakeForm}
            >
              Apply Now
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
