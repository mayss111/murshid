export interface Question {
    id: number;
    leconId: number;
    texte: string;
    reponseAttendue: string;
    reponseDetaillee: string;
    type: 'QCM' | 'TRUE_FALSE' | 'COMPREHENSION' | 'APPLICATION' | 'ANALYSIS' | 'REFLEXION';
    choix?: string[];
    reponseCorrecte?: string;
    niveau: number;
    dateCreation: string;
}

export interface EvaluationResponse {
    progressionId: number;
    evaluation: string;
    points: number;
    estCorrect: boolean;
}
