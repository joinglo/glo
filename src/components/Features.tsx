
import { Gift, Users, DollarSign, Briefcase, BookOpen, FileText } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Events & Experiences",
      description: "Mansion parties, private dinners, featured guest speakers, professional networking events and soon GLO retreats."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Private Slack Community",
      description: "Application-based private slack community, highly vetted founder, active investors, influencers & operators."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "$4.6M+ in B2B SaaS Perks",
      description: "Thats right, we've lined-up over $4.6 Million worth of of members-only perks to top B2B SaaS products from Notion Pro to AWS credits."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Community-Led Workshops",
      description: "Member & guest speaker lead workshops on hot topics from the people who've actually done it."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Resource Libraries",
      description: "A living library of notion boards, videos, articles of our communities collective experience and go-to resources. Digital tribal knowledge."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Bi-Weekly Insights Reports",
      description: "Featuring member-wins, highlighting key insights and dropping the hottest members-only B2B SaaS deals."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - What's inside GLO */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What's inside <span className="text-orange-400">GLO</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Curated community of high-traction founders/CEOs, active investors, influencers & c-suite operators. 
              Bootstrapped or backed by the likes of YC, Techstars, a16z, 500 global, General Catalyst & so much more.
            </p>
          </div>

          {/* Right side - Features grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <div className="text-orange-400 flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
