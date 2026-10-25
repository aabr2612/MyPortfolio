export interface Testimonial {
  id: number;
  client: string;
  country: string;
  countryCode: string;
  role: string;
  projectType: string;
  rating: number;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    client: "Jessica K.",
    country: "Germany / UAE",
    countryCode: "DE",
    role: "Founder: EduSolutions UAE, SkinSnugs & Reconnect",
    projectType: "Full-Stack Development",
    rating: 5,
    content:
      "Abdul Rehman is amazing. He knows what he is doing and he is super helpful. I tried working with others on Fiverr, but none were like him. The only reason why I would hesitate to give him 5 stars is because I don’t want other people to take his time since I have many future projects planned with him!",
  },
  {
    id: 2,
    client: "A. Thompson",
    country: "United States",
    countryCode: "US",
    role: "CEO, Applified",
    projectType: "API Integration",
    rating: 5,
    content:
      "Abdul did an outstanding job fixing the coding issues in my app. From the beginning, he was professional, knowledgeable, and easy to work with. He took the time to understand the problem, communicated clearly, and went above and beyond to make sure the code was solid and reliable—not just applying a quick fix.",
  },
  {
    id: 3,
    client: "M. Rabet",
    country: "Netherlands",
    countryCode: "NL",
    role: "Software Engineer",
    projectType: "Application Code Review",
    rating: 5,
    content:
      "It was good working with Abdul. He gave me a comprehensive review of my code, which I can use to improve my product and myself as a software engineer.",
  },
  {
    id: 4,
    client: "Y. John",
    country: "United Kingdom",
    countryCode: "GB",
    role: "Project Owner",
    projectType: "Full-Stack Development",
    rating: 5,
    content:
      "Worked with Abdul on full-stack development of one of my projects. Professional approach, fast response time (usually under 30 minutes), and very polite communication. Revisions were handled quickly, and the final output was clean and usable. Recommended.",
  },
];
