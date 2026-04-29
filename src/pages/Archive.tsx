import React, { useState, useMemo } from 'react';
import { PageHeader, Section } from '../components/Shared';
import { ARCHIVE_EDITIONS } from '../data/archive';
import { ASSOCIATIONS } from '../data/associations';
import type { ArchiveEdition } from '../types';
import { ArrowRight, CalendarDays, ExternalLink, Route, Filter, ChevronRight, ChevronLeft } from 'lucide-react';

interface StageRailProps {
  days: ArchiveEdition['days'];
  getAssociationName: (id: string) => string;
}

const StageRail: React.FC<StageRailProps> = ({ days, getAssociationName }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group/rail">
      {/* Scroll Buttons - Hidden on mobile, visible on group hover on desktop */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-vci-yellow opacity-0 group-hover/rail:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vci-yellow transition-opacity hidden md:flex hover:bg-vci-beige"
        aria-label="Precedente"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-vci-yellow opacity-0 group-hover/rail:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vci-yellow transition-opacity hidden md:flex hover:bg-vci-beige"
        aria-label="Successivo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Decorative Progress Line */}
      <div className="absolute left-0 right-0 top-6 h-0.5 bg-vci-lightYellow z-0" aria-hidden="true" />

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-8 pt-2 vci-rail-scrollbar"
      >
        {days.map((day) => (
          <div key={day.dayNumber} className="relative min-w-[280px] sm:min-w-[320px] snap-start z-10 flex flex-col">
            {/* Day Marker */}
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border-4 border-vci-yellow text-vci-darkBlue text-sm font-bold flex items-center justify-center shadow-sm">
                {day.dayNumber}
              </div>
              <div className="bg-white px-3 py-1 rounded-full border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest shadow-sm">
                {day.date}
              </div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full">
              {day.weekLabel && (
                <p className="text-[10px] font-bold text-vci-gold uppercase tracking-[0.2em] mb-4">
                  {day.weekLabel}
                </p>
              )}

              <div className="flex-grow space-y-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Partenza</p>
                  <p className="font-bold text-gray-800 leading-tight">{day.startPoint}</p>
                </div>

                <div className="flex items-center gap-3 py-1">
                  <div className="h-px bg-vci-lightYellow flex-grow" />
                  <ArrowRight size={16} className="text-vci-yellow" />
                  <div className="h-px bg-vci-lightYellow flex-grow" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Arrivo</p>
                  <p className="font-bold text-vci-darkBlue leading-tight">{day.endPoint}</p>
                </div>

                {day.associationsMet.length > 0 && (
                  <div className="pt-5 border-t border-gray-50">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Realtà Incontrate</p>
                    <div className="flex flex-wrap gap-1.5">
                      {day.associationsMet.map((assocId: string) => (
                        <span key={assocId} className="px-2 py-0.5 bg-gray-50 text-gray-600 rounded text-[11px] font-medium border border-gray-100">
                          {getAssociationName(assocId)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {day.gpxUrl && (
                <div className="mt-6 pt-4 border-t border-gray-50">
                  <a
                    href={day.gpxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vci-yellow text-xs font-bold flex items-center justify-between group/link"
                  >
                    <span>Apri Mappa</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* End Marker */}
        <div className="min-w-[100px] flex items-center justify-center pt-16">
          <div className="w-12 h-12 rounded-full bg-vci-beige border-2 border-dashed border-vci-lightYellow flex items-center justify-center">
            <Route size={20} className="text-vci-lightYellow" />
          </div>
        </div>
      </div>

      {/* Hint for mobile */}
      <div className="md:hidden flex items-center justify-center gap-2 mt-2 text-gray-400">
        <ChevronLeft size={16} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Scorri le tappe</span>
        <ChevronRight size={16} />
      </div>
    </div>
  );
};

export const Diario: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  // Helper to find association name by ID
  const getAssociationName = (id: string) => {
    const assoc = ASSOCIATIONS.find(a => a.id === id);
    return assoc ? assoc.name : id;
  };

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(ARCHIVE_EDITIONS.map(e => e.year)));
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const filteredEditions = useMemo(() => {
    const editions = [...ARCHIVE_EDITIONS].reverse();
    if (selectedYear === 'all') return editions;
    return editions.filter(e => e.year === selectedYear);
  }, [selectedYear]);

  return (
    <>
      <PageHeader
        title="Diario Itinerante"
        subtitle="L'archivio cronologico dei nostri cammini dal 2022 ad oggi."
      />

      <Section className="max-w-6xl mx-auto pt-8">
        {/* Intro & Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              Dal 2022 attraversiamo il Veneto a passo lento. Le prime due edizioni (2022, 2023) ci hanno visti in cammino per <strong>3 settimane</strong> consecutive, mentre dalle successive abbiamo optato per ritmi di <strong>1 settimana</strong>.
            </p>
          </div>

          <div className="shrink-0">
            <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-1">
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedYear === 'all'
                    ? 'bg-vci-yellow text-white shadow-md'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                Tutti
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    selectedYear === year
                      ? 'bg-vci-yellow text-white shadow-md'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editions List */}
        <div className="space-y-32 pb-24">
          {filteredEditions.map((edition) => {
            const firstDay = edition.days[0];
            const lastDay = edition.days[edition.days.length - 1];
            const routeLabel = firstDay && lastDay ? `${firstDay.startPoint} → ${lastDay.endPoint}` : '';

            return (
              <article key={edition.id} className="relative">
                {/* Edition Header */}
                <div className="border-b border-gray-100 pb-12 mb-10">
                  <div className="grid gap-8 md:grid-cols-[1fr_auto] items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-vci-lightYellow text-vci-gold text-xs font-bold rounded-full tracking-widest uppercase">
                          {edition.year}
                        </span>
                        <span className="text-gray-400 text-sm font-medium">
                          {edition.duration} • {edition.days.length} tappe
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold font-serif text-vci-darkBlue mb-4 leading-tight">{edition.title}</h2>
                      <p className="text-gray-600 text-lg italic max-w-3xl leading-relaxed">"{edition.description}"</p>
                    </div>

                    <div className="bg-vci-beige/50 rounded-2xl p-6 border border-vci-lightYellow min-w-[280px]">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-vci-gold mb-3">Riepilogo Percorso</p>
                      <div className="flex items-start gap-3 mb-4">
                        <Route size={20} className="text-vci-yellow shrink-0 mt-1" />
                        <p className="text-lg font-bold text-vci-darkBlue">{routeLabel}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CalendarDays size={16} className="text-vci-yellow" />
                        <span>{firstDay?.date} — {lastDay?.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <StageRail days={edition.days} getAssociationName={getAssociationName} />
              </article>
            );
          })}

          {filteredEditions.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100">
              <Filter size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-500 font-medium">Nessuna edizione trovata per l'anno selezionato.</p>
              <button
                onClick={() => setSelectedYear('all')}
                className="mt-4 text-vci-yellow font-bold hover:underline"
              >
                Mostra tutte le edizioni
              </button>
            </div>
          )}
        </div>
      </Section>

      <style dangerouslySetInnerHTML={{ __html: `
        .vci-rail-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .vci-rail-scrollbar::-webkit-scrollbar-track {
          background: #FEF3C7;
          border-radius: 10px;
        }
        .vci-rail-scrollbar::-webkit-scrollbar-thumb {
          background: #F59E0B;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .vci-rail-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D97706;
        }
        /* Keep it clean on mobile where it's not needed as much */
        @media (max-width: 768px) {
          .vci-rail-scrollbar::-webkit-scrollbar {
            height: 4px;
          }
        }
      `}} />
    </>
  );
};
