const Testimonials = () => {
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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-purple-400 text-sm font-semibold mb-4">Testimonial</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Silicon Valley's <span className="text-orange-400 font-black">Veterans</span> and <span className="text-orange-400 font-black">Rising Stars</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6">
              <blockquote className="text-foreground mb-6 leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-foreground font-bold">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm font-medium">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
