
export interface Team {
  id: string;
  name: string;
  type: 'Settimanale' | 'Mensile' | 'Annuale' | 'Dinamico';
  description: string;
  role: string;
}

export interface MapPoint {
  id: string;
  name: string;
  code: string; // e.g., "VI", "VR"
  location: { x: number; y: number; label: string }; // Coordinates for the SVG map
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
  status: 'past' | 'future';
  googleFormUrl?: string; // If provided, "Partecipa" button is active
  content?: {
    type: 'text' | 'image';
    value: string;
  }[];
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