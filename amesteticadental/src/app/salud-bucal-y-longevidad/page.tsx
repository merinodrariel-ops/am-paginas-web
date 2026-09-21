import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PrensaTema from "@/components/PrensaTema";
import SeoFaq from "@/components/seo/SeoFaq";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import { hreflangFor } from "@/lib/i18n-routes";
import { ANIO } from "@/lib/anio";

// Por qué existe esta página:
//
// El Dr. Merino tiene cinco apariciones en medios sobre alimentación, encías y
// longevidad —incluida una columna firmada en La Nación— y el sitio no tenía
// una sola URL sobre el tema. Todo ese material terminaba enterrado en /prensa.
//
// Además es el único ángulo del sitio que no compite por precio. El resto de la
// red pelea "carillas precio", que es una guerra de centavos contra veinte
// clínicas. Esto atrae a otra persona, y es el tipo de contenido que otros
// medios citan, que es justo lo que falta según Search Console.
//
// Regla de escritura que se respetó acá: la evidencia relaciona salud bucal con
// salud general, pero no prueba que cepillarse alargue la vida. Todo está
// redactado como asociación, no como promesa. En la web de un profesional de la
// salud, prometer años de vida es pasarse de la raya.

const CANONICAL = "https://www.amesteticadental.com/salud-bucal-y-longevidad";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20una%20consulta%20de%20salud%20bucal%20preventiva.";

const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload";
const IMG_HERO = `${CDN}/v1789964570/salud-longevidad/boca-torrente-sanguineo-corazon-cerebro-ilustracion.png`;

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: `Salud bucal y longevidad: qué dice la evidencia | AM`,
    description: `Las encías inflamadas no se quedan en la boca. Qué relación encontró la ciencia entre salud bucal, sueño y envejecimiento, por el Dr. Merino.`,
    alternates: { canonical: CANONICAL, languages: hreflangFor("/salud-bucal-y-longevidad") },
    openGraph: {
        title: "Salud bucal y longevidad: qué dice la evidencia",
        description: "Las encías inflamadas no se quedan en la boca. Lo que la ciencia relaciona entre boca, alimentación, sueño y envejecimiento.",
        url: CANONICAL,
        type: "article",
        images: [{ url: IMG_HERO }],
    },
};

const FAQS = [
    {
        pregunta: "¿Es verdad que la salud de la boca influye en cuánto vivís?",
        respuesta:
            "Lo que la evidencia muestra es una asociación consistente, no una relación de causa y efecto probada. Las personas con enfermedad periodontal avanzada presentan con más frecuencia enfermedad cardiovascular y diabetes. Eso no significa que la encía enferma cause el infarto: significa que comparten mecanismos, sobre todo la inflamación crónica, y que descuidar una suele venir con descuidar la otra. Cuidar la boca es una de las intervenciones más baratas y accesibles que existen sobre ese terreno común.",
    },
    {
        pregunta: "¿Qué tiene que ver lo que como con mis encías?",
        respuesta:
            "Bastante más de lo que parece. Los carbohidratos refinados alimentan a las bacterias que producen ácido, y ese ácido es el que desmineraliza el esmalte y sostiene la inflamación de la encía. No es solo el azúcar en sí: es la frecuencia. Cinco picoteos por día le dan a la boca cinco ataques ácidos; la misma cantidad de comida en dos comidas, dos.",
    },
    {
        pregunta: "¿El ayuno intermitente sirve para los dientes?",
        respuesta:
            "Indirectamente, y por un motivo mecánico: concentrar las comidas en menos horas le da a la saliva tiempo para hacer su trabajo, que es neutralizar la acidez y remineralizar el esmalte. No es un tratamiento dental ni reemplaza el cepillado, y no es para cualquiera: si tenés una condición médica, esa decisión se toma con tu médico, no con tu odontólogo.",
    },
    {
        pregunta: "¿Qué papel juega el bruxismo en todo esto?",
        respuesta:
            "El bruxismo no desgasta solamente los dientes: fragmenta el sueño. Cada episodio genera una microalerta que interrumpe el descanso profundo, y dormir mal de forma crónica es un factor conocido en hipertensión, alteraciones metabólicas y deterioro cognitivo. Por eso el bruxismo se trata: no por estética, sino porque arruina las noches.",
    },
    {
        pregunta: "¿Cada cuánto debería hacerme un control si no me duele nada?",
        respuesta:
            "Una o dos veces al año, y justamente porque no duele. La enfermedad periodontal es silenciosa durante años: cuando aparece el síntoma —movilidad, retracción, sangrado persistente— ya hubo pérdida de hueso, que no se recupera sola. El control periódico existe para encontrarla antes de eso.",
    },
];

const HABITOS = [
    {
        n: "01",
        t: "Menos veces, no menos comida",
        d: "Cada vez que comés, la boca entra en un ciclo ácido de unos veinte minutos. Lo que más daña no es cuánto comés sino en cuántos momentos distintos lo repartís.",
    },
    {
        n: "02",
        t: "El hilo dental no es opcional",
        d: "El cepillo llega a tres de las cinco caras de cada diente. La enfermedad periodontal empieza casi siempre en las dos que quedan, que son las que están entre diente y diente.",
    },
    {
        n: "03",
        t: "Sangrar no es normal",
        d: "Una encía sana no sangra al cepillarse, igual que una piel sana no sangra al lavarse. El sangrado es el primer aviso, y es el más fácil de revertir.",
    },
    {
        n: "04",
        t: "Si rechinás, tratalo",
        d: "El desgaste se ve en los dientes, pero el problema está en el sueño. Una placa y, cuando está indicado, toxina botulínica en los músculos masticadores cortan el círculo.",
    },
    {
        n: "05",
        t: "Controles aunque no duela",
        d: "Lo que se puede frenar temprano casi no tiene costo. Lo mismo, encontrado tarde, se convierte en implantes.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: "Salud bucal y longevidad: qué dice la evidencia",
    description:
        "Relación entre salud bucal, alimentación, sueño y envejecimiento, explicada por el Dr. Ariel Merino (M.N. 34.869).",
    url: CANONICAL,
    inLanguage: "es-AR",
    author: {
        "@type": "Person",
        "@id": "https://www.arielmerino.com/#person",
        name: "Dr. Ariel Merino",
        jobTitle: "Odontólogo",
        identifier: "M.N. 34.869",
    },
    publisher: {
        "@type": "Organization",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    about: { "@type": "MedicalCondition", name: "Enfermedad periodontal" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
};

export default function SaludBucalYLongevidad() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <BreadcrumbsSchema
                items={[
                    { name: "Inicio", item: "/" },
                    { name: "Salud bucal y longevidad", item: "/salud-bucal-y-longevidad" },
                ]}
            />
            <Navbar />

            <main className="min-h-screen bg-carbon font-manrope text-crema">

                {/* ── HERO ── */}
                <section className="relative px-6 pb-14 pt-40 md:px-12">
                    <div className="pointer-events-none absolute right-0 top-[18%] h-[420px] w-[520px] rounded-full bg-oro/4 blur-[130px]" />
                    <div className="mx-auto max-w-3xl">
                        <span className="mb-6 inline-block rounded-full border border-oro/20 px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">
                            Prevención
                        </span>
                        <h1 className="mb-6 font-manrope text-4xl font-light leading-tight text-crema md:text-5xl">
                            La boca no está{" "}
                            <span className="font-cormorant italic text-oro">separada del cuerpo</span>
                        </h1>
                        <p className="mb-8 font-manrope text-lg font-light leading-relaxed text-crema/65">
                            Durante décadas la odontología se ocupó de los dientes como si terminaran en la
                            mandíbula. Hoy sabemos que una encía inflamada no se queda quieta ahí: participa de
                            un proceso que el resto del organismo también paga.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-manrope text-xs text-crema/35">
                            <span>Dr. Ariel Merino · M.N. 34.869</span>
                            <span>·</span>
                            <span>Columnista de La Nación y Ámbito</span>
                            <span>·</span>
                            <span>Actualizado {ANIO}</span>
                        </div>
                    </div>
                </section>

                {/* ── ILUSTRACIÓN ── */}
                <section className="px-6 pb-16 md:px-12">
                    <figure className="mx-auto max-w-3xl">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-oro/12 bg-carbon-soft">
                            <Image
                                src={IMG_HERO}
                                alt="Ilustración del recorrido de las bacterias desde las encías inflamadas hacia el torrente sanguíneo, el corazón y el cerebro"
                                fill
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <figcaption className="mt-3 font-manrope text-xs leading-relaxed text-crema/35">
                            La encía enferma es una superficie abierta e inflamada dentro del cuerpo. Ilustración.
                        </figcaption>
                    </figure>
                </section>

                <article className="px-6 pb-24 md:px-12">
                    <div className="mx-auto max-w-3xl space-y-14">

                        {/* Intro */}
                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="font-manrope text-base leading-relaxed text-crema/70">
                                Conviene decirlo con precisión, porque en este tema se exagera mucho: no hay
                                evidencia de que cepillarse los dientes alargue la vida. Lo que sí hay, y es
                                consistente, es una <span className="text-crema">asociación</span> entre la
                                enfermedad de las encías y varias de las condiciones que más acortan la vida
                                sana — enfermedad cardiovascular, diabetes, deterioro cognitivo. El puente
                                entre una cosa y la otra tiene nombre: inflamación crónica.
                            </p>
                        </div>

                        {/* Qué viaja */}
                        <section>
                            <h2 className="mb-5 font-manrope text-2xl font-light text-crema md:text-3xl">
                                Qué pasa cuando <span className="font-cormorant italic text-oro">la encía sangra</span>
                            </h2>
                            <p className="mb-4 font-manrope text-base leading-relaxed text-crema/65">
                                Una encía con periodontitis avanzada deja de ser una barrera. Se convierte en una
                                superficie ulcerada de varios centímetros cuadrados, en contacto permanente con
                                bacterias y con el torrente sanguíneo. Ese es el punto que suele sorprender: no es
                                que las bacterias &ldquo;suban&rdquo; a algún lado, es que tienen una puerta abierta
                                todos los días, todo el día.
                            </p>
                            <p className="font-manrope text-base leading-relaxed text-crema/65">
                                El cuerpo responde a eso con inflamación sostenida. Y la inflamación sostenida es,
                                hoy, uno de los denominadores comunes que la investigación encuentra detrás del
                                envejecimiento acelerado y de varias enfermedades crónicas.
                            </p>
                        </section>

                        {/* Alimentación */}
                        <section>
                            <h2 className="mb-5 font-manrope text-2xl font-light text-crema md:text-3xl">
                                Lo que comés <span className="font-cormorant italic text-oro">cambia el terreno</span>
                            </h2>
                            <p className="mb-4 font-manrope text-base leading-relaxed text-crema/65">
                                Las guías alimentarias de los Estados Unidos corrieron el eje hacia proteínas,
                                vegetales y grasas saludables, y recortaron los carbohidratos refinados. Ese
                                cambio, que se discutió como un tema de peso corporal, tiene una consecuencia
                                bucal directa: los carbohidratos refinados son el alimento preferido de las
                                bacterias que producen ácido.
                            </p>
                            <p className="mb-4 font-manrope text-base leading-relaxed text-crema/65">
                                Menos carga de azúcares refinados significa un ambiente menos ácido, menos caries
                                y menos inflamación de la encía. No es una dieta dental: es que el terreno donde
                                ocurre la enfermedad bucal se arma tres veces por día en la cocina.
                            </p>
                            <p className="font-manrope text-base leading-relaxed text-crema/65">
                                Hay un matiz que importa más que el ingrediente: <span className="text-crema">la
                                frecuencia</span>. Cada vez que comés, la boca entra en un ciclo ácido de unos
                                veinte minutos. La misma cantidad de comida repartida en cinco picoteos castiga
                                mucho más que en dos comidas.
                            </p>
                        </section>

                        {/* Sueño */}
                        <section>
                            <h2 className="mb-5 font-manrope text-2xl font-light text-crema md:text-3xl">
                                El bruxismo no es un problema de dientes,{" "}
                                <span className="font-cormorant italic text-oro">es de sueño</span>
                            </h2>
                            <p className="mb-4 font-manrope text-base leading-relaxed text-crema/65">
                                Lo que se ve en la consulta es el desgaste. Lo que pasa de verdad ocurre de noche:
                                cada episodio de apretamiento genera una microalerta que fragmenta el sueño
                                profundo. La persona duerme ocho horas y se levanta como si hubiera dormido
                                cuatro.
                            </p>
                            <p className="font-manrope text-base leading-relaxed text-crema/65">
                                Y ahí el problema deja de ser dental. El descanso crónicamente interrumpido está
                                relacionado con hipertensión, alteraciones metabólicas y deterioro cognitivo.
                                Tratar el bruxismo —con una placa y, cuando está indicado, toxina botulínica en
                                los músculos masticadores— es una intervención sobre el sueño.{" "}
                                <Link
                                    href="/bruxismo-botox-placa-precio-buenos-aires"
                                    className="text-oro/75 underline underline-offset-2 hover:text-oro"
                                >
                                    Cómo se trata y cuánto cuesta
                                </Link>
                                .
                            </p>
                        </section>

                        {/* Prensa: la prueba */}
                        <PrensaTema
                            tema="longevidad"
                            titulo="Esto no es una postura de consultorio"
                            bajada="Los medios buscaron al Dr. Merino para hablar de este tema, y una de estas notas la escribió él."
                            limite={4}
                        />

                        {/* Hábitos */}
                        <section>
                            <h2 className="mb-8 font-manrope text-2xl font-light text-crema md:text-3xl">
                                Cinco cosas que sí <span className="font-cormorant italic text-oro">mueven la aguja</span>
                            </h2>
                            <div className="space-y-8">
                                {HABITOS.map((h) => (
                                    <div key={h.n} className="flex items-start gap-4">
                                        <span className="w-6 flex-none pt-1.5 font-manrope text-xs font-medium tracking-widest text-oro/35">
                                            {h.n}
                                        </span>
                                        <div>
                                            <h3 className="mb-2 font-manrope text-lg font-light text-crema">{h.t}</h3>
                                            <p className="font-manrope text-base leading-relaxed text-crema/65">{h.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section>
                            <h2 className="mb-6 font-manrope text-2xl font-light text-crema md:text-3xl">
                                Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
                            </h2>
                            <SeoFaq items={FAQS} />
                        </section>

                        {/* CTA */}
                        <section className="rounded-2xl border border-oro/20 bg-carbon-soft p-8 text-center">
                            <span className="mb-4 block font-manrope text-xs uppercase tracking-[0.3em] text-oro">
                                Consulta preventiva
                            </span>
                            <h3 className="mb-4 font-manrope text-xl font-light text-crema">
                                Lo que se encuentra temprano casi no tiene costo
                            </h3>
                            <p className="mx-auto mb-6 max-w-md font-manrope text-sm text-crema/55">
                                Una evaluación del estado de las encías, del desgaste y de los hábitos. Si no hay
                                nada que tratar, te lo decimos y listo.
                            </p>
                            <a
                                href={WA}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full bg-oro px-7 py-3.5 font-manrope text-sm font-semibold text-carbon transition-colors hover:bg-oro-light"
                            >
                                Pedir turno por WhatsApp →
                            </a>
                        </section>

                        {/* Links internos */}
                        <section>
                            <span className="mb-5 block font-manrope text-xs uppercase tracking-[0.3em] text-oro/50">
                                Seguir leyendo
                            </span>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {[
                                    {
                                        titulo: "Bruxismo: placa y toxina botulínica",
                                        href: "/bruxismo-botox-placa-precio-buenos-aires",
                                        desc: "Cómo se trata el apretamiento nocturno y cuánto cuesta.",
                                    },
                                    {
                                        titulo: "Cómo combatir el bruxismo",
                                        href: "/blog/como-combatir-el-bruxismo-botox-y-placa",
                                        desc: "La guía larga, con el detalle clínico de los dos tratamientos.",
                                    },
                                    {
                                        titulo: "Blanquear sin dañar el esmalte",
                                        href: "/blog/como-blanquear-los-dientes-sin-danar-el-esmalte",
                                        desc: "Qué le hace cada método al esmalte y cuál no conviene.",
                                    },
                                    {
                                        titulo: "Dr. Ariel Merino",
                                        href: "/dr-ariel-merino",
                                        desc: "Trayectoria, formación y presencia en medios.",
                                    },
                                ].map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className="group rounded-xl border border-oro/12 bg-carbon-soft p-5 transition-colors hover:border-oro/30"
                                    >
                                        <h4 className="mb-1 font-manrope text-sm font-medium text-crema transition-colors group-hover:text-oro">
                                            {l.titulo}
                                        </h4>
                                        <p className="font-manrope text-xs text-crema/45">{l.desc}</p>
                                        <span className="mt-2 block text-sm text-oro/35 transition-colors group-hover:text-oro">→</span>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Nota médica */}
                        <p className="border-t border-oro/10 pt-6 font-manrope text-xs leading-relaxed text-crema/30">
                            Esta página tiene fines informativos y no reemplaza una consulta profesional. La
                            relación entre salud bucal y enfermedades sistémicas está documentada como
                            asociación; no implica que una cause la otra. Cualquier cambio en tu alimentación o
                            en tus hábitos de sueño conviene conversarlo con tu médico.
                        </p>

                    </div>
                </article>
            </main>
        </>
    );
}
