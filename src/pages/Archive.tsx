import React from 'react';
import { PageHeader, Section } from '../components/Shared';
import { ARCHIVE_EDITIONS } from '../data/archive';
import { ASSOCIATIONS } from '../data/associations';
import { ArrowRight, CalendarDays, ExternalLink, Map, MapPin, Route } from 'lucide-react';

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

        <div className="space-y-24 pb-12">
          {[...ARCHIVE_EDITIONS].reverse().map((edition) => {
            const firstDay = edition.days[0];
            const lastDay = edition.days[edition.days.length - 1];
            const routeLabel = firstDay && lastDay ? `${firstDay.startPoint} → ${lastDay.endPoint}` : '';

            return (
              <article key={edition.id} className="relative">
                {/* Edition Header */}
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end mb-8">
                  <div>
                    <span className="inline-block px-4 py-1.5 bg-vci-yellow text-white text-sm font-bold rounded-full mb-3 shadow-sm tracking-widest uppercase">
                      {edition.year} • {edition.duration}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-vci-darkBlue mb-3">{edition.title}</h2>
                    <p className="text-gray-600 text-lg italic max-w-3xl">"{edition.description}"</p>
                  </div>

                  <div className="border-l-4 border-vci-yellow pl-5 py-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Percorso</p>
                    <p className="text-lg font-bold text-vci-darkBlue flex items-center gap-2">
                      <Route size={20} className="text-vci-yellow shrink-0" />
                      {routeLabel}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">Tappe</p>
                        <p className="font-bold text-gray-800">{edition.days.length}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">Date</p>
                        <p className="font-bold text-gray-800">{firstDay?.date} - {lastDay?.date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stages Rail */}
                <div className="relative">
                  <div className="absolute left-0 right-0 top-5 h-0.5 bg-vci-yellow/30" aria-hidden="true" />
                  <div className="flex gap-5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-5 pt-1">
                    {edition.days.map((day) => (
                      <div key={day.dayNumber} className="relative min-w-[260px] sm:min-w-[300px] snap-start">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border-4 border-vci-yellow shadow-sm flex items-center justify-center z-10">
                            <span className="text-sm font-bold text-vci-darkBlue">{day.dayNumber}</span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-100 text-vci-darkBlue text-xs font-bold uppercase tracking-wider shadow-sm">
                            <CalendarDays size={14} /> {day.date}
                          </span>
                        </div>

                        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group h-full">
                          {day.weekLabel && (
                            <p className="text-vci-yellow text-xs font-bold uppercase tracking-wider mb-3">
                              {day.weekLabel}
                            </p>
                          )}

                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <MapPin size={18} className="text-gray-400 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Partenza</p>
                                <p className="font-bold text-gray-800">{day.startPoint}</p>
                              </div>
                            </div>
                            <div className="pl-[27px] text-vci-yellow">
                              <ArrowRight size={18} />
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin size={18} className="text-vci-yellow shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Arrivo</p>
                                <p className="font-bold text-gray-800">{day.endPoint}</p>
                              </div>
                            </div>
                          </div>

                          {day.associationsMet.length > 0 && (
                            <div className="mt-6 pt-5 border-t border-gray-100">
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Realtà Incontrate</h4>
                              <div className="flex flex-wrap gap-2">
                                {day.associationsMet.map(assocId => (
                                  <span key={assocId} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                    {getAssociationName(assocId)}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {day.gpxUrl && (
                            <div className="mt-6 pt-5 border-t border-gray-100">
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                <Map size={14} /> Mappa Tappa
                              </h4>
                              <a href={day.gpxUrl} target="_blank" rel="noopener noreferrer" className="text-vci-yellow font-bold flex items-center gap-2 hover:underline">
                                Apri Profilo Altimetrico <ExternalLink size={16} />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </Section>
    </>
  );
};
