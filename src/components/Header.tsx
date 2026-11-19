import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="w-full px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between bg-background">
      <Link
        to="/"
        aria-label="Global Entrepreneurs Hub home"
        className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden"
      >
        <img src="/favicon.png" alt="GLO" className="w-12 h-12 sm:w-14 sm:h-14 object-cover" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/membership" className="text-foreground hover:text-primary transition-colors font-medium text-base">
          Membership
        </Link>
        <Link to="/nominate" className="minimal-button px-6 py-2 rounded-full font-bold glow-effect text-base">
          Nominate
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px]">
          <div className="flex flex-col gap-4 mt-8">
            <Link
              to="/membership"
              onClick={close}
              className="px-4 py-3 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 font-medium w-full text-center text-base"
            >
              Membership
            </Link>
            <Link
              to="/nominate"
              onClick={close}
              className="minimal-button px-6 py-3 rounded-full font-bold w-full text-center text-base"
            >
              Nominate
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
