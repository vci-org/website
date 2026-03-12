import React, { useState } from 'react';
import { PageHeader, Section } from '../components/Shared';
import { ARCHIVE_EDITIONS } from '../data/archive';
import { ASSOCIATIONS } from '../data/associations';
import { ChevronDown, MapPin, Map, ExternalLink } from 'lucide-react';

export const Archive: React.FC = () => {
  const [openEdition, setOpenEdition] = useState<string | null>(ARCHIVE_EDITIONS[ARCHIVE_EDITIONS.length - 1].id);

  // Helper to find association name by ID
  const getAssociationName = (id: string) => {
    const assoc = ASSOCIATIONS.find(a => a.id === id);
    return assoc ? assoc.name : id;
  };

  return (
    <>
      <PageHeader title="Diario Itinerante" subtitle="L'archivio dei nostri cammini dal 2022 ad oggi." />
      <Section className="max-w-4xl mx-auto">
        
        <div className="mb-12 text-center text-gray-600 max-w-2xl mx-auto">
          <p className="text-lg">
            Dal 2022 attraversiamo il Veneto a passo lento. Le prime due edizioni (2022, 2023) ci hanno visti in cammino per <strong>3 settimane</strong> consecutive, mentre dalle successive abbiamo optato per ritmi di <strong>1 settimana</strong>. Scopri le tappe, chi abbiamo incontrato e le mappe dei percorsi!
          </p>
        </div>

        <div className="space-y-6">
          {ARCHIVE_EDITIONS.reverse().map((edition) => (
            <div key={edition.id} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                className={`w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors ${openEdition === edition.id ? 'bg-vci-green text-white' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => setOpenEdition(openEdition === edition.id ? null : edition.id)}
              >
                <div>
                  <h2 className="text-2xl font-bold">{edition.title}</h2>
                  <p className={`mt-1 text-sm font-medium ${openEdition === edition.id ? 'text-green-100' : 'text-gray-500'}`}>
                    {edition.year} • {edition.duration}
                  </p>
                </div>
                <ChevronDown size={28} className={`transform transition-transform ${openEdition === edition.id ? 'rotate-180' : ''}`} />
              </button>

              {openEdition === edition.id && (
                <div className="bg-gray-50 border-t border-gray-100 p-6 md:p-8">
                  <p className="text-gray-700 text-lg mb-8 italic">"{edition.description}"</p>
                  
                  <div className="space-y-8">
                    {edition.days.map((day) => (
                      <div key={day.dayNumber} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-gray-100">
                           <h3 className="text-xl font-bold text-vci-darkBlue flex items-center gap-2">
                             <span className="w-8 h-8 rounded-full bg-vci-green text-white flex items-center justify-center text-sm">
                               {day.dayNumber}
                             </span>
                             {day.startPoint} <MapPin size={16} className="text-gray-400 mx-1"/> {day.endPoint}
                           </h3>
                           <span className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start md:self-auto
                              ${day.difficulty === 'Facile' ? 'bg-green-100 text-green-700' : 
                                day.difficulty === 'Medio' ? 'bg-yellow-100 text-yellow-700' : 
                                'bg-red-100 text-red-700'}`}>
                             {day.difficulty}
                           </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                             <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Realtà Incontrate</h4>
                             {day.associationsMet.length > 0 ? (
                               <ul className="space-y-2">
                                 {day.associationsMet.map(assocId => (
                                   <li key={assocId} className="flex items-start gap-2 text-gray-700">
                                     <span className="text-vci-green mt-1">•</span>
                                     <span>{getAssociationName(assocId)}</span>
                                     {/* Note: In a real flow, this could link to the Associazioni details page */}
                                   </li>
                                 ))}
                               </ul>
                             ) : (
                               <p className="text-gray-500 italic">Nessuna realtà in questa tappa.</p>
                             )}
                           </div>
                           
                           {/* Komoot / Map Placeholder for this Day */}
                           <div>
                             <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                               <Map size={14} /> Mappa Tappa (Komoot/GPX)
                             </h4>
                             <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center text-center p-4">
                               {day.gpxUrl ? (
                                 <a href={day.gpxUrl} target="_blank" rel="noopener noreferrer" className="text-vci-green font-bold flex items-center gap-2 hover:underline">
                                   Apri Traccia <ExternalLink size={16} />
                                 </a>
                               ) : (
                                 <p className="text-gray-400 text-sm">Nessuna traccia caricata per questa tappa.</p>
                               )}
                             </div>
                           </div>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>

      </Section>
    </>
  );
};
