export interface PuntoHotspot {
  id: number; // Identificador único del punto (1-7 o más)
  titulo: string;
  contenido: string; // Puede contener HTML
  placement?: 'top' | 'bottom' | 'left' | 'right';
  top: string; // Posición top en % (ej: '20%')
  left: string; // Posición left en % (ej: '5%')
}

export interface ConfigHotspot {
  id: string;
  imagen: ImageMetadata;
  altImagen: string;
  puntos: PuntoHotspot[];
}

/**
 * Configuración de hotspots
 * 
 * Para usar un hotspot:
 * 1. Define la configuración aquí con un nombre único
 * 2. Importa la imagen en el archivo donde uses el hotspot
 * 3. Asigna la imagen a la propiedad `imagen` del config
 * 4. Usa el componente: <Hotspot config={tuConfigHotspot} />
 * 
 * Posiciones de los pins:
 * - Se definen con `top` y `left` en porcentaje (ej: '20%', '5%')
 * - Esto te permite posicionar cada pin exactamente donde lo necesites sobre la imagen
 * - Los valores son relativos al contenedor de la imagen (0% = arriba/izquierda, 100% = abajo/derecha)
 */
export const configsHotspot = {
  // Ejemplo con 4 puntos
  ejemplo1: {
    id: 'hotspot1',
    imagen: null as any, // Se asigna al importar
    altImagen: 'Descripción de la imagen',
    puntos: [
      {
        id: 1,
        titulo: 'Spot 1',
        contenido: '<ul><li>Lorem ipsum dolor sit amet consectetur adipisicing.</li><li>Nulla illum mollitia placeat! Id, est dignissimos.</li></ul>',
        placement: 'top',
        top: '20%',
        left: '5%'
      },
      {
        id: 2,
        titulo: 'Spot 2',
        contenido: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, natus.</p><p>Lorem ipsum dolor sit amet consectetur.</p>',
        placement: 'top',
        top: '30%',
        left: '87%'
      },
      {
        id: 3,
        titulo: 'Spot 3',
        contenido: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ratione velit unde hic vel.</p>',
        placement: 'top',
        top: '80%',
        left: '5%'
      },
      {
        id: 4,
        titulo: 'Spot 4',
        contenido: '<ol><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium voluptates?</li><li>Cumque nesciunt dolor doloremque dolores quasi consequatur ducimus, veniam quas !</li></ol>',
        placement: 'top',
        top: '73%',
        left: '35%'
      }
    ]
  } as ConfigHotspot
};
