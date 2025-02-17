
import { ReactNode } from "react";

export interface ProcessCard {
  letter: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface AiTool {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}
