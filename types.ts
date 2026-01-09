export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface Doctor {
  name: string;
  position: string;
  specialty: string;
  image: string;
  career: string[];
}