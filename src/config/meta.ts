import { siteConfig } from './site';

export function buildTitle(tituloPagina?: string) {
  return tituloPagina ? `${tituloPagina} — ${siteConfig.titulo}` : siteConfig.titulo;
}

export function buildMeta(tituloPagina?: string) {
  const titulo = buildTitle(tituloPagina);
  return {
    title: titulo,
    description: siteConfig.descripcion ?? '',
    lang: siteConfig.idioma ?? 'es-MX',
  };
}
