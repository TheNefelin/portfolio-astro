import type { APIRoute } from 'astro';
import { apiFetchProjects } from '../../services/fetching';

const API_KEY = import.meta.env.SECRET_API_KEY
const API_URL = import.meta.env.SECRET_API_URL

// Manejar la solicitud GET
export const GET: APIRoute = async ({ params }) => {
  const fileName = params.fileName; // Obtener el nombre del archivo de los parámetros

  console.log(fileName)

  // URL de la API externa
  const apiUrl = `${API_URL}/img?fileName=${fileName}`;

  try {
    // Hacer la solicitud a la API externa
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiKey": API_KEY, // Usar la variable de entorno
      },
    });

    if (!response.ok) {
      throw new Error(`Error al cargar la imagen: ${response.statusText}`);
    }

    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type": blob.type, // Tipo MIME de la imagen (ej: image/webp)
      },
    });
  } catch (error) {
    let errorMessage = "Ocurrió un error desconocido";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

// Función para obtener todas las imgUrl únicas
async function fetchUniqueImageUrls() {
  // Obtener los proyectos desde la API
  const apiResult = await apiFetchProjects();

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

  return uniqueImgUrls;
}

// Generar las rutas estáticas
export async function getStaticPaths() {
  const uniqueImgUrls = await fetchUniqueImageUrls();

  console.log(uniqueImgUrls)

  // Generar las rutas estáticas
  return uniqueImgUrls.map((imgUrl) => ({
    params: { fileName: imgUrl.split('/').pop() }, // Extraer el nombre del archivo de la URL
  }));
}