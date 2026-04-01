import type { Team, MapPoint, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Chi Siamo', path: '/chi-siamo' },
  { label: 'Progetti', path: '/progetti' },
  { label: 'Associazioni', path: '/associazioni' },
  { label: 'Diario Itinerante', path: '/diario' },
  { label: 'Info', path: '/info' },
  { label: 'Partecipa', path: '/partecipa' },
];


export const TEAMS: Team[] = [
  {
    id: 't1',
    name: 'Team Comunicazione',
    type: 'Settimanale',
    description: 'Gestisce i social, il sito web e la newsletter.',
    role: 'Coordinamento',
  },
  {
    id: 't2',
    name: 'Team Logistica',
    type: 'Mensile',
    description: 'Organizza i trasporti e i ristori per i grandi eventi.',
    role: 'Supporto Operativo',
  },
  {
    id: 't3',
    name: 'Team Strategia',
    type: 'Annuale',
    description: 'Definisce la visione a lungo termine e i grandi obiettivi.',
    role: 'Direzione',
  },
  {
    id: 't4',
    name: 'Gruppo Festival',
    type: 'Dinamico',
    description: 'Si attiva solo per l\'organizzazione del Festival annuale.',
    role: 'Progetto Specifico',
  }
];

export const PARTNERS: MapPoint[] = [
  { id: 'p1', name: 'Vicenza', code: 'VI', location: { x: 35, y: 50, label: 'Vicenza' } },
  { id: 'p2', name: 'Treviso', code: 'TV', location: { x: 65, y: 44, label: 'Treviso' } },
  { id: 'p3', name: 'Venezia', code: 'VE', location: { x: 71, y: 65, label: 'Venezia' } },
  { id: 'p4', name: 'Belluno', code: 'BL', location: { x: 61, y: 18, label: 'Belluno' } },
  { id: 'p5', name: 'Padova', code: 'PD', location: { x: 48, y: 70, label: 'Padova' } },
  { id: 'p6', name: 'Verona', code: 'VR', location: { x: 20, y: 65, label: 'Verona' } },
  { id: 'p7', name: 'Rovigo', code: 'RO', location: { x: 48, y: 87, label: 'Rovigo' } },
];


export const FAQ_ITEMS = [
  {
    question: "Cosa devo portare per un cammino?",
    answer: "Scarpe comode (meglio se da trekking), acqua (almeno 1L), cappellino, e voglia di stare insieme."
  },
  {
    question: "I cammini sono adatti ai bambini?",
    answer: "Dipende dalla difficoltà segnalata. I percorsi 'Facili' sono quasi sempre adatti a famiglie."
  },
  {
    question: "Come posso iscrivermi?",
    answer: "Puoi iscriverti direttamente dalla pagina 'Progetti' cliccando sul singolo evento."
  },
  {
    question: "Posso portare il mio cane?",
    answer: "Sì, nella maggior parte dei cammini, purché al guinzaglio e nel rispetto degli altri."
  }
];