import type { Project } from '../types';
import ecocamp2026Cover from '../assets/photos/ecocamp2026/ciotole.jpg';
import cammino2026Cover from '../assets/photos/cammino2026/IMG20250908091317.jpg';
import ecocamp2025Cover from '../assets/photos/ecocamp2025/IMG_8994.jpg';
import ecocamp2025Photo1 from '../assets/photos/ecocamp2025/IMG_8994.jpg';
import ecocamp2025Photo2 from '../assets/photos/ecocamp2025/IMG_8982.jpg';
import ecocamp2025Photo3 from '../assets/photos/ecocamp2025/IMG_8948-rendered.jpg';
import ecocamp2025Photo4 from '../assets/photos/ecocamp2025/IMG_9046-rendered.jpg';
import ecocamp2025Photo5 from '../assets/photos/ecocamp2025/IMG_3184-rendered.jpg';
import ecocamp2025Photo6 from '../assets/photos/ecocamp2025/IMG_3086-rendered.jpg';
import ecocamp2025Photo7 from '../assets/photos/ecocamp2025/IMG_20240829_152559-rendered.jpg';
import ecocamp2024Cover from '../assets/photos/ecocamp2024/IMG_2984.jpg';
import ecocamp2024Photo1 from '../assets/photos/ecocamp2024/IMG_2984.jpg';
import ecocamp2024Photo2 from '../assets/photos/ecocamp2024/IMG_2958.jpg';
import ecocamp2024Photo3 from '../assets/photos/ecocamp2024/IMG_2971.jpg';
import ecocamp2024Photo4 from '../assets/photos/ecocamp2024/IMG_3007.jpg';
import ecocamp2024Photo5 from '../assets/photos/ecocamp2024/IMG_3024.jpg';
import ecocamp2024Photo6 from '../assets/photos/ecocamp2024/IMG_3118.jpg';
import ecocamp2024Photo7 from '../assets/photos/ecocamp2024/IMG_3151.jpg';
import ecocamp2024Photo8 from '../assets/photos/ecocamp2024/IMG_3229.jpg';
import cammino2025Cover from '../assets/photos/cammino2025/IMG_0311.jpg';
import cammino2025Photo1 from '../assets/photos/cammino2025/IMG_0311.jpg';
import cammino2025Photo2 from '../assets/photos/cammino2025/IMG_0318.jpg';
import cammino2025Photo3 from '../assets/photos/cammino2025/IMG_0348.jpg';
import cammino2025Photo4 from '../assets/photos/cammino2025/IMG_0644.jpg';
import cammino2025Photo5 from '../assets/photos/cammino2025/IMG_0676.jpg';
import cammino2025Photo6 from '../assets/photos/cammino2025/IMG_0763.jpg';
import cammino2025Photo7 from '../assets/photos/cammino2025/IMG_0824.jpg';
import cammino2025Photo8 from '../assets/photos/cammino2025/IMG_0861.jpg';
import cammino2024Cover from '../assets/photos/cammino2024/IMG_8245.jpg';
import cammino2024Photo1 from '../assets/photos/cammino2024/IMG_8245.jpg';
import cammino2024Photo2 from '../assets/photos/cammino2024/IMG_8140.jpg';
import cammino2024Photo3 from '../assets/photos/cammino2024/IMG_8213.jpg';
import cammino2024Photo4 from '../assets/photos/cammino2024/IMG_8223.jpg';
import cammino2024Photo5 from '../assets/photos/cammino2024/IMG_8230.jpg';
import cammino2024Photo6 from '../assets/photos/cammino2024/IMG_8241.jpg';
import cammino2024Photo7 from '../assets/photos/cammino2024/IMG_8280.jpg';
import cammino2024Photo8 from '../assets/photos/cammino2024/IMG_8496.jpg';
import cammino2024Photo9 from '../assets/photos/cammino2024/IMG_8498.jpg';
import cammino2023Cover from '../assets/photos/cammino2023/84aa9117-fb1a-45e1-9df4-c0d376b982f3.jpg';
import cammino2023Photo1 from '../assets/photos/cammino2023/84aa9117-fb1a-45e1-9df4-c0d376b982f3.jpg';
import cammino2023Photo2 from '../assets/photos/cammino2023/55f0d54a-4a52-4093-8b9d-03a7046e937c.jpg';
import cammino2023Photo3 from '../assets/photos/cammino2023/IMG-20260508-WA0040.jpg';
import cammino2023Photo4 from '../assets/photos/cammino2023/IMG-20260508-WA0041.jpg';
import cammino2023Photo5 from '../assets/photos/cammino2023/IMG-20260508-WA0042.jpg';
import cammino2023Photo6 from '../assets/photos/cammino2023/IMG_3645.jpg';
import cammino2023Photo7 from '../assets/photos/cammino2023/WhatsApp Image 2026-04-23 at 21.32.02.jpeg';
import cammino2022Cover from '../assets/photos/cammino2022/20220906_105012.jpg';
import cammino2022Photo1 from '../assets/photos/cammino2022/20220906_105012.jpg';
import cammino2022Photo2 from '../assets/photos/cammino2022/IMG_20220904_094237.jpg';
import cammino2022Photo3 from '../assets/photos/cammino2022/IMG_20220911_110224.jpg';
import cammino2022Photo4 from '../assets/photos/cammino2022/IMG_20220913_160327.jpg';
import cammino2022Photo5 from '../assets/photos/cammino2022/IMG_20220916_143227.jpg';
import cammino2022Photo6 from '../assets/photos/cammino2022/IMG_6006.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'ecocamp-trieste-2026',
    title: 'Ecocamp Trieste 2026',
    description: 'Weekend 19-21 giugno a Trieste, tra servizio, formazione e incontro con le realtà che vivono il confine.',
    fullDescription: 'Ecocamp Trieste 2026 è un weekend immersivo per giovani tra i 18 e i 35 anni che vogliono mettersi in gioco, entrare in contatto con realtà complesse e vivere il confine da una prospettiva diversa. Dal 19 al 21 giugno saremo ospiti a Villa Ara, accompagnati da ASCS nell\'incontro con le realtà attive sul territorio di Trieste.',
    imageUrl: ecocamp2026Cover,
    status: 'future',
    googleFormUrl: 'https://docs.google.com/forms/d/11d8cz_1uoU1sJSJj_eLQMLEfKZumlVW8qI3ZEMk6akM/edit',
    partners: ['ASCS', 'Linea d\'Ombra ODV', 'Diaconia Valdese', 'Caritas', 'Donk Associazione', 'Villa Ara'],
    content: [
      {
        type: 'text',
        value: 'Il senso del progetto\nTrieste è un luogo in cui il confine non è solo una linea sulla mappa: è passaggio, attesa, arrivo, vulnerabilità e relazione. L\'Ecocamp nasce per attraversare questo spazio con delicatezza, alternando servizio concreto, formazione e incontro con chi ogni giorno vive e accompagna le dinamiche migratorie sul territorio.'
      },
      {
        type: 'text',
        value: 'Servizio sul territorio\nCi metteremo a disposizione di diverse realtà locali, tra cui Linea d\'Ombra ODV, Diaconia Valdese, Caritas e Donk Associazione. Dalla raccolta e preparazione del cibo alle distribuzioni in città, fino al contatto con persone in transito e situazioni di vulnerabilità, proveremo a capire cosa significa esserci in modo concreto.'
      },
      {
        type: 'text',
        value: 'Formazione e incontri\nASCS - Agenzia Scalabriniana per la Cooperazione allo Sviluppo ci accompagnerà nella lettura del contesto e sarà il nostro ponte con le realtà attive a Trieste. Attraverso testimonianze, momenti di confronto e la proiezione del docu-film Houmar, entreremo con più profondità nelle storie e nelle domande che attraversano il confine.'
      },
      {
        type: 'text',
        value: 'Il programma del weekend\nCi ritroveremo venerdì 19 giugno alle 20:00 a Villa Ara per una cena condivisa e un primo momento di conoscenza. Sabato sarà la giornata più intensa, tra attività di servizio, testimonianze e presenza nei luoghi di accoglienza e distribuzione. Domenica concluderemo con una camminata condivisa sul territorio, per dare senso all\'esperienza e lasciare sedimentare ciò che avremo incontrato.'
      },
      {
        type: 'text',
        value: 'Informazioni pratiche\nIl weekend si svolgerà dal 19 al 21 giugno a Trieste, con pernottamento presso Villa Ara, ospiti della comunità dei Gesuiti. Le attività termineranno domenica dopo pranzo, con rientro dalle 15:00. Gli spostamenti per raggiungere e lasciare Trieste saranno autonomi. Il contributo è di 30 euro e include alloggio, pasti, attività, escursione e assicurazione.'
      },
      {
        type: 'text',
        value: 'Cosa portare\nPer vivere bene l\'Ecocamp serviranno abiti comodi e pratici per le attività di servizio, scarpe adatte a muoversi in città, una felpa o giacca per la sera, sacco a pelo e materassino, zainetto per la giornata, borraccia riutilizzabile e necessario per l\'igiene personale.'
      }
    ]
  },
  {
    id: 'cammino-2026',
    title: 'Cammino Edizione 2026',
    description: 'A Settembre, in partenza da Bassano del Grappa per arrivare a Belluno.',
    fullDescription: 'La nostra edizione 2026 del cammino ci porterà da Bassano del Grappa fino a Belluno. Sarà un percorso di riflessione e scoperta del territorio, della sua natura e delle realtà associative che lo rendono vivo.',
    imageUrl: cammino2026Cover,
    status: 'future',
    content: [
      { type: 'text', value: 'Settembre è il mese del passo lento. Quest\'anno attraverseremo i paesaggi che collegano Bassano a Belluno, incontrando realtà che rigenerano il territorio.' }
    ]
  },
  {
    id: 'cammino-2025',
    title: 'Cammino 2025',
    description: 'Da Rovigo a Vicenza, una settimana tra Adige, Colli Euganei, Abbazia di Praglia e Alta Via dei Berici.',
    fullDescription: 'Nel 2025 siamo ripartiti da Rovigo, da dove il cammino si era interrotto, per attraversare la pianura seguendo l\'Adige e poi entrare nel paesaggio dei Colli Euganei e dei Colli Berici. Una settimana di passi, salite, borghi e incontri fino alla meta finale: Vicenza.',
    imageUrl: cammino2025Cover,
    status: 'past',
    gallery: [
      { src: cammino2025Photo1, alt: 'Paesaggio attraversato durante il Cammino 2025' },
      { src: cammino2025Photo2, alt: 'Tappa del Cammino 2025 tra sentieri e colline' },
      { src: cammino2025Photo3, alt: 'Partecipanti lungo il percorso del Cammino 2025' },
      { src: cammino2025Photo4, alt: 'Vista panoramica dal Cammino 2025' },
      { src: cammino2025Photo5, alt: 'Momento di cammino collettivo nel Cammino 2025' },
      { src: cammino2025Photo6, alt: 'Scorcio naturale attraversato nel Cammino 2025' },
      { src: cammino2025Photo7, alt: 'Gruppo e territorio durante il Cammino 2025' },
      { src: cammino2025Photo8, alt: 'Ricordo dal Cammino 2025 verso Vicenza' }
    ],
    content: [
      {
        type: 'text',
        value: 'La rotta\nRipartendo da Rovigo, abbiamo seguito per un tratto il corso dell\'Adige, lasciandoci alle spalle la pianura per addentrarci tra le meraviglie dei Colli Euganei. Este è stata la porta d\'ingresso ai colli, poi il cammino è proseguito tra vigneti, sentieri e viste panoramiche fino ad Arquà Petrarca, uno dei borghi più belli d\'Italia.'
      },
      {
        type: 'text',
        value: 'Dagli Euganei ai Berici\nDopo Arquà Petrarca siamo passati per l\'Abbazia di Praglia e le zone di Teolo, prima di scendere verso valle e risalire negli altri colli della nostra regione: i Colli Berici. Da Noventa Vicentina abbiamo imboccato l\'Alta Via dei Berici fino a Pederiva, attraversando Castegnero e Brendola prima dell\'arrivo a Vicenza.'
      },
      {
        type: 'text',
        value: 'Le tappe\nSabato 06/09: Rovigo - Vighizzolo d\'Este, 25 km. Domenica 07/09: Vighizzolo d\'Este - Arquà Petrarca, 21 km. Lunedì 08/09: Arquà Petrarca - Abbazia di Praglia, 21 km. Martedì 09/09: Abbazia di Praglia - Teolo, 15 km. Mercoledì 10/09: Teolo - Saline, Noventa Vicentina, 25 km. Giovedì 11/09: Saline - Pederiva, Grancona, 24 km. Venerdì 12/09: Pederiva - Castegnero, 22 km. Sabato 13/09: Castegnero - Brendola, 19 km. Domenica 14/09: Brendola - Vicenza, 18 km.'
      },
      {
        type: 'text',
        value: 'Il passo del cammino\nQuesta settimana ha tenuto insieme fatica e bellezza: la pianura, i vigneti, i sentieri, le salite e le discese, i borghi e le abbazie. È stato un modo per continuare a conoscere il Veneto a passo lento, lasciando che il paesaggio cambiasse giorno dopo giorno e che il gruppo trovasse il proprio ritmo.'
      }
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
    description: 'Dal 29 agosto al 1 settembre, un campo sull\'Altopiano di Asiago dedicato a rifiuti abbandonati, escursioni e ascolto del territorio.',
    fullDescription: 'Ecocamp 2024 è nato in collaborazione con Associazione Occhi Aperti per approfondire un tema spesso invisibile: la presenza di discariche abusive e l\'abbandono di rifiuti sull\'Altopiano di Asiago. Dal 29 agosto al 1 settembre abbiamo vissuto giornate di campo tra attività pratiche, escursioni e visite guidate, lasciandoci accompagnare da chi quel territorio lo abita, lo conosce e lo protegge ogni giorno.',
    imageUrl: ecocamp2024Cover,
    status: 'past',
    partners: ['Associazione Occhi Aperti', 'Oltrevia'],
    gallery: [
      { src: ecocamp2024Photo1, alt: 'Momento all\'aperto durante Ecocamp 2024 sull\'Altopiano di Asiago' },
      { src: ecocamp2024Photo2, alt: 'Partecipanti dell\'Ecocamp 2024 durante le attività di campo' },
      { src: ecocamp2024Photo3, alt: 'Scorcio dall\'Ecocamp 2024 tra natura e territorio' },
      { src: ecocamp2024Photo4, alt: 'Attività condivisa durante Ecocamp 2024' },
      { src: ecocamp2024Photo5, alt: 'Partecipanti e paesaggio dell\'Altopiano durante Ecocamp 2024' },
      { src: ecocamp2024Photo6, alt: 'Vita di gruppo durante Ecocamp 2024' },
      { src: ecocamp2024Photo7, alt: 'Cammino e scoperta del territorio nell\'Ecocamp 2024' },
      { src: ecocamp2024Photo8, alt: 'Momento conclusivo dell\'Ecocamp 2024' }
    ],
    content: [
      {
        type: 'text',
        value: 'Da dove arrivavamo\nEcocamp 2024 si inserisce nel cammino di Veneto Comunità Itinerante, nato nel 2020 dalla Scuola di Politiche di Oltrevia per diffondere e amplificare l\'impegno per l\'ambiente e la giustizia sociale. Dopo aver attraversato il Veneto a piedi tra il 2022 e il 2023, sentivamo il bisogno di fermarci in un luogo e prendercene cura più da vicino.'
      },
      {
        type: 'text',
        value: 'Un itinerario diventato campo\nTra l\'estate 2022 e quella del 2023 abbiamo creato e percorso un itinerario ad anello di 7 settimane e 48 tappe, partendo da Bassano del Grappa e attraversando tutte le province venete. Quel viaggio ci ha insegnato a conoscere la regione a passo lento: pianure, vallate, laghi, montagne, città storiche e borghi, ma soprattutto persone e associazioni che ogni giorno custodiscono il territorio.'
      },
      {
        type: 'text',
        value: 'Il tema: rifiuti e discariche abusive\nSull\'Altopiano di Asiago abbiamo scelto di approfondire la presenza di rifiuti abbandonati e discariche abusive: un problema poco raccontato, ma capace di ferire luoghi di grande valore naturale e comunitario. Le attività pratiche ci hanno permesso di osservare il fenomeno da vicino e di trasformare la consapevolezza in azione.'
      },
      {
        type: 'text',
        value: 'Ascoltare chi vive l\'Altopiano\nGrazie alla collaborazione con Associazione Occhi Aperti, le giornate sono state anche un tempo di scoperta: escursioni, visite guidate e testimonianze ci hanno accompagnato dentro un territorio complesso e bellissimo. Abbiamo imparato che proteggere un luogo significa prima di tutto ascoltarlo, lasciandosi guidare da chi lo conosce davvero.'
      },
      {
        type: 'text',
        value: 'Una nuova forma di VCI\nEcocamp 2024 ha segnato un passaggio importante: dal cammino come attraversamento al campo come presenza. Restare, lavorare insieme, conoscere e fare comunità ci ha aiutato a immaginare un modo nuovo di continuare il progetto, con lo stesso passo lento e lo stesso desiderio di giustizia ambientale e sociale.'
      }
    ]
  },
  {
    id: 'cammino-2024',
    title: 'Cammino 2024',
    description: 'Da Treviso a Rovigo, seguendo il Sile, la laguna veneziana e il delta del Po.',
    fullDescription: 'Nel 2024 abbiamo ripreso il cammino del Veneto attraversando nuovi tratti e raggiungendo la provincia di Rovigo. Da Treviso siamo scesi lungo la ciclabile del Sile fino alla laguna veneziana, per poi proseguire attraverso Lido, Pellestrina, Chioggia e il delta del Po fino a Rovigo.',
    imageUrl: cammino2024Cover,
    status: 'past',
    gallery: [
      { src: cammino2024Photo1, alt: 'Gruppo in cammino durante il Cammino 2024' },
      { src: cammino2024Photo2, alt: 'Paesaggio attraversato dal Cammino 2024' },
      { src: cammino2024Photo3, alt: 'Tappa del Cammino 2024 tra sentieri e territorio' },
      { src: cammino2024Photo4, alt: 'Partecipanti del Cammino 2024 lungo il percorso' },
      { src: cammino2024Photo5, alt: 'Momento di cammino collettivo nel Cammino 2024' },
      { src: cammino2024Photo6, alt: 'Scorcio naturale dal Cammino 2024' },
      { src: cammino2024Photo7, alt: 'Serata e vita condivisa durante il Cammino 2024' },
      { src: cammino2024Photo8, alt: 'Incontro e tappa del Cammino 2024' },
      { src: cammino2024Photo9, alt: 'Ultimi momenti del Cammino 2024' }
    ],
    content: [
      {
        type: 'text',
        value: 'La rotta\nPartendo da Treviso abbiamo percorso a piedi la ciclabile del fiume Sile, un tracciato unico e suggestivo che segue l\'omonimo fiume trevigiano tra scorci d\'acqua, paesaggi lenti e panorami inattesi. Raggiunti Quarto d\'Altino e Jesolo, il cammino si è aperto verso la laguna veneziana.'
      },
      {
        type: 'text',
        value: 'Laguna e delta\nDa Punta Sabbioni abbiamo proseguito fino a Chioggia attraversando il Lido di Venezia e l\'isola di Pellestrina. Poi il passo è sceso verso sud, entrando nel paesaggio del delta del Po: Porto Viro, Adria, Fenil del Turco e infine Rovigo, nuova tappa nel nostro percorso attraverso il Veneto.'
      },
      {
        type: 'text',
        value: 'Le tappe\nMercoledì 04/09: Treviso - Quarto d\'Altino, 18 km. Giovedì 05/09: Quarto d\'Altino - Jesolo, 27 km. Venerdì 06/09: Jesolo - Punta Sabbioni, 23 km. Sabato 07/09: Punta Sabbioni - Chioggia, 21 km. Domenica 08/09: Chioggia - Porto Viro, 24 km. Lunedì 09/09: Porto Viro - Adria, 24 km. Martedì 10/09: Adria - Fenil del Turco, 18 km. Mercoledì 11/09: Fenil del Turco - Rovigo, 10 km.'
      },
      {
        type: 'text',
        value: 'Il passo del cammino\nQuesta settimana ha tenuto insieme fiume, mare, isole, laguna e pianura. È stata una traversata fatta di passaggi morbidi e paesaggi d\'acqua, un modo per rimettersi in cammino e allargare ancora la nostra mappa del Veneto.'
      }
    ]
  },
  {
    id: 'cammino-2023',
    title: 'Cammino 2023',
    description: 'Esplorando la costa Veneziana.',
    fullDescription: 'Da Chioggia a Caorle, un viaggio lungo l\'acqua per capire l\'impatto del cambiamento climatico sulle nostre coste.',
    imageUrl: cammino2023Cover,
    status: 'past',
    gallery: [
      { src: cammino2023Photo1, alt: 'Paesaggio e percorso del Cammino 2023' },
      { src: cammino2023Photo2, alt: 'Gruppo del Cammino 2023 lungo una tappa' },
      { src: cammino2023Photo3, alt: 'Scorcio attraversato durante il Cammino 2023' },
      { src: cammino2023Photo4, alt: 'Momento condiviso durante il Cammino 2023' },
      { src: cammino2023Photo5, alt: 'Partecipanti del Cammino 2023 in viaggio' },
      { src: cammino2023Photo6, alt: 'Tappa e territorio del Cammino 2023' },
      { src: cammino2023Photo7, alt: 'Ricordo dal Cammino 2023' }
    ],
    content: [
      { type: 'text', value: 'L\'acqua è stata il filo conduttore del 2023. Abbiamo visto come il mare sta cambiando e cosa possiamo fare per preservare la laguna.' }
    ]
  },
  {
    id: 'cammino-2022',
    title: 'Cammino 2022',
    description: 'Le origini: il primo grande viaggio di VCI.',
    fullDescription: 'Il viaggio che ha dato inizio a tutto. Tre settimane di puro cammino attraverso tutto il Veneto.',
    imageUrl: cammino2022Cover,
    status: 'past',
    gallery: [
      { src: cammino2022Photo1, alt: 'Paesaggio attraversato durante il Cammino 2022' },
      { src: cammino2022Photo2, alt: 'Prime tappe del Cammino 2022' },
      { src: cammino2022Photo3, alt: 'Tappa del Cammino 2022 tra sentieri e territorio' },
      { src: cammino2022Photo4, alt: 'Momento di cammino collettivo nel Cammino 2022' },
      { src: cammino2022Photo5, alt: 'Scorcio naturale dal Cammino 2022' },
      { src: cammino2022Photo6, alt: 'Ricordo dal primo viaggio di VCI nel 2022' }
    ],
    content: [
      { type: 'text', value: 'Partiti con poco, tornati con tantissimo. Così è nato VCI, dalla voglia di riscoprire il Veneto a piedi.' }
    ]
  }
];
