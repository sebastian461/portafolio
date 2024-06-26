// Generated by https://quicktype.io

export interface Data {
  info: Info;
  experience: Experience[];
  education: Education[];
  courses: Course[];
  skills: Skill[];
  certifications: Certification[];
}

export interface Course {
  title: string;
  instructor: string;
  plataform: string;
  date: string;
  url: string;
}

export interface Education {
  institute: string;
  date: string;
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  description: string[];
}

export interface Info {
  name: string;
  description: string;
}

export interface Skill {
  skill: string;
  percent: number;
  img: string;
}

export interface Certification {
  certification: string;
  plataform: string;
  date: string;
  url?: string;
}
