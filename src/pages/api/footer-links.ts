import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const API_URL = import.meta.env.SECRET_API_URL;
  const API_KEY = import.meta.env.SECRET_API_KEY;
  
  try {
    const response = await fetch(`${API_URL}/public-urls`, {
      headers: { 
        "ApiKey": API_KEY,
        "Accept": "application/json"
      }
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-cache" // Para datos frescos
      }
    });
    
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to fetch",
        data: [] 
      }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};