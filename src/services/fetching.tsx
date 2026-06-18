import type { ProjectDTO, UrlGrpDTO } from "../types/Dtos";
import { mapProject, mapUrlGrp } from "../types/Mappers";
import type { Project, UrlGrp } from "../types/Models";

const API_URL: string = import.meta.env.SECRET_API_URL
const API_KEY: string = import.meta.env.SECRET_API_KEY;

const REQUEST_OPTIONS: RequestInit = {
  // cache: 'no-store', // or 'force-cache'
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
  },
};

export async function getAllUrls(): Promise<UrlGrp[]> {
  try {
    const response = await fetch(
      `${API_URL}/url-grp/detail`,
      REQUEST_OPTIONS
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("API error:", error);
      throw new Error(error?.detail?.[0]?.msg ?? "Error en la API");
    }

    const data: UrlGrpDTO[] = await response.json();
    return data.map(mapUrlGrp);
  } catch (err: unknown) {
    console.error("Error al obtener los datos de la API:", err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
};

export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `${API_URL}/project`,
      REQUEST_OPTIONS
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("API error:", error);
      throw new Error(error?.detail?.[0]?.msg ?? "Error en la API");
    }

    const data: ProjectDTO[] = await response.json();
    return data.map(mapProject);
  } catch (err: unknown) {
    console.error("Error al obtener los datos de la API:", err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
};
