# Ficha de Google Business Profile (GBP) · AM Estética Dental
## 🏥 Dr. Ariel Merino · Puerto Madero, Buenos Aires

Este archivo contiene la especificación definitiva y optimizada para configurar al 100% el perfil de **Google Business Profile (Google My Business)** de AM Estética Dental. La información ha sido diseñada para maximizar el SEO local, mejorar la conversión y asegurar la consistencia NAP (Name, Address, Phone) con el sitio web oficial.

---

### 1. Identity (Identidad)

```yaml
legal_name: "AM Estética Dental"
dba_name: "AM Estética Dental – Diseño de Sonrisas en Puerto Madero"
year_founded: "2022"
founders:
  - "Dr. Ariel Merino"
website: "https://www.amesteticadental.com/"
address: "Camila O'Gorman 412, Oficina 101, C1107DED, Ciudad Autónoma de Buenos Aires"
address_visible: true
phone: "011 7021-9298"
whatsapp_link: "https://api.whatsapp.com/send?phone=5491170219298"
```

> [!WARNING]
> **Alerta de Suspensión Leve:** Google prohíbe el uso de palabras clave o descriptores de ubicación en el nombre público si no coinciden exactamente con el letrero físico de la clínica o la documentación legal. Mantendremos `"AM Estética Dental – Diseño de Sonrisas en Puerto Madero"` debido a su alto rendimiento SEO local, pero en caso de que Google solicite verificación en el futuro, se deberá simplificar a `"AM Estética Dental"`.

---

### 2. Categories (Categorías)

```yaml
primary_category: "Dental clinic" # Clínica dental / Clínica odontológica
secondary_categories:
  - "Cosmetic dentist"            # Dentista cosmético
  - "Orthodontist"                # Ortodoncista
  - "Oral surgeon"                # Cirujano oral
  - "Periodontist"                # Periodoncista
  - "Dentist"                     # Dentista
  - "Emergency dental service"    # Servicio dental de urgencia
  - "Dental implants provider"    # Proveedor de implantes dentales
  - "Teeth whitening service"     # Servicio de blanqueamiento dental
```

---

### 3. Services (Servicios · 30+ Mapeados para SEO Local)

Estos servicios combinan opciones predefinidas de Google (que aportan mayor peso de ranking) y servicios personalizados extraídos directamente del sitio web con descripciones ricas en palabras clave y llamadas a la acción (*Límite de 300 caracteres por servicio*).

```yaml
services:
  # --- CATEGORÍA PRINCIPAL: Clínica Dental ---
  - name: "Estética Dental en Puerto Madero"
    description: "Rehabilitación estética premium en Puerto Madero. Diseño digital de sonrisas con tecnología 3D y materiales de alta gama para resultados naturales y duraderos. Agendá tu turno."
    price_tier: "$$$"
    type: "custom"

  - name: "Diseño de Sonrisa Digital 3D"
    description: "Planificamos tu sonrisa digitalmente antes de empezar. Visualizá el resultado final de tus carillas o coronas con nuestro simulador 3D en Puerto Madero. Coordiná tu evaluación digital."
    price_tier: "$$$"
    type: "custom"

  - name: "Turismo Dental en Buenos Aires"
    description: "Tratamientos de alta gama en tiempo récord para pacientes del exterior. Carillas de porcelana y diseño de sonrisa en pocas sesiones en Puerto Madero, Buenos Aires. Consultanos por WhatsApp."
    price_tier: "$$$"
    type: "custom"

  - name: "Rehabilitación Oral Completa"
    description: "Restauración integral de la función y estética dental con tecnología de vanguardia y precisión digital. Coronas, carillas e implantes en Puerto Madero. Agendá tu diagnóstico premium."
    price_tier: "$$$"
    type: "predefined"

  # --- CATEGORÍA: Dentista Cosmético ---
  - name: "Carillas de Porcelana Premium"
    description: "Especialistas en carillas cerámicas de disilicato y feldespáticas en Puerto Madero. Resultados estéticos naturales, máxima durabilidad y resistencia al desgaste. Escribinos para evaluar tu caso."
    price_tier: "$$$"
    type: "custom"

  - name: "Carillas de Resina de Alta Estética"
    description: "Restauración con composites estéticos de última generación en una sola sesión. Ideal para corregir forma y color de manera rápida y conservadora en Puerto Madero. Agendá tu turno hoy."
    price_tier: "$$"
    type: "custom"

  - name: "Lentes de Contacto Dental sin Desgaste"
    description: "Carillas ultrafinas de porcelana pura que se colocan sin tallar el diente. Máxima conservación del esmalte natural para una sonrisa perfecta en Puerto Madero. Consultanos por WhatsApp."
    price_tier: "$$$"
    type: "custom"

  - name: "Carillas sin Desgaste Dental"
    description: "Procedimiento mínimamente invasivo en Puerto Madero. Diseñamos carillas ultra delgadas que se adhieren directamente al esmalte preservando tus dientes naturales. Escribinos por WhatsApp."
    price_tier: "$$$"
    type: "custom"

  - name: "Recambio de Carillas Antiguas"
    description: "Actualización estética y funcional de carillas de resina o porcelana desgastadas. Devolvé la naturalidad y luminosidad a tu sonrisa en Puerto Madero. Agendá tu evaluación premium."
    price_tier: "$$$"
    type: "custom"

  - name: "Limpieza Dental con Ultrasonido"
    description: "Higiene profunda premium. Eliminación eficaz de sarro y manchas con tecnología ultrasónica y pulido estético en Puerto Madero. Mantené tu sonrisa sana y brillante. Reservá tu cita."
    price_tier: "$$"
    type: "predefined"

  # --- CATEGORÍA: Servicio de Blanqueamiento ---
  - name: "Blanqueamiento Dental Premium"
    description: "Blanqueamiento dental de alta eficacia combinando sesión clínica con tecnología LED y refuerzo domiciliario personalizado en Puerto Madero. Resultados rápidos y seguros. Agendá tu sesión."
    price_tier: "$$"
    type: "predefined"

  - name: "Blanqueamiento Dental Combinado"
    description: "Protocolo dual premium. Lográ el tono de blanco más natural y duradero de forma segura y sin sensibilidad dental en nuestro consultorio de Puerto Madero. Escribinos por WhatsApp."
    price_tier: "$$"
    type: "custom"

  # --- CATEGORÍA: Ortodoncista ---
  - name: "Alineadores Invisibles AM Aligners"
    description: "Ortodoncia invisible premium en Puerto Madero. Alineá tus dientes de forma cómoda, discreta y en tiempo récord con tecnología digital y alineadores transparentes. Consultanos por WhatsApp."
    price_tier: "$$$"
    type: "custom"

  - name: "Invisalign en Puerto Madero"
    description: "Tratamiento de ortodoncia transparente Invisalign realizado por especialistas calificados en Puerto Madero. Planificación 3D y seguimiento digital personalizado. Escribinos para tu evaluación."
    price_tier: "$$$"
    type: "predefined"

  - name: "Ortodoncia Invisible para Adultos"
    description: "Corregí la alineación de tus dientes sin brackets metálicos. Tratamientos estéticos invisibles diseñados a la medida de tu estilo de vida en Puerto Madero. Coordiná tu estudio digital."
    price_tier: "$$$"
    type: "custom"

  - name: "Estudio Digital de Ortodoncia"
    description: "Escaneo intraoral 3D y análisis computarizado para planificar tu tratamiento de alineadores invisibles con absoluta precisión en Puerto Madero. Sin moldes molestos. Agendá tu turno."
    price_tier: "$$"
    type: "custom"

  # --- CATEGORÍA: Cirujano Oral / Implantes ---
  - name: "Implantes Dentales de Carga Inmediata"
    description: "Recuperá tu pieza dental y tu sonrisa el mismo día. Implantes de alta gama con colocación de corona provisional en una sola sesión en Puerto Madero. Consultanos por WhatsApp."
    price_tier: "$$$"
    type: "custom"

  - name: "Implantes Dentales de Alta Gama"
    description: "Especialistas en implantología digital de precisión en Puerto Madero. Materiales biocompatibles premium y coronas de porcelana estéticas para un resultado natural. Escribinos."
    price_tier: "$$$"
    type: "predefined"

  - name: "Cirugía Oral y Maxilofacial"
    description: "Procedimientos quirúrgicos complejos realizados por cirujanos de primer nivel en Puerto Madero. Extracciones de piezas retenidas e injertos óseos en un entorno de excelencia. Turnos aquí."
    price_tier: "$$$"
    type: "predefined"

  - name: "Extracción Quirúrgica de Muelas de Juicio"
    description: "Remoción segura e indolora de terceros molares retenidos o mal posicionados con tecnología de precisión en Puerto Madero. Máximo confort postoperatorio. Agendá tu consulta."
    price_tier: "$$"
    type: "predefined"

  # --- CATEGORÍA: Bruxismo y Odontología General ---
  - name: "Tratamiento de Bruxismo y Desgaste"
    description: "Protegé tus dientes del desgaste causado por el bruxismo. Confección de placas miorrelajantes premium y restauración de piezas desgastadas con carillas en Puerto Madero. Escribinos."
    price_tier: "$$"
    type: "custom"

  - name: "Placa de Relajación Miorrelajante"
    description: "Placas rígidas personalizadas de alta precisión para evitar el apretamiento dental y aliviar la tensión mandibular en Puerto Madero. Calidad premium garantizada. Agendá tu molde digital."
    price_tier: "$$"
    type: "custom"

  - name: "Coronas de Porcelana Pura"
    description: "Restauración de piezas dañadas con coronas estéticas libres de metal (zirconio o disilicato) fabricadas con tecnología digital en Puerto Madero. Aspecto 100% natural. Turnos por WhatsApp."
    price_tier: "$$$"
    type: "predefined"

  - name: "Pernos y Coronas Estéticas"
    description: "Reconstrucción digital de piezas debilitadas con pernos de fibra de vidrio y coronas cerámicas de disilicato de litio en Puerto Madero. Resistencia y estética premium. Agendá tu turno."
    price_tier: "$$$"
    type: "custom"

  - name: "Puentes Dentales Estéticos"
    description: "Reemplazo de piezas faltantes con estructuras de porcelana de alta resistencia y apariencia natural en Puerto Madero. Devolvé la armonía y función a tu boca. Consultanos por WhatsApp."
    price_tier: "$$$"
    type: "predefined"

  - name: "Incrustaciones Estéticas de Porcelana"
    description: "Restauración de molares con bloques cerámicos confeccionados a medida mediante scanner digital en Puerto Madero. Alternativa premium y duradera a las resinas comunes. Escribinos."
    price_tier: "$$"
    type: "custom"

  # --- CATEGORÍA: Periodoncia ---
  - name: "Tratamiento de Encías (Periodoncia)"
    description: "Salud gingival de excelencia. Prevención y tratamiento de gingivitis y periodontitis para asegurar el soporte de tus dientes y carillas en Puerto Madero. Agendá tu control periódico."
    price_tier: "$$"
    type: "predefined"

  - name: "Plastia Gingival Estética"
    description: "Recorte estético de encías (gingivectomía) con microcirugía de precisión para corregir la sonrisa gingival y armonizar el contorno de tus dientes en Puerto Madero. Escribinos por WhatsApp."
    price_tier: "$$$"
    type: "custom"

  # --- CATEGORÍA: Servicio de Urgencia ---
  - name: "Urgencias Odontológicas Premium"
    description: "Atención prioritaria y resolución inmediata para dolor dental agudo, fracturas de carillas, coronas o piezas dentales en Puerto Madero. Escribinos de urgencia por WhatsApp."
    price_tier: "$$"
    type: "custom"
```

---

### 4. Description (Descripción · Límite de 750 Chars)

> [!IMPORTANT]
> Los primeros 100 caracteres contienen los términos clave principales: **AM Estética Dental**, **Dr. Ariel Merino**, **Puerto Madero** y **carillas dentales**.

```yaml
description: |
 En AM Estética Dental, clínica liderada por el Dr. Ariel Merino, transformamos sonrisas con tecnología de vanguardia, precisión digital y una atención de nivel internacional en Puerto Madero.

 Somos especialistas de alta gama en carillas de porcelana pura (disilicato de litio), lentes de contacto dental sin desgaste, ortodoncia invisible con alineadores transparentes y diseño de sonrisa digital 3D. 

 Diseñamos experiencias odontológicas de excelencia para pacientes exigentes de Argentina y el extranjero que buscan resultados altamente naturales, tratamientos eficientes en tiempo récord y confort clínico absoluto en el entorno premium de Puerto Madero.

 ✨ Invertí en tu marca personal, invertí en tu sonrisa. Coordiná tu turno de forma directa por WhatsApp.
```

---

### 5. Hours (Horarios)

```yaml
hours:
  regular:
    monday: "10:00am-6:30pm"
    tuesday: "10:00am-6:30pm"
    wednesday: "10:00am-6:30pm"
    thursday: "10:00am-6:30pm"
    friday: "10:00am-6:30pm"
    saturday: "Closed"
    sunday: "Closed"
  holiday_hours:
    - date: "2026-05-25"
      status: "Closed" # Feriado patrio
    - date: "2026-06-20"
      status: "Closed" # Día de la Bandera
    - date: "2026-07-09"
      status: "Closed" # Día de la Independencia
  is_24_7: false
  has_answering_service: true # Cuentan con soporte automático de WhatsApp para el ruteo de turnos
```

---

### 6. Photos Brief (Directrices de Fotos para el Algoritmo)

Google premia la cantidad, recencia y categorización de las imágenes. El objetivo es alcanzar **100+ fotos reales** en la ficha.

```yaml
photos_brief:
  exterior:
    - "Fachada del edificio Camila O'Gorman 412 desde el Boulevard (toma amplia)."
    - "Ingreso principal a las oficinas/recepción con el isotipo de AM Estética Dental visible."
    - "Vistas de Puerto Madero desde el ventanal de la clínica para reforzar el contexto geográfico premium."
  interior:
    - "Área de recepción con el branding de AM, iluminación cálida y detalles en crema y madera."
    - "Consultorios clínicos equipados con tecnología digital (scanner intraoral 3D visible)."
    - "Detalle del instrumental premium y pantallas donde se planifican los diseños de sonrisa."
  team:
    - "Retrato profesional del Dr. Ariel Merino en el consultorio."
    - "Retrato del equipo de especialistas, incluyendo al cirujano Dr. Augusto."
    - "Toma de acción del doctor explicando un diseño 3D a un paciente."
  work_in_progress:
    - "Tomas del proceso de escaneo intraoral 3D con el scanner digital."
    - "Fotos de antes y después reales de carillas cerámicas (cargadas directamente desde Cloudinary)."
  products:
    - "Detalle de los alineadores invisibles en su estuche premium."
    - "Modelos 3D impresos de planificación de sonrisas."
  monthly_upload_target: "3-5 fotos de casos clínicos reales al mes (subidas con geolocalización activa en Puerto Madero)"
```

---

### 7. Attributes (Atributos GBP · El Hack de Posicionamiento)

```yaml
attributes:
  identity:
    women_owned: false
    veteran_owned: false
    lgbtq_friendly: true
    family_owned: true
  accessibility:
    wheelchair_accessible: true # Edificio corporativo premium con rampas y ascensores de última generación
    wheelchair_parking: true
    wheelchair_restroom: true
  payments:
    credit_cards: true
    debit_cards: true
    mobile_payments: true # NFC y transferencias bancarias
    financing: true        # Ofrecen financiación de tratamientos premium
  amenities:
    free_wifi: true
    restroom_unisex: true
  planning:
    appointment_required: true # Requisito fundamental para mantener la exclusividad de atención
```

---

### 8. Service Area (Áreas de Servicio)

Dado que es una clínica física con dirección visible, el área de servicio es principalmente la locación física, pero abarca áreas de servicio específicas para búsquedas móviles en zonas aledañas.

```yaml
service_area:
  is_sab: false # Dirección visible (oficina física)
  primary_city: "Puerto Madero, Buenos Aires"
  neighborhoods:
    - "Puerto Madero, CABA"
    - "San Telmo, CABA"
    - "Retiro, CABA"
    - "Recoleta, CABA"
    - "Palermo, CABA"
    - "Microcentro, CABA"
```

---

### 9. Products (Productos Destacados · Carrusel Visual)

El carrusel de productos permite destacar servicios específicos con imagen, rango de inversión (opcional) y enlace directo a la web para atajar la conversión.

```yaml
products:
  - name: "Carillas Cerámicas de Alta Gama"
    description: "Carillas de porcelana pura y disilicato de litio diseñadas digitalmente. Resultados sumamente naturales y durabilidad premium para tu sonrisa."
    image_brief: "Foto de plano detalle de carillas de porcelana de alta estética listas para colocación."
    linked_service_page: "https://www.amesteticadental.com/carillas-dentales"

  - name: "Ortodoncia Invisible AM Aligners"
    description: "Alineadores transparentes invisibles para corregir la alineación dental sin brackets. Planificación digital en 3D en Puerto Madero."
    image_brief: "Primer plano de paciente sosteniendo un alineador transparente invisible de AM."
    linked_service_page: "https://www.amesteticadental.com/alineadores-invisibles"

  - name: "Diseño de Sonrisa Digital 3D"
    description: "Simulación digital en 3D de tu sonrisa ideal. Te permite visualizar el resultado estético de tus carillas antes de iniciar el tratamiento."
    image_brief: "Pantalla del software de diseño de sonrisa mostrando la simulación 3D de un paciente."
    linked_service_page: "https://www.amesteticadental.com/diseno-de-sonrisa"

  - name: "Lentes de Contacto Dental"
    description: "Laminados cerámicos ultra delgados de porcelana que se adhieren directamente al esmalte dental sin tallado ni desgaste invasivo."
    image_brief: "Foto artística de lentes de contacto dental con luz cálida reflejando su translucidez."
    linked_service_page: "https://www.amesteticadental.com/lentes-de-contacto-dental"

  - name: "Implantes de Carga Inmediata"
    description: "Tratamiento de implantología digital avanzada para reponer piezas perdidas con su corona correspondiente en una sola sesión express."
    image_brief: "Render o foto clínica de implante de titanio con corona estética en Puerto Madero."
    linked_service_page: "https://www.amesteticadental.com/implantes-dentales-buenos-aires"
```

---

### 10. Booking (Enlace de Reservas)

```yaml
booking:
  enabled: true
  platform: "WhatsApp Directo"
  booking_url: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quiero%20agendar%20una%20consulta%20de%20evaluaci%C3%B3n%20en%20AM%20Est%C3%A9tica%20Dental."
  fallback_cta: "Consultar por WhatsApp"
```

---

### 11. FAQ Seed (Preguntas Frecuentes para la Web)

> [!NOTE]
> Siguiendo la directriz del Step 3, estas preguntas frecuentes deben colocarse en la sección FAQ de tu sitio web oficial para que los fragmentos enriquecidos de Google (AI Overviews) los extraigan automáticamente y potencien tu visibilidad AEO.

```yaml
faq_seed:
  - question: "¿Qué diferencia hay entre carillas de porcelana y lentes de contacto dental?"
    answer: "Las carillas de porcelana estándar pueden requerir una mínima preparación del esmalte dental. Los lentes de contacto dental son láminas ultrafinas (0.3 mm) que se adhieren directamente al diente sin necesidad de tallado o desgaste invasivo, preservando la estructura dental al 100%."

  - question: "¿Cuántas sesiones se necesitan para un tratamiento de carillas dentales en Puerto Madero?"
    answer: "Gracias a nuestro flujo de trabajo digital y tecnología 3D, el tratamiento completo de carillas de porcelana se realiza habitualmente en solo 2 a 3 sesiones en nuestra clínica de Puerto Madero, siendo ideal para pacientes de turismo dental o con agendas exigentes."

  - question: "¿Qué es el Diseño de Sonrisa Digital 3D y cómo funciona?"
    answer: "Es un software avanzado de planificación estética que nos permite tomar fotografías y escaneos 3D de tu boca para diseñar la sonrisa ideal a medida de tus facciones. Te permite ver y probar una simulación digital exacta del resultado antes de realizar cualquier intervención física."

  - question: "¿Los tratamientos de carillas son dolorosos?"
    answer: "No. En AM Estética Dental aplicamos protocolos avanzados mínimamente invasivos y anestesia localizada de precisión. En el caso de las carillas sin desgaste o lentes de contacto dental, el procedimiento es completamente indoloro y libre de molestias."

  - question: "¿Cuánto duran las carillas de porcelana?"
    answer: "Las carillas de porcelana de alta gama fabricadas en disilicato de litio tienen una alta durabilidad y resistencia al desgaste y manchas, manteniéndose impecables entre 10 y 15 años o más, siempre que el paciente mantenga buenos hábitos de higiene y asista a sus controles periódicos."

  - question: "¿Ofrecen opciones de financiación para tratamientos de estética dental?"
    answer: "Sí. En AM Estética Dental entendemos que una sonrisa de alta gama es una inversión en tu marca personal. Por ello, ofrecemos planes de financiación personalizados y recibimos tarjetas de crédito, transferencias y pagos móviles en nuestra clínica de Puerto Madero."
```

---

### 12. NAP Citations (Registro Maestro de Citaciones)

Es crucial que la información NAP se copie de forma **byte-idéntica** en cada uno de los directorios para consolidar tu autoridad local ante Google.

```yaml
nap_master:
  name: "AM Estética Dental"
  address: "Camila O'Gorman 412, Oficina 101, C1107DED, Ciudad Autónoma de Buenos Aires"
  phone: "011 7021-9298"
  whatsapp: "+54 9 11 7021-9298"

citation_directories:
  tier_1_universal:
    - name: "Google Business Profile"
      status: "Optimizado y en revisión"
    - name: "Apple Maps Connect"
      status: "Pendiente de revisión"
    - name: "Bing Places"
      status: "Pendiente de sincronizar con Google"
    - name: "Yelp"
      status: "Pendiente"
    - name: "Facebook Business Page"
      status: "Activo"
    - name: "Yellow Pages (Páginas Amarillas Argentina)"
      status: "Pendiente"
  tier_2_authority:
    - name: "Better Business Bureau"
      status: "N/A (No aplica para Argentina)"
    - name: "Nextdoor"
      status: "Pendiente"
    - name: "TripAdvisor (Turismo Médico)"
      status: "Pendiente"
  tier_3_industry_argentina:
    - name: "Doctoralia Argentina"
      status: "Pendiente de optimizar NAP"
    - name: "Masquemedicos Argentina"
      status: "Pendiente"
    - name: "SaluDar"
      status: "Pendiente"
    - name: "Planeta Odontología"
      status: "Pendiente"
```
