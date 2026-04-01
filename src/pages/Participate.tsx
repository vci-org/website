import React from 'react';
import { PageHeader, Section } from '../components/Shared';
import { Footprints, Users2, Lightbulb, Mail, Instagram } from 'lucide-react';

export const Participate: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Partecipa"
        subtitle="Il cammino si fa insieme. Scegli come vuoi contribuire."
      />

      <Section>
        {/* --- THREE ACTIONS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="text-center p-8 border rounded-3xl hover:border-vci-yellow hover:bg-vci-lightYellow transition-colors">
          <div className="w-20 h-20 bg-vci-yellow text-white rounded-full mx-auto flex items-center justify-center mb-6">
            <Footprints size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2">Cammina</h3>
          <p className="text-gray-600 text-sm">Partecipa ai nostri eventi come camminatore. Semplice, diretto, essenziale.</p>
        </div>

        <div className="text-center p-8 border rounded-3xl hover:border-vci-blue hover:bg-blue-50 transition-colors">
          <div className="w-20 h-20 bg-vci-blue text-white rounded-full mx-auto flex items-center justify-center mb-6">
            <Users2 size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2">Unisciti al Team</h3>
          <p className="text-gray-600 text-sm">Entra nell'organizzazione. Metti a disposizione le tue competenze.</p>
        </div>

        <div className="text-center p-8 border rounded-3xl hover:border-amber-500 hover:bg-amber-50 transition-colors">
          <div className="w-20 h-20 bg-amber-500 text-white rounded-full mx-auto flex items-center justify-center mb-6">
            <Lightbulb size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2">Proponi</h3>
          <p className="text-gray-600 text-sm">Hai un'idea per un progetto o un nuovo percorso? Parliamone.</p>
        </div>
      </div>

      {/* --- CONTACT LINKS --- */}
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center">
        <h3 className="text-2xl font-serif font-bold mb-4">Contattaci per partecipare</h3>
        <p className="text-gray-600 mb-8">
          Scrivici un'email oppure contattaci in direct su Instagram. Ti risponderemo il prima possibile!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:venetocomunitaitinerante@oltrevia.it"
            className="flex justify-center items-center gap-2 bg-vci-yellow text-white font-bold py-4 px-8 rounded-xl hover:bg-vci-gold transition-colors shadow-md"
          >
            <Mail size={20} /> Invia una Email
          </a>

          <a
            href="https://instagram.com/venetocomunitaitinerante"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity shadow-md"
          >
            <Instagram size={20} /> Contattaci su Instagram
          </a>
        </div>
      </div>
    </Section >
    </>
  );
};