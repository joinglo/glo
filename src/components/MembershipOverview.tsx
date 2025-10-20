import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Users, TrendingUp, Calendar, Handshake, Building2 } from "lucide-react";

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

        {/* The GLO Advantage */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-8">
            The <span className="text-orange-400">GLO</span> Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h4 className="text-xl font-black text-foreground mb-3">90% Digital, 100% Engagement</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No group chats or mass networking. Every member receives personalized, direct introductions via WhatsApp and email based on specific business needs and goals every week.
              </p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h4 className="text-xl font-black text-foreground mb-3">Exclusive Network Access</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vetted community of $1M+ ARR founders, investors, Silicon Valley operators, and strategic partners who are actively engaged and accessible.
              </p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h4 className="text-xl font-black text-foreground mb-3">Full-Stack Support Ecosystem</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Fundraising syndication and investor introductions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Go-to-market execution and strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Talent acquisition and team building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Media, branding, and PR services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Legal, banking, and operational partnerships</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 mt-6 text-center">
            <h4 className="text-2xl font-black text-foreground mb-2">$5.2M+ in Member Benefits</h4>
            <p className="text-muted-foreground">
              Exclusive B2B SaaS product benefits and discounts, demonstrating real value and strong partner relationships across the ecosystem.
            </p>
          </div>
        </div>

        {/* Community Features */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-8">
            Community Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h4 className="text-xl font-black text-foreground mb-3">Freemium Membership Structure</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Free + subscription-based networking services tailored to different founder needs and growth stages, with personalized introduction services maintaining 100% member engagement.
              </p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">Private Events & Retreats</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Exclusive gatherings that foster deep relationships and strategic partnerships. Hyper-curated dinners, house parties, local activities and global retreats.
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
                <h4 className="text-xl font-black text-foreground">Strategic Partner Network</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Curated relationships with service providers, investors, and corporate partners who understand the unique needs of scaling international startups.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-8">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h4 className="text-xl font-black text-foreground mb-3">For Service Providers</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Access to vetted, high-growth startups with real revenue and funding needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Opportunity to showcase expertise to qualified prospects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Integration into our referral and introduction ecosystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Participation in exclusive events and networking opportunities</span>
                </li>
              </ul>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h4 className="text-xl font-black text-foreground mb-3">For Investors</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Deal flow from pre-qualified $1M+ ARR companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Direct access to international founders expanding to US markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Participation in exclusive investor events and deal syndication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Network effects through founder-to-founder referrals</span>
                </li>
              </ul>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="text-orange-400 w-6 h-6" />
                <h4 className="text-xl font-black text-foreground">For Corporate Partners</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Event sponsorship opportunities with engaged, high-value audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Product partnership and integration possibilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Access to innovative startups for potential strategic partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Brand association with Silicon Valley's premier founder community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Join GLO */}
        <div className="bg-gradient-to-br from-orange-500/5 to-orange-600/5 border border-orange-500/20 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-8">
            Why Join <span className="text-orange-400">GLO</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-black text-foreground mb-2">For Founders</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Skip the noise of traditional networking. Get direct, warm introductions to the exact people you need to grow your business in Silicon Valley.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black text-foreground mb-2">For Partners</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect with vetted, revenue-generating startups that are actively scaling and have real budget for services and partnerships.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black text-foreground mb-2">For the Ecosystem</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Participate in a community that prioritizes quality relationships and meaningful business outcomes over superficial networking.
              </p>
            </div>
          </div>
        </div>

        {/* Media & Growth + Silicon Valley Native */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="text-xl font-black text-foreground mb-3">(soon) Media & Growth Strategy</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building organic growth through authentic content across TikTok, Instagram, YouTube, X, and LinkedIn, featuring member success stories and Silicon Valley startup lifestyle content. This creates a flywheel effect that attracts both high-quality founders and strategic partners.
            </p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="text-xl font-black text-foreground mb-3">Silicon Valley Native</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Deep integration with the ecosystem where 30% of US venture funding occurs. We understand the unique challenges international founders face and provide the infrastructure needed to succeed in the world's most important startup ecosystem.
            </p>
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