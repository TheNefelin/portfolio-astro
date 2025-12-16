import type { APIRoute } from 'astro';
import type { ApiResult, UrlGrp } from '../../types/Models';

export const GET: APIRoute = async ({ request }) => {
  const API_URL = import.meta.env.SECRET_API_URL;
  const API_KEY = import.meta.env.SECRET_API_KEY;
  
  // Validar que existan las variables de entorno
  if (!API_URL || !API_KEY) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Configuración incompleta",
        data: [] 
      }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  
  try {
    const response = await fetch(`${API_URL}/public-urls`, {
      headers: { 
        "ApiKey": API_KEY,
        "Accept": "application/json",
        // Opcional: agregar User-Agent para evitar ser bloqueado por algunos servidores
        "User-Agent": "Astro-Footer/1.0"
      },
      // Timeout de 5 segundos
      signal: AbortSignal.timeout(5000)
    });
    
    // Validar que la respuesta sea exitosa
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const data: ApiResult<UrlGrp[]> = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        // Cachea por 5 minutos en el navegador, revalidar en el servidor
        "Cache-Control": "public, max-age=300, s-maxage=300"
      }
    });
    
  } catch (error) {
    console.error('Error fetching footer links:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to fetch footer links",
        data: [] 
      }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};