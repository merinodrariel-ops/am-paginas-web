import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/privacidad";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Política de Privacidad · AM Estética Dental Buenos Aires",
  description:
    "Política de Privacidad y Tratamiento de Datos Personales de AM Estética Dental (Puerto Madero, Buenos Aires). Cumplimiento con la Ley 25.326 de Protección de Datos Personales.",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor("/privacidad"),
  },
  openGraph: {
    title: "Política de Privacidad · AM Estética Dental",
    description:
      "Términos de confidencialidad, protección de datos y secreto profesional médico de AM Estética Dental.",
    url: CANONICAL,
    locale: "es_AR",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Política de Privacidad",
  url: CANONICAL,
  description:
    "Política de tratamiento de datos personales y confidencialidad clínica de AM Estética Dental.",
  publisher: {
    "@type": "Dentist",
    "@id": "https://www.amesteticadental.com/#clinic",
    name: "AM Estética Dental",
    telephone: "+54 9 11 7021-9298",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Camila O'Gorman 412, Oficina 101",
      addressLocality: "Puerto Madero, Ciudad Autónoma de Buenos Aires",
      postalCode: "C1107DED",
      addressCountry: "AR",
    },
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <main className="min-h-screen bg-carbon text-crema font-manrope pt-32 pb-24 px-6 md:px-12">
        <article className="max-w-3xl mx-auto space-y-10">
          <header className="border-b border-oro/15 pb-8">
            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-3">
              Legal y Confidencialidad
            </span>
            <h1 className="text-3xl md:text-5xl font-manrope font-light text-crema tracking-tight">
              Política de <span className="font-cormorant italic text-oro">Privacidad</span>
            </h1>
            <p className="text-crema/45 text-sm mt-3 font-light">
              Última actualización: Noviembre 2026 · Cumplimiento de la Ley N° 25.326 de Protección de Datos Personales de la República Argentina.
            </p>
          </header>

          <section className="space-y-4 text-crema/80 font-light text-sm md:text-base leading-relaxed">
            <h2 className="text-lg md:text-xl font-medium text-crema tracking-wide">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos recolectados a través de este sitio web es{" "}
              <strong className="text-crema font-medium">AM Estética Dental</strong>, clínica odontológica dirigida por el{" "}
              <strong className="text-crema font-medium">Dr. Ariel Merino (Matrícula Nacional 34.869)</strong>, con domicilio legal y sede de atención en{" "}
              <span className="text-oro/90">Camila O&apos;Gorman 412, Oficina 101, Puerto Madero, Ciudad Autónoma de Buenos Aires, República Argentina</span>.
            </p>
          </section>

          <section className="space-y-4 text-crema/80 font-light text-sm md:text-base leading-relaxed">
            <h2 className="text-lg md:text-xl font-medium text-crema tracking-wide">
              2. Datos Recolectados y Finalidad
            </h2>
            <p>
              Recolectamos únicamente la información necesaria para responder consultas, coordinar turnos y prestar nuestros servicios clínicos de estética dental:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-crema/70">
              <li>
                <strong className="text-crema font-normal">Formularios de contacto y WhatsApp:</strong> Nombre, teléfono y correo electrónico suministrados voluntariamente para presupuestos, consultas de tratamientos o coordinación de citas.
              </li>
              <li>
                <strong className="text-crema font-normal">Simulador de Sonrisa con Inteligencia Artificial:</strong> Las fotografías cargadas voluntariamente por los usuarios en el simulador se transmiten de forma cifrada y transitoria a APIs de procesamiento visual con el único propósito de renderizar la vista previa estética. Dichas imágenes no son comercializadas, almacenadas permanentemente en bases públicas ni utilizadas para el entrenamiento de modelos de terceros.
              </li>
              <li>
                <strong className="text-crema font-normal">Datos de navegación:</strong> Dirección IP, páginas visitadas y parámetros de dispositivo para métricas anónimas de rendimiento técnico y seguridad del sitio.
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-crema/80 font-light text-sm md:text-base leading-relaxed">
            <h2 className="text-lg md:text-xl font-medium text-crema tracking-wide">
              3. Secreto Profesional y Confidencialidad Médica
            </h2>
            <p>
              Toda información de salud, antecedentes odontológicos, fotografías clínicas de diagnóstico y presupuestos entregados en consulta se encuentran resguardados bajo estricto{" "}
              <strong className="text-crema font-medium">secreto profesional médico y odontológico</strong>, rigiéndose por los más altos estándares deontológicos y la Ley Nacional de Derechos del Paciente (Ley 26.529).
            </p>
          </section>

          <section className="space-y-4 text-crema/80 font-light text-sm md:text-base leading-relaxed">
            <h2 className="text-lg md:text-xl font-medium text-crema tracking-wide">
              4. Cookies y Tecnologías de Medición
            </h2>
            <p>
              Utilizamos cookies técnicas para el correcto funcionamiento de la navegación y herramientas de análisis estadístico anonimizado (como Google Analytics y Vercel Analytics) para conocer el rendimiento de nuestras guías y páginas de tratamiento. El usuario puede deshabilitar las cookies en cualquier momento desde la configuración de su navegador.
            </p>
          </section>

          <section className="space-y-4 text-crema/80 font-light text-sm md:text-base leading-relaxed">
            <h2 className="text-lg md:text-xl font-medium text-crema tracking-wide">
              5. Derechos de los Titulares (Acceso, Rectificación y Supresión)
            </h2>
            <p>
              Conforme a la Ley 25.326, usted tiene el derecho de acceder a sus datos personales almacenados, solicitar la actualización de datos incorrectos o requerir la supresión de los mismos de nuestros canales de contacto.
            </p>
            <p className="text-crema/60 text-xs">
              La Agencia de Acceso a la Información Pública, órgano de control de la Ley N° 25.326, tiene la atribución de atender denuncias y reclamos relativos al incumplimiento de las normas sobre protección de datos personales.
            </p>
          </section>

          <section className="space-y-4 text-crema/80 font-light text-sm md:text-base leading-relaxed border-t border-oro/10 pt-8">
            <h2 className="text-lg md:text-xl font-medium text-crema tracking-wide">
              6. Canal de Contacto
            </h2>
            <p>
              Para cualquier consulta sobre el tratamiento de sus datos personales o para ejercer sus derechos, puede comunicarse directamente por correo electrónico a{" "}
              <a href="mailto:info@amesteticadental.com" className="text-oro hover:underline">
                info@amesteticadental.com
              </a>{" "}
              o mediante nuestro canal oficial de{" "}
              <Link href="/contacto" className="text-oro hover:underline">
                contacto y atención al paciente
              </Link>.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
