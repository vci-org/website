import React from 'react';
import { ArrowRight, Users, ExternalLink } from 'lucide-react';
import type { Project, Team } from '../types';
import { Link } from 'react-router-dom';

// --- Generic Section Wrapper ---
export const Section: React.FC<{ 
  className?: string; 
  children: React.ReactNode; 
  id?: string;
  bg?: 'white' | 'beige' | 'yellow' | 'blue';
}> = ({ className = "", children, id, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    beige: 'bg-vci-beige',
    yellow: 'bg-vci-yellow text-white',
    blue: 'bg-vci-blue/10'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

// --- Project Card ---
export const ProjectCard: React.FC<{ project: Project, isCompact?: boolean }> = ({ project, isCompact }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
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
        
        <div className="flex flex-col gap-4 mt-auto">
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

// --- Team Card ---
export const TeamCard: React.FC<{ team: Team }> = ({ team }) => (
  <div className="bg-vci-beige p-6 rounded-2xl border-l-4 border-vci-yellow hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <h4 className="font-bold text-lg text-vci-yellow">{team.name}</h4>
      <span className="px-2 py-1 bg-vci-yellow/10 text-vci-yellow text-xs rounded-lg font-medium">{team.type}</span>
    </div>
    <p className="text-gray-600 text-sm mb-4">{team.description}</p>
    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
      <Users size={14} />
      <span>Ruolo: {team.role}</span>
    </div>
  </div>
);

// --- Page Title ---
export const PageHeader: React.FC<{ title: string; subtitle?: string; bgImage?: string }> = ({ title, subtitle, bgImage }) => (
  <div className="relative py-20 md:py-32 bg-vci-yellow flex items-center justify-center overflow-hidden">
    {bgImage && (
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="background" className="w-full h-full object-cover opacity-20" />
      </div>
    )}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up">{title}</h1>
      {subtitle && <p className="text-lg text-vci-sand max-w-2xl mx-auto font-light">{subtitle}</p>}
    </div>
  </div>
);
