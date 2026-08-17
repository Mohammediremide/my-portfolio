// Replace the fields below with your real project details.
// `category` must be one of: "frontend", "fullstack", "apis", "other"
// `image` accepts any image path in /public or an imported asset — when
// null, a distinct icon-based placeholder is rendered automatically based
// on `visual` below. Swap `image` in once you have real screenshots.
// `visual` options: "book" | "cloud" | "cargo" | "review"

export const featuredProject = {
  name: "MoveMate",
  tagline: "Book a truck. Move your life.",
  problem:
    "Moving goods across Nigerian cities means calling around for truck availability, guessing at prices, and hoping the driver actually shows up — with no shared language between customer and driver in a lot of cases.",
  solution:
    "A full-stack booking platform that turns an address pair into an instant price estimate, matches the request to available trucks, and speaks the customer's language — English, French, Yoruba, Igbo, or Hausa.",
  features: [
    "Live route mapping and distance-based pricing via Geoapify + MapLibre GL JS",
    "Node.js / Express API backed by PostgreSQL on Neon",
    "i18next localization across 5 languages, switchable at runtime",
    "Booking flow from address entry to confirmed estimate in under a minute",
  ],
  tech: ["React 19", "Node.js", "Express", "PostgreSQL", "Neon", "MapLibre GL JS", "Geoapify", "i18next"],
  image: "/images/movemate-logo.png",
  liveUrl: "https://movemate-client.vercel.app/",
  githubUrl: "https://github.com/Mohammediremide/Movemate",
  status: "In active development",
};

export const projects = [
  {
    id: "project-reviewer",
    name: "Project Reviewer",
    // TODO: swap in your real description — this is a placeholder based on the project name.
    description:
      "A tool for reviewing project submissions — a structured way to check code and work against a set of standards before it ships.",
    tech: ["React", "Vercel"],
    category: "fullstack",
    visual: "review",
    image: "/images/project-reviewer.svg",
    liveUrl: "https://project-reviewer.vercel.app/",
    githubUrl: "https://github.com/Mohammediremide/project-reviewer",
  },
  {
    id: "cargo-business",
    name: "Cargo Business",
    // TODO: swap in your real description — this is a placeholder based on the project name.
    description:
      "A logistics and cargo-shipping platform built to streamline how a shipping business manages bookings and freight.",
    tech: ["React", "Vercel"],
    category: "fullstack",
    visual: "cargo",
    image: "/images/cargo-business.svg",
    liveUrl: "https://cargo-business.vercel.app/",
    githubUrl: "https://github.com/Mohammediremide/Cargo-business",
  },
  {
    id: "sky-cast",
    name: "Sky Cast",
    // TODO: swap in your real description — this is a placeholder based on the project name.
    description:
      "A weather forecast app giving quick, clean access to current conditions and upcoming forecasts.",
    tech: ["React", "Weather API"],
    category: "frontend",
    visual: "cloud",
    image: "/images/sky-cast.svg",
    liveUrl: "https://sky-cast-sy9t.vercel.app/",
    githubUrl: "https://github.com/Mohammediremide/Sky-cast",
  },
  {
    id: "bluebook",
    name: "Bluebook",
    description:
      "A study companion for students — upload a PDF and get Gemini-generated quizzes, flashcards, and exam prep, with PIN login, per-student progress, and a teacher admin panel.",
    tech: ["React", "Vite", "Express", "Gemini API"],
    category: "fullstack",
    visual: "book",
    image: "/images/bluebook.svg",
    liveUrl: null,
    githubUrl: "https://github.com/Mohammediremide/bluebook",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "apis", label: "APIs" },
  { id: "other", label: "Other" },
];
