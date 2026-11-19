import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { COUNCIL, ELECTION_STEPS, FAQ, GROUNDS } from "@/content/membership";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-12">
    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">{title}</h2>
    <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Membership = () => (
  <PageLayout path="/membership">
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
        GLO Fellows: Elected Membership of the Global Entrepreneurs Hub
      </h1>

      <Section title="One membership, one requirement">
        <p>
          The Global Entrepreneurs Hub has one class of membership. Every member is a GLO Fellow, and every Fellow
          was elected.
        </p>
        <p>
          Membership requires outstanding achievements in the applicant's field of endeavor. Those achievements are
          judged by the GLO Admissions Council, a body of recognized national and international experts in company
          building, venture investing and technology. Nothing else qualifies: not revenue on its own, not funding, not
          a referral, and not attendance at GLO events.
        </p>
      </Section>

      <Section title="What the Council looks for">
        <p>
          The Council elects Fellows on documented achievements, verified against public and third-party records. It
          does not weigh potential, enthusiasm, or how well someone interviews.
        </p>
        <p>
          To be considered, a candidate must first have held a founding, chief executive or senior leadership role at
          a company that completed a priced institutional financing round or an exit, or have an equivalent operating
          record at an organization of recognized standing.
        </p>
        <p>
          Above that threshold, the Council must find outstanding achievements on at least two of the following
          grounds, each supported by evidence it can check:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          {GROUNDS.map((g) => (
            <li key={g.title}>
              <strong className="text-foreground">{g.title}</strong> {g.body}
            </li>
          ))}
        </ul>
        <p>
          Achievements that are self-reported and cannot be corroborated are not counted. A strong profile, a large
          network or a well-funded company does not on its own satisfy any ground.
        </p>
      </Section>

      <Section title="Who decides">
        <p>
          Fellows are elected by the GLO Admissions Council and by no one else. Council members are recognized experts
          in their fields with public records of achievement, serve three-year terms, recuse themselves from any
          candidate they have invested in, employed or co-founded with, and are listed below.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          {COUNCIL.map((m) => (
            <li key={m.name}>
              <strong className="text-foreground">{m.name}</strong>, {m.role} {m.standing}
            </li>
          ))}
        </ul>
        <p>GLO staff do not vote on elections and do not sign letters of election.</p>
      </Section>

      <Section title="How election works">
        <ul className="list-disc pl-6 space-y-3">
          {ELECTION_STEPS.map((s) => (
            <li key={s.title}>
              <strong className="text-foreground">{s.title}</strong> {s.body}
            </li>
          ))}
        </ul>
        <p>
          Candidates who are not elected are told so in writing and may be re-nominated after twelve months on new
          evidence.
        </p>
      </Section>

      <Section title="What GLO membership is not">
        <p>
          It is not a subscription or a paid tier. There is no fee to be nominated and no fee on election. It is not a
          credential issued on request, and it cannot be purchased, sponsored or fast-tracked. Attending a GLO event
          as a guest confers no status.
        </p>
      </Section>

      <Section title="The record">
        <p>
          GLO keeps the nomination file, both written evaluations and the Council minute for every election for seven
          years, publishes its election statistics each year, and maintains a public register of current Fellows. A
          Fellow may request a certified copy of their letter of election and the Council's determination at any
          time.
        </p>
      </Section>

      <Section title="Questions">
        <dl className="space-y-5">
          {FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-bold text-foreground">{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <div className="mt-12">
        <Link
          to="/nominate"
          className="inline-block px-8 py-3 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full hover:scale-105 transition-all duration-200 text-base"
        >
          Nominate a candidate
        </Link>
      </div>
    </article>
  </PageLayout>
);

export default Membership;
