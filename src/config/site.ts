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
  edicion?: string; // e.g., "Primera edición, 2022"
  registroAutor?: string; // e.g., "En trámite"
  licenciatura?: string;
}

export const siteConfig: SiteConfig = {
  licenciatura: 'Licenciatura de Médico Cirujano',
  titulo: 'Educación Continua SUAyED - Facultad de Medicina UNAM',
  descripcion: 'Plantilla de educación continua',
  idioma: 'es-MX',
  url: '',
  autores: [
    { nombres: 'Karla María', apellidos: 'Tamez Torres' },
  ],
  nombreCurso: 'Curso Actualización en Infecciones Respiratorias para Médicas y Médicos de Primer Contacto',
  unidad: 'Unidad 6. Infección Pulmonar por Mycobacterium Tuberculosis en Personas Adultas',
  recurso: 'Manejo integral de la tuberculosis pulmonar en la persona adulta: complicaciones, criterios de referencia y prevención',
  fuentesInformacion: [
    {
      tipo: 'Bibliografía',
      items: [
        {
          texto: "Instituto Mexicano del Seguro Social. (2009). <em>Guía de práctica clínica. Diagnóstico y tratamiento de casos nuevos de tuberculosis pulmonar.</em> Autor."
        }
      ]
    },
    {
      tipo: 'Documentos electrónicos',
      items: [
        {
          texto: 'Barazani, O., Erdos, T., Chowdhury, R., Kaur, G. y Venketaraman, V. (2025, 12 de abril). New advances in the development and design of mycobacterium tuberculosis vaccines: construction and validation of multi-epitope vaccines for tuberculosis prevention. <em>Biology, 14</em>(4), 417.',
          url: 'https://doi.org/10.3390/biology14040417'
        },
        {
          texto: 'Bongomin F. (2020, 20 de agosto). Post-tuberculosis chronic pulmonary aspergillosis: an emerging public health concern. <em>PLoS Pathogens, 16</em>(8).',
          url: 'https://doi.org/10.1371/journal.ppat.1008742'
        },
        {
          texto: 'Centros para el Control y la Prevención de Enfermedades. (2023). Tuberculosis infection control. Autor.',
          url: 'https://www.cdc.gov/tb-healthcare-settings/hcp/infection-control/index.html'
        },
        {
          texto: 'Cioboata, R., Balteanu, M. A., Osman, A., Vlasceanu, S. G., Zlatian, O. M., Mitroi, D. M., Catana, O. M., Socaci, A. y Tieranu, E. N. (2025, 20 de marzo). Coinfections in tuberculosis in low —and middle— income countries. Epidemiology, clinical implications, diagnostic challenges, and management strategies: a narrative review. <em>Journal of Clinical Medicine, 14</em>(7).',
          url: 'https://doi.org/10.3390/jcm14072154'
        },
        {
          texto: 'Denning, D. W., Cadranel, J., Beigelman-Aubry, C., Ader, F., Chakrabarti, A., Blot, S., Ullmann, A. J., Dimopoulos, G. y Lange, C. (2015). Chronic pulmonary aspergillosis: rationale and clinical guidelines for diagnosis and management. <em>European Respiratory Journal, 47</em>(1), 45-68.',
          url: 'https://doi.org/10.1183/13993003.00583-2015'
        },
        {
          texto: 'Gates Medical Research Institute. (2024). Bill and Melinda Gates Medical Research Institute initiates phase 3 clinical trial of tuberculosis vaccine candidate. Autor.',
          url: 'https://www.gatesmri.org/mri-initiates-phase-3-clinical-trial-tuberculosis-vaccine-candidate/'
        },
        {
          texto: 'Haile, H., Tema, L., Anjulo, A., Temesgen, Z. y Jerene, D. (2023, diciembre). Pulmonary tuberculosis complicated by pneumothorax, and acute respiratory distress syndrome (ARDS) in the settings of advanced HIV disease: a case report. <em>Journal of Clinical Tuberculosis and Other Mycobacterial Diseases, 33</em>.',
          url: 'https://doi.org/10.1016/j.jctube.2023.100396'
        },
        {
          texto: 'Jonas, D. E., Riley, S. R., Lee, L. C., Coffey, C. P., Wang, S. H., Asher, G. N., Berry, A. M., Williams, N., Balio, C., Voisin, C. E. y Kahwati, L. C. (2023, 2 de mayo). Screening for latent tuberculosis infection in adults: updated evidence report and systematic review for the US Preventive Services Task Force. <em>Journal of the American Medical Association, 329</em>(17), 1495-1509.',
          url: 'https://doi.org/10.1001/jama.2023.3954'
        },
        {
          texto: 'Li, T., Li, Y. H. y Zhang, M. (2023, 21 de marzo). Bronchial tuberculosis with recurrent spontaneous pneumothorax: a case report. <em>BMC Pulmonary Medicine, 23</em>(1).',
          url: 'https://doi.org/10.1186/s12890-023-02374-y'
        },
        {
          texto: 'Lu, H., Mao, Y., Zeng, Y., Li, P., Yan, P., Shi, Q. y Liu, L. (2024, 8 de julio). The effect of rifapentine and rifampicin on serum voriconazole levels persist for 5 days and 7 days or more after discontinuation in tuberculosis patients with chronic pulmonary aspergillosis. <em>Infection and Drug Resistance, 17</em>, 2853-2862.',
          url: 'https://doi.org/10.2147/IDR.S461785'
        },
        {
          texto: 'Madden, A. E., Ofori, S. K., Budu, M., Sisay, E., Dooley, B. y Murray, M. B. (2025, 15 de octubre). A systematic review of chronic pulmonary aspergillosis among patients treated for pulmonary tuberculosis. <em>Clinical Infectious Diseases, 81</em>(4). e163-e171.',
          url: 'https://doi.org/10.1093/cid/ciaf150'
        },
        {
          texto: 'Mishra, P., Kondisetti, M., Patil, A., Sarangdhar, N. y Gupta, V. (2024, 30 de octubre). Miliary tuberculosis associated with Klebsiella pneumonia: managing the double whammy of antimicrobial resistance. <em>Tuberculosis and Respiratory Diseases, 88</em>(1), 190-192.',
          url: 'https://doi.org/10.4046/trd.2024.0105'
        },
        {
          texto: 'Organización Mundial de la Salud. (s. f.). The End TB strategy. Autor.',
          url: 'https://www.who.int/teams/global-tuberculosis-programme/the-end-tb-strategy'
        },
        {
          texto: 'Organización Mundial de la Salud. (2024). WHO consolidated guidelines on tuberculosis. Module 1: prevention. Tuberculosis preventive treatment. Second edition. Autor.',
          url: 'https://www.who.int/publications/i/item/9789240096196'
        },
        {
          texto: 'Rossato, D., Carvalho, F. y Battista, G. (2023). Diagnosis and management of post-tuberculosis lung disease. <em>Jornal Brasileiro de Pneumologia, 49</em>(2).',
          url: 'https://doi.org/10.36416/1806-3756/e20230055'
        },
        {
          texto: 'Sandeyl, A. A., Jayte, M., David, M. M., Hirsi, A. M., Hussein, Z. A. y Hersi, A. G. (2025, junio). Massive spontaneous pneumothorax with mediastinal shift in a 14-year-old with pulmonary tuberculosis: a case report. <em>International Journal of Surgery Case Reports, 131</em>.',
          url: 'https://doi.org/10.1016/j.ijscr.2025.111422'
        },
        {
          texto: 'Secretaría de Salud. (2013, 13 de noviembre). Norma Oficial Mexicana NOM-006-SSA2-2013. Para la prevención y control de la tuberculosis. <em>Diario Oficial de la Federación</em>.',
          url: 'http://dof.gob.mx/nota_detalle.php?codigo=5321934&fecha=13/11/2013'
        },
        {
          texto: 'Seo, W., Kim, H. W., Kim, J. S. y Min, J. (2024, 1 de enero). Long term management of people with post-tuberculosis lung disease. <em>The Korean Journal of Internal Medicine, 39</em>(1), 7-24.',
          url: 'https://doi.org/10.3904/kjim.2023.395'
        },
        {
          texto: 'Xu, Y., Zhong, Q., Wang, X., Liu, X., Zhang, Z., Kong, L. Y., Zhou, M. y Wang, R. (2025, julio). The development of a subunit vaccine for Mycobacterium tuberculosis Rv0081 as a booster for BCG and the investigation of its immunogenicity. <em>Journal of Microbiological Methods, 232-234</em>.',
          url: 'https://doi.org/10.1016/j.mimet.2025.107121'
        },
        {
          texto: 'Yarbrough, C., Miller, M., Zulu, M., Sharp, D., Andom, A. T., Ndayizigiye, M., Seung, K. J. y Sonenthal, P. (2024, 5 de septiembre). Post-tuberculosis lung disease: addressing the policy gap. <em>PLOS Global Public Health, 4</em>(9).',
          url: 'https://doi.org/10.1371/journal.pgph.0003560'
        },
        {
          texto: 'Zhang, D., Wang, D., Jiang, S., Wan, Y., Zhao, Y., Dong, W., Li, X., Fu, L. y Zhang, W. (2025, 24 de abril). Prediction of a novel synthetic peptide vaccine against tuberculosis and validation of its immunogenicity. <em>International Immunopharmacology, 153</em>.',
          url: 'https://doi.org/10.1016/j.intimp.2025.114531'
        }
      ]
    }
  ]
};
