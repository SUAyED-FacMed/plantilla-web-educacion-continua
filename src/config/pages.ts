import type { SiteConfig, Autor, SeccionFuentes } from './site';

/**
 * Helper para crear configuraciones de página personalizadas.
 * Útil cuando tienes múltiples páginas con diferentes configs.
 * 
 * @example
 * const miPaginaConfig = createPageConfig({
 *   nombreCurso: "Curso de Diabetes",
 *   unidad: "Unidad 2",
 *   recurso: "Tratamiento y prevención",
 *   autores: [{ nombres: "Juan", apellidos: "Pérez" }]
 * });
 */
export function createPageConfig(config: Partial<SiteConfig>): SiteConfig {
  return {
    titulo: config.titulo ?? 'Educación Continua SUAyED - Facultad de Medicina UNAM',
    descripcion: config.descripcion,
    idioma: config.idioma ?? 'es-MX',
    url: config.url,
    autores: config.autores,
    nombreCurso: config.nombreCurso,
    unidad: config.unidad,
    recurso: config.recurso,
    fuentesInformacion: config.fuentesInformacion,
    edicion: config.edicion,
    registroAutor: config.registroAutor,
  };
}

/**
 * Interface simplificada para crear configs de página más fácilmente.
 * Solo incluye los campos más comunes.
 */
export interface PageConfigSimple {
  nombreCurso: string;
  unidad: string;
  recurso: string;
  autores: Autor[];
  fuentesInformacion?: SeccionFuentes[];
}

/**
 * Helper simplificado para crear configs de página.
 * Solo requiere los campos esenciales.
 */
export function createSimplePageConfig(config: PageConfigSimple): PageConfigSimple {
  return config;
}
