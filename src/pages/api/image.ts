import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) => {
  const aaaa = await params
  console.log(aaaa)
  
  return new Response(`fileName recibido:`, { status: 200 });
};

// export const GET: APIRoute = async ({ url }) => {
//   console.log("URL completa:", url.href);
//   console.log(url)

//   const fileName = url.searchParams.get("fileName");
//   if (!fileName) return new Response("Falta fileName", { status: 400 });

//   const API_IMG: string = import.meta.env.SECRET_API_IMG;
//   const API_KEY = import.meta.env.API_KEY;
//   const apiUrl = `${API_IMG}${fileName}`;

//   try {
//     const response = await fetch(apiUrl, {
//       headers: { 'ApiKey': API_KEY },
//     });

//     if (!response.ok) throw new Error('Error al obtener la imagen');

//     return new Response(response.body, {
//       headers: {
//         'Content-Type': response.headers.get('Content-Type') || 'image/webp',
//         'Cache-Control': 'public, max-age=3600', // Cache para optimizar
//       },
//     });
//   } catch (error) {
//     console.error("Error al obtener la imagen:", error);
//     return new Response('Error al cargar la imagen', { status: 500 });
//   }
// };
