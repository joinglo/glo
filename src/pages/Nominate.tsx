import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { NOMINATIONS_EMAIL } from "@/seo";

const Nominate = () => (
  <PageLayout path="/nominate">
    <article className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
      <h1 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
        Nominate a candidate for election
      </h1>

      <p>
        Nominations may be made by a current Fellow, a Council member, or the candidate. A nomination is not an
        application: it is a written case, with evidence, that the Council then verifies and judges.
      </p>

      <p>
        To nominate, send the following to{" "}
        <a href={`mailto:${NOMINATIONS_EMAIL}`} className="text-primary hover:underline font-semibold">
          {NOMINATIONS_EMAIL}
        </a>
        :
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>The candidate's name and current role</li>
        <li>
          The company or companies that meet the threshold (a priced institutional round, an exit, or an equivalent
          record)
        </li>
        <li>
          The grounds, from the list on the{" "}
          <Link to="/membership" className="text-primary hover:underline">
            Membership page
          </Link>
          , on which you believe the candidate qualifies, with a short statement for each
        </li>
        <li>Links or documents supporting each ground</li>
      </ul>

      <p>Nominations are ordinarily decided within 120 days. There is no fee at any stage.</p>
    </article>
  </PageLayout>
);

export default Nominate;
