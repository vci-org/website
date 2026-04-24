import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const SITE_URL = 'https://venetocomunitaitinerante.it';
const DEFAULT_TITLE = 'Veneto Comunità Itinerante | Cammini, Ecocamp e rete associativa';
const DEFAULT_DESCRIPTION =
  "Veneto Comunità Itinerante crea connessioni tra persone, territori e associazioni attraverso cammini, Ecocamp e iniziative per l'ambiente e la giustizia sociale in Veneto.";

type SeoPayload = {
  title: string;
  description: string;
  url: string;
};

const setMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const buildSeoPayload = (pathname: string, projectId?: string): SeoPayload => {
  if (pathname === '/chi-siamo') {
    return {
      title: 'Chi Siamo | Veneto Comunità Itinerante',
      description:
        'Scopri la storia, la visione e i valori di Veneto Comunità Itinerante, il progetto nato per attraversare il Veneto a passo lento e costruire relazioni.',
      url: `${SITE_URL}/#/chi-siamo`,
    };
  }

  if (pathname === '/progetti') {
    return {
      title: 'Progetti e Cammini | Veneto Comunità Itinerante',
      description:
        'Esplora i cammini, gli Ecocamp e le iniziative di Veneto Comunità Itinerante: eventi futuri, archivio progetti e modi per partecipare.',
      url: `${SITE_URL}/#/progetti`,
    };
  }

  if (pathname.startsWith('/progetti/') && projectId) {
    const project = PROJECTS.find((entry) => entry.id === projectId);
    if (project) {
      return {
        title: `${project.title} | Veneto Comunità Itinerante`,
        description: project.fullDescription || project.description,
        url: `${SITE_URL}/#/progetti/${project.id}`,
      };
    }
  }

  if (pathname === '/associazioni') {
    return {
      title: 'Rete Associativa | Veneto Comunità Itinerante',
      description:
        'Conosci le associazioni e le realtà locali che collaborano con Veneto Comunità Itinerante nelle diverse province del Veneto.',
      url: `${SITE_URL}/#/associazioni`,
    };
  }

  if (pathname === '/diario') {
    return {
      title: 'Diario Itinerante | Veneto Comunità Itinerante',
      description:
        'Ripercorri l’archivio dei cammini di Veneto Comunità Itinerante: tappe, incontri, territori attraversati e mappe delle edizioni passate.',
      url: `${SITE_URL}/#/diario`,
    };
  }

  if (pathname === '/partecipa') {
    return {
      title: 'Partecipa | Veneto Comunità Itinerante',
      description:
        'Scopri come partecipare ai cammini, proporre idee o unirti all’organizzazione di Veneto Comunità Itinerante.',
      url: `${SITE_URL}/#/partecipa`,
    };
  }

  if (pathname === '/info') {
    return {
      title: 'Info Pratiche e FAQ | Veneto Comunità Itinerante',
      description:
        'Trova risposte alle domande frequenti su partecipazione, cammini, materiali utili e organizzazione delle attività di Veneto Comunità Itinerante.',
      url: `${SITE_URL}/#/info`,
    };
  }

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: `${SITE_URL}/`,
  };
};

export const Seo = () => {
  const location = useLocation();
  const { projectId } = useParams();

  useEffect(() => {
    const { title, description, url } = buildSeoPayload(location.pathname, projectId);

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    // Hash-based navigation still has a single real canonical URL on GitHub Pages.
    setMeta('link[rel="canonical"]', 'href', `${SITE_URL}/`);
  }, [location.pathname, projectId]);

  return null;
};
