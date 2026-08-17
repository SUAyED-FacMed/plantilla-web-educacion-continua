# Layout PLIIS

La plantilla incluye un tercer layout para recursos del Programa de Liderazgo e Innovación Interprofesional en Salud:

```astro
---
import LayoutPLIIS from "@/layouts/LayoutPLIIS.astro";
import { siteConfig } from "@/config";
---

<LayoutPLIIS
  licenciatura={siteConfig.licenciatura}
  nombreCurso={siteConfig.nombreCurso}
  unidad={siteConfig.unidad}
  recurso={siteConfig.recurso}
  autores={siteConfig.autores}
>
  <!-- contenido del recurso -->
</LayoutPLIIS>
```

No se debe incluir `<Hero />` dentro de `LayoutPLIIS`: el layout ya genera el Hero PLIIS completo.

El contenido usa un solo contenedor principal con el ancho de la plantilla. Las
secciones que se coloquen dentro del layout heredan ese mismo ancho; no es
necesario agregar otra clase `container` alrededor de la Bibliografía, tablas o
componentes.

El layout también carga automáticamente los estilos comunes de los recursos
reutilizables: acordeón, carrusel, ficheros horizontal y vertical, hotspot,
línea de tiempo, pestañas, tablas y tarjetas giratorias. Las clases visuales
originales de PLIIS para tablas, tarjetas, resaltados y casillas se activan
cuando se usan dentro de este layout.

## Logos

Los logos se pueden activar o desactivar con `logoVisibility`. Las claves disponibles son:

- `unam`
- `facmed`
- `suayed`
- `seciss`
- `educacionContinua`
- `cuaed`
- `pliis`

Ejemplo para ocultar marcas variables:

```astro
<LayoutPLIIS
  {...siteConfig}
  logoVisibility={{
    ...siteConfig.logoVisibility,
    cuaed: false,
    pliis: true,
  }}
>
  <!-- contenido -->
</LayoutPLIIS>
```

Los valores globales se pueden definir en `src/config/site.ts`. Si una página no declara una excepción, cada logo permanece visible para conservar el comportamiento actual.

El ejemplo está en `src/pages/ejemplo-layout-pliis.astro` y muestra contenido,
una tabla con la paleta PLIIS, fuentes de información y el bloque «Cómo citar».
