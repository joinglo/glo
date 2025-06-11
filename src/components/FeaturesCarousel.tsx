
import { Gift, Users, DollarSign, Briefcase, BookOpen, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const FeaturesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const features = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Exclusive Events & Experiences",
      description: "Mansion parties, private dinners, featured guest speakers, professional networking events and soon GLO retreats."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Private Slack Community",
      description: "Application-based private slack community, highly vetted founder, active investors, influencers & operators."
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "$4.6M+ in B2B SaaS Perks",
      description: "Thats right, we've lined-up over $4.6 Million worth of of members-only perks to top B2B SaaS products from Notion Pro to AWS credits."
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Community-Led Workshops",
      description: "Member & guest speaker lead workshops on hot topics from the people who've actually done it."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Resource Libraries",
      description: "A living library of notion boards, videos, articles of our communities collective experience and go-to resources. Digital tribal knowledge."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Bi-Weekly Insights Reports",
      description: "Featuring member-wins, highlighting key insights and dropping the hottest members-only B2B SaaS deals."
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-sm mx-auto lg:hidden">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index}>
              <div className="bg-card border border-border rounded-xl p-5 flex gap-4">
                <div className="text-orange-400 flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-foreground font-bold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index + 1 === current 
                ? "bg-orange-400 w-6" 
                : "bg-muted-foreground/30"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Counter */}
      <div className="text-center mt-2 text-xs text-muted-foreground">
        {current} of {count}
      </div>
    </div>
  );
};

export default FeaturesCarousel;
