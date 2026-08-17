import {
  Code2,
  Braces,
  FileCode2,
  Component,
  Server,
  Webhook,
  Globe2,
  GitBranch,
  TerminalSquare,
  Rocket,
} from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    note: "Where I live day to day",
    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Braces },
      { name: "JavaScript", icon: FileCode2 },
      { name: "TypeScript", icon: FileCode2 },
      { name: "React", icon: Component },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    note: "Enough to ship a full product",
    skills: [
      { name: "Python", icon: Server },
      { name: "APIs", icon: Webhook },
      { name: "REST APIs", icon: Globe2 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    note: "My daily workflow",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GithubIcon },
      { name: "VS Code", icon: TerminalSquare },
      { name: "Vercel", icon: Rocket },
    ],
  },
];
