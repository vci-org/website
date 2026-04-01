import React from 'react';
import { PageHeader, Section, ProjectCard } from '../components/Shared';
import { PROJECTS } from '../data/projects';
import { Instagram } from 'lucide-react';

export const Projects: React.FC = () => {
  const futureProjects = PROJECTS.filter(p => p.status === 'future');
  const pastProjects = PROJECTS.filter(p => p.status === 'past');

  return (
    <>
      <PageHeader title="Progetti" subtitle="Le nostre iniziative a lungo termine, passate e future." />
      
      {/* Future Projects Section */}
      <Section bg="white">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-serif font-bold text-vci-darkBlue">In Programmazione</h2>
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

