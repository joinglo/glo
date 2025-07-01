import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Eli from Global Entrepreneurs Hub has been an incredible partner, helping us at Persona host some truly impactful events. His energy, dedication, and creativity stood out, and I'm still amazed at his eagerness to grow and nurture his community. Love your ambition, Eli—keep building!",
      name: "Ed Giansante",
      title: "Head of Community @ Persona",
      avatar: "/lovable-uploads/eg.jpg"
    },
    {
      quote: "The Valley's is magical and unlike no other, it's a give-first mentality and everyone here has a mindset to build and create impact as well as the genuine curiosity to learn. GLO Events are a great representation of this and a catalyst for great conversations.",
      name: "Nikki Varanasi",
      title: "Founder @ Parrot Finance",
      avatar: "/lovable-uploads/nv.jpg"
    },
    {
      quote: "I've been part of many startup ecosystems, but GLO has cracked the code on creating elite tech communities. As a founder who's hit traction, it's where Valley's rising stars are coming together to drive real growth",
      name: "Tommaso Tosi",
      title: "Founder @ Gomry & Silicon Valley Fellowship",
      avatar: "/lovable-uploads/tt.jpg"
    },
    {
      quote: "Relationships are what give Silicon Valley compound returns. GLO has the pulse of of the entrepreneurs where the next wave comes from.",
      name: "Ross Mayfield",
      title: "Head of Product @ Zoom Apps",
      avatar: "/lovable-uploads/rm.jpg"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      ref={ref}
      className={`py-12 px-6 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            Silicon Valley's <span className="text-orange-400 font-black">Veterans</span> and <span className="text-orange-400 font-black">Rising Stars</span>
          </h2>
        </div>

        {/* Sliding Carousel */}
        <div className="relative overflow-hidden pb-12">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 max-w-2xl mx-auto">
                  <blockquote className="text-foreground mb-6 leading-relaxed font-medium text-lg text-center">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-full h-full bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-lg hidden">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-foreground font-bold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm font-medium">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
