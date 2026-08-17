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

### LayoutAsignaturas

- Variante con pleca de licenciatura, tema visual `#146F82` y tipografía de sistema.
- Mantiene el mismo patrón de uso: se importan componentes dentro del layout.
- Para el bloque de fuentes con la apariencia de asignaturas, usa `Bibliografia` con `variante="asignaturas"`.

```astro
---
import LayoutAsignaturas from '@/layouts/LayoutAsignaturas.astro';
import Bibliografia from '@/components/Bibliografia.astro';
import { siteConfig } from '@/config';
---

<LayoutAsignaturas
  recurso={siteConfig.recurso}
  nombreCurso={siteConfig.nombreCurso}
  unidad={siteConfig.unidad}
  licenciatura={siteConfig.licenciatura}
  autores={siteConfig.autores}
>
  <slot />
  <Bibliografia {...siteConfig} variante="asignaturas" />
</LayoutAsignaturas>
```

### LayoutPLIIS

- Reproduce el Hero de `templates/plantillaPLIIS/` con su paleta azul marino y aqua.
- Usa `logoVisibility` para activar u ocultar logos por recurso.
- No requiere `<Hero />`; el layout genera su propio encabezado.

```astro
---
import LayoutPLIIS from '@/layouts/LayoutPLIIS.astro';
import { siteConfig } from '@/config';
---

<LayoutPLIIS
  {...siteConfig}
  logoVisibility={{
    ...siteConfig.logoVisibility,
    cuaed: false,
    pliis: true,
  }}
>
  <slot />
</LayoutPLIIS>
```

La guía completa está en [`PLIIS-LAYOUT.md`](./PLIIS-LAYOUT.md).

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

### LineaTiempo

- Recibe `id`, `items`, `orientation` y `accentColor`.
- `orientation` acepta `horizontal` o `vertical`.
- En horizontal usa scroll con `scroll-snap`, botones anterior/siguiente y barra de progreso. No funciona como slide cerrado: el usuario puede desplazarse con trackpad, touch, teclado o controles.
- `contenido` acepta HTML.

```astro
---
import LineaTiempo from '@/components/LineaTiempo.astro';
---

<LineaTiempo
  id="linea-tiempo-1"
  orientation="horizontal"
  accentColor="#0069d9"
  items={[
    {
      fecha: '2001-2006',
      titulo: 'Cruzada Nacional por la Calidad',
      contenido: '<p>Contenido del evento.</p>'
    },
    {
      fecha: '2007-2012',
      titulo: 'Programa Sicalidad',
      contenido: '<p>Contenido del evento.</p>'
    }
  ]}
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

### Build para Producción

```bash
npm run build
```

Esto genera archivos estáticos en `./dist` con:
- ✅ CSS bundleado en un solo archivo optimizado
- ✅ Imágenes optimizadas con rutas relativas (`./assets/...`)
- ✅ JavaScript (Bootstrap) con rutas relativas (`./js/...`)
- ✅ Script post-build que convierte todas las rutas absolutas a relativas automáticamente

### Despliegue en Moodle (Recurso Archivo)

1. **Generar el build**:
   ```bash
   npm run build
   ```

2. **Empaquetar el contenido**:
   ```bash
   cd dist
   zip -r ../moodle-recurso.zip .
   cd ..
   ```

3. **Subir a Moodle**:
   - Ve a tu curso en Moodle
   - "Agregar una actividad o recurso" → **Archivo**
   - Sube `moodle-recurso.zip`
   - Descomprime el archivo en Moodle
   - Selecciona `index-ejemplo.html` (o `index.html`) como **archivo principal**
   - Guarda los cambios

4. **Verificar localmente** (opcional):
   ```bash
   open dist/index-ejemplo.html
   ```
   El archivo debe abrir correctamente en tu navegador mostrando todos los estilos e imágenes.

### Despliegue Web Tradicional

Para servidores web estándar, simplemente copia el contenido de `dist/` a tu servidor o hosting.

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
