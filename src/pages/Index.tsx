
import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Communities from "@/components/Communities";
import IntakeForm, { IntakeFormRef } from "@/components/IntakeForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  const intakeFormRef = useRef<IntakeFormRef>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <IntakeForm ref={intakeFormRef} />
      <Testimonials />
      <Communities />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
