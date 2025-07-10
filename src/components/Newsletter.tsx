
import { Linkedin, Calendar, Mail, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Newsletter = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-10 px-4 sm:px-6 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Icons */}
        <div className="mb-6">
          <div className="text-center mb-2">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Socials</span>
            </div>
          </div>
          <p className="text-muted-foreground text-base mb-4">
            Reach out to our founder Eli Al-Shamari on{' '}
            <a 
              href="https://www.linkedin.com/in/eli-al-shamari-b3629110b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
            {', '}
            <a 
              href="https://chat.whatsapp.com/CbN9EFNLkwf732wHkvFf58" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              WhatsApp
            </a>
            {' '}or via{' '}
            <a 
              href="mailto:hello@joinglocommunity.com" 
              className="text-primary hover:underline"
            >
              email
            </a>
            {' '}for inquiries or partnerships.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/company/global-entrepreneurs-hub/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href="https://chat.whatsapp.com/CbN9EFNLkwf732wHkvFf58" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <MessageCircle size={24} />
            </a>
            <a href="https://global-entrepreneurs-hubs-newsletter.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Mail size={24} />
            </a>
            <a href="https://lu.ma/glo_community" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Calendar size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

