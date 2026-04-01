import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader, Section } from '../components/Shared';
import { PROJECTS } from '../data/projects';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/progetti" replace />;
  }

  return (
    <div className="bg-vci-beige min-h-screen pb-20">
      <PageHeader 
        title={project.title} 
        subtitle={project.description}
        bgImage={project.imageUrl}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/progetti" 
            className="inline-flex items-center gap-2 text-vci-blue font-bold mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft size={20} /> Torna ai Progetti
          </Link>

          {/* Intro Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-vci-darkBlue mb-6">Di cosa si tratta</h2>
            <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line mb-8">
              {project.fullDescription || project.description}
            </p>

            {/* Participation Button Logic */}
            {project.status === 'future' && (
              <div className="mt-8 p-6 bg-vci-yellow/10 rounded-2xl border border-vci-yellow/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-vci-yellow mb-1">Vuoi unirti a noi?</h3>
                  <p className="text-gray-600 text-sm">Partecipa attivamente a questa iniziativa.</p>
                </div>
                {project.googleFormUrl ? (
                  <a 
                    href={project.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-vci-yellow text-white font-bold py-4 px-8 rounded-xl hover:bg-vci-gold transition-all shadow-lg hover:shadow-vci-yellow/20"
                  >
                    Partecipa Ora <ExternalLink size={18} />
                  </a>
                ) : (
                  <span className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-200 text-gray-500 font-bold py-4 px-8 rounded-xl cursor-not-allowed">
                    Presto disponibile
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Structured Content Sections */}
          <div className="space-y-16">
            {project.content?.map((item, index) => (
              <div key={index} className="animate-fade-in">
                {item.type === 'text' ? (
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p>{item.value}</p>
                  </div>
                ) : (
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={item.value} 
                      alt={`${project.title} gallery ${index}`} 
                      className="w-full h-auto object-cover max-h-[600px]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Partners Section (if any) */}
          {project.partners && project.partners.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-vci-yellow mb-8">Partner del Progetto</h3>
              <div className="flex flex-wrap gap-4">
                {project.partners.map(partner => (
                  <span 
                    key={partner} 
                    className="px-6 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-bold shadow-sm"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};
