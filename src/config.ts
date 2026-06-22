export const SITE = {
  name: 'Ti Boug — Bazar Péi',
  domain: 'https://tiboug.re',
  description:
    'Sak i lé bon marché, kan, é ousa. Les prix des fruits & légumes à La Réunion, ' +
    'la saisonnalité et un panier malin par IA. Données mercuriales DAAF.',
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
