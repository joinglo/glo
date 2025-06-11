
import { Gift, Users, DollarSign, Briefcase, BookOpen, FileText } from "lucide-react";
import FeaturesCarousel from "./FeaturesCarousel";

const Features = () => {
  const features = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Exclusive Events & Experiences",
      description: "Mansion parties, private dinners, featured guest speakers, professional networking events and soon GLO retreats."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Private Slack Community",
      description: "Application-based private Slack community, highly vetted founders, active investors, influencers & operators."
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "$4.6M+ in B2B SaaS Perks",
      description: "That's right, we've lined up over $4.6 Million worth of members-only perks to top B2B SaaS products from Notion Pro to AWS credits."
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Community-Led Workshops",
      description: "Member & guest speaker led workshops on hot topics from the people who've actually done it."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Resource Libraries",
      description: "A living library of Notion boards, videos, articles of our community's collective experience and go-to resources. Digital tribal knowledge."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Bi-Weekly Insights Reports",
      description: "Featuring member wins, highlighting key insights and dropping the hottest members-only B2B SaaS deals."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            What's inside <span className="text-orange-400">GLO</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-semibold max-w-4xl mx-auto">
            Curated community of high-traction founders/CEOs, active investors, influencers & c-suite operators. 
            Bootstrapped or backed by the likes of YC, Techstars, a16z, 500 global, General Catalyst & so much more.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <FeaturesCarousel />
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-5 flex gap-4">
              <div className="text-orange-400 flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-2 text-sm">{feature.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
