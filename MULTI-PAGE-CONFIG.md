# Guía: Múltiples Páginas con Configuraciones Diferentes

Esta plantilla ahora soporta múltiples páginas, cada una con su propia configuración independiente.

## 📋 Opciones de Configuración

### Opción 1: Configuración Inline (Más Simple)

Perfecta para páginas rápidas. Define la config directamente en el frontmatter:

```astro
---
import Layout from "@/layouts/Layout.astro";
import Hero from "@/components/Hero.astro";
import Bibliografia from "@/components/Bibliografia.astro";

// Config directa en el frontmatter
const miConfig = {
  nombreCurso: "Curso de Epidemiología",
  unidad: "Unidad 2 — Métodos Estadísticos",
  recurso: "Análisis de Datos en Salud Pública",
  autores: [
    { nombres: "Laura", apellidos: "Sánchez Torres" }
  ]
};
---

<Layout recurso={miConfig.recurso} nombreCurso={miConfig.nombreCurso}>
  <Hero {...miConfig} />
  
  <!-- Tu contenido aquí -->
  
  <Bibliografia {...miConfig} />
</Layout>
```

### Opción 2: Con Helper `createSimplePageConfig`

Útil para validación de tipos y autocompletado:

```astro
---
import Layout from "@/layouts/Layout.astro";
import Hero from "@/components/Hero.astro";
import { createSimplePageConfig } from "@/config/pages";

const pageConfig = createSimplePageConfig({
  nombreCurso: "Curso de Farmacología",
  unidad: "Unidad 1 — Farmacocinética",
  recurso: "Absorción y Distribución de Fármacos",
  autores: [
    { nombres: "Pedro", apellidos: "García Ruiz" },
    { nombres: "Ana", apellidos: "Martínez Silva" }
  ],
  fuentesInformacion: [
    {
      tipo: 'Bibliografía',
      items: [
        { texto: 'Katzung, B. (2021). <em>Farmacología básica y clínica</em>.' }
      ]
    }
  ]
});
---

<Layout recurso={pageConfig.recurso} nombreCurso={pageConfig.nombreCurso}>
  <Hero {...pageConfig} />
  <!-- Contenido -->
  <Bibliografia {...pageConfig} />
</Layout>
```

### Opción 3: Archivo de Config Separado

Para configuraciones más complejas o reutilizables, crea un archivo dedicado:

**`src/config/pages/cardiologia.ts`**
```typescript
import type { PageConfigSimple } from "../pages";

export const cardiologiaConfig: PageConfigSimple = {
  nombreCurso: "Curso de Cardiología Clínica",
  unidad: "Unidad 4 — Insuficiencia Cardíaca",
  recurso: "Diagnóstico y Tratamiento de ICC",
  autores: [
    { nombres: "Roberto", apellidos: "Hernández López" },
    { nombres: "Sofía", apellidos: "Ramírez Ortiz" }
  ],
  fuentesInformacion: [
    {
      tipo: 'Bibliografía',
      items: [
        { texto: 'Braunwald, E. (2022). <em>Tratado de Cardiología</em>.' }
      ]
    },
    {
      tipo: 'Documentos electrónicos',
      items: [
        { 
          texto: 'ACC/AHA Guidelines. (2023). Heart Failure Management.',
          url: 'https://ejemplo.com/guidelines'
        }
      ]
    }
  ]
};
```

**`src/pages/cardiologia.astro`**
```astro
---
import Layout from "@/layouts/Layout.astro";
import Hero from "@/components/Hero.astro";
import Bibliografia from "@/components/Bibliografia.astro";
import { cardiologiaConfig } from "@/config/pages/cardiologia";
---

<Layout recurso={cardiologiaConfig.recurso} nombreCurso={cardiologiaConfig.nombreCurso}>
  <Hero {...cardiologiaConfig} />
  <!-- Contenido -->
  <Bibliografia {...cardiologiaConfig} />
</Layout>
```

## 🔄 Fallback al Config Global

Si no pasas props a los componentes, automáticamente usarán la configuración global de `src/config/site.ts`:

```astro
---
import Layout from "@/layouts/Layout.astro";
import Hero from "@/components/Hero.astro";
import { siteConfig } from "@/config";
---

<!-- Usa la config global automáticamente -->
<Layout recurso={siteConfig.recurso} nombreCurso={siteConfig.nombreCurso}>
  <Hero />
</Layout>
```

## 🎯 Componentes que Soportan Props

Todos estos componentes ahora aceptan configuración personalizada:

### `<Hero />`
- `nombreCurso` 
- `unidad`
- `recurso`
- `autores`

### `<Bibliografia />`
- `fuentesInformacion`
- `autores`
- `nombreCurso`
- `recurso`

## 💡 Ejemplo Completo

Ver los archivos de ejemplo:
- `src/pages/ejemplo-diabetes.astro` - Ejemplo con helper
- `src/pages/index-ejemplo.astro` - Ejemplo con config global

## ⚙️ Estructura Recomendada

Para proyectos con múltiples páginas:

```
src/
├── config/
│   ├── site.ts           # Config global (fallback)
│   ├── pages.ts          # Helpers para configs
│   └── pages/            # Configs específicas (opcional)
│       ├── curso1.ts
│       ├── curso2.ts
│       └── curso3.ts
└── pages/
    ├── curso1.astro
    ├── curso2.astro
    └── curso3.astro
```

## 🚀 Workflow Sugerido

1. **Prototipo rápido**: Usa configuración inline
2. **Páginas similares**: Usa `createSimplePageConfig`
3. **Configs complejas/reutilizables**: Crea archivos separados en `config/pages/`
