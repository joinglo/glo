
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      quote: "Eli from Global Entrepreneurs Hub has been an incredible partner, helping us at Persona host some truly impactful events. His energy, dedication, and creativity stood out, and I'm still amazed at his eagerness to grow and nurture his community. Love your ambition, Eli—keep building!",
      name: "Ed Giansante",
      title: "Head of Community @Persona",
      avatar: "EG"
    },
    {
      quote: "The Valley's is magical and unlike no other, it's a give-first mentality and everyone here has a mindset to build and create impact as well as the genuine curiosity to learn. GLO Events are a great representation of this and a catalyst for great conversations.",
      name: "Nikki Varanasi",
      title: "Founder @ Parrot Finance",
      avatar: "NV"
    },
    {
      quote: "I've been part of many startup ecosystems, but GLO has cracked the code on creating elite tech communities. As a founder who's hit traction, it's where Valley's rising stars are coming together to drive real growth",
      name: "Tommaso Tosi",
      title: "Founder @ Gomry & Silicon Valley Fellowship",
      avatar: "TT"
    },
    {
      quote: "Relationships are what give Silicon Valley compound returns. GLO has the pulse of of the entrepreneurs where the next wave comes from.",
      name: "Ross Mayfield",
      title: "Head of Product @Zoom Apps",
      avatar: "RM"
    }
  ];

  return (
    <Carousel className="w-full max-w-sm mx-auto md:hidden">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="bg-card border border-border rounded-xl p-5">
              <blockquote className="text-foreground mb-4 leading-relaxed font-medium text-sm">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-foreground font-bold text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs font-medium">{testimonial.title}</div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialsCarousel;
