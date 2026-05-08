import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader, Section } from '../components/Shared';
import { PROJECTS } from '../data/projects';
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, ExternalLink, HeartHandshake, Leaf, Mountain, Sprout, Sun } from 'lucide-react';
import type { Project } from '../types';

type ProjectGallery = NonNullable<Project['gallery']>;

const textSectionStyles = [
  {
    icon: Sprout,
    eyebrow: 'Origine',
    shell: 'bg-white border-vci-yellow/20',
    iconWrap: 'bg-vci-yellow/10 text-vci-yellow',
    eyebrowText: 'text-vci-yellow',
    titleText: 'text-vci-darkBlue',
    accent: 'bg-vci-yellow'
  },
  {
    icon: Leaf,
    eyebrow: 'Azione',
    shell: 'bg-vci-blue/10 border-vci-blue/15',
    iconWrap: 'bg-white text-vci-blue',
    eyebrowText: 'text-vci-blue',
    titleText: 'text-vci-darkBlue',
    accent: 'bg-vci-blue'
  },
  {
    icon: Mountain,
    eyebrow: 'Scoperta',
    shell: 'bg-vci-lightYellow/50 border-vci-yellow/20',
    iconWrap: 'bg-white text-vci-gold',
    eyebrowText: 'text-vci-gold',
    titleText: 'text-vci-darkBlue',
    accent: 'bg-vci-gold'
  },
  {
    icon: Sun,
    eyebrow: 'Cammino',
    shell: 'bg-white border-vci-blue/20',
    iconWrap: 'bg-vci-blue/10 text-vci-blue',
    eyebrowText: 'text-vci-blue',
    titleText: 'text-vci-darkBlue',
    accent: 'bg-vci-blue'
  },
  {
    icon: HeartHandshake,
    eyebrow: 'Comunità',
    shell: 'bg-vci-yellow/10 border-vci-yellow/25',
    iconWrap: 'bg-white text-vci-yellow',
    eyebrowText: 'text-vci-yellow',
    titleText: 'text-vci-darkBlue',
    accent: 'bg-vci-yellow'
  }
];

const ProjectTextSection: React.FC<{ value: string; index: number }> = ({ value, index }) => {
  const [maybeTitle, ...bodyParts] = value.split('\n');
  const hasTitle = bodyParts.length > 0;
  const style = textSectionStyles[index % textSectionStyles.length];
  const Icon = style.icon;
  const body = hasTitle ? bodyParts.join('\n') : value;

  if (!hasTitle) {
    return (
      <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          {body}
        </p>
      </div>
    );
  }

  return (
    <article className={`relative overflow-hidden rounded-3xl border p-7 md:p-10 shadow-sm ${style.shell}`}>
      <div className={`absolute left-0 top-8 h-20 w-1.5 rounded-r-full ${style.accent}`} aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${style.iconWrap}`}>
          <Icon size={28} />
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${style.eyebrowText}`}>
            {style.eyebrow}
          </p>
          <h3 className={`text-2xl md:text-3xl font-serif font-bold leading-tight mb-5 ${style.titleText}`}>
            {maybeTitle}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed font-light whitespace-pre-line">
            {body}
          </p>
        </div>
      </div>
    </article>
  );
};

const PhotoCarousel: React.FC<{ title: string; photos: ProjectGallery }> = ({ title, photos }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth'
    });
  };

  return (
    <section className="mt-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-vci-yellow font-bold uppercase tracking-widest text-xs mb-3">
            <Camera size={16} />
            Gallery
          </div>
          <h2 className="text-3xl font-serif font-bold text-vci-darkBlue">Momenti da {title}</h2>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-vci-yellow hover:bg-vci-beige transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vci-yellow"
            aria-label="Foto precedente"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-vci-yellow hover:bg-vci-beige transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vci-yellow"
            aria-label="Foto successiva"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-6 vci-gallery-scrollbar"
      >
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className="snap-start shrink-0 w-[82vw] sm:w-[420px] md:w-[520px] overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-100"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-[360px] md:h-[430px] w-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </figure>
        ))}
      </div>

      <div className="md:hidden flex items-center justify-center gap-2 mt-1 text-gray-400">
        <ChevronLeft size={16} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Scorri le foto</span>
        <ChevronRight size={16} />
      </div>
    </section>
  );
};

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
                  <ProjectTextSection value={item.value} index={index} />
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

          {project.gallery && project.gallery.length > 0 && (
            <PhotoCarousel title={project.title} photos={project.gallery} />
          )}

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

      <style dangerouslySetInnerHTML={{ __html: `
        .vci-gallery-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .vci-gallery-scrollbar::-webkit-scrollbar-track {
          background: #FEF3C7;
          border-radius: 10px;
        }
        .vci-gallery-scrollbar::-webkit-scrollbar-thumb {
          background: #F59E0B;
          border-radius: 10px;
        }
        .vci-gallery-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D97706;
        }
      `}} />
    </div>
  );
};
