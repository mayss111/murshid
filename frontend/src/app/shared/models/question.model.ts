export interface Question {
    id: number;
    leconId: number;
    texte: string;
    reponseAttendue: string;
    reponseDetaillee: string;
    type: 'QCM' | 'COMPREHENSION' | 'REFLEXION' | 'APPLICATION';
    niveau: number;
    dateCreation: string;
}

export interface EvaluationResponse {
    progressionId: number;
    evaluation: string;
    points: number;
    estCorrect: boolean;
}
