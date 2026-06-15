export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stats: ProjectStat[];
  colorFrom: string;
  colorTo: string;
}

export interface DonationTier {
  amount: number;
  description: string;
}

export interface FundUsage {
  category: string;
  percentage: number;
  description: string;
}

export interface VolunteerEvent {
  date: string;
  time: string;
  location: string;
  duration: string;
  gatheringPoint: string;
}

export interface SafetyGuideline {
  category: string;
  items: string[];
}

export interface VolunteerFormData {
  name: string;
  phone: string;
  email: string;
  participants: number;
  experience: string;
  remarks: string;
}
