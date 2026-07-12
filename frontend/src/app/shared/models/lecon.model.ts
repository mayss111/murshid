import { Question } from './question.model';
import { Progression } from './progression.model';

export interface Lecon {
    id: number;
    parcoursId: number;
    titre: string;
    contenu: string;
    niveau: number;
    matiere: string;
    ordreSequence: number;
    dateCreation: string;
    questions?: Question[];
    progressions?: Progression[];
}
