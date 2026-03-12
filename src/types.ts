export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  distance: string;
  difficulty: 'Facile' | 'Medio' | 'Impegnativo';
  description: string;
  partnerAssociation?: string;
  imageUrl: string;
}

export interface Team {
  id: string;
  name: string;
  type: 'Settimanale' | 'Mensile' | 'Annuale' | 'Dinamico';
  description: string;
  role: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  location: { x: number; y: number; label: string }; // Coordinates for the SVG map
  website?: string;
  logoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Association {
  id: string;
  name: string;
  category: string;
  locationLabel: string;
  website: string;
  socials: string;
  edition: number | string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string;
  partners?: string[];
}

export interface ArchiveEdition {
  id: string;
  year: number;
  duration: string; // e.g. "3 weeks", "1 week"
  title: string;
  description: string;
  days: {
    dayNumber: number;
    startPoint: string;
    endPoint: string;
    difficulty: string;
    associationsMet: string[];
    gpxUrl?: string; // For komoot or gpx iframe/link
  }[];
}