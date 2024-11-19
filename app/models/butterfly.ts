export interface Butterfly {
    id: number;
    commonName: string;
    scientificName: string;
    description: string;
    habitat: string;
    wingspanRange: string;
    photos: Photo[];
}

export interface Photo {
    url: string;
    contributor: string;
}