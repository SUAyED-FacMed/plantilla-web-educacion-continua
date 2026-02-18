# Guía de Uso de Tablas

Estilos modernos y responsive para tablas HTML con diseño consistente con los componentes Tabs y Acordeon.

## Uso Básico

### 1. Importar los estilos

En tu archivo `.astro`, importa los estilos de tablas:

```astro
---
import '@/styles/tablas.css';
---
```

### 2. Estructura HTML recomendada

```html
<div class="tabla-container">
  <table class="tabla-moderna">
    <thead>
      <tr>
        <th>Columna 1</th>
        <th>Columna 2</th>
        <th>Columna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
        <td>Dato 3</td>
      </tr>
      <tr>
        <td>Dato 4</td>
        <td>Dato 5</td>
        <td>Dato 6</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Ejemplo Completo

### Tabla de Complicaciones de Tuberculosis

```html
<div class="tabla-container">
  <table class="tabla-moderna">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Complicaciones principales</th>
        <th>Fisiopatología resumida</th>
        <th>Incidencia/datos clave</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Agudas</strong></td>
        <td>
          -Hemoptisis masiva
          -Neumotórax espontáneo
          -Broncopleural fístula/Empiema tuberculoso
          -SDRA/Insuficiencia respiratoria
          -Sobreinfección bacteriana o micótica
        </td>
        <td>
          Destrucción cavitaria de vasos pulmonares, ruptura de cavidad 
          subpleural, necrosis caseosa que abre a pleura y diseminación 
          hematógena aguda.
        </td>
        <td>
          Hemoptisis clínicamente significativa en 5-15 % y <em>masiva</em> 
          —>200 ml/24 h— en 1-3 % de los casos; neumotórax asociado a TB 
          en 1-2 % de personas adultas.
        </td>
      </tr>
      <tr>
        <td>
          <strong>Crónicas/secuelares</strong> —enfermedad pulmonar 
          postuberculosis, <strong>PTLD</strong>, por sus siglas en inglés—
        </td>
        <td>
          -Bronquiectasias y obstrucción irreversible
          -Fibrocavitación residual
          -Aspergiloma/Aspergilosis pulmonar crónica (APC)
          -Hipertensión pulmonar y <em>cor pulmonale</em>
          -Disfunción ventilatoria mixta —patrón obstructivo-restrictivo—
        </td>
        <td>
          Remodelado bronquial y destrucción parénquima, colonización de 
          cavidades por <em>Aspergillus</em> y fibrosis parenquimatosa y 
          vascular.
        </td>
        <td>
          Hasta 50 % de las pacientes y los pacientes curados presentan 
          algún grado de PTLD; CPA prevalece en ≈9 % durante o después del 
          tratamiento anti-TB.
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Clases Disponibles

### Contenedor

| Clase | Descripción |
|-------|-------------|
| `.tabla-container` | Contenedor principal con scroll horizontal responsive |

### Tabla

| Clase | Descripción |
|-------|-------------|
| `.tabla-moderna` | Estilos base de tabla moderna |
| `.tabla-compacta` | Tabla con menos padding (más compacta) |
| `.tabla-sin-bordes` | Elimina bordes entre filas |
| `.tabla-bordes-completos` | Agrega bordes a todas las celdas |

## Variantes de Tabla

### Tabla Compacta

Para tablas con mucha información:

```html
<div class="tabla-container">
  <table class="tabla-moderna tabla-compacta">
    <!-- ... -->
  </table>
</div>
```

### Tabla sin Bordes

Para un diseño más limpio:

```html
<div class="tabla-container">
  <table class="tabla-moderna tabla-sin-bordes">
    <!-- ... -->
  </table>
</div>
```

### Tabla con Bordes Completos

Para separación clara de todas las celdas:

```html
<div class="tabla-container">
  <table class="tabla-moderna tabla-bordes-completos">
    <!-- ... -->
  </table>
</div>
```

## Características

### ✅ Responsive
- Scroll horizontal automático en dispositivos pequeños
- Indicador visual de scroll en móviles
- Scrollbar personalizado y suave
- Encabezados sticky en desktop

### ✅ Diseño Moderno
- Filas alternadas (zebra striping) automático
- Hover effect en filas
- Sombras sutiles
- Bordes redondeados
- Tipografía optimizada

### ✅ Accesibilidad
- Soporte para navegación por teclado
- Focus visible
- Estructura semántica correcta
- Optimizado para impresión

### ✅ Contenido Rico
- Soporte para listas (`<ul>`, `<ol>`)
- Enlaces con estilo apropiado
- Énfasis con `<strong>` y `<em>`
- Primera columna con mayor peso visual

## Personalización

### Variables CSS

Puedes personalizar los colores en tu archivo CSS:

```css
:root {
  --table-border-color: #ced4da;
  --table-header-bg: #2c3e50;
  --table-header-text: #ffffff;
  --table-row-even-bg: #f8f9fa;
  --table-row-hover-bg: #e9ecef;
  --table-text-color: #2c3e50;
  --table-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Ejemplo con Colores Personalizados

```html
<style>
  .tabla-azul {
    --table-header-bg: #0069d9;
  }
  
  .tabla-dorada {
    --table-header-bg: #C99335;
  }
</style>

<div class="tabla-container">
  <table class="tabla-moderna tabla-azul">
    <!-- ... -->
  </table>
</div>
```

## Integración en Componentes

### Uso en Tabs

```astro
<Tabs 
  id="ejemplo-tablas"
  items={[
    {
      titulo: "Complicaciones",
      contenido: `
        <div class="tabla-container">
          <table class="tabla-moderna">
            <!-- Tu tabla aquí -->
          </table>
        </div>
      `
    }
  ]}
/>
```

### Uso en Acordeon

```astro
<Acordeon 
  items={[
    {
      titulo: "Datos Clínicos",
      contenido: `
        <div class="tabla-container">
          <table class="tabla-moderna">
            <!-- Tu tabla aquí -->
          </table>
        </div>
      `
    }
  ]}
/>
```

## Mejores Prácticas

1. **Siempre usa el contenedor**: Envuelve la tabla en `<div class="tabla-container">` para responsive
2. **Usa `<thead>` y `<tbody>`**: Estructura semántica correcta
3. **Primera columna descriptiva**: Usa `<strong>` para categorías principales
4. **Listas en celdas**: Usa `-` o listas HTML para múltiples items
5. **Texto largo**: El texto se ajusta automáticamente en las celdas
6. **Móviles**: Prueba siempre en diferentes tamaños de pantalla

## Ejemplos Adicionales

### Tabla Simple de Dos Columnas

```html
<div class="tabla-container">
  <table class="tabla-moderna">
    <thead>
      <tr>
        <th>Concepto</th>
        <th>Definición</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Hemoptisis</strong></td>
        <td>Expectoración de sangre procedente del tracto respiratorio bajo.</td>
      </tr>
      <tr>
        <td><strong>Neumotórax</strong></td>
        <td>Presencia de aire en la cavidad pleural.</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Tabla con Listas

```html
<div class="tabla-container">
  <table class="tabla-moderna">
    <thead>
      <tr>
        <th>Categoría</th>
        <th>Síntomas</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Respiratorios</strong></td>
        <td>
          <ul>
            <li>Tos persistente</li>
            <li>Disnea</li>
            <li>Dolor torácico</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Soporte

- **Desktop**: Totalmente funcional con sticky headers
- **Tablet**: Scroll horizontal suave
- **Móvil**: Indicador de scroll y tamaño optimizado
- **Impresión**: Diseño limpio sin efectos
