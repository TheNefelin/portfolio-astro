import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url); // Convertir la URL en objeto URL
  console.log("URL completa:", url.toString()); // Imprimir la URL completa
  console.log("Query params:", url.searchParams.toString()); // Imprimir los parámetros

  return new Response(JSON.stringify({
    message: "This was a GET!"
  })
)
}
