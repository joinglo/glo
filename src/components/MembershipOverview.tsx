import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, TrendingUp, Calendar, Handshake, Zap, Network, Layers, CreditCard, Gift } from "lucide-react";

const MembershipOverview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-16 px-4 sm:px-6 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* About GLO */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            About <span className="text-orange-400">GLO</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GLO (Global Entrepreneurs Hub) is Silicon Valley's $1M+ ARR founder community ($8M ARR avg), serving as the essential networking platform for high-traction global founders. We connect fast-growing startups with the ecosystem's top founders, investors, and strategic partners through curated introductions and exclusive access.
          </p>
        </div>

        {/* Who We Serve */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-orange-400 w-8 h-8" />
              <h3 className="text-2xl font-black text-foreground">Our Members</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              85% Silicon Valley based high-growth startups ($1M+ ARR) expanding to Silicon Valley for US market entry, fundraising (seed through Series A), and ecosystem integration.
            </p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-orange-400 w-8 h-8" />
              <h3 className="text-2xl font-black text-foreground">What They Need</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Curated access, warm introductions, operational support, and authentic connections within Silicon Valley's competitive startup landscape.
            </p>
          </div>
        </div>

        {/* Community Features & Advantages */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-8">
            Community Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">100% Engagement</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No group chats or mass networking. Personalized, direct introductions via WhatsApp and email based on your specific business needs every week.
              </p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Network className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">Exclusive Network</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vetted community of $1M+ ARR founders, investors, Silicon Valley operators, and strategic partners.
              </p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">Full-Stack Support</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fundraising, go-to-market strategy, talent acquisition, media & PR, legal and operational partnerships.
              </p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">Freemium Membership</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Free + subscription-based networking services with personalized introduction services maintaining 100% member engagement.
              </p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">Private Events & Retreats</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Hyper-curated dinners, house parties, local activities and global retreats.
              </p>
              <a 
                href="https://www.lu.ma/glo_community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 text-sm font-semibold"
              >
                View Events →
              </a>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Handshake className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">Strategic Partners</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Curated relationships with service providers, investors, and corporate partners.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-6 mt-6 flex items-center gap-4">
            <Gift className="text-orange-400 w-10 h-10 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-black text-foreground mb-1">$5.2M+ in Benefits</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exclusive B2B SaaS product benefits and discounts across the ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Footer tagline */}
        <div className="text-center pt-8">
          <p className="text-lg text-muted-foreground italic">
            GLO represents the evolution of founder communities - where meaningful relationships drive real business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipOverview;