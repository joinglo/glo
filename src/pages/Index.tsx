
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Communities from "@/components/Communities";
import Features from "@/components/Features";
import IsGloForYou from "@/components/IsGloForYou";
import IntakeForm from "@/components/IntakeForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Testimonials />
      <Communities />
      <Features />
      <IsGloForYou />
      <IntakeForm />
    </div>
  );
};

export default Index;
