import { ProcessCard, AiTool } from "./types";

export const processCards: ProcessCard[] = [
  {
    letter: "B",
    title: "Brief",
    description: "Be introduced to a real-world problem",
    features: [
      "Learn about the problem's significance",
      "Explore the multi-faceted nature of the problem",
      "Define project scope, objectives and expectations"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    letter: "U",
    title: "Understand",
    description: "Conduct research to deep dive into the problem",
    features: [
      "Create target audience and user personas",
      "Analyze existing solutions and their limitations",
      "Connect pain points with opportunity spaces"
    ],
    image: "https://jnj-content-lab2.brightspotcdn.com/dims4/default/30ca596/2147483647/strip/false/crop/5097x2867+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F20%2F7c%2F79af88a4474d8536bce688017114%2Fgettyimages-1144750331.jpg"
  },
  {
    letter: "I",
    title: "Innovate",
    description: "Brainstorm solutions in ideations workshops",
    features: [
      "Share your opportunity and research findings",
      "Define how-might-we statements to trigger ideation",
      "Sketch and propose preliminary solutions"
    ],
    image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    letter: "L",
    title: "Lead",
    description: "Refine your solution and prototype with AI",
    features: [
      "Refine and iterate preliminary ideas into MVP",
      "Consider product positioning and marketing",
      "Create Build-a-Poster™ and Build-a-Demo™ content"
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    letter: "D",
    title: "Design",
    description: "Our in-house designers bring them to life",
    features: [
      "Designers polish your high-fidelity prototypes",
      "Trainers consult on poster and demo video content",
      "Students prepare for sharing and project wrap-up"
    ],
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const aiTools: AiTool[] = [
  {
    logo: "https://lovable.dev/icon.svg?3d7ac3d2bb57ecbe",
    title: "Lovable",
    description: "AI-powered development environment that helps students build web applications through natural language conversations.",
    link: "https://www.lovable.dev"
  },
  {
    logo: "/lovable-uploads/chatgpt-logo.png",
    title: "ChatGPT",
    description: "Advanced language model that assists with research, ideation, and problem-solving throughout the development process.",
    link: "https://chat.openai.com"
  },
  {
    logo: "/lovable-uploads/copilot-logo.png",
    title: "GitHub Copilot",
    description: "AI pair programmer that helps students write better code faster through intelligent code suggestions.",
    link: "https://github.com/features/copilot"
  }
];
