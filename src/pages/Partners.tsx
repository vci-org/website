import React, { useState, useMemo } from 'react';
import { PageHeader, Section } from '../components/Shared';
import { ASSOCIATIONS } from '../data/associations';
import type { Association } from '../types';
import { MapPin, ExternalLink, Search, X } from 'lucide-react';
import { PARTNERS } from '../constants';

const VenetoMap: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] bg-blue-50/30 rounded-3xl border border-blue-100 overflow-hidden shadow-inner mb-16">
      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
         <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
         </defs>
         <path 
           d="M30,10 L60,5 L85,20 L95,50 L80,85 L50,95 L20,80 L5,50 L15,25 Z" 
           className="fill-white stroke-vci-green stroke-[0.5]"
           filter="url(#glow)"
         />
         
         {PARTNERS.map(p => (
           <g 
             key={p.id} 
             className="group"
           >
             <circle 
               cx={p.location.x} 
               cy={p.location.y} 
               r={2} 
               className="fill-vci-blue" 
             />
             <text 
                x={p.location.x} 
                y={p.location.y + 5} 
                textAnchor="middle" 
                className="text-[3px] fill-gray-600 font-sans pointer-events-none uppercase tracking-wider"
             >
               {p.location.label}
             </text>
           </g>
         ))}
      </svg>
      <div className="absolute bottom-4 left-4 text-xs text-gray-500 bg-white/90 font-medium px-3 py-2 rounded-lg shadow-sm border border-gray-100">
        Le province del nostro cammino
      </div>
    </div>
  );
};

export const Partners: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssoc, setSelectedAssoc] = useState<Association | null>(null);

  const filtered = useMemo(() => {
    return ASSOCIATIONS.filter(a => 
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.locationLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      <PageHeader 
        title="Rete Associativa" 
        subtitle="Le realtà con cui collaboriamo per rendere il Veneto più vivo." 
      />

      <Section>
        <VenetoMap />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-3xl font-bold font-serif text-vci-darkBlue">Le Nostre Associazioni</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Cerca per nome, località o categoria..." 
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-vci-green focus:ring-1 focus:ring-vci-green transition-all"
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
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg hover:border-vci-green/30 transition-all flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-vci-green shrink-0">
                      🤝
                    </div>
                    {assoc.category && (
                      <span className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-right">
                        {assoc.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{assoc.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-auto pt-4">
                    <MapPin size={14}/> {assoc.locationLabel}
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
              <X size={24} className="text-gray-700"/>
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl shrink-0">
                🌱
              </div>
              <div>
                <h2 className="text-3xl font-bold text-vci-darkBlue">{selectedAssoc.name}</h2>
                <p className="text-gray-500 flex items-center gap-1 text-lg mt-1">
                  <MapPin size={18}/> {selectedAssoc.locationLabel}
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
                <h3 className="text-xl font-bold text-vci-green mb-4">Contatti & Info</h3>
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