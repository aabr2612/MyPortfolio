export interface EducationItem {
  id: number;
  duration: string;
  institution: string;
  degree: string;
  description: string;
  score?: string;
}

export const education: EducationItem[] = [
  {
    id: 1,
    duration: "2023 - Present",
    institution: "UET, Lahore",
    degree: "BS Computer Science",
    description:
      "Studying software engineering, database systems, backend architecture, and core computing fundamentals.",
  },
  {
    id: 2,
    duration: "2021 - 2023",
    institution: "Punjab College, Kamoke",
    degree: "ICS (Computer Science)",
    score: "897/1100",
    description:
      "Built an academic foundation in computer science, mathematics, logic, and analytical problem solving.",
  },
  {
    id: 3,
    duration: "2019 - 2021",
    institution: "The Educators, Kamoke",
    degree: "Matriculation Science",
    score: "1098/1100",
    description:
      "Completed secondary science education while actively participating in speech competitions and co-curricular activities.",
  },
];
