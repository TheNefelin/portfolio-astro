export interface UrlGrp {
  idUrlGrp: number;
  name: string;
  isEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  urls: Url[];
}

export interface Url {
  idUrl: number;
  idUrlGrp: number;
  name: string;
  link: string;
  isEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  name: string;
  imgUrl: string;
  repoUrl: string;
  appUrl: string;
  isEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  languages: Language[];
  technologies: Technology[];
}

export interface Language {
  id: number;
  name: string;
  imgUrl: string;
}

export interface Technology {
  id: number;
  name: string;
  imgUrl: string;
}
