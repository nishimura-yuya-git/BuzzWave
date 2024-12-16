export type PlanType = 'normal' | 'standard';

export interface Plan {
  name: string;
  price: string;
  duration: string;
  features: string[];
  type: PlanType;
}