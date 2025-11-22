export interface FuenteItem {
  texto: string;
  url?: string;
}

export interface SeccionFuentes {
  tipo: string; // e.g., "Bibliografía", "Documentos electrónicos", "Sitios web", etc.
  items: FuenteItem[];
}

export interface Autor {
  nombres: string; // Uno o más nombres (e.g., "Elisa" o "Rosa Helena")
  apellidos: string; // Uno o más apellidos (e.g., "Ortega Jordá Rodríguez")
}

export interface SiteConfig {
  titulo: string;
  descripcion?: string;
  idioma?: string;
  url?: string;
  autores?: Autor[];
  nombreCurso?: string;
  unidad?: string;
  recurso?: string;
  fuentesInformacion?: SeccionFuentes[];
}

export const siteConfig: SiteConfig = {
  titulo: 'Educación Continua SUAyED - Facultad de Medicina UNAM',
  descripcion: 'Plantilla de educación continua',
  idioma: 'es-MX',
  url: '',
  autores: [
    { nombres: 'Elisa', apellidos: 'Ortega Jordá Rodríguez' },
    { nombres: 'Rosa Helena', apellidos: 'Huerta Hernández' }
  ],
  nombreCurso: 'Curso de Educación Continua',
  unidad: 'Unidad 1 — Introducción',
  recurso: 'Guía del participante',
  fuentesInformacion: [
    {
      tipo: 'Bibliografía',
      items: [
        {
          texto: "O'Hehir, R. E., Holgate, S. T., Hershey, G. K. K. y Sheikh, A. (2022). <em>Allergy essentials</em> (2.<sup>a</sup> ed.). Elsevier."
        },
        {
          texto: 'Rivero, D., Huerta, R. E., Ortega, E. y Wakida, G. H. (2023). <em>Alergia alimentaria: de la teoría a la práctica</em>. Colegio Mexicano de Pediatras Especialistas en Inmunología Clínica y Alergia.'
        }
      ]
    },
    {
      tipo: 'Documentos electrónicos',
      items: [
        {
          texto: 'Anvari, S., Miller, J., Yeh, C. Y. y Davis, C. M. (2018, 29 de octubre). IgE-mediated food allergy. <em>Clinical Reviews in Allergy and Immunology, 57</em>, 244-260.',
          url: 'https://doi.org/10.1007/s12016-018-8710-3'
        },
        {
          texto: 'Jutel, M., Agache, I., Zemelka-Wiacek, M., Akdis, M., Chivato, T., Del Giacco, S., Gajdanowicz, P., Eguiluz, I., Klimek, L., Lauerma, A., Ollert, M., O\'Mahony, L., Schwarze, J., Shamji, M. H., Skypala, I., Palomares, O., Pfaar, O., Torres, M. J., Bernstein, J. A., …Akdis, C. A. (2023, noviembre). Nomenclature of allergic diseases and hypersensitivity reactions: adapted to modern needs: An EAACI position paper. <em>Allergy, 78</em>(11), 2851-2874.',
          url: 'https://doi.org/10.1111/all.15889'
        }
      ]
    }
  ]
};
