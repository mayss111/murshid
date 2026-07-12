export interface Progression {
    id: number;
    eleveId: number;
    leconId: number;
    questionId: number;
    reponseEtudiant: string;
    pointsObtenus: number;
    pointsTotaux: number;
    estTerminee: boolean;
    dateDemarrage: string;
    dateTerminaison?: string;
    nombreTentatives: number;
}
