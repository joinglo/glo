export const TAGLINE =
  "An elected body of founders and operators, chosen for outstanding achievements in their field.";

export const META_DESCRIPTION =
  "GLO Fellows are elected by the GLO Admissions Council, a body of recognized national and international experts, on verified evidence of outstanding achievements in building companies. There is no application, no fee, and no open enrolment.";

export const NOMINATIONS_EMAIL = "team@glocommunity.com";

export interface PageMeta {
  title: string;
  description: string;
}

// Used by the pages at runtime and by scripts/prerender.mjs at build time.
export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Global Entrepreneurs Hub",
    description: META_DESCRIPTION,
  },
  "/membership": {
    title: "GLO Fellows: Elected Membership of the Global Entrepreneurs Hub",
    description: META_DESCRIPTION,
  },
  "/nominate": {
    title: "Nominate a candidate for election | Global Entrepreneurs Hub",
    description:
      "Nominations for election as a GLO Fellow are written cases, with evidence, that the GLO Admissions Council verifies and judges. There is no fee at any stage.",
  },
};
