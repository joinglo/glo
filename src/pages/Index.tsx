import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import { GROUNDS } from "@/content/membership";

const Index = () => (
  <PageLayout path="/">
    <Hero />

    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
          One membership, one requirement
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          <p>
            The Global Entrepreneurs Hub has one class of membership. Every member is a GLO Fellow, and every
            Fellow was elected.
          </p>
          <p>
            Membership requires outstanding achievements in the applicant's field of endeavor. Those achievements
            are judged by the GLO Admissions Council, a body of recognized national and international experts in
            company building, venture investing and technology. Nothing else qualifies: not revenue on its own, not
            funding, not a referral, and not attendance at GLO events.
          </p>
        </div>

        <h3 className="text-2xl font-black text-foreground mt-12 mb-6 text-center">What the Council looks for</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GROUNDS.map((g) => (
            <div key={g.title} className="bg-card border border-border rounded-2xl p-5">
              <p className="font-bold text-foreground mb-2">{g.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            to="/membership"
            className="px-8 py-3 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full hover:scale-105 transition-all duration-200 text-base"
          >
            How election works
          </Link>
          <Link
            to="/nominate"
            className="px-8 py-3 text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-200 text-base"
          >
            Nominate
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Index;
