import type { Project } from '../types';
import ecocamp2025Cover from '../assets/photos/ecocamp2025/IMG_8994.jpg';
import ecocamp2025Photo1 from '../assets/photos/ecocamp2025/IMG_8994.jpg';
import ecocamp2025Photo2 from '../assets/photos/ecocamp2025/IMG_8982.jpg';
import ecocamp2025Photo3 from '../assets/photos/ecocamp2025/IMG_8948-rendered.jpg';
import ecocamp2025Photo4 from '../assets/photos/ecocamp2025/IMG_9046-rendered.jpg';
import ecocamp2025Photo5 from '../assets/photos/ecocamp2025/IMG_3184-rendered.jpg';
import ecocamp2025Photo6 from '../assets/photos/ecocamp2025/IMG_3086-rendered.jpg';
import ecocamp2025Photo7 from '../assets/photos/ecocamp2025/IMG_20240829_152559-rendered.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'ecocamp-trieste-2026',
    title: 'Ecocamp Trieste 2026',
    description: 'Un weekend a Trieste tra cammino, frontiera e servizio con Linea d\'Ombra.',
    fullDescription: 'Ecocamp Trieste 2026 nasce in una città di confine, dove il cammino incontra le storie della Rotta Balcanica. Insieme ad ASCS e Linea d\'Ombra vivremo un weekend di ascolto, servizio e comunità.',
    imageUrl: 'https://picsum.photos/1200/600?random=100',
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
    description: 'Quattro giorni sull\'Altopiano di Asiago tra bonifica ambientale, vita di malga, cammino e comunità.',
    fullDescription: 'Dal 12 al 15 giugno 2025, a Camporovere di Asiago, l\'Ecocamp ha riunito giovani tra i 18 e i 35 anni per vivere un campo scuola fatto di attivismo ambientale, natura e comunità. Nato dall\'incontro tra Veneto Comunità Itinerante e Occhi Aperti, è stato un modo concreto per prendersi cura dell\'Altopiano e guardarlo da una prospettiva diversa.',
    imageUrl: ecocamp2025Cover,
    status: 'past',
    gallery: [
      { src: ecocamp2025Photo1, alt: 'Gruppo dell\'Ecocamp 2025 durante un momento all\'aperto' },
      { src: ecocamp2025Photo2, alt: 'Partecipanti dell\'Ecocamp 2025 in cammino' },
      { src: ecocamp2025Photo3, alt: 'Momento condiviso durante Ecocamp 2025' },
      { src: ecocamp2025Photo4, alt: 'Attività di gruppo dell\'Ecocamp 2025' },
      { src: ecocamp2025Photo5, alt: 'Paesaggio e partecipanti durante Ecocamp 2025' },
      { src: ecocamp2025Photo6, alt: 'Volontari e partecipanti dell\'Ecocamp 2025' },
      { src: ecocamp2025Photo7, alt: 'Scorcio fotografico dall\'Ecocamp 2025' }
    ],
    content: [
      {
        type: 'text',
        value: 'Cos\'è stato l\'Ecocamp\nL\'Ecocamp 2025 non è stato solo un campo scuola: è stato un piccolo laboratorio temporaneo di cittadinanza attiva. Per quattro giorni ci siamo messi in gioco con il corpo, con l\'ascolto e con le mani, alternando lavoro sul territorio, incontri con realtà locali e momenti di vita condivisa.'
      },
      {
        type: 'text',
        value: 'Le mattine: cura concreta del territorio\nLe giornate iniziavano con attività di bonifica ambientale in alcune zone dell\'Altopiano segnate dall\'abbandono di rifiuti e da discariche abusive. Insieme ai volontari delle associazioni locali abbiamo raccolto materiali, osservato le fragilità del territorio e trasformato l\'attenzione per l\'ambiente in un gesto pratico e collettivo.'
      },
      {
        type: 'text',
        value: 'I pomeriggi: conoscere l\'Altopiano da vicino\nVenerdì abbiamo visitato il Museo dell\'Acqua di Asiago e camminato con una guida ambientale per capire il ciclo dell\'acqua sull\'Altopiano e le sue fragilità. Sabato, con MalgAsiago, siamo entrati nella vita di malga: raccolta del latte, formaggio e burro fatti con le nostre mani, fino a un\'apericena al tramonto con i prodotti preparati insieme.'
      },
      {
        type: 'text',
        value: 'La chiusura: un cammino nello stile VCI\nDomenica abbiamo concluso l\'Ecocamp con una camminata collettiva: passo lento, silenzio, osservazione e connessione con la natura. È stato il nostro modo di restituire al territorio il tempo e lo spazio che ci aveva donato, portando a casa non solo ricordi, ma anche una responsabilità condivisa.'
      },
      {
        type: 'text',
        value: 'Una comunità temporanea\nOgni giorno ha lasciato spazio al confronto, al racconto e alla costruzione di relazioni. Tra stanze condivise, pasti, fatica, scoperte e serate insieme, l\'Ecocamp ha dato forma a una piccola comunità temporanea: giovane, curiosa, concreta, capace di sporcarsi le mani e di immaginare modi nuovi per abitare il territorio.'
      }
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
