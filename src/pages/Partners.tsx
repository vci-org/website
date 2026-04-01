import React, { useState, useMemo } from 'react';
import { PageHeader, Section } from '../components/Shared';
import { ASSOCIATIONS } from '../data/associations';
import type { Association } from '../types';
import { MapPin, ExternalLink, Search, X, Leaf, Wheat, HeartHandshake, Palette, Users } from 'lucide-react';
import { PARTNERS } from '../constants';

const getCategoryIcon = (category: string) => {
  if (!category) return <Users size={20} className="text-vci-blue" />;
  const cat = category.toLowerCase();
  if (cat.includes('ambient') || cat.includes('natur') || cat.includes('eco') || cat.includes('verde') || cat.includes('animal')) return <Leaf size={20} className="text-vci-yellow" />;
  if (cat.includes('agricol') || cat.includes('fattoria') || cat.includes('orto') || cat.includes('vino')) return <Wheat size={20} className="text-amber-600" />;
  if (cat.includes('social') || cat.includes('educazion') || cat.includes('scuola') || cat.includes('accoglienza') || cat.includes('donna')) return <HeartHandshake size={20} className="text-rose-500" />;
  if (cat.includes('cultur') || cat.includes('festival') || cat.includes('arte') || cat.includes('musica')) return <Palette size={20} className="text-purple-500" />;
  return <Users size={20} className="text-vci-blue" />;
};

import { PROVINCE_PATHS } from '../data/provincePaths';

const VenetoMap: React.FC<{
  selectedProvince: string | null;
  onSelectProvince: (p: string | null) => void;
  associations: Association[];
}> = ({ selectedProvince, onSelectProvince, associations }) => {

  const getAssocCount = (code: string) => {
    return associations.filter(a => a.locationLabel.toLowerCase().includes(`(${code.toLowerCase()})`)).length;
  };

  // Map province codes to the keys in the PROVINCE_PATHS object
  const codeToKey: Record<string, string> = {
    'BL': 'Belluno',
    'RO': 'Rovigo',
    'TV': 'Treviso',
    'VR': 'Verona',
    'VI': 'Vicenza',
    'PD': 'Padova',
    'VE': 'Venezia'
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square bg-[#f0f4f8] rounded-[3rem] border border-blue-200/30 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] mb-16 px-4 py-8">
      {/* Geographical Context */}
      <div className="absolute top-1/2 left-8 text-[12px] font-black text-blue-200 uppercase tracking-[0.4em] transform rotate-90 select-none -translate-y-1/2">
        Lago di Garda
      </div>
      <div className="absolute bottom-24 right-12 text-[12px] font-black text-blue-300 uppercase tracking-[0.4em] transform -rotate-12 select-none">
        Mar Adriatico
      </div>

      <svg viewBox="0 0 3346 3385" className="w-full h-full drop-shadow-2xl">
        <defs>
          <filter id="realGlow" filterUnits="userSpaceOnUse" x="0" y="0" width="3346" height="3385">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Provinces */}
        {PARTNERS.map(p => {
          const pathKey = codeToKey[p.code];
          const provData = PROVINCE_PATHS[pathKey];
          const isSelected = selectedProvince === p.location.label;

          if (!provData) return null;

          return (
            <path
              key={p.id}
              d={provData.d}
              transform={provData.transform}
              onClick={() => onSelectProvince(isSelected ? null : p.location.label)}
              className={`cursor-pointer transition-all duration-500 stroke-blue-700/10 stroke-[2] outline-none ${isSelected ? 'fill-vci-yellow' : 'fill-white hover:fill-blue-50'
                }`}
              style={{
                filter: isSelected ? 'url(#realGlow)' : 'none',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          );
        })}
      </svg>

      {/* Floating Labels Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTNERS.map(p => {
          const isSelected = selectedProvince === p.location.label;
          const count = getAssocCount(p.code);

          return (
            <button
              key={p.id}
              onClick={() => onSelectProvince(isSelected ? null : p.location.label)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-500 flex flex-col items-center group rounded-full outline-none focus:outline-none focus:ring-0
                ${isSelected ? 'z-20 scale-110' : 'z-10 hover:scale-105'}
              `}
              style={{ left: `${p.location.x}%`, top: `${p.location.y}%`, WebkitTapHighlightColor: 'transparent' }}
            >
              {count > 0 && (
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black mb-1.5 shadow-sm transition-colors border
                  ${isSelected ? 'bg-vci-darkBlue text-white border-vci-darkBlue' : 'bg-white text-vci-yellow border-vci-yellow'}
                `}>
                  {count} {count === 1 ? 'REALTÀ' : 'REALTÀ'}
                </span>
              )}

              <div className={`px-5 py-2.5 rounded-full font-bold text-sm shadow-xl backdrop-blur-md transition-all border
                ${isSelected
                  ? 'bg-vci-darkBlue text-white border-vci-darkBlue ring-8 ring-vci-yellow/20'
                  : 'bg-white/90 text-vci-darkBlue border-white group-hover:bg-vci-yellow group-hover:text-white group-hover:border-vci-yellow'
                }
              `}>
                {p.location.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};


export const Partners: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssoc, setSelectedAssoc] = useState<Association | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return ASSOCIATIONS.filter(a => {
      const matchesSearch =
        a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.locationLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.category.toLowerCase().includes(searchTerm.toLowerCase());

      if (!selectedProvince) return matchesSearch;

      const partner = PARTNERS.find(p => p.location.label === selectedProvince);
      if (!partner) return matchesSearch;

      const provinceCode = `(${partner.code})`;
      const matchesProvince = a.locationLabel.includes(provinceCode);

      return matchesSearch && matchesProvince;
    });
  }, [searchTerm, selectedProvince]);

  return (
    <>
      <PageHeader
        title="Rete Associativa"
        subtitle="Le realtà con cui collaboriamo per rendere il Veneto più vivo."
      />

      <Section>
        <VenetoMap
          selectedProvince={selectedProvince}
          onSelectProvince={setSelectedProvince}
          associations={ASSOCIATIONS}
        />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold font-serif text-vci-darkBlue">
                {selectedProvince ? `Associazioni a ${selectedProvince}` : 'Tutte le Associazioni'}
              </h2>
              {selectedProvince && (
                <button
                  onClick={() => setSelectedProvince(null)}
                  className="text-vci-yellow text-sm font-bold border-b border-vci-yellow"
                >
                  Mostra tutte
                </button>
              )}
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cerca per nome, località o categoria..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-vci-yellow focus:ring-1 focus:ring-vci-yellow transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              Nessuna associazione trovata per questa ricerca.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(assoc => (
                <div
                  key={assoc.id}
                  onClick={() => setSelectedAssoc(assoc)}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg hover:border-vci-yellow/30 transition-all flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                      {getCategoryIcon(assoc.category)}
                    </div>
                    {assoc.category && (
                      <span className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-right">
                        {assoc.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{assoc.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-auto pt-4">
                    <MapPin size={14} /> {assoc.locationLabel}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* DETAIL MODAL */}
      {selectedAssoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-8 md:p-12">
            <button
              onClick={() => setSelectedAssoc(null)}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <X size={24} className="text-gray-700" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                {getCategoryIcon(selectedAssoc.category)}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-vci-darkBlue">{selectedAssoc.name}</h2>
                <p className="text-gray-500 flex items-center gap-1 text-lg mt-1">
                  <MapPin size={18} /> {selectedAssoc.locationLabel}
                </p>
              </div>
            </div>

            <div className="my-8">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Categoria</h4>
              <p className="text-lg text-gray-800 font-medium">
                {selectedAssoc.category || 'Non specificata'}
              </p>
            </div>

            <div className="my-8">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Edizione VCI in cui ci siamo incontrati</h4>
              <p className="text-lg text-gray-800 font-medium">
                Edizione {selectedAssoc.edition}
              </p>
            </div>

            {(selectedAssoc.website || selectedAssoc.socials) && (
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-vci-yellow mb-4">Contatti & Info</h3>
                <div className="space-y-4">
                  {selectedAssoc.website && (
                    <a href={selectedAssoc.website.startsWith('http') ? selectedAssoc.website : `https://${selectedAssoc.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-vci-blue font-bold hover:underline break-all">
                      <ExternalLink size={20} className="shrink-0" /> {selectedAssoc.website}
                    </a>
                  )}
                  {selectedAssoc.socials && (
                    <div className="text-gray-600 bg-gray-50 p-4 rounded-xl mt-4">
                      <p className="text-sm break-words whitespace-pre-wrap">{selectedAssoc.socials}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <p className="text-xs text-center text-gray-400 mt-12 mb-0">
              * Non mostriamo email o numeri di telefono per motivi di privacy.
            </p>
          </div>
        </div>
      )}
    </>
  );
};