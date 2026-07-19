import type { ProjectDTO, UrlGrpDTO } from "@/types/Dtos";
import { mapProject, mapUrlGrp } from "@/types/Mappers";
import type { Project, UrlGrp } from "@/types/Models";

const API_URL: string = import.meta.env.SECRET_API_URL;
const API_KEY: string = import.meta.env.SECRET_API_KEY;

const REQUEST_OPTIONS: RequestInit = {
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-API-Key": API_KEY,
  },
};

export interface ApiResult<T> {
  data: T | null;
  error: string | null;
}

async function request<T>(url: string): Promise<ApiResult<T>> {
  try {
    const response = await fetch(url, REQUEST_OPTIONS);

    if (!response.ok) {
      const err = await response.json();
      return { data: null, error: err?.detail?.[0]?.msg ?? "Error en la API" };
    }

    const data: T = await response.json();
    return { data, error: null };
  } catch (err: unknown) {
    return { data: null, error: "Error de conexión con el servidor" };
  }
}

export async function getAllUrls(): Promise<ApiResult<UrlGrp[]>> {
  const result = await request<UrlGrpDTO[]>(`${API_URL}/url-grp/detail`);
  if (result.error) return { data: null, error: result.error };
  if (!Array.isArray(result.data)) return { data: null, error: "Formato de datos inesperado" };
  return { data: result.data.map(mapUrlGrp), error: null };
}

export async function getAllProjects(): Promise<ApiResult<Project[]>> {
  const result = await request<ProjectDTO[]>(`${API_URL}/project`);
  if (result.error) return { data: null, error: result.error };
  if (!Array.isArray(result.data)) return { data: null, error: "Formato de datos inesperado" };
  return { data: result.data.map(mapProject), error: null };
}
