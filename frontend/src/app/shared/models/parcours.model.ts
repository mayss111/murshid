import { Lecon } from './lecon.model';

export interface Parcours {
    id: number;
    eleveId: number;
    titre: string;
    description: string;
    matiere: string;
    niveauActuel: number;
    niveauCible: number;
    progressionPourcent: number;
    status: 'EN_COURS' | 'TERMINE' | 'SUSPENDU' | 'ABANDONNE';
    dateCreation: string;
    dateTerminaison?: string;
    lecons?: Lecon[];
}
