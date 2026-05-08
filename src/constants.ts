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
    question: "Serve essere allenati per partecipare?",
    answer: "Dipende dal progetto. Nelle schede indichiamo sempre durata, chilometri e tipo di attività: alcuni appuntamenti sono accessibili anche a chi cammina poco, altri richiedono abitudine a stare in movimento per più ore. Se hai dubbi, scrivici prima di iscriverti: ti aiutiamo a capire se è l'esperienza giusta."
  },
  {
    question: "Come funziona l'iscrizione?",
    answer: "Quando un progetto è aperto trovi il pulsante di iscrizione nella sua scheda. Il modulo raccoglie i dati necessari per logistica, assicurazione e comunicazioni organizzative. Dopo l'invio, riceverai le informazioni pratiche aggiornate su ritrovo, materiale, costi e programma."
  },
  {
    question: "Cosa devo portare?",
    answer: "Per i cammini servono scarpe adatte, zaino leggero, borraccia, protezione da sole e pioggia, e abbigliamento comodo. Per gli Ecocamp possono servire anche sacco a pelo, materassino o vestiti da lavoro: trovi sempre la lista specifica nella pagina del progetto."
  },
  {
    question: "Quanto costa partecipare?",
    answer: "Cerchiamo di mantenere i contributi accessibili e trasparenti. Il costo cambia in base a durata, alloggio, pasti, assicurazione e attività previste. Quando chiediamo un contributo, nella pagina del progetto specifichiamo cosa è incluso."
  },
  {
    question: "Cosa succede in caso di maltempo?",
    answer: "Valutiamo di volta in volta in base alla sicurezza del gruppo e al tipo di attività. Una pioggia leggera di solito non ferma un cammino, ma in caso di condizioni critiche possiamo modificare tappe, orari o programma. Gli aggiornamenti arrivano sempre ai partecipanti iscritti."
  },
  {
    question: "Posso partecipare anche se non conosco nessuno?",
    answer: "Sì. Molte persone arrivano da sole e trovano nel gruppo una comunità temporanea con cui camminare, lavorare e confrontarsi. VCI nasce proprio per creare legami tra persone, territori e realtà locali."
  }
];
