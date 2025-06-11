
const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <nav className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors font-medium text-base">
            About GLO
          </a>
          <a href="https://lu.ma/glo_community" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors font-medium text-base">
            Events
          </a>
          <a href="#" className="hover:text-foreground transition-colors font-medium text-base">
            Apply
          </a>
          <a href="https://global-entrepreneurs-hubs-newsletter.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors font-medium text-base">
            Newsletter
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
