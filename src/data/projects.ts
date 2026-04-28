import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'ecocamp-trieste-2026',
    title: 'Ecocamp Trieste 2026',
    description: 'Un weekend a Trieste tra cammino, frontiera e servizio con Linea d\'Ombra.',
    fullDescription: 'Ecocamp Trieste 2026 nasce in una città di confine, dove il cammino incontra le storie della Rotta Balcanica. Insieme ad ASCS e Linea d\'Ombra vivremo un weekend di ascolto, servizio e comunità.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Italy-Slovenia_State_boundary_Val_Rosandra.jpg',
    status: 'future',
    googleFormUrl: 'https://forms.gle/example',
    partners: ['ASCS', 'Linea d\'Ombra', 'ICS Trieste'],
    content: [
      {
        type: 'text',
        value: 'Il senso del progetto\nTrieste è un luogo in cui il confine non è solo una linea sulla mappa: è passaggio, incontro, attesa, arrivo. Per questo l\'Ecocamp sarà costruito attorno a tre parole: camminare, ascoltare, servire.'
      },
      {
        type: 'text',
        value: 'Cosa vivremo\nCi saranno momenti di incontro con chi conosce da vicino il territorio, un servizio concreto accanto a Linea d\'Ombra e un cammino verso la frontiera slovena. Non sarà solo un weekend da raccontare: sarà un modo per mettersi in ascolto, con i piedi per terra e lo sguardo un po\' più largo.'
      },
      {
        type: 'text',
        value: 'Partecipazione\nI dettagli pratici su alloggio, trasporti e quota verranno condivisi appena definiti.'
      }
    ]
  },
  {
    id: 'cammino-2026',
    title: 'Cammino Edizione 2026',
    description: 'A Settembre, in partenza da Bassano del Grappa per arrivare a Belluno.',
    fullDescription: 'La nostra edizione 2026 del cammino ci porterà da Bassano del Grappa fino a Belluno. Sarà un percorso di riflessione e scoperta del territorio, della sua natura e delle realtà associative che lo rendono vivo.',
    imageUrl: 'https://picsum.photos/1200/600?random=102',
    status: 'future',
    content: [
      { type: 'text', value: 'Settembre è il mese del passo lento. Quest\'anno attraverseremo i paesaggi che collegano Bassano a Belluno, incontrando realtà che rigenerano il territorio.' }
    ]
  },
  {
    id: 'ecocamp-2025',
    title: 'Ecocamp 2025',
    description: 'Edizione precedente a Trieste con focus sulla sostenibilità urbana.',
    fullDescription: 'L\'edizione 2025 dell\'Ecocamp ha esplorato il concetto di "città ecologica" partendo da Trieste, coinvolgendo giovani da tutto il Veneto.',
    imageUrl: 'https://picsum.photos/1200/600?random=103',
    status: 'past',
    content: [
      { type: 'text', value: 'L\'edizione 2025 è stata un successo incredibile. Abbiamo mappato i punti critici della città e proposto soluzioni concrete per una Trieste più verde.' }
    ]
  },
  {
    id: 'ecocamp-2024',
    title: 'Ecocamp 2024',
    description: 'Il nostro primo grande campo estivo itinerante.',
    fullDescription: 'Nel 2024 abbiamo gettato le basi per quello che oggi è l\'Ecocamp. Un\'esperienza di comunità pura tra le montagne bellunesi.',
    imageUrl: 'https://picsum.photos/1200/600?random=104',
    status: 'past',
    content: [
      { type: 'text', value: 'Ricordi di un\'estate indimenticabile tra le Dolomiti, dove abbiamo imparato il valore della condivisione e del rispetto per l\'ambiente.' }
    ]
  },
  {
    id: 'cammino-2024',
    title: 'Cammino 2024',
    description: 'Attraverso le colline Trevigiane.',
    fullDescription: 'L\'edizione 2024 ci ha portati tra i vigneti e le colline di Treviso, incontrando cooperative sociali e agricoltori eroici.',
    imageUrl: 'https://picsum.photos/1200/600?random=105',
    status: 'past',
    content: [
      { type: 'text', value: 'Camminare tra le colline del Prosecco ci ha permesso di scoprire il volto umano dietro la produzione industriale, parlando d\'agricoltura sociale.' }
    ]
  },
  {
    id: 'cammino-2023',
    title: 'Cammino 2023',
    description: 'Esplorando la costa Veneziana.',
    fullDescription: 'Da Chioggia a Caorle, un viaggio lungo l\'acqua per capire l\'impatto del cambiamento climatico sulle nostre coste.',
    imageUrl: 'https://picsum.photos/1200/600?random=106',
    status: 'past',
    content: [
      { type: 'text', value: 'L\'acqua è stata il filo conduttore del 2023. Abbiamo visto come il mare sta cambiando e cosa possiamo fare per preservare la laguna.' }
    ]
  },
  {
    id: 'cammino-2022',
    title: 'Cammino 2022',
    description: 'Le origini: il primo grande viaggio di VCI.',
    fullDescription: 'Il viaggio che ha dato inizio a tutto. Tre settimane di puro cammino attraverso tutto il Veneto.',
    imageUrl: 'https://picsum.photos/1200/600?random=107',
    status: 'past',
    content: [
      { type: 'text', value: 'Partiti con poco, tornati con tantissimo. Così è nato VCI, dalla voglia di riscoprire il Veneto a piedi.' }
    ]
  }
];
