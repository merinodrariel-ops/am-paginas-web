<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## AM Estética Dental Media Rule

- Clinical case photos must be uploaded to and served from Cloudinary (`drctvgyqd`), not from local `public/images/casos` paths.
- Use Cloudinary URLs with `q_auto,f_auto` and descriptive `casos/...` paths.
- Treat local copies as backup/source files only. Do not reference them in app UI, metadata, galleries, or case data unless an explicit fallback is required.
- Verify Cloudinary image URLs return HTTP 200 before using them.
