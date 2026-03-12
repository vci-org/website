import React, { useState } from 'react';
import { PageHeader, Section } from '../components/Shared';
import { PROJECTS } from '../data/projects';
import type { Project } from '../types';
import { X, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <PageHeader title="Progetti" subtitle="Le nostre iniziative a lungo termine." />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-vci-green mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <Link 
                    to="/partecipa" 
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-center items-center gap-2 bg-vci-green text-white font-bold py-3 px-4 rounded-xl hover:bg-vci-lightGreen transition-colors"
                  >
                    Partecipa <ArrowRight size={18} />
                  </Link>
                  <a 
                    href="https://instagram.com/venetocomunitaitinerante" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-center items-center gap-2 border border-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Instagram size={18} /> @venetocomunitaitinerante
                  </a>
                  <button className="mt-2 text-vci-blue font-bold text-sm hover:underline uppercase tracking-wider self-center">
                    Scopri di più
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <X size={24} className="text-gray-700"/>
            </button>
            <div className="relative h-64 sm:h-80 w-full">
              {selectedProject.imageUrl && (
                 <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover"/>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white">{selectedProject.title}</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="lead text-xl text-gray-800 font-medium mb-6">
                  {selectedProject.description}
                </p>
                <p className="whitespace-pre-line leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
                {selectedProject.partners && selectedProject.partners.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-vci-green mb-4">Partner Coinvolti</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.partners.map(partner => (
                        <span key={partner} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
