export type Commission = {
  id: string;
  caseLabel: string;
  title: string;
  description: string;
  tags: [string, string];
  image: string;
  imageAlt: string;
};

export const commissions: Commission[] = [
  {
    id: "tiny-popper",
    caseLabel: "CASE STUDY 01",
    title: "Tiny Popper",
    description:
      "E-commerce commission focused on conversion clarity, fast catalog navigation, and resilient checkout flows.",
    tags: ["ECOMMERCE", "2026"],
    image: "/images/tinypopper.com_.png",
    imageAlt: "Tiny Popper e-commerce commission preview",
  },
  {
    id: "apna-healer",
    caseLabel: "CASE STUDY 02",
    title: "Apna Healer",
    description:
      "Mental health NGO platform built for accessibility, trust, and easy appointment & outreach workflows.",
    tags: ["NGO", "2026"],
    image: "/images/apna-healer.vercel.app_clubs.png",
    imageAlt: "Apna Healer NGO commission preview",
  },
];
