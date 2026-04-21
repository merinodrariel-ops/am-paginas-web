#!/usr/bin/env python3
"""
SEO Photo Optimizer for Google Business Profile
Renames photos with SEO-friendly names + injects GPS EXIF metadata.

Usage:
    python scripts/seo-photo-optimizer.py /path/to/photos --treatment "carillas" --type "caso-clinico"
    python scripts/seo-photo-optimizer.py /path/to/photos --batch batch.csv

Batch CSV format:
    filename,treatment,type,description
    IMG_2847.jpg,carillas de porcelana,caso-clinico,Transformacion completa con carillas
    reel.mp4,diseno de sonrisa,reel,Proceso de diseño digital
"""

import argparse
import csv
import os
import shutil
import subprocess
from datetime import datetime, timezone

# ─────────────────────────────────────────────────────────────
#  Configuración de la clínica
# ─────────────────────────────────────────────────────────────
CLINIC_NAME = "AM Estética Dental"
CLINIC_LOCATION = "Puerto Madero Buenos Aires"
CLINIC_ADDRESS = "Camila O'Gorman 412 Oficina 101 CABA"
GPS_LAT = "-34.620858"
GPS_LON = "-58.3609047"
GPS_ALT = "25.0"  # metros sobre el nivel del mar (Buenos Aires)
WEBSITE = "https://www.amesteticadental.com"
PHONE = "+5491170219298"

# ─────────────────────────────────────────────────────────────
#  Keywords por tratamiento (para SEO en filenames)
# ─────────────────────────────────────────────────────────────
TREATMENT_KEYWORDS = {
    "carillas": "carillas-porcelana",
    "carillas de porcelana": "carillas-porcelana",
    "carillas dentales": "carillas-dentales",
    "diseño de sonrisa": "diseno-sonrisa-digital",
    "diseno de sonrisa": "diseno-sonrisa-digital",
    "blanqueamiento": "blanqueamiento-dental",
    "blanqueamiento dental": "blanqueamiento-dental",
    "alineadores": "alineadores-invisibles",
    "alineadores invisibles": "alineadores-invisibles",
    "invisalign": "invisalign",
    "implantes": "implantes-dentales",
    "implantes dentales": "implantes-dentales",
    "lentes de contacto dental": "lentes-contacto-dental",
    "armonización orofacial": "armonizacion-orofacial",
    "estetica gingival": "estetica-gingival",
    "protesis": "protesis-esteticas",
    "prótesis": "protesis-esteticas",
    "clinica": "clinica-dental",
    "clínica": "clinica-dental",
    "consultorio": "consultorio-dental",
    "doctor": "dr-ariel-merino",
    "dr": "dr-ariel-merino",
    "equipo": "equipo-am-estetica",
    "tecnologia": "tecnologia-dental",
    "tecnología": "tecnologia-dental",
}

CONTENT_TYPES = {
    "caso-clinico": "caso-clinico-antes-despues",
    "caso clínico": "caso-clinico-antes-despues",
    "antes-despues": "caso-clinico-antes-despues",
    "resultado": "resultado-tratamiento",
    "post": "post-instagram",
    "instagram": "post-instagram",
    "reel": "reel-instagram",
    "video": "video-tratamiento",
    "clinica": "foto-clinica",
    "clínica": "foto-clinica",
    "doctor": "foto-doctor",
    "equipo": "foto-equipo",
    "tecnologia": "foto-tecnologia",
    "tecnología": "foto-tecnologia",
    "consultorio": "foto-consultorio",
    "logo": "logo-am-estetica",
    "promocion": "promocion-oferta",
    "promoción": "promocion-oferta",
    "testimonial": "testimonial-paciente",
    "testimonio": "testimonial-paciente",
}


def get_treatment_keyword(treatment: str) -> str:
    treatment_lower = treatment.lower().strip()
    if treatment_lower in TREATMENT_KEYWORDS:
        return TREATMENT_KEYWORDS[treatment_lower]
    # Fallback: sanitize
    return treatment_lower.replace(" ", "-").replace("í", "i").replace("ó", "o").replace("ú", "u").replace("é", "e").replace("á", "a")


def get_content_type_slug(content_type: str) -> str:
    content_type_lower = content_type.lower().strip()
    if content_type_lower in CONTENT_TYPES:
        return CONTENT_TYPES[content_type_lower]
    return content_type_lower.replace(" ", "-")


def build_seo_filename(original: str, treatment: str, content_type: str, description: str = "") -> str:
    base, ext = os.path.splitext(original)
    ext_lower = ext.lower()

    treatment_slug = get_treatment_keyword(treatment)
    type_slug = get_content_type_slug(content_type)
    date_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    # Extraer un identificador único del nombre original (últimos dígitos o número)
    import re
    numbers = re.findall(r'\d+', base)
    unique_id = numbers[-1] if numbers else base[-6:].replace(" ", "-")

    # Construir nombre SEO
    parts = ["am-estetica-dental", treatment_slug, type_slug]
    if description:
        desc_slug = description.lower().strip().replace(" ", "-").replace("í", "i").replace("ó", "o").replace("ú", "u").replace("é", "e").replace("á", "a")
        if len(desc_slug) > 40:
            desc_slug = desc_slug[:40].rsplit("-", 1)[0]
        parts.append(desc_slug)

    parts.append(f"img-{unique_id}")
    parts.append(date_str)
    seo_name = "-".join(parts) + ext_lower
    return seo_name


def inject_gps_exif(filepath: str) -> bool:
    """Inject GPS EXIF data using exiftool if available, otherwise skip."""
    try:
        result = subprocess.run(
            [
                "exiftool",
                "-GPSLatitude=" + GPS_LAT,
                "-GPSLongitude=" + GPS_LON,
                "-GPSAltitude=" + GPS_ALT,
                "-GPSLatitudeRef=S",
                "-GPSLongitudeRef=W",
                f"-ImageDescription={CLINIC_NAME} - {CLINIC_ADDRESS}",
                f"-Artist={CLINIC_NAME}",
                f"-Copyright={CLINIC_NAME} {datetime.now().year}",
                f"-Keywords+=carillas dentales,{CLINIC_LOCATION},estetica dental,diseno de sonrisa",
                f"-XPComment={CLINIC_NAME} - {WEBSITE}",
                "-overwrite_original",
                filepath,
            ],
            capture_output=True,
            text=True,
            timeout=10,
        )
        return result.returncode == 0
    except FileNotFoundError:
        print(f"  ⚠️  exiftool no instalado — se saltea la inyección EXIF")
        print(f"  💡  Instalar: brew install exiftool")
        return False
    except subprocess.TimeoutExpired:
        print(f"  ⚠️  Timeout al procesar EXIF")
        return False


def optimize_photo(src_path: str, output_dir: str, treatment: str, content_type: str, description: str = "") -> str:
    filename = os.path.basename(src_path)
    seo_filename = build_seo_filename(filename, treatment, content_type, description)
    dst_path = os.path.join(output_dir, seo_filename)

    # Copiar archivo
    shutil.copy2(src_path, dst_path)

    # Inyectar GPS EXIF (solo para imágenes, no video)
    ext = os.path.splitext(filename)[1].lower()
    if ext in (".jpg", ".jpeg", ".png", ".tiff", ".webp"):
        success = inject_gps_exif(dst_path)
        if success:
            print(f"  ✅ GPS EXIF inyectado")
    else:
        print(f"  ℹ️  Video — se omite EXIF GPS")

    return seo_filename


def process_single_folder(folder_path: str, output_dir: str, treatment: str, content_type: str, description: str = ""):
    os.makedirs(output_dir, exist_ok=True)

    image_extensions = {".jpg", ".jpeg", ".png", ".webp", ".tiff", ".mp4", ".mov", ".avi"}
    files = [f for f in os.listdir(folder_path) if os.path.splitext(f)[1].lower() in image_extensions]

    if not files:
        print(f"❌ No se encontraron imágenes o videos en {folder_path}")
        return

    print(f"\n📸 Procesando {len(files)} archivos...\n")

    for i, filename in enumerate(files, 1):
        src = os.path.join(folder_path, filename)
        print(f"[{i}/{len(files)}] {filename}")
        seo_name = optimize_photo(src, output_dir, treatment, content_type, description)
        print(f"  → {seo_name}\n")

    print(f"✅ Listo! {len(files)} archivos optimizados en: {output_dir}")


def process_batch(csv_path: str, input_dir: str, output_dir: str):
    os.makedirs(output_dir, exist_ok=True)

    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    print(f"\n📸 Procesando {len(rows)} archivos desde batch...\n")

    for i, row in enumerate(rows, 1):
        filename = row["filename"].strip()
        treatment = row["treatment"].strip()
        content_type = row["type"].strip()
        description = row.get("description", "").strip()

        src = os.path.join(input_dir, filename)
        if not os.path.exists(src):
            print(f"[{i}/{len(rows)}] ❌ No encontrado: {filename}")
            continue

        print(f"[{i}/{len(rows)}] {filename}")
        seo_name = optimize_photo(src, output_dir, treatment, content_type, description)
        print(f"  → {seo_name}\n")

    print(f"✅ Listo! {len(rows)} archivos procesados en: {output_dir}")


def main():
    parser = argparse.ArgumentParser(description="SEO Photo Optimizer for Google Business Profile")
    parser.add_argument("path", help="Path to folder with photos OR path to batch CSV")
    parser.add_argument("--treatment", default="carillas", help="Treatment keyword (e.g., 'carillas de porcelana')")
    parser.add_argument("--type", default="caso-clinico", help="Content type (e.g., 'caso-clinico', 'reel', 'clinica')")
    parser.add_argument("--description", default="", help="Optional description for the photos")
    parser.add_argument("--batch", action="store_true", help="Process as batch CSV file")
    parser.add_argument("--output", default=None, help="Output directory (default: <input>_seo)")

    args = parser.parse_args()

    input_path = os.path.abspath(args.path)
    output_dir = args.output or (input_path + "_seo")

    if args.batch:
        # CSV batch mode
        input_dir = os.path.dirname(input_path)
        process_batch(input_path, input_dir, output_dir)
    else:
        # Single folder mode
        if not os.path.isdir(input_path):
            print(f"❌ {input_path} no es un directorio válido")
            return
        process_single_folder(input_path, output_dir, args.treatment, args.type, args.description)


if __name__ == "__main__":
    main()
