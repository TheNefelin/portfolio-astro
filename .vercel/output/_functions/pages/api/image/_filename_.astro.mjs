export { renderers } from '../../../renderers.mjs';

const API_URL = "https://dragonra.bsite.net/api/portfolio";
const API_KEY = "Esmerilemelo-777";
const GET = async ({ params }) => {
  const fileName = params.fileName;
  const apiUrl = `${API_URL}/img?fileName=${fileName}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiKey": API_KEY
        // Usar la variable de entorno
      },
      cache: "default"
    });
    if (!response.ok) {
      throw new Error(`Error al cargar la imagen: ${response.statusText}`);
    }
    const blob = await response.blob();
    return new Response(blob, {
      headers: {
        "Content-Type": blob.type
        // Tipo MIME de la imagen (ej: image/webp)
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
