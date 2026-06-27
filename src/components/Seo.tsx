import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const SITE_URL = 'https://venetocomunitaitinerante.it';
const DEFAULT_TITLE = 'Veneto Comunità Itinerante | Cammini, Ecocamp e rete associativa';
const DEFAULT_DESCRIPTION =
  "Veneto Comunità Itinerante crea connessioni tra persone, territori e associazioni attraverso cammini, Ecocamp e iniziative per l'ambiente e la giustizia sociale in Veneto.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

type SeoPayload = {
  title: string;
  description: string;
  url: string;
  image: string;
  type: 'website' | 'article';
  structuredData: Record<string, unknown>;
};

const setMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const toAbsoluteUrl = (path?: string) => {
  if (!path) {
    return DEFAULT_IMAGE;
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

const getProjectIdFromPathname = (pathname: string) => {
  const match = pathname.match(/^\/progetti\/([^/]+)$/);
  return match?.[1];
};

const buildWebPageSchema = ({
  title,
  description,
  url
}: Pick<SeoPayload, 'title' | 'description' | 'url'>) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url
});

const buildSeoPayload = (pathname: string): SeoPayload => {
  if (pathname === '/chi-siamo') {
    const title = 'Chi Siamo | Veneto Comunità Itinerante';
    const description =
      'Scopri la storia, la visione e i valori di Veneto Comunità Itinerante, il progetto nato per attraversare il Veneto a passo lento e costruire relazioni.';
    const url = `${SITE_URL}/chi-siamo`;
    return {
      title,
      description,
      url,
      image: DEFAULT_IMAGE,
      type: 'website',
      structuredData: buildWebPageSchema({ title, description, url }),
    };
  }

  if (pathname === '/progetti') {
    const title = 'Progetti e Cammini | Veneto Comunità Itinerante';
    const description =
      'Esplora i cammini, gli Ecocamp e le iniziative di Veneto Comunità Itinerante: eventi futuri, archivio progetti e modi per partecipare.';
    const url = `${SITE_URL}/progetti`;
    return {
      title,
      description,
      url,
      image: DEFAULT_IMAGE,
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        description,
        url,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Veneto Comunità Itinerante',
          url: SITE_URL
        }
      },
    };
  }

  const projectId = getProjectIdFromPathname(pathname);
  if (pathname.startsWith('/progetti/') && projectId) {
    const project = PROJECTS.find((entry) => entry.id === projectId);
    if (project) {
      const title = `${project.title} | Veneto Comunità Itinerante`;
      const description = project.fullDescription || project.description;
      const url = `${SITE_URL}/progetti/${project.id}`;
      const image = toAbsoluteUrl(project.imageUrl);
      return {
        title,
        description,
        url,
        image,
        type: 'article',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: project.title,
          description,
          image,
          url,
          inLanguage: 'it-IT',
          author: {
            '@type': 'Organization',
            name: 'Veneto Comunità Itinerante',
            url: SITE_URL
          },
          publisher: {
            '@type': 'Organization',
            name: 'Veneto Comunità Itinerante',
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/favicon.png`
            }
          },
          about: project.partners && project.partners.length > 0 ? project.partners : ['Veneto', 'cammini', 'Ecocamp'],
          mainEntityOfPage: url
        },
      };
    }
  }

  if (pathname === '/associazioni') {
    const title = 'Rete Associativa | Veneto Comunità Itinerante';
    const description =
      'Conosci le associazioni e le realtà locali che collaborano con Veneto Comunità Itinerante nelle diverse province del Veneto.';
    const url = `${SITE_URL}/associazioni`;
    return {
      title,
      description,
      url,
      image: DEFAULT_IMAGE,
      type: 'website',
      structuredData: buildWebPageSchema({ title, description, url }),
    };
  }

  if (pathname === '/diario') {
    const title = 'Diario Itinerante | Veneto Comunità Itinerante';
    const description =
      'Ripercorri l’archivio dei cammini di Veneto Comunità Itinerante: tappe, incontri, territori attraversati e mappe delle edizioni passate.';
    const url = `${SITE_URL}/diario`;
    return {
      title,
      description,
      url,
      image: DEFAULT_IMAGE,
      type: 'website',
      structuredData: buildWebPageSchema({ title, description, url }),
    };
  }

  if (pathname === '/partecipa') {
    const title = 'Partecipa | Veneto Comunità Itinerante';
    const description =
      'Scopri come partecipare ai cammini, proporre idee o unirti all’organizzazione di Veneto Comunità Itinerante.';
    const url = `${SITE_URL}/partecipa`;
    return {
      title,
      description,
      url,
      image: DEFAULT_IMAGE,
      type: 'website',
      structuredData: buildWebPageSchema({ title, description, url }),
    };
  }

  if (pathname === '/info') {
    const title = 'Info Pratiche e FAQ | Veneto Comunità Itinerante';
    const description =
      'Trova risposte alle domande frequenti su partecipazione, cammini, materiali utili e organizzazione delle attività di Veneto Comunità Itinerante.';
    const url = `${SITE_URL}/info`;
    return {
      title,
      description,
      url,
      image: DEFAULT_IMAGE,
      type: 'website',
      structuredData: buildWebPageSchema({ title, description, url }),
    };
  }

  const url = `${SITE_URL}/`;
  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url,
    image: DEFAULT_IMAGE,
    type: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Veneto Comunità Itinerante',
      description: DEFAULT_DESCRIPTION,
      url,
      inLanguage: 'it-IT'
    },
  };
};

export const Seo = () => {
  const location = useLocation();

  useEffect(() => {
    const { title, description, url, image, type, structuredData } = buildSeoPayload(location.pathname);

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    setMeta('link[rel="canonical"]', 'href', url);
    let structuredDataTag = document.head.querySelector<HTMLScriptElement>('script[data-vci-seo="structured-data"]');
    if (!structuredDataTag) {
      structuredDataTag = document.createElement('script');
      structuredDataTag.type = 'application/ld+json';
      structuredDataTag.dataset.vciSeo = 'structured-data';
      document.head.appendChild(structuredDataTag);
    }
    structuredDataTag.textContent = JSON.stringify(structuredData);
  }, [location.pathname]);

  return null;
};
