export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  eyebrow: string;
  headline: string;
  intro: string;
  color: string;
  soft: string;
  icon: "passport" | "briefcase" | "graduation" | "language" | "code";
  stat: string;
  statLabel: string;
  highlights: string[];
  steps: { number: string; title: string; text: string }[];
  outcomes: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "visa",
    index: "01",
    name: "Visa guidance",
    short: "Visa",
    eyebrow: "Make the move with clarity",
    headline: "Your route to Germany, clearly mapped.",
    intro: "We turn complicated requirements into a clear, personal checklist—so you know what fits, what to prepare, and what comes next.",
    color: "#c74f36",
    soft: "#f4ded7",
    icon: "passport",
    stat: "1:1",
    statLabel: "Personal route review",
    highlights: ["Opportunity Card", "Employment routes", "Ausbildung visa", "Document review"],
    steps: [
      { number: "01", title: "Understand", text: "We assess your qualifications, experience and destination." },
      { number: "02", title: "Choose", text: "We map the route that best fits your current profile." },
      { number: "03", title: "Prepare", text: "You receive a practical document and action checklist." },
      { number: "04", title: "Apply", text: "Move forward with a complete, well-organised application." },
    ],
    outcomes: [
      { title: "Eligibility overview", text: "A plain-language view of the routes worth pursuing." },
      { title: "Document checklist", text: "A tailored list of what to collect, certify and submit." },
      { title: "Application support", text: "Guidance through the preparation process and key milestones." },
    ],
  },
  {
    slug: "jobs",
    index: "02",
    name: "Jobs & careers",
    short: "Jobs",
    eyebrow: "Find work that moves you forward",
    headline: "A stronger profile for the German job market.",
    intro: "From positioning your experience to preparing for interviews, we help international candidates show employers what they can bring.",
    color: "#236f58",
    soft: "#dcece5",
    icon: "briefcase",
    stat: "360°",
    statLabel: "Candidate preparation",
    highlights: ["Profile review", "CV localisation", "Role matching", "Interview prep"],
    steps: [
      { number: "01", title: "Profile", text: "Clarify your strengths, experience and target roles." },
      { number: "02", title: "Position", text: "Adapt your CV and story to German employer expectations." },
      { number: "03", title: "Match", text: "Focus your search on roles that suit your real profile." },
      { number: "04", title: "Prepare", text: "Walk into conversations ready and confident." },
    ],
    outcomes: [
      { title: "German-ready CV", text: "A focused profile that is easier for employers to understand." },
      { title: "Search strategy", text: "Clear target roles, industries and application priorities." },
      { title: "Interview confidence", text: "Practical preparation for screening and hiring conversations." },
    ],
  },
  {
    slug: "ausbildung",
    index: "03",
    name: "Ausbildung",
    short: "Ausbildung",
    eyebrow: "Learn, earn and build a profession",
    headline: "Turn practical training into a long-term career.",
    intro: "We help you understand vocational training, identify suitable pathways and prepare a credible application for employers in Germany.",
    color: "#c38628",
    soft: "#f3e6ca",
    icon: "graduation",
    stat: "2–3.5",
    statLabel: "Typical training years",
    highlights: ["Pathway assessment", "Trade matching", "Applications", "Visa coordination"],
    steps: [
      { number: "01", title: "Assess", text: "Review education, interests, experience and language level." },
      { number: "02", title: "Explore", text: "Find training occupations that fit your strengths." },
      { number: "03", title: "Apply", text: "Build applications for suitable training companies." },
      { number: "04", title: "Transition", text: "Prepare for the practical move and training start." },
    ],
    outcomes: [
      { title: "Pathway shortlist", text: "Training options aligned to your skills and ambitions." },
      { title: "Application package", text: "A clear, well-presented candidate profile for employers." },
      { title: "Readiness plan", text: "Language, document and relocation priorities in one place." },
    ],
  },
  {
    slug: "german",
    index: "04",
    name: "German language",
    short: "German",
    eyebrow: "Language that opens real doors",
    headline: "Learn German for the life you plan to live.",
    intro: "A focused path from your current level to the language confidence you need for work, training and everyday life in Germany.",
    color: "#6654a4",
    soft: "#e8e3f2",
    icon: "language",
    stat: "A1–B2",
    statLabel: "Guided learning path",
    highlights: ["Level guidance", "Course enrolment", "Exam preparation", "Career vocabulary"],
    steps: [
      { number: "A1", title: "Foundation", text: "Build a useful base for simple everyday situations." },
      { number: "A2", title: "Routine", text: "Communicate around familiar work and life topics." },
      { number: "B1", title: "Independence", text: "Handle most situations with growing confidence." },
      { number: "B2", title: "Professional", text: "Express ideas clearly in more complex settings." },
    ],
    outcomes: [
      { title: "Right starting point", text: "Choose a level based on ability, not guesswork." },
      { title: "Structured progress", text: "Follow a clear route with practical milestones." },
      { title: "Real-world confidence", text: "Connect language learning to work and daily life." },
    ],
  },
  {
    slug: "engineering",
    index: "05",
    name: "Digital engineering",
    short: "Engineering",
    eyebrow: "Ideas built with technical discipline",
    headline: "A senior technical partner, without the overhead.",
    intro: "We help ambitious teams shape, build and improve digital products—from early architecture to dependable delivery.",
    color: "#386a9c",
    soft: "#dce8f1",
    icon: "code",
    stat: "End–end",
    statLabel: "Product capability",
    highlights: ["Web & software", "Data & AI", "Mobile products", "Technical strategy"],
    steps: [
      { number: "01", title: "Frame", text: "Clarify the problem, users and commercial constraints." },
      { number: "02", title: "Design", text: "Shape the experience, system and delivery plan." },
      { number: "03", title: "Build", text: "Create robust software with transparent progress." },
      { number: "04", title: "Evolve", text: "Learn from real use and improve the product." },
    ],
    outcomes: [
      { title: "Product clarity", text: "A sharper scope tied to outcomes that matter." },
      { title: "Reliable delivery", text: "Pragmatic engineering and visible progress." },
      { title: "Long-term thinking", text: "Technical decisions that support future growth." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
