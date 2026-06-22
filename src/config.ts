export const SITE = {
  name: 'Ti Boug — Bazar Péi',
  domain: 'https://tiboug.re',
  // Titre SEO de la home (mot-clé + géo + marque).
  homeTitle: 'Prix des fruits & légumes à La Réunion — Ti Boug',
  // Meta description (mot-clé en tête + accroche + CTA), ~158 car.
  description:
    'Suivez les prix des fruits & légumes à La Réunion : tendance, saisonnalité et ' +
    'meilleurs marchés forains, d’après les mercuriales DAAF. App iPhone, gratuite.',
} as const

// L'app n'est pas encore confirmée publiée : placeholder. Remplacer par l'URL App Store réelle.
export const APP_STORE_URL = '#'

export const DAAF_ATTRIBUTION = 'Source : mercuriale DAAF Réunion — licence etalab 2.0'

// Données publiques réutilisées par l'app (open data, licence etalab 2.0).
export const SOURCES = {
  daaf: 'https://daaf.reunion.agriculture.gouv.fr/',
  mercuriales:
    'https://daaf.reunion.agriculture.gouv.fr/prix-au-detail-marches-forains-et-grandes-et-moyennes-surfaces-r1212.html',
  etalab: 'https://www.etalab.gouv.fr/licence-ouverte-open-licence/',
} as const
