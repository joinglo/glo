
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Mail, Youtube } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Icons */}
        <div className="mb-12">
          <div className="inline-block border border-border rounded-lg px-8 py-6">
            <h3 className="text-foreground text-xl font-semibold mb-6">Our Socials</h3>
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-card/30 border border-border rounded-lg px-8 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            GLO Newsletter
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
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
