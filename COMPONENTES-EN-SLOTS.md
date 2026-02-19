# Uso de Componentes dentro de Acordeon y Tabs

Los componentes `Acordeon` y `Tabs` ahora soportan **dos modos de uso**:

1. **Modo String** (tradicional) - Para contenido HTML simple
2. **Modo Slots** (nuevo) - Para usar componentes de Astro dentro

## 🎯 Modo String (HTML simple)

Usa este modo cuando tu contenido es solo texto y HTML básico, sin componentes de Astro:

```astro
<Acordeon 
  items={[
    {
      titulo: 'Mi título',
      contenido: '<p>Contenido HTML <strong>simple</strong>.</p>'
    }
  ]}
/>
```

✅ **Ventajas:**
- Más conciso para contenido simple
- No necesitas slots
- Compatible con código existente

❌ **Limitación:**
- No puedes usar componentes de Astro (Imagen, Carrusel, etc.)

## ⚡ Modo Slots (con componentes)

Usa este modo cuando necesitas incluir componentes de Astro dentro del contenido:

```astro
<Acordeon 
  items={[
    { titulo: 'Mi título' } // Sin 'contenido' = usa slot
  ]}
>
  <Fragment slot="item-0">
    <p>Ahora puedes usar componentes:</p>
    <Imagen src={miImagen} alt="Descripción" />
    <Carrusel imagenes={...} />
    <OtroComponente />
  </Fragment>
</Acordeon>
```

✅ **Ventajas:**
- Puedes usar cualquier componente de Astro
- Sintaxis JSX completa
- Mayor flexibilidad

## 📋 Nombres de Slots

### Nombres Automáticos

Por defecto, los slots se nombran según el índice del item:

```astro
<Acordeon 
  items={[
    { titulo: 'Primero' },  // slot="item-0"
    { titulo: 'Segundo' },  // slot="item-1"
    { titulo: 'Tercero' }   // slot="item-2"
  ]}
>
  <Fragment slot="item-0">...</Fragment>
  <Fragment slot="item-1">...</Fragment>
  <Fragment slot="item-2">...</Fragment>
</Acordeon>
```

### Nombres Personalizados

Puedes especificar nombres de slot personalizados:

```astro
<Acordeon 
  items={[
    { titulo: 'Diagnóstico', slotName: 'diagnostico' },
    { titulo: 'Tratamiento', slotName: 'tratamiento' }
  ]}
>
  <Fragment slot="diagnostico">
    <Imagen src={...} />
  </Fragment>
  
  <Fragment slot="tratamiento">
    <Carrusel imagenes={...} />
  </Fragment>
</Acordeon>
```

## 🔀 Modo Mixto

Puedes combinar ambos modos en el mismo componente:

```astro
<Acordeon 
  items={[
    { 
      titulo: 'Solo texto',
      contenido: '<p>HTML simple</p>' 
    },
    { 
      titulo: 'Con componentes' 
      // Sin contenido = usará slot
    },
    { 
      titulo: 'Más texto',
      contenido: '<ul><li>Item 1</li><li>Item 2</li></ul>' 
    }
  ]}
>
  <Fragment slot="item-1">
    <Imagen src={...} />
    <p>Contenido con componentes</p>
  </Fragment>
</Acordeon>
```

## 📝 Ejemplos Completos

### Ejemplo 1: Acordeon con Imagen

```astro
---
import Acordeon from '@/components/Acordeon.astro';
import Imagen from '@/components/Imagen.astro';
import miImagen from '@/assets/img/ejemplo.jpg';
---

<Acordeon 
  items={[
    { titulo: 'Hemoptisis masiva' }
  ]}
>
  <Fragment slot="item-0">
    <ul>
      <li>Mecanismo: Erosión de arterias bronquiales hipertrofiadas.</li>
      <li>Definición de gravedad: >200 mL en 24 horas.</li>
    </ul>
    
    <Imagen
      src={miImagen}
      alt="Esquema de la ruta asistencial"
    />
    
    <p>Pronóstico: La embolización controla el sangrado en 85-90%.</p>
  </Fragment>
</Acordeon>
```

### Ejemplo 2: Tabs con Múltiples Componentes

```astro
---
import Tabs from '@/components/Tabs.astro';
import Imagen from '@/components/Imagen.astro';
import Carrusel from '@/components/Carrusel.astro';
---

<Tabs 
  id="mi-tabs"
  items={[
    { titulo: 'Diagnóstico' },
    { titulo: 'Imágenes' }
  ]}
>
  <Fragment slot="item-0">
    <h3>Métodos Diagnósticos</h3>
    <Imagen src={esquema} alt="Algoritmo diagnóstico" />
    <p>Descripción del proceso...</p>
  </Fragment>

  <Fragment slot="item-1">
    <Carrusel 
      id="galeria-dx"
      imagenes={[
        { src: img1.src, alt: 'Radiografía' },
        { src: img2.src, alt: 'TAC' }
      ]}
    />
  </Fragment>
</Tabs>
```

### Ejemplo 3: Acordeon con Tablas

```astro
---
import Acordeon from '@/components/Acordeon.astro';
import '@/styles/tablas.css';
---

<Acordeon 
  items={[
    { titulo: 'Datos clínicos' }
  ]}
>
  <Fragment slot="item-0">
    <p>Complicaciones de tuberculosis pulmonar:</p>
    
    <div class="tabla-container">
      <table class="tabla-moderna">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Complicaciones</th>
            <th>Incidencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agudas</strong></td>
            <td>Hemoptisis masiva, neumotórax</td>
            <td>1-3%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
</Acordeon>
```

### Ejemplo 4: Tabs con Contenido Mixto

```astro
<Tabs 
  id="tabs-mixto"
  items={[
    { 
      titulo: 'Texto simple',
      contenido: '<p>Este tab usa <strong>HTML simple</strong>.</p>'
    },
    { 
      titulo: 'Con componentes'
    }
  ]}
>
  <Fragment slot="item-1">
    <Imagen src={...} />
    <Carrusel imagenes={...} />
  </Fragment>
</Tabs>
```

## 🎨 Uso con Otros Componentes

### Con FicheroHorizontal

```astro
<Acordeon 
  items={[{ titulo: 'Recursos interactivos' }]}
>
  <Fragment slot="item-0">
    <FicheroHorizontal 
      tabs={[
        { titulo: 'Tab 1', contenido: '...' },
        { titulo: 'Tab 2', contenido: '...' }
      ]}
    />
  </Fragment>
</Acordeon>
```

### Con Hero

```astro
<Tabs 
  id="secciones"
  items={[{ titulo: 'Introducción' }]}
>
  <Fragment slot="item-0">
    <Hero 
      titulo="Bienvenida"
      imagen={heroImg}
    />
    <p>Contenido adicional...</p>
  </Fragment>
</Tabs>
```

## ⚠️ Notas Importantes

1. **Detección automática**: Si un item tiene la propiedad `contenido`, se usa HTML. Si no la tiene, busca un slot.

2. **Slots obligatorios**: Si omites `contenido` pero no proporcionas el slot correspondiente, el panel estará vacío.

3. **Fragment vs div**: Puedes usar `<Fragment>` (recomendado) o `<div>` para los slots:
   ```astro
   <!-- Recomendado -->
   <Fragment slot="item-0">...</Fragment>
   
   <!-- También válido -->
   <div slot="item-0">...</div>
   ```

4. **Importaciones**: No olvides importar los componentes que uses dentro de los slots:
   ```astro
   ---
   import Imagen from '@/components/Imagen.astro';
   import Carrusel from '@/components/Carrusel.astro';
   ---
   ```

5. **Compatibilidad**: El código existente que usa `contenido` sigue funcionando sin cambios.

## 🔍 Decisión: ¿String o Slot?

| Caso de uso | Recomendación |
|-------------|---------------|
| Solo texto y HTML básico | ✅ Usa `contenido` (string) |
| Necesitas componentes de Astro | ✅ Usa slots |
| Contenido muy largo | ✅ Usa slots (mejor legibilidad) |
| Contenido generado dinámicamente | ⚠️ Depende (strings son más fáciles para dinámico) |
| Necesitas tablas complejas | 🤔 Ambos funcionan (slots más claro) |
| Mezcla de ambos | ✅ Usa modo mixto |

## 📚 Recursos

- Ver [_ejemplo-componentes-en-acordeon.astro](../src/pages/_ejemplo-componentes-en-acordeon.astro) para ejemplos completos
- Ver [TABLAS-GUIA.md](./TABLAS-GUIA.md) para usar tablas dentro de acordeones
- Componentes disponibles: Imagen, Carrusel, FicheroHorizontal, FicheroVertical, Hotspot, etc.
