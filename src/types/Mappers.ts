import type { LanguageDTO, ProjectDTO, TechnologyDTO, UrlDTO, UrlGrpDTO } from "./Dtos";
import type { Language, Project, Technology, Url, UrlGrp } from "./Models";

export function mapUrlGrp(dto: UrlGrpDTO): UrlGrp {
  return {
    idUrlGrp: dto.id_urlgrp,
    name: dto.name,
    isEnabled: dto.is_enabled,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    urls: dto.urls.map(mapUrl),
  };
}

export function mapUrl(dto: UrlDTO): Url {
  return {
    idUrl: dto.id_url,
    idUrlGrp: dto.id_urlgrp,
    name: dto.name,
    link: dto.link,
    isEnabled: dto.is_enabled,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  };
}

export function mapProject(dto: ProjectDTO): Project {
  return {
    id: dto.id_project,
    name: dto.name,
    imgUrl: dto.img_url,
    repoUrl: dto.repo_url,
    appUrl: dto.app_url,
    isEnabled: dto.is_enabled,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    languages: dto.languages.map(mapLanguage),
    technologies: dto.technologies.map(mapTechnology),
  };
}

export function mapLanguage(dto: LanguageDTO): Language {
  return {
    id: dto.id_language,
    name: dto.name,
    imgUrl: dto.img_url,
  };
}

export function mapTechnology(dto: TechnologyDTO): Technology {
  return {
    id: dto.id_technology,
    name: dto.name,
    imgUrl: dto.img_url,
  };
}