export interface SiteConfig {
  titulo: string;
  descripcion?: string;
  idioma?: string;
  url?: string;
  autores?: string[];
  nombreCurso?: string;
  unidad?: string;
  recurso?: string;
}

export const siteConfig: SiteConfig = {
  titulo: 'Educación Continua SUAyED - Facultad de Medicina UNAM',
  descripcion: 'Plantilla de educación continua',
  idioma: 'es-MX',
  url: '',
  autores: [
    'Elisa Ortega Jordá Rodríguez',
    'Rosa Helena Huerta Hernández'
  ],
  nombreCurso: 'Curso de Educación Continua',
  unidad: 'Unidad 1 — Introducción',
  recurso: 'Guía del participante',
};
