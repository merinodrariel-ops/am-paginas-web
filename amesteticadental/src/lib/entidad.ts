// Fuente única de verdad de los perfiles externos de la entidad (`sameAs`).
//
// Por qué existe: Bing Webmaster Tools reporta 4 dominios referentes, pero la
// clínica está listada en directorios médicos, guías de odontología y prensa.
// No es una contradicción: esos directorios enlazan con `rel="nofollow"`, por
// redirect o directamente sin enlace. El contador de backlinks nunca los va a
// contar.
//
// Lo que sí se puede hacer es consolidar la ENTIDAD, y para eso `sameAs` no
// necesita que el enlace sea follow: le declara al motor "este perfil y este
// sitio son la misma persona/organización". Eso es lo que alimenta el grafo de
// conocimiento y, por ahí, las citas en Copilot.
//
// Pero sólo funciona si la declaración es idéntica en todos lados. Antes de
// este archivo había tres listas distintas —`layout.tsx`, `/dr-ariel-merino` y
// `/en/dr-ariel-merino`— cada una con un subconjunto diferente, y una de ellas
// declaraba una URL de Doctoralia que responde 301. Declarar la URL que
// redirige, en vez de la definitiva, es pedirle al motor que resuelva una
// ambigüedad que no debería existir.
//
// Reglas al agregar un perfil:
//   1. Verificar que responda 200 y que sea la URL DEFINITIVA, no una que
//      redirige (`curl -o /dev/null -w "%{http_code} %{redirect_url}" <url>`).
//   2. Que el perfil enlace de vuelta al sitio, o al menos lo nombre. `sameAs`
//      unidireccional vale mucho menos.
//   3. Agregarlo acá y en ningún otro lado.

/** Perfiles externos del Dr. Ariel Merino. Persona, `@id` en arielmerino.com/#person. */
export const SAME_AS_DR = [
  "https://www.wikidata.org/wiki/Q134287655",
  "https://www.arielmerino.com",
  "https://www.amesteticadental.com/dr-ariel-merino",
  "https://www.amesteticadental.uy/dr-ariel-merino",
  "https://www.thedentalreview.com",
  "https://www.instagram.com/drarielmerino",
  "https://www.tiktok.com/@drarielmerino",
  "https://www.linkedin.com/in/drarielmerino/",
  "https://www.youtube.com/@ArielMerino",
  "https://www.facebook.com/MerinoAriel/",
  "https://www.doctoraliar.com/perfil/ariel-merino",
  "https://expodentbuenosaires.com.ar/portfolio-item/dr-ariel-merino/",
  "https://www.odontoespacio.net/autores/ariel-merino/",
  "https://cde.dental.upenn.edu/Course/38-Full-Veneers",
];

/** Perfiles externos de la clínica. Organización, `@id` en amesteticadental.com. */
export const SAME_AS_CLINICA = [
  "https://www.wikidata.org/wiki/Q138862170",
  "https://www.instagram.com/amesteticadental",
  "https://ar.linkedin.com/company/am-est%C3%A9tica-dental",
  "https://maps.app.goo.gl/5kWar9VL6qjhdEGM7",
  "https://g.page/r/CQ3df5Xn-J6oEBM",
];
