
const Footer = () => {
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
    <footer className="py-8 px-4 sm:px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <nav className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <a href="https://www.linkedin.com/company/global-entrepreneurs-hub/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors font-medium text-base">
            About GLO
          </a>
          <a href="https://lu.ma/glo_community" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors font-medium text-base">
            Events
          </a>
          <button onClick={scrollToIntakeForm} className="hover:text-foreground transition-colors font-medium text-base">
            Apply
          </button>
          <a href="https://global-entrepreneurs-hubs-newsletter.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors font-medium text-base">
            Newsletter
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
