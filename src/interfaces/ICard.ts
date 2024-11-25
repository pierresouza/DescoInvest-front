export interface CardOptions {
  highlight: boolean;
  title: string;
  isDev: boolean;
}

export interface CardLinks {
  github: string;
  linkedIn: string;
  behance: string;
}

export interface CardProps {
  photo: string;
  alt: string;
  name: string;
  office: string;
  techs: string[];
  description: string;
  options?: Partial<CardOptions>;
  links?: Partial<CardLinks>;
  className?: string;
}
