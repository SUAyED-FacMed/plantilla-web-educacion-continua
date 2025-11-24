# Plantilla Web Educación Continua (Astro)

Plantilla base en Astro para recursos educativos de Educación Continua (SUAyED - Facultad de Medicina, UNAM). Incluye componentes reutilizables, estilos listos y configuración para despliegue estático (Moodle u otros LMS).

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
```

Servidor local: `http://localhost:4321`

Build de producción:

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```text
/
├── public/
├── src/
│   ├── assets/            # Imágenes y recursos (usados con astro:assets)
│   ├── components/        # Componentes Astro (UI)
│   ├── layouts/           # Layout principal
│   ├── pages/             # Páginas
│   ├── styles/            # CSS (cargado vía <link> en el Layout)
│   └── config/            # Configuración global (p.ej. site.ts, hotspots.ts)
├── scripts/               # Utilidades (update desde template)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Notas:

- El `base: './'` está configurado para despliegues estáticos (Moodle).
- Se utiliza `passthroughImageService()` de Astro para no requerir Sharp.
- Los CSS se cargan en `Layout.astro` con `<link>` (evita problemas de rutas/alias en producción).

## 🧩 Componentes Disponibles

### Layout

- Compone el `<title>` como: `recurso - nombreCurso - siteConfig.titulo` (o usa `titulo` si se pasa explícito).
- Carga CSS globales: `/src/styles/global.css`, `estilos.css`, `bootstrap.css`, `aos.css`, `hotspot.css`, `carrusel.css`, `acordeon.css`.

Uso:

```astro
---
import Layout from '@/layouts/Layout.astro';
import { siteConfig } from '@/config';
---

<Layout recurso={siteConfig.recurso} nombreCurso={siteConfig.nombreCurso}>
  <slot />
</Layout>
```

### Bibliografia

- Toma datos de `src/config/site.ts` (`fuentesInformacion`, `autores`).

```astro
<Bibliografia />
```

### Tarjetas

- Props: `titulo: string`, `colorClase?: 'carta1' | 'carta2' | 'carta3' | 'carta4'`

```astro
<Tarjetas titulo="Objetivos" colorClase="carta2">
  <p>Contenido de la tarjeta…</p>
  <ul><li>Ítem</li></ul>
</Tarjetas>
```

### Imagen / ImagenClip

- Imágenes optimizadas con `astro:assets`.

```astro
---
import Imagen from '@/components/Imagen.astro';
import ImagenClip from '@/components/ImagenClip.astro';
import foto from '@/assets/img/ejemplo.jpg';
---

<Imagen src={foto} alt="Descripción" title="Título" pie="Pie de foto" />
<ImagenClip src={foto} alt="Descripción" title="Título" pie="Pie con <strong>HTML</strong>" />
```

### Hotspot

- Usa Bootstrap tooltips. Requiere que `bootstrap.bundle.min.js` cargue (ya incluido en `Layout.astro`).
- Config en línea (o puedes definir interfaces desde `src/config/hotspots.ts`).

```astro
---
import Hotspot from '@/components/Hotspot.astro';
import imagen from '@/assets/img/plano.jpg';
---

<Hotspot
  config={{
    id: 'hotspot-1',
    imagen,
    altImagen: 'Plano',
    puntos: [
      { id: 1, titulo: 'Punto 1', contenido: '<p>Texto</p>', top: '20%', left: '15%', placement: 'top' },
      { id: 2, titulo: 'Punto 2', contenido: '<p>Texto</p>', top: '55%', left: '60%' }
    ]
  }}
/>
```

### Carrusel

- Ahora recibe props directamente (sin archivo de config).

```astro
---
import Carrusel from '@/components/Carrusel.astro';
import img1 from '@/assets/img/imagen1.jpg';
import img2 from '@/assets/img/imagen2.jpg';
---

<Carrusel
	id="carrusel-1"
	slides=[
		{ id: 1, imagen: img1, alt: 'Alt 1', title: 'Título 1', pie: 'Pie 1', contenido: '<p>Texto opcional</p>' },
		{ id: 2, imagen: img2, alt: 'Alt 2', title: 'Título 2', pie: 'Pie 2' }
	]
/>
```

### Acordeón Vertical

- Recibe `id` y `items` como props. `contenido` acepta HTML.

```astro
---
import Acordeon from '@/components/Acordeon.astro';
---

<Acordeon
  id="acordeon-vert-1"
  items=[
    { id: 1, titulo: 'Sección 1', contenido: '<p>Contenido 1</p>' },
    { id: 2, titulo: 'Sección 2', contenido: '<figure class="imagenPie"><img src="/src/assets/img/imagen1.jpg" alt="" /><figcaption>Pie</figcaption></figure>' }
  ]
/>
```

## ⚙️ Configuración Global

- `src/config/site.ts`: título del sitio, autores, curso, unidad, recurso, fuentes.
- `src/config/hotspots.ts`: tipos/ayuda para hotspots (opcional si declaras objetos inline).

## 🧪 Scripts NPM

```bash
npm run dev       # Desarrollo
npm run build     # Compilación a ./dist
npm run preview   # Previsualización local de la build
```

## 🚢 Despliegue

La build genera archivos estáticos en `./dist`. Con `base: './'`, todos los assets usan rutas relativas (ideal para Moodle). Sube el contenido de `dist` a tu servidor/LMS.

## 🔄 Actualizar desde el Template

Script: `scripts/update-from-template.sh`

Usos:

```bash
# Normal (muestra comandos copy-paste si hay conflictos)
./scripts/update-from-template.sh

# En conflictos, conservar cambios locales
./scripts/update-from-template.sh --ours

# En conflictos, aceptar cambios del template
./scripts/update-from-template.sh --theirs

# Auto-merge a main si no hay conflictos
./scripts/update-from-template.sh --auto

# Combinar: aceptar template + auto-merge
./scripts/update-from-template.sh --theirs --auto
```

Cuando hay conflictos, el script imprime líneas de resolución listas para copiar/pegar (mantener locals, aceptar template o resolver manualmente).

---

Hecho con Astro. Para más info, visita: <https://docs.astro.build>
