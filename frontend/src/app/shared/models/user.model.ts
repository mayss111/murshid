export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: 'ELEVE' | 'SHEIKH' | 'ADMIN';
    dialecte?: string;
    niveauActuel: number;
    dateInscription: string;
    estActif: boolean;
}

export interface AuthResponse {
    token: string;
    message: string;
    expiresIn: number;
    userId: number;
    email: string;
    role: string;
}

export interface UserStats {
    totalPoints: number;
    completedParcours: number;
    activeParcours: number;
}
