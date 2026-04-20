import React from 'react';
import { PageHeader, Section } from '../components/Shared';
import { Target, Eye, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Chi Siamo" 
        subtitle="Origini, evoluzione e le persone che muovono VCI."
        bgImage="https://picsum.photos/1920/600?random=99"
      />

      {/* --- STORY & EVOLUTION --- */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-vci-darkBlue mb-6">La nostra Storia</h2>
          <p>
            <span className="font-bold text-vci-darkBlue">Veneto Comunità Itinerante</span> non è solo un progetto, ma un'azione concreta sul territorio nata nel 2020 all'interno della Scuola di Politiche di Oltrevia. Pensata da giovani per i giovani, la nostra iniziativa nasce per coinvolgere nuove generazioni in un'esperienza attiva e condivisa, con l'obiettivo di amplificare l’impegno collettivo verso la tutela dell’ambiente e la giustizia sociale.
          </p>
          <p>
            Attraverso il cammino, esploriamo l’identità interconnessa del Veneto in tutta la sua diversità: dalle vallate di <span className="text-vci-darkBlue font-medium">Bassano del Grappa</span> alle vette del <span className="text-vci-darkBlue font-medium">Bellunese</span>, dalle colline del <span className="text-vci-darkBlue font-medium">Trevigiano</span> alla magia della <span className="text-vci-darkBlue font-medium">Laguna di Venezia</span>. Attraversiamo i panorami degli Euganei e dei Berici, la pianura del Veronese, le sponde del Garda e le frastagliate Piccole Dolomiti, unendo paesaggi differenti in un unico racconto corale.
          </p>
          <p>
            Camminare ci restituisce un <span className="italic font-medium">ritmo lento</span>, l'unico che permette di osservare con occhi diversi un territorio in continuo mutamento, spesso segnato dalla cementificazione ma ancora ricco di scorci suggestivi e bellezze nascoste. Ogni giornata è scandita dall'alternarsi di passi e incontri: lungo il percorso conosciamo associazioni, gruppi e realtà locali che credono nella sostenibilità e nella tutela del paesaggio. Sono questi momenti di dialogo e scambio a dare il vero senso al nostro progetto.
          </p>
          <p>
            In questo senso, VCI è un'esperienza collettiva: un viaggio che connette luoghi e persone, un incubatore di idee e un facilitatore di relazioni. Passo dopo passo, cerchiamo di immaginare nuove forme di abitare e prendersi cura del presente, lontano dalla frenesia produttiva e sempre più vicino ai <span className="text-vci-darkBlue font-medium">ritmi della natura</span>.
          </p>
        </div>
      </Section>

      {/* --- MISSION, VISION, VALUES --- */}
      <Section bg="beige">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Target className="w-12 h-12 text-vci-yellow mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Missione</h3>
            <p className="text-gray-600 text-sm">Creare connessioni autentiche tra le persone e il territorio veneto attraverso l'esperienza condivisa del cammino.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Eye className="w-12 h-12 text-vci-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Visione</h3>
            <p className="text-gray-600 text-sm">Un Veneto dove la lentezza è un valore e dove le comunità locali collaborano attivamente per il bene comune.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <HeartHandshake className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Valori</h3>
            <p className="text-gray-600 text-sm">Accoglienza, Sostenibilità, Ascolto, Partecipazione attiva e Rispetto per la natura.</p>
          </div>
        </div>
      </Section>
    </>
  );
};