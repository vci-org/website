import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Section } from '../components/Shared';
import { CalendarDays, ExternalLink, Mail, MapPin } from 'lucide-react';
import { SiInstagram } from '@icons-pack/react-simple-icons';
import { PROJECTS } from '../data/projects';

export const Participate: React.FC = () => {
  const ecocamp2026 = PROJECTS.find(project => project.id === 'ecocamp-trieste-2026');

  return (
    <>
      <PageHeader
        title="Partecipa"
        subtitle="Il cammino si fa insieme. Scegli come vuoi contribuire."
      />

      <Section>
        {ecocamp2026 && (
          <article className="max-w-5xl mx-auto mb-12 overflow-hidden rounded-3xl bg-white shadow-xl border border-vci-yellow/20">
            <div className="grid md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px] md:min-h-full">
                <img
                  src={ecocamp2026.imageUrl}
                  alt={ecocamp2026.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vci-darkBlue/50 to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-vci-yellow mb-3">
                  Iscrizioni aperte
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-vci-darkBlue mb-4">
                  {ecocamp2026.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {ecocamp2026.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-3 rounded-2xl bg-vci-lightYellow/60 px-4 py-3 text-sm font-semibold text-vci-darkBlue">
                    <CalendarDays size={18} className="text-vci-yellow shrink-0" />
                    19-21 giugno
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-vci-blue/10 px-4 py-3 text-sm font-semibold text-vci-darkBlue">
                    <MapPin size={18} className="text-vci-blue shrink-0" />
                    Trieste, Villa Ara
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {ecocamp2026.googleFormUrl && (
                    <a
                      href={ecocamp2026.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 bg-vci-yellow text-white font-bold py-4 px-6 rounded-xl hover:bg-vci-gold transition-colors shadow-md"
                    >
                      Iscriviti <ExternalLink size={18} />
                    </a>
                  )}
                  <Link
                    to={`/progetti/${ecocamp2026.id}`}
                    className="inline-flex justify-center items-center gap-2 border-2 border-vci-darkBlue text-vci-darkBlue font-bold py-4 px-6 rounded-xl hover:bg-vci-darkBlue hover:text-white transition-colors"
                  >
                    Leggi il programma
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

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
              <SiInstagram size={20} /> Contattaci su Instagram
            </a>
          </div>
        </div>
      </Section >
    </>
  );
};
