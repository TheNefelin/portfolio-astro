import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, e as renderHead, f as renderSlot, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_Cthrito7.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Francisco Dev</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Repo/Astro/portfolio-astro/src/layouts/Layout.astro", undefined);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navbar fixed z-10 shadow-2xl bg-gray-700 text-white"> <ul class="menu menu-horizontal px-1 text-xl flex gap-3 m-auto"> <li class="hover:text-red-400 transition timeline-300"> <a href="#">Home</a> </li> <li class="hover:text-red-400 transition timeline-300"> <a href="#id-projects">Projects</a> </li> <li class="hover:text-red-400 transition timeline-300"> <a href="#id_socials">Socials</a> </li> </ul> </div>`;
}, "D:/Repo/Astro/portfolio-astro/src/components/NavBar.astro", undefined);

const imgHero = new Proxy({"src":"/_astro/hero.DzkCNdHB.jpg","width":800,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/img/hero.jpg";
							}
							
							return target[name];
						}
					});

const imgLinkedin$1 = new Proxy({"src":"/_astro/linkedin.DGLhdzmJ.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/img/linkedin.png";
							}
							
							return target[name];
						}
					});

const imgGitHub = new Proxy({"src":"/_astro/github.B5lCMb1P.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/img/github.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero bg-base-300 shadow-2xl"> <div class="hero-content flex-col lg:flex-row"> <div class="avatar"> <div class="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"> <img${addAttribute(imgHero.src, "src")} alt="francisco image"> </div> </div> <div> <h1 class="text-5xl font-bold text-gray-700">Hi, I'm Francisco</h1> <p class="text-3xl text-center py-6 text-gray-700">A SOFTWARE DEVELOPER</p> <div class="flex justify-center items-center gap-6"> <a class="avatar flex items-center gap-2 hover:text-red-400 transition timeline-300" href="https://www.linkedin.com/in/nefelin" target="_blank"> <div class="w-8"> <img${addAttribute(imgLinkedin$1.src, "src")} alt="linkedin image"> </div> <span>LinkedIn</span> </a> <a class="avatar flex items-center gap-2 hover:text-red-400 transition timeline-300" href="https://github.com/TheNefelin" target="_blank"> <div class="w-8"> <img${addAttribute(imgGitHub.src, "src")} alt="github image"> </div> <span>GitHub</span> </a> </div> </div> </div> </div>`;
}, "D:/Repo/Astro/portfolio-astro/src/components/Hero.astro", undefined);

const $$Astro$1 = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Title;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="flex justify-center pt-4 px-2"> <div class="bg-gray-700 w-3xl p-4 rounded text-center font-bold text-xl shadow-2xl"> <span class="text-rose-300">${`const `}</span> <span class="text-white">${title}</span> <span class="text-blue-300">${`= `}</span> <span class="text-yellow-300">${`( ) `}</span> <span class="text-blue-300">${`=> `}</span> <span class="text-rose-300">${`{ ...`}</span> </div> </section>`;
}, "D:/Repo/Astro/portfolio-astro/src/components/Title.astro", undefined);

const $$Code = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-4 px-2 flex justify-center"> <div class="bg-gray-900 w-3xl p-4 rounded"> <header class="flex justify-between"> <div class="flex gap-2"> <div class="bg-lime-300 w-5 h-5 rounded-full"></div> <div class="bg-lime-300 w-5 h-5 rounded-full"></div> <div class="bg-lime-300 w-5 h-5 rounded-full"></div> </div> <div class="text-lime-300 font-extrabold"> ${"_>"} </div> </header> <article class="mt-2"> <div> <span class="text-white mr-4 hidden md:inline">1.</span> <span class="text-red-300">const </span> <span class="text-white">myExperience = </span> <span class="text-red-300">${"{"}</span> </div> <div> <span class="text-white mr-2 hidden md:inline">2.</span> <span class="text-blue-300 ml-6">languages: </span> <span class="text-yellow-300">[ </span> <span class="text-orange-300">C#, VB, Java, JS, TS, HTML, CSS </span> <span class="text-yellow-300">] </span> <span class="text-white">,</span> </div> <div> <span class="text-white mr-2 hidden md:inline">3.</span> <span class="text-blue-300 ml-6">tools: </span> <span class="text-yellow-300">[ </span> <span class="text-orange-300">Visual Studio, VSCode, InteliJ </span> <span class="text-yellow-300">] </span> <span class="text-white">,</span> </div> <div> <span class="text-white mr-2 hidden md:inline">4.</span> <span class="text-blue-300 ml-6">projects: </span> <span class="text-red-300">${"{"} </span> </div> <div> <span class="text-white mr-2 hidden md:inline">5.</span> <span class="text-blue-300 ml-10">frontEnd: </span> <span class="text-yellow-300">[ </span> <span class="text-orange-300">NextJS, NodeJS, Express, ASP.NET Core </span> <span class="text-yellow-300">] </span> <span class="text-white">,</span> </div> <div> <span class="text-white mr-2 hidden md:inline">6.</span> <span class="text-blue-300 ml-10">backEnd: </span> <span class="text-yellow-300">[ </span> <span class="text-orange-300">.NET Core, Dapper, EntityFramework, Java, SpringBoot </span> <span class="text-yellow-300">] </span> <span class="text-white">,</span> </div> <div> <span class="text-white mr-2 hidden md:inline">7.</span> <span class="text-blue-300 ml-10">desktop: </span> <span class="text-yellow-300">[ </span> <span class="text-orange-300">.NET Framework </span> <span class="text-yellow-300">] </span> <span class="text-white">,</span> </div> <div> <span class="text-white mr-2 hidden md:inline">8.</span> <span class="text-blue-300 ml-10">mobile: </span> <span class="text-yellow-300">[ </span> <span class="text-orange-300">.NET MAUI </span> <span class="text-yellow-300">] </span> <span class="text-white">,</span> </div> <div> <span class="text-white mr-2 hidden md:inline">9.</span> <span class="text-red-300 ml-6">${"}"} </span> <span class="text-white">,</span> </div> <div> <span class="text-white hidden md:inline">10.</span> <span class="text-blue-300 ml-6">databases: </span> <span class="text-yellow-300">[ </span> <span class="text-orange-300">SQL Server, MySQL, PostgreSQL </span> <span class="text-yellow-300">] </span> <span class="text-white">,</span> </div> <div> <span class="text-white mr-2 hidden md:inline">11.</span> <span class="text-red-300">${"}"}</span> <span class="text-white">,</span> </div> </article> </div> </section>`;
}, "D:/Repo/Astro/portfolio-astro/src/components/Code.astro", undefined);

const imgApp = new Proxy({"src":"/_astro/app.CJ-CQa3_.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/img/app.png";
							}
							
							return target[name];
						}
					});

const API_URL = "https://dragonra.bsite.net/api/portfolio";
const API_KEY = "Esmerilemelo-777";
const GET_REQUEST_OPTIONS = {
  // cache: 'no-store', // or 'force-cache'
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "ApiKey": API_KEY
  }
};
async function apiFetchProjects() {
  try {
    const response = await fetch(`${API_URL}/projects`, GET_REQUEST_OPTIONS);
    const apiResult = await response.json();
    if (!response.ok) throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
    return apiResult;
  } catch (err) {
    console.error("Error al obtener los datos de la API (apiFetchProjects):", err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
}
async function apiFetchLinks() {
  try {
    const response = await fetch(`${API_URL}/urls`, GET_REQUEST_OPTIONS);
    const apiResult = await response.json();
    if (!response.ok) throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
    return apiResult;
  } catch (err) {
    console.error("Error al obtener los datos de la API (apiFetchLinks):", err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
}

const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const API_IMG = "/api/image/";
  const apiResult = await apiFetchProjects();
  return renderTemplate`${maybeRenderHead()}<section class="p-4"> <div class="flex flex-wrap gap-4 justify-center m-auto max-w-screen-xl"> ${apiResult.data.map(
    (project) => renderTemplate`<div class="card w-72 bg-base-100 shadow-xl"> <div class="card-body"> <h2 class="card-normal font-bold">${project.name}</h2> </div> <figure class="px-4"> <img class="rounded-xl"${addAttribute(`${API_IMG}${project.imgUrl}`, "src")}${addAttribute(project.name, "alt")}> </figure> <div class="card-body m-auto"> <h2 class="card-title"> ${project.languages.map(
      (language) => renderTemplate`<div class="avatar m-auto"> <div class="h-10"> <img${addAttribute(`${API_IMG}${language.imgUrl}`, "src")}${addAttribute(language.name, "alt")}> </div> </div>`
    )} </h2> <h2 class="card-title m-auto"> ${project.technologies.map(
      (technology) => renderTemplate`<div class="avatar m-auto"> <div class="h-10"> <img${addAttribute(`${API_IMG}${technology.imgUrl}`, "src")}${addAttribute(technology.name, "alt")}> </div> </div>`
    )} </h2> </div> <div class="card-actions justify-center mb-2 text-gray-400"> ${project.repoUrl && renderTemplate`<a class="avatar flex items-center gap-2 hover:text-red-400 transition timeline-300"${addAttribute(project.repoUrl, "href")} target="_blank"> <div class="w-4"> <img${addAttribute(imgGitHub.src, "src")} alt="github image"> </div> <span>GitHub</span> </a>`} ${project.appUrl && renderTemplate`<a class="avatar flex items-center gap-2 hover:text-red-400 transition timeline-300"${addAttribute(project.appUrl, "href")} target="_blank"> <div class="w-4"> <img${addAttribute(imgApp.src, "src")} alt="github image"> </div> <span>App</span> </a>`} </div> </div>`
  )} </div> </section>`;
}, "D:/Repo/Astro/portfolio-astro/src/components/Card.astro", undefined);

const imgGithub = new Proxy({"src":"/_astro/github.CAKKGQAi.webp","width":48,"height":48,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/github.webp";
							}
							
							return target[name];
						}
					});

const imgLinkedin = new Proxy({"src":"/_astro/linkedin.CXeohoCv.webp","width":48,"height":48,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/linkedin.webp";
							}
							
							return target[name];
						}
					});

const imgTwitch = new Proxy({"src":"/_astro/twitch.D4T8gCaW.webp","width":48,"height":48,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/twitch.webp";
							}
							
							return target[name];
						}
					});

const imgYoutube = new Proxy({"src":"/_astro/youtube.DcapzYo1.webp","width":48,"height":48,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repo/Astro/portfolio-astro/src/assets/youtube.webp";
							}
							
							return target[name];
						}
					});

const $$Socials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-base-300 flex justify-around mt-4"> <a class="bg-cyan-800 w-full flex justify-center" href="https://github.com/thenefelin" target="_blank"> <img class="w-10 h-10 border-4 rounded-full border-white m-2 bg-white"${addAttribute(imgGithub.src, "src")} alt="GitHub"> </a> <a class="bg-cyan-600 w-full flex justify-center" href="https://www.linkedin.com/in/nefelin" target="_blank"> <img class="w-10 h-10 border-4 rounded-full border-white m-2"${addAttribute(imgLinkedin.src, "src")} alt="GitHub"> </a> <a class="bg-purple-600 w-full flex justify-center" href="https://www.twitch.tv/thenefelin" target="_blank"> <img class="w-10 h-10 border-4 rounded-full border-white m-2"${addAttribute(imgTwitch.src, "src")} alt="GitHub"> </a> <a class="bg-red-600 w-full flex justify-center" href="https://www.youtube.com/c/TheNefelin" target="_blank"> <img class="w-10 h-10 border-4 rounded-full border-white m-2"${addAttribute(imgYoutube.src, "src")} alt="GitHub"> </a> </section>`;
}, "D:/Repo/Astro/portfolio-astro/src/components/Socials.astro", undefined);

const $$Footers = createComponent(async ($$result, $$props, $$slots) => {
  const apiResult = await apiFetchLinks();
  return renderTemplate`${maybeRenderHead()}<footer class="footer bg-gray-900 text-neutral-content p-10 grid grid-cols-2 md:grid-cols-4"> ${apiResult.data.map(
    (urlGrp) => renderTemplate`<nav> <h6 class="footer-title">${urlGrp.name}</h6> ${urlGrp.urls.map(
      (url) => renderTemplate`<a class="link link-hover" target="_blank"${addAttribute(url.url, "href")}>${url.name}</a>`
    )} </nav>`
  )} </footer> <footer class="relative z-10 footer bg-gray-700 text-neutral-content p-5"> <label class="m-auto flex">
© ${(/* @__PURE__ */ new Date()).getFullYear()} <span>|</span> <a href="https://www.francisco-dev.cl" target="_blank">francisco-dev.cl</a> </label> </footer>`;
}, "D:/Repo/Astro/portfolio-astro/src/components/Footers.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<main class=" pt-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Title", $$Title, { "id": "id_code", "title": "someExperience" })} ${renderComponent($$result2, "Code", $$Code, {})} ${renderComponent($$result2, "Title", $$Title, { "id": "id-projects", "title": "someProjects" })} ${renderComponent($$result2, "Card", $$Card, {})} ${renderComponent($$result2, "Title", $$Title, { "id": "id_socials", "title": "someSocials" })} ${renderComponent($$result2, "Socials", $$Socials, {})} ${renderComponent($$result2, "Footers", $$Footers, {})} </main> ` })}`;
}, "D:/Repo/Astro/portfolio-astro/src/pages/index.astro", undefined);

const $$file = "D:/Repo/Astro/portfolio-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
