
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Mail, Youtube, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Newsletter = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
  };

  return (
    <section 
      ref={ref}
      className={`py-10 px-4 sm:px-6 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Icons */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Socials</span>
            </div>
          </div>
          <div className="border border-border rounded-xl px-6 py-4 bg-card/30 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.linkedin.com/company/global-entrepreneurs-hub/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/join_glo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Twitter size={24} />
              </a>
              <a href="https://chat.whatsapp.com/CbN9EFNLkwf732wHkvFf58" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Youtube size={24} />
              </a>
              <a href="mailto:hello@joinglocommunity.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg px-8 py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            GLO Newsletter
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Silicon Valley's high-traction tech community builder. Exclusive events, private slack communities and over $4.6M in B2B SaaS perks for members.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border"
              required
            />
            <Button 
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 font-semibold"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
