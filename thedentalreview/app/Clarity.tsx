import Script from "next/script";

/**
 * Microsoft Clarity — grabaciones de sesión, mapas de calor y "rage clicks".
 *
 * Complementa lo que ya hay, no lo reemplaza: GTM/Ads responde "cuántos y de
 * dónde", Plausible "qué páginas", y Clarity "qué hizo la persona en la página
 * antes de irse". Es gratis y sin límite de tráfico.
 *
 * El ID sale de NEXT_PUBLIC_CLARITY_ID (Vercel → Settings → Environment
 * Variables, por proyecto). Sin ID el componente no renderiza nada: el sitio
 * funciona igual y no se cae ningún build mientras el ID no esté cargado.
 */
export default function Clarity() {
  const id = (process.env.NEXT_PUBLIC_CLARITY_ID || "").trim();
  if (!id) return null;

  return (
    <Script
      id="ms-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${id}");`,
      }}
    />
  );
}
