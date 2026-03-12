import React from 'react';
import { PageHeader, Section } from '../components/Shared';
import { ARCHIVE_EDITIONS } from '../data/archive';
import { ASSOCIATIONS } from '../data/associations';
import { MapPin, Map, ExternalLink } from 'lucide-react';

export const Diario: React.FC = () => {
  // Helper to find association name by ID
  const getAssociationName = (id: string) => {
    const assoc = ASSOCIATIONS.find(a => a.id === id);
    return assoc ? assoc.name : id;
  };

  return (
    <>
      <PageHeader title="Diario Itinerante" subtitle="L'archivio cronologico dei nostri cammini dal 2022 ad oggi." />
      <Section className="max-w-5xl mx-auto">

        <div className="mb-16 text-center text-gray-600 max-w-2xl mx-auto">
          <p className="text-lg">
            Dal 2022 attraversiamo il Veneto a passo lento. Le prime due edizioni (2022, 2023) ci hanno visti in cammino per <strong>3 settimane</strong> consecutive, mentre dalle successive abbiamo optato per ritmi di <strong>1 settimana</strong>. Scopri le tappe, chi abbiamo incontrato e le mappe dei percorsi scorrendo l'archivio.
          </p>
        </div>

        <div className="relative border-l-2 md:border-l-4 border-vci-green/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-20 pb-12">
          {ARCHIVE_EDITIONS.reverse().map((edition) => (
            <div key={edition.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[45px] md:-left-[64px] top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-4 border-vci-green rounded-full shadow-md z-10 flex items-center justify-center">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-vci-green rounded-full"></div>
              </div>

              {/* Edition Header */}
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 bg-vci-green text-white text-sm font-bold rounded-full mb-3 shadow-sm tracking-widest uppercase">
                  {edition.year} • {edition.duration}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-vci-darkBlue mb-3">{edition.title}</h2>
                <p className="text-gray-600 text-lg italic max-w-3xl">"{edition.description}"</p>
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {edition.days.map((day) => (
                  <div key={day.dayNumber} className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                    {/* Day Badge */}
                    <div className="absolute top-0 right-0 bg-vci-green text-white font-bold py-1 px-4 rounded-bl-xl text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      Giorno {day.dayNumber}
                    </div>

                    <div className="flex flex-col mb-6 pt-2">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
                        {day.startPoint} <MapPin size={16} className="text-gray-400 shrink-0" /> {day.endPoint}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start
                           ${day.difficulty === 'Facile' ? 'bg-green-100 text-green-700' :
                          day.difficulty === 'Medio' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'}`}>
                        {day.difficulty}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Realtà Incontrate</h4>
                        {day.associationsMet.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {day.associationsMet.map(assocId => (
                              <span key={assocId} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                {getAssociationName(assocId)}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm italic">Nessuna realtà formale incontrata.</p>
                        )}
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Map size={14} /> Mappa Tappa
                        </h4>
                        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl py-6 flex flex-col items-center justify-center text-center group-hover:border-vci-green/50 transition-colors">
                          {day.gpxUrl ? (
                            <a href={day.gpxUrl} target="_blank" rel="noopener noreferrer" className="text-vci-green font-bold flex items-center gap-2 hover:underline">
                              Apri Profilo Altimetrico <ExternalLink size={16} />
                            </a>
                          ) : (
                            <p className="text-gray-400 text-sm">Traccia GPX / Komoot in arrivo.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </Section>
    </>
  );
};

