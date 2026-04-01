import React from 'react';
import { PageHeader, Section } from '../components/Shared';
import { PROJECTS } from '../data/projects';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

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

const ProjectCard: React.FC<{ project: Project, isCompact?: boolean }> = ({ project, isCompact }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500">
      <div className={`relative overflow-hidden ${isCompact ? 'h-48' : 'h-64'}`}>
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm ${
            project.status === 'future' ? 'bg-vci-yellow text-white' : 'bg-gray-100 text-gray-500'
          }`}>
            {project.status === 'future' ? 'Futuro' : 'Passato'}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className={`font-serif font-bold text-vci-darkBlue mb-3 ${isCompact ? 'text-xl' : 'text-2xl'}`}>
          {project.title}
        </h3>
        <p className="text-gray-600 mb-8 flex-grow line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-col gap-4">
          {/* Main Action: Detail Page */}
          <Link 
            to={`/progetti/${project.id}`}
            className="flex justify-center items-center gap-2 bg-vci-darkBlue text-white font-bold py-3 px-4 rounded-xl hover:bg-vci-blue transition-colors shadow-md"
          >
            Scopri di più <ArrowRight size={18} />
          </Link>

          {/* Conditional Participation Button */}
          {project.status === 'future' && (
            project.googleFormUrl ? (
              <a 
                href={project.googleFormUrl} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex justify-center items-center gap-2 border-2 border-vci-yellow text-vci-yellow font-bold py-3 px-4 rounded-xl hover:bg-vci-yellow hover:text-white transition-all"
              >
                Partecipa <ExternalLink size={18} />
              </a>
            ) : (
              <div className="flex justify-center items-center gap-2 bg-gray-50 text-gray-400 font-bold py-3 px-4 rounded-xl border border-gray-100 cursor-not-allowed">
                Presto disponibile
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
