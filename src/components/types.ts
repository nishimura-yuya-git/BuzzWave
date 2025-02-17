export type PlanType = "normal" | "standard" | "executive";

export interface Plan {
  name: string;
  price: string;
  duration: string;
  features: string[];
  type: PlanType;
}

export interface DetailItem {
  iconPath: string;
  title: string;
  description: string;
}

export interface CurriculumPhaseData {
  mainSteps: string[];
  details: DetailItem[];
}