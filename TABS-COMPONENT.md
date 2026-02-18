# Componente Tabs

Componente moderno de pestañas (tabs) con soporte para orientación horizontal y vertical, diseñado con mejores prácticas de UI/UX y accesibilidad.

## Características

- ✨ Diseño moderno y limpio con animaciones sutiles
- 🎨 Color de acento personalizable
- ♿ Totalmente accesible (ARIA, navegación por teclado)
- 📱 Completamente responsive
- 🎯 Orientación horizontal y vertical
- ⌨️ Navegación por teclado (flechas, Home, End)
- 🌓 Soporte para modo oscuro
- 🎭 Respeta las preferencias de movimiento reducido del usuario

## Uso Básico

```astro
---
import Tabs from '@/components/Tabs.astro';
import Tab from '@/components/Tab.astro';
---

<Tabs id="mi-tabs">
  <Tab titulo="Pestaña 1">
    <p>Contenido de la primera pestaña</p>
  </Tab>
  <Tab titulo="Pestaña 2">
    <p>Contenido de la segunda pestaña</p>
  </Tab>
  <Tab titulo="Pestaña 3">
    <p>Contenido de la tercera pestaña</p>
  </Tab>
</Tabs>
```

## Props de Tabs

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `id` | `string` | ✅ Sí | - | Identificador único del componente |
| `orientation` | `'horizontal' \| 'vertical'` | ❌ No | `'horizontal'` | Orientación de las pestañas |
| `accentColor` | `string` | ❌ No | `#0069d9` | Color de acento para el indicador y elementos activos |

## Props de Tab

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `titulo` | `string` | ✅ Sí | Título de la pestaña |

## Ejemplos

### Tabs Horizontal (por defecto)

```astro
<Tabs id="tabs-horizontal">
  <Tab titulo="Introducción">
    <p>Contenido de introducción</p>
  </Tab>
  <Tab titulo="Desarrollo">
    <p>Contenido de desarrollo</p>
  </Tab>
  <Tab titulo="Conclusión">
    <p>Contenido de conclusión</p>
  </Tab>
</Tabs>
```

### Tabs Vertical

```astro
<Tabs id="tabs-vertical" orientation="vertical">
  <Tab titulo="Sección 1">
    <p>Contenido de la sección 1</p>
  </Tab>
  <Tab titulo="Sección 2">
    <p>Contenido de la sección 2</p>
  </Tab>
</Tabs>
```

### Con Color Personalizado

```astro
<Tabs id="tabs-custom" accentColor="#fe7a20">
  <Tab titulo="Tab 1">
    <p>Contenido del tab 1</p>
  </Tab>
  <Tab titulo="Tab 2">
    <p>Contenido del tab 2</p>
  </Tab>
</Tabs>
```

### Contenido con HTML Rico

```astro
<Tabs id="tabs-ricos">
  <Tab titulo="Introducción">
    <h3>Título de la sección</h3>
    <p>Este es un párrafo con contenido.</p>
    <ul>
      <li>Elemento de lista 1</li>
      <li>Elemento de lista 2</li>
    </ul>
  </Tab>
  <Tab titulo="Imágenes">
    <img src="/imagen.jpg" alt="Descripción" />
    <p>Pie de imagen</p>
  </Tab>
</Tabs>
```

## Navegación por Teclado

El componente soporta navegación completa por teclado según las mejores prácticas de accesibilidad:

| Tecla | Acción |
|-------|--------|
| `Tab` | Mueve el foco hacia/desde el grupo de pestañas |
| `→` / `↓` | Activa la siguiente pestaña |
| `←` / `↑` | Activa la pestaña anterior |
| `Home` | Activa la primera pestaña |
| `End` | Activa la última pestaña |

## Accesibilidad

El componente incluye:
- Roles ARIA apropiados (`tablist`, `tab`, `tabpanel`)
- Atributos `aria-selected`, `aria-controls`, `aria-labelledby`
- Gestión correcta del `tabindex`
- Soporte para lectores de pantalla
- Indicadores visuales de foco
- Respeta `prefers-reduced-motion`

## Personalización de Estilos

Puedes sobrescribir las variables CSS para personalizar completamente el componente:

```css
.tabs {
  --accent-color: #0069d9;
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #2c3e50;
  --text-secondary: #6c757d;
  --text-inactive: #666666;
  --border-color: #e9ecef;
}
```

## Responsive

- **Desktop**: Grid adaptativo con ancho mínimo de 140px por pestaña (horizontal) o barra lateral de 220px (vertical)
- **Tablet**: Se adapta reduciendo el ancho mínimo de pestañas a 120px y barra lateral a 180px
- **Móvil**: Las pestañas verticales se convierten automáticamente en horizontales con scroll horizontal si es necesario

## Diferencias con FicheroHorizontal/Vertical

### Mejoras implementadas:

1. **Accesibilidad**: Roles ARIA completos, navegación por teclado, gestión de foco
2. **UX**: Animaciones más suaves con cubic-bezier, transiciones en opacidad y transform
3. **Diseño**: Bordes redondeados, sombras sutiles, mejor espaciado
4. **Código**: Más limpio, orientado a objetos, mejor separación de responsabilidades
5. **Responsive**: Mejor manejo en dispositivos móviles con scroll horizontal
6. **Flexibilidad**: Un solo componente para ambas orientaciones
7. **Personalización**: Sistema de variables CSS y prop de color
8. **Modo oscuro**: Soporte automático basado en preferencias del sistema

## Rendimiento

- Uso de `requestAnimationFrame` para animaciones suaves
- Debounce en eventos de resize
- Transiciones CSS3 aceleradas por GPU
- Delegación de eventos donde es posible
