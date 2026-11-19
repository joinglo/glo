import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-8 px-4 sm:px-6 bg-background border-t border-border">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
      <nav className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
        <Link to="/membership" className="hover:text-foreground transition-colors font-medium text-base">
          Membership
        </Link>
        <Link to="/nominate" className="hover:text-foreground transition-colors font-medium text-base">
          Nominate
        </Link>
      </nav>
      <p className="text-sm text-muted-foreground">Global Entrepreneurs Hub</p>
    </div>
  </footer>
);

export default Footer;
