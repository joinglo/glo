
const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <nav className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors font-medium">
            About GLO
          </a>
          <a href="#" className="hover:text-foreground transition-colors font-medium">
            Events
          </a>
          <a href="#" className="hover:text-foreground transition-colors font-medium">
            Apply
          </a>
          <a href="#" className="hover:text-foreground transition-colors font-medium">
            Newsletter
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
