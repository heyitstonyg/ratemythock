export const DESCRIPTORS = [
  "Bassy",
  "Bouncy",
  "Buttery",
  "Chirpy",
  "Clacky",
  "Creamy",
  "Easy-To-Press",
  "Frictionless",
  "High-Pitched",
  "Low-Pitched",
  "Marbly",
  "Mild",
  "Muted",
  "Neutral",
  "Polished",
  "Resonant",
  "Sharp",
  "Silky",
  "Snappy",
  "Stepped",
  "Subtle",
  "Thocky",
] as const;

export type Descriptor = (typeof DESCRIPTORS)[number];

export interface DescriptorCount {
  [key: string]: number;
}

export interface Keyboard {
  id: number;
  title: string;
  switches: string;
  caseMaterial: string;
  mountingStyle: string;
  audioUrl: string;
  imageUrl: string;
  descriptors: DescriptorCount;
}
