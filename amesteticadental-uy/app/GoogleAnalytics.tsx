import Script from "next/script";

/**
 * Google Analytics 4 — lo lee OpenSEO para cruzarlo con Search Console
 * (informe de oportunidades) y es lo que mira Google Ads.
 *
 * El ID va escrito acá y no en una variable de Vercel a propósito: el ID de
 * medición es público (sale en el HTML de cualquier sitio) y una variable que
 * falta no avisa — el Meta Pixel de amesteticadental.com estuvo meses sin medir
 * por eso. Con el ID vacío el componente no renderiza nada.
 *
 * Una propiedad de GA4 por sitio: OpenSEO conecta una propiedad por proyecto.
 */
const GA_ID = "";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${GA_ID}');`,
        }}
      />
    </>
  );
}
