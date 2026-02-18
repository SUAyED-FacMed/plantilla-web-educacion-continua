/**
 * Ejemplo de configuración reutilizable para un curso específico.
 * Este archivo puede ser importado en múltiples páginas.
 */

import type { PageConfigSimple } from "../pages";

export const inmunologiaConfig: PageConfigSimple = {
  nombreCurso: "Curso de Inmunología Clínica",
  unidad: "Unidad 2 — Respuesta Inmune",
  recurso: "Mecanismos de Defensa del Huésped",
  autores: [
    { nombres: "Carmen", apellidos: "López Fernández" },
    { nombres: "Miguel", apellidos: "Torres Domínguez" }
  ],
  fuentesInformacion: [
    {
      tipo: 'Bibliografía',
      items: [
        {
          texto: 'Abbas, A. K., Lichtman, A. H. y Pillai, S. (2022). <em>Inmunología celular y molecular</em> (10.<sup>a</sup> ed.). Elsevier.'
        },
        {
          texto: 'Murphy, K. y Weaver, C. (2021). <em>Immunobiology de Janeway</em> (9.<sup>a</sup> ed.). Garland Science.'
        }
      ]
    },
    {
      tipo: 'Documentos electrónicos',
      items: [
        {
          texto: 'Chaplin, D. D. (2010). Overview of the immune response. <em>Journal of Allergy and Clinical Immunology, 125</em>(2), S3-S23.',
          url: 'https://doi.org/10.1016/j.jaci.2009.12.980'
        }
      ]
    },
    {
      tipo: 'Sitios web',
      items: [
        {
          texto: 'Sociedad Mexicana de Inmunología.',
          url: 'https://www.sminsoc.org.mx/'
        }
      ]
    }
  ]
};
