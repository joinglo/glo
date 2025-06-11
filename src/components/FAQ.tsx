
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What if I'm outside the general benchmarks?",
      answer: "Apply anyways :) we have two communities and every person is taken case by case."
    },
    {
      question: "Is there a monthly, quarterly, or annual plan?",
      answer: "Yep, this promotes commitment and means everyone in chat is serious, we are not adding ballers if they don't want to play ball here. High-traction community is quarterly with re-evaluations every quarter and Early-traction/High-Potential is monthly."
    },
    {
      question: "Do you offer a trial period for your plans?",
      answer: "Yep, this promotes commitment and means everyone in chat is serious, we are not looking for ballers if they don't want to play ball. High-traction community is quarterly with re-evaluations every quarter and Early-traction/High-Potential is monthly."
    },
    {
      question: "How do we access the over $4.6M in B2B SaaS perks?",
      answer: "Inside the community once you're settled in, it's available on our bi-weekly intel reports and soon-to-be live web portal."
    },
    {
      question: "How can I partner with the GLO community?",
      answer: "Reach out to our founder Eli Al-Shamari on LinkedIn or WhatsApp here or email at hello@joinglocommunity.com."
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive FAQ to find quick answers to common inquiries. If you need further assistance, don't hesitate to contact us for help.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/50 hover:bg-card/80 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
