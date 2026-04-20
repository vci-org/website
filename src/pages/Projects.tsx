import React from 'react';
import { PageHeader, Section, ProjectCard } from '../components/Shared';
import { PROJECTS } from '../data/projects';
import { Instagram, Map as MapIcon, Users } from 'lucide-react';

export const Projects: React.FC = () => {
  const futureProjects = PROJECTS.filter(p => p.status === 'future');
  const pastProjects = PROJECTS.filter(p => p.status === 'past');

  return (
    <>
      <PageHeader title="Progetti" subtitle="Le nostre iniziative a lungo termine, i cammini e gli Ecocamp." />
      
      {/* --- FORMATS DESCRIPTION --- */}
      <Section bg="beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-vci-darkBlue mb-6">Le nostre anime</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              VCI non è solo un evento, è un modo di vivere il territorio. <br className="hidden md:block" />
              Agiamo attraverso due formati che si nutrono a vicenda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Il Cammino */}
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-vci-yellow/10 flex flex-col h-full transform hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-vci-yellow/10 rounded-2xl flex items-center justify-center text-vci-yellow mb-8">
                <MapIcon size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-vci-darkBlue mb-6">Il Cammino</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow">
                È il nostro modo di abitare il movimento. Da anni attraversiamo il Veneto a passo lento, ricucendo territori e storie. Camminare per noi è uno strumento di indagine: significa ascoltare il respiro delle vallate, osservare le ferite e le bellezze della nostra regione, e costruire una comunità che si muove insieme. 
              </p>
              <p className="text-vci-yellow font-medium italic">
                Ogni passo è un gesto di riappropriazione del territorio e del tempo.
              </p>
            </div>

            {/* Ecocamp */}
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-vci-blue/10 flex flex-col h-full transform hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-vci-blue/10 rounded-2xl flex items-center justify-center text-vci-blue mb-8">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-vci-darkBlue mb-6">Ecocamp</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow">
                È il momento in cui il cammino rallenta fino alla sosta, ma l’azione non si interrompe. Un tempo sospeso in cui la presenza si fa densa e l'incontro diventa gesto concreto. Nasce per agire al fianco delle realtà locali che custodiscono il territorio, farsi <span className="font-bold text-vci-blue underline decoration-vci-yellow/30 underline-offset-4">ECO</span> del loro impegno e amplificare il cambiamento.
              </p>
              <p className="text-vci-blue font-medium italic">
                Fermarsi per costruire, incontrare per prendersi cura, agire per lasciare un segno condiviso.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Future Projects Section */}
      <Section bg="white">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-serif font-bold text-vci-darkBlue">Eventi in Programma</h2>
          <div className="h-px bg-vci-yellow/20 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {futureProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Past Projects Section */}
      <Section bg="beige">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-serif font-bold text-vci-darkBlue">Archivio Progetti</h2>
          <div className="h-px bg-vci-yellow/20 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastProjects.map(project => (
            <ProjectCard key={project.id} project={project} isCompact />
          ))}
        </div>
      </Section>

      {/* Social Call to Action */}
      <Section bg="blue" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-vci-blue mb-4">Resta sempre aggiornato</h3>
          <p className="text-gray-600 mb-8">Seguici su Instagram per vedere i dietro le quinte e gli aggiornamenti in tempo reale sui nostri progetti.</p>
          <a 
            href="https://instagram.com/venetocomunitaitinerante" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vci-blue text-white font-bold py-4 px-8 rounded-2xl hover:bg-vci-darkBlue transition-all shadow-lg hover:shadow-vci-blue/20"
          >
            <Instagram size={20} /> @venetocomunitaitinerante
          </a>
        </div>
      </Section>
    </>
  );
};

