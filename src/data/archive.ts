import type { ArchiveEdition } from '../types';

export const ARCHIVE_EDITIONS: ArchiveEdition[] = [
  {
    id: 'edition-1',
    year: 2022,
    duration: '3 settimane',
    title: '1a Edizione - Il Grande Cammino del Veneto',
    description: 'La nostra prima grande avventura esplorando le diverse province venete a passo lento.',
    days: [
      {
        dayNumber: 1,
        startPoint: 'Bassano del Grappa',
        endPoint: 'Possagno',
        difficulty: 'Medio',
        associationsMet: ['conca-doro', 'renzo-masolo'],
      },
      {
        dayNumber: 2,
        startPoint: 'Possagno',
        endPoint: 'Crespano del Grappa',
        difficulty: 'Facile',
        associationsMet: ['case-baco', 'salvatica'],
      }
    ]
  },
  {
    id: 'edition-2',
    year: 2023,
    duration: '3 settimane',
    title: '2a Edizione - Tra Monti e Valli',
    description: 'Il secondo anno ci siamo spinti verso le alte valli, scoprendo realtà incredibili.',
    days: [
      {
        dayNumber: 1,
        startPoint: 'Vicenza',
        endPoint: 'Schio',
        difficulty: 'Medio',
        associationsMet: ['vaghe-stelle', 'fornaci-rosse'],
      }
    ]
  },
  {
    id: 'edition-3',
    year: 2024,
    duration: '1 settimana',
    title: '3a Edizione - Sulle Rive dei Fiumi',
    description: 'Una settimana intensa dedicata alle vie d\'acqua del Veneto.',
    days: [
      {
        dayNumber: 1,
        startPoint: 'Chioggia',
        endPoint: 'Porto Viro',
        difficulty: 'Facile',
        associationsMet: ['marevivo-veneto', 'parrocchia-fornaci'],
      }
    ]
  },
  {
    id: 'edition-4',
    year: 2025,
    duration: '1 settimana',
    title: '4a Edizione - Colli e Pianura',
    description: 'Un percorso immerso nei castelli e nei pendii dei Colli Euganei e Berici.',
    days: [
      {
        dayNumber: 1,
        startPoint: 'Monselice',
        endPoint: 'Battaglia Terme',
        difficulty: 'Facile',
        associationsMet: ['comitato-lasciateci-respirare', 'aps-la-vespa'],
      }
    ]
  },
  {
    id: 'edition-5',
    year: 2026,
    duration: '1 settimana',
    title: '5a Edizione - Ritorno alle Radici',
    description: 'L\'edizione del quinto anniversario.',
    days: [
      {
        dayNumber: 1,
        startPoint: 'Padova',
        endPoint: 'Montegrotto Terme',
        difficulty: 'Facile',
        associationsMet: ['banca-etica', 'aperdifiato'],
      }
    ]
  }
];
