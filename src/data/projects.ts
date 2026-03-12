import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'festival',
    title: 'Festival del Camminare',
    description: 'Un evento annuale di tre giorni con talk, escursioni e musica per celebrare la cultura del cammino.',
    fullDescription: 'Il Festival del Camminare riunisce ogni anno centinaia di appassionati. Durante i tre giorni esploriamo le più belle zone del Veneto, offrendo talk con esperti di sostenibilità, musica dal vivo alla sera e tavole rotonde sulle aree interne.',
    imageUrl: 'https://picsum.photos/800/400?random=50',
  },
  {
    id: 'scuole',
    title: 'VCI nelle Scuole',
    description: "Portiamo l'educazione ambientale e la pratica del cammino nelle scuole primarie del Veneto.",
    fullDescription: "VCI nelle Scuole è un progetto di educazione alla sostenibilità e al cammino lento. Lavoriamo con le scuole primarie per insegnare ai bambini il valore esplorativo del territorio, la biodiversità locale e l'importanza dell'attività fisica all'aperto.",
    imageUrl: 'https://picsum.photos/800/400?random=51',
  }
];
