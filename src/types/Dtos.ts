export interface UrlGrpDTO {
  id_urlgrp: number;
  name: string;
  is_enabled: boolean;
  created_at: string;
  updated_at: string;
  urls: UrlDTO[];
}

export interface UrlDTO {
  id_url: number;
  name: string;
  link: string;
  is_enabled: boolean;
  id_urlgrp: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectDTO {
  id_project: number;
  name: string;
  img_url: string;
  repo_url: string;
  app_url: string;
  is_enabled: boolean;
  created_at: string;
  updated_at: string;
  languages: LanguageDTO[];
  technologies: TechnologyDTO[];
}

export interface LanguageDTO {
  id_language: number;
  name: string;
  img_url: string;
}

export interface TechnologyDTO {
  id_technology: number;
  name: string;
  img_url: string;
}
