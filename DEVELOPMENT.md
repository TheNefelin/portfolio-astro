# Desarrollo — portfolio-astro

> Memoria del proyecto: decisiones y estado que deben sobrevivir a cada sesión.
> Marca el **estado** de cada decisión (`Aceptado`, `Propuesto`, `Pendiente`); lo desconocido se anota, no se inventa.
> Reemplaza el estado caducado en vez de acumular un diario de cada sesión.
> Empieza por el **Mapa del proyecto**: apunta a dónde mirar sin re-escanear el código.

## Mapa del proyecto

| Área / tema | Dónde mirar | Cuándo leerlo |
|---|---|---|
| Páginas y rutas | `src/pages/`, `src/layouts/Layout.astro` | al agregar o cambiar páginas |
| Componentes de UI | `src/components/` | al cambiar secciones reutilizables |
| Consumo de la API | `src/api/fetching.ts` | al tocar endpoints, headers o manejo de errores |
| Contratos y mapeo | `src/types/Dtos.ts`, `src/types/Mappers.ts`, `src/types/Models.ts` | al cambiar el contrato con `portfolio-python` |
| Estilos | `src/assets/app.css`, `astro.config.mjs` | al cambiar Tailwind o DaisyUI |
| Configuración y alias | `astro.config.mjs`, `tsconfig.json` | al cambiar adapter, plugins o el alias `@` |
| Variables de entorno | `.env_example` (nunca el `.env` real) | al agregar o cambiar `SECRET_*` |
| Build y despliegue | `package.json`, `astro.config.mjs`, `.vercel/` | al cambiar comandos o el target de despliegue |

## Arquitectura

Sitio Astro con `output: 'server'` y adapter de Vercel. Tailwind 4 se integra como plugin de Vite y DaisyUI aporta los componentes.

- **Render:** servidor (SSR) en Vercel; `dist/` es salida generada.
- **Alias:** `@/*` apunta a `src/*` tanto en Vite como en TypeScript.
- **Datos:** `src/api/fetching.ts` centraliza `fetch`, el header `X-API-Key` y el manejo de errores.
- **Tipos:** la API devuelve DTOs (`src/types/Dtos.ts`), se mapean con `Mappers.ts` y la UI consume modelos (`Models.ts`).
- **Secretos:** `SECRET_API_URL` y `SECRET_API_KEY` se leen solo del entorno del servidor.

## Decisiones técnicas

| Fecha | Estado | Decisión | Motivo | Alternativas descartadas |
|---|---|---|---|---|
| 2026-10-27 | Aceptado | Astro en modo `server` con adapter `@astrojs/vercel`. | El sitio consume la API en SSR y se despliega en Vercel. | Salida estática sin datos dinámicos. |
| 2026-10-27 | Aceptado | Centralizar el acceso a la API en `src/api/fetching.ts`. | Un solo lugar para URL, API key y errores. | `fetch` disperso en cada página. |
| 2026-10-27 | Aceptado | Usar DTOs, mappers y modelos separados. | Aísla el contrato de la API de la forma que consume la UI. | Usar la respuesta cruda en los componentes. |
| 2026-10-27 | Aceptado | Alias `@` hacia `src/`. | Imports estables y cortos. | Rutas relativas profundas. |
| 2026-10-27 | Aceptado | Tailwind 4 + DaisyUI 5. | Utilidades y componentes sin CSS propio extenso. | CSS artesanal o una librería de componentes con runtime. |

## Estado

- Sitio activo, desplegado en Vercel.
- La portada (`src/pages/index.astro`) consume proyectos y enlaces desde la API.
- **Siguiente paso:** mantener el contrato con `portfolio-python` y agregar cobertura si el proyecto la requiere.

## Pendientes

- No hay script de tests en `package.json`.
- Confirmar si se agregarán más páginas además de la portada y la política de privacidad.

## Problemas conocidos

- El `.env` real no se versiona; usa `.env_example` como plantilla.
- Si la API cambia el formato de error (`detail[0].msg`), el mensaje mostrado deja de ser el esperado.

## Deuda técnica

- Sin tests automatizados configurados.
- Sin lint/format configurado en `package.json`.
