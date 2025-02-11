import type { ApiResult, Project, UrlGrp } from "../types/Models";

const API_PROJECTS: string = import.meta.env.SECRET_API_PROJECTS;
const API_LINKS: string = import.meta.env.SECRET_API_LINKS;
const API_IMG: string = import.meta.env.SECRET_API_IMG;
const API_KEY: string = import.meta.env.SECRET_API_KEY;

const GET_REQUEST_OPTIONS: RequestInit = {
  // cache: 'no-store', // or 'force-cache'
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "ApiKey": API_KEY
  },
};

const GET_REQUEST_IMG: RequestInit = {
  headers: {
    "ApiKey": API_KEY
  },
};

export async function apiFetchProjects(): Promise<ApiResult<Project[]>> {
  try {
    const response = await fetch(API_PROJECTS, GET_REQUEST_OPTIONS);
    const apiResult: ApiResult<Project[]> = await response.json(); 
    if (!response.ok) throw new Error(`Error en la API: ${response.status} ${response.statusText}`)

    return apiResult;
  } catch (err: unknown) {
    console.error("Error al obtener los datos de la API (apiFetchProjects):", err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
};

export async function apiFetchLinks(): Promise<ApiResult<UrlGrp[]>> {
  try {
    const response = await fetch(API_LINKS, GET_REQUEST_OPTIONS);
    const apiResult: ApiResult<UrlGrp[]> = await response.json();
    if (!response.ok) throw new Error(`Error en la API: ${response.status} ${response.statusText}`)

    return apiResult;
  } catch (err: unknown) {
    console.error("Error al obtener los datos de la API (apiFetchLinks):", err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
};

export async function apiFetchImgUrl(fileName: string): Promise<string | null>  {
  try {
    const response = await fetch(`${API_IMG}${fileName}`, GET_REQUEST_OPTIONS);
    if (!response.ok) throw new Error(`Error en la API: ${response.status} ${response.statusText}`)

    const blob = await response.blob();
    return URL.createObjectURL(blob); 
  } catch (err: unknown) {
    console.error("Error al obtener los datos de la API (apiFetchImg):", err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
}