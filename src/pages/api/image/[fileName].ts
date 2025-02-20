import type { APIRoute } from 'astro';
import type { ApiResult, Project } from '../../../types/Models';
import { apiFetchProjects } from '../../../services/fetching';

const API_URL = import.meta.env.SECRET_API_URL
const API_KEY = import.meta.env.SECRET_API_KEY

export const GET: APIRoute = async ({ params }) => {
  const fileName = params.fileName; // Obtener el nombre del archivo de los parámetros

  // URL de la API externa
  const apiUrl = `${API_URL}${fileName}`;

  try {
    // Hacer la solicitud a la API externa
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiKey": API_KEY, // Usar la variable de entorno
      },
      cache: "default",
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al cargar la imagen: ${response.statusText}`);
    }

    // Convertir la respuesta a un Blob
    const blob = await response.blob();

    // Devolver la imagen como respuesta
    return new Response(blob, {
      headers: {
        "Content-Type": blob.type, // Tipo MIME de la imagen (ej: image/webp)
      },
    });
  } catch (error) {
    // Manejar errores
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
};

export async function getStaticPaths() {
  // Obtener los proyectos desde la API
  const apiResult: ApiResult<Project[]> = await apiFetchProjects();

  // Verificar si la solicitud fue exitosa
  if (!apiResult.isSucces) {
    throw new Error(`Error al obtener los proyectos: ${apiResult.message}`);
  }

  // Extraer todas las imgUrl de proyectos, lenguajes y tecnologías
  const allImgUrls = apiResult.data.flatMap((project) => {
    const projectImgUrl = project.imgUrl;
    const languagesImgUrls = project.languages.map((language) => language.imgUrl);
    const technologiesImgUrls = project.technologies.map((tech) => tech.imgUrl);
    return [projectImgUrl, ...languagesImgUrls, ...technologiesImgUrls];
  });

  // Eliminar duplicados usando un Set
  const uniqueImgUrls = [...new Set(allImgUrls)];

  // Generar las rutas estáticas
  return uniqueImgUrls.map((imgUrl) => ({
    params: { fileName: imgUrl.split('/').pop() }, // Extraer el nombre del archivo de la URL
  }));
}