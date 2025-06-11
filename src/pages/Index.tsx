
import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Communities from "@/components/Communities";
import Features from "@/components/Features";
import IsGloForYou from "@/components/IsGloForYou";
import IntakeForm, { IntakeFormRef } from "@/components/IntakeForm";

const Index = () => {
  const intakeFormRef = useRef<IntakeFormRef>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <IntakeForm ref={intakeFormRef} />
      <Testimonials />
      <Communities />
      <Features />
      <IsGloForYou />
    </div>
  );
};

export default Index;
