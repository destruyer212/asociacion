# Asociación Privada de Patronato (Sitio web)

Proyecto web en **Node.js + Express + EJS**.

## Requisitos
- Node.js (recomendado LTS)

## Instalación
```bash
npm install
```

## Ejecutar
### Producción
```bash
npm run start
```
Abre `http://localhost:2000`.

### Desarrollo (recarga automática)
```bash
npm run dev
```

## Estructura
- `app.js`: servidor Express y rutas.
- `views/`: vistas EJS.
  - `partials/`: piezas reutilizables (head/navbar/footer/scripts).
  - `errors/`: páginas 404 y 500.
- `public/`: estáticos (CSS, JS, imágenes, videos).

## Configuración global del sitio
En `app.js` se usan `app.locals.site` para valores globales:
- Teléfono / WhatsApp / correo
- Dirección
- Año del footer

Cambiándolo ahí, se refleja en todo el sitio.
