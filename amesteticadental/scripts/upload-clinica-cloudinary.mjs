import fs from 'node:fs';
import path from 'node:path';
import { v2 as cloudinary } from 'cloudinary';

// 1. Cargar las credenciales de Cloudinary desde .env.local
const envPath = path.resolve('.env.local');
if (!fs.existsSync(envPath)) {
  console.error('❌ No se encontró el archivo .env.local');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
for (const line of envContent.split('\n')) {
  const match = line.match(/^\s*([^#=\s]+)\s*=\s*(.*)$/);
  if (match) {
    envVars[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
  }
}

const cloudName = envVars.CLOUDINARY_CLOUD_NAME;
const apiKey = envVars.CLOUDINARY_API_KEY;
const apiSecret = envVars.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('❌ Faltan credenciales de Cloudinary en .env.local');
  process.exit(1);
}

// Configurar el SDK de Cloudinary
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

// 2. Ruta de origen de las fotos en el disco D
const SOURCE_DIR = 'D:\\FOTOS\\consultorio-am-estetica-dental-puerto-madero-oficina-101';

// 3. Selección filtrada de las 8 mejores fotos (evitando duplicidad/similitud)
const SELECTED_PHOTOS = [
  // --- EXTERIORES ---
  'entrada-clinica-cartel-iluminado-am-estetica-dental-puerto-madero.jpg',
  'ingreso-clinica-cartel-luminoso-am-estetica-dental-puerto-madero.jpg',
  'letrero-entrada-am-estetica-dental-dr-ariel-merino-puerto-madero.jpg',
  
  // --- INTERIORES ---
  'recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg',
  'decoracion-recepcion-boutique-crema-oro-am-estetica-dental.jpg',
  'sala-de-espera-exclusiva-boutique-puerto-madero.jpg',
  'sillon-relax-confort-sala-espera-clinica-dental.jpg',
  'recepcion-experiencia-digital-pacientes-am-estetica-dental.jpg'
];

async function uploadPhotos() {
  console.log(`🚀 Iniciando subida de ${SELECTED_PHOTOS.length} fotos a Cloudinary...`);
  
  for (const filename of SELECTED_PHOTOS) {
    const filePath = path.join(SOURCE_DIR, filename);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Archivo no encontrado localmente: ${filePath}`);
      continue;
    }
    
    const publicId = path.basename(filename, path.extname(filename));
    
    try {
      console.log(`📤 Subiendo ${filename}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'clinica',
        public_id: publicId,
        overwrite: true,
        invalidate: true,
        resource_type: 'image'
      });
      console.log(`✅ Subido con éxito: ${result.secure_url}`);
    } catch (error) {
      console.error(`❌ Error al subir ${filename}:`, error);
    }
  }
  
  console.log('\n✨ Proceso finalizado.');
}

uploadPhotos();
