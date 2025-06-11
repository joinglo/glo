
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Mail, Youtube, Calendar } from "lucide-react";

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
        {/* Social Icons - Updated design */}
        <div className="mb-12">
          <div className="inline-block border border-border rounded-xl px-12 py-8 bg-card/10">
            <h3 className="text-foreground text-xl font-semibold mb-8">Our Socials</h3>
            <div className="flex items-center justify-center gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Twitter size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Calendar size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Youtube size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Mail size={28} />
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
