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
      setTimeout(() => {
        const expandButton = document.querySelector('[data-expand-form]') as HTMLButtonElement;
        if (expandButton) {
          expandButton.click();
        }
      }, 500);
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between bg-background">
      <div className="flex items-center">
        <a href="https://www.linkedin.com/company/global-entrepreneurs-hub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src="/favicon.png" 
            alt="GLO"
            className="w-12 h-12 sm:w-14 sm:h-14 object-cover"
          />
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="https://lu.ma/glo_community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium text-base">
          <Calendar size={16} />
          Events
        </a>
        <button 
          className="minimal-button px-6 py-2 rounded-full font-bold glow-effect text-base"
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
            <a href="https://lu.ma/glo_community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium w-full justify-center text-base">
              <Calendar size={16} />
              Events
            </a>
            <button 
              className="minimal-button px-6 py-3 rounded-full font-bold w-full text-base"
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

