export enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD'
}

export interface Recipe {
    id?: number;
    title: string;
    description: string;
    category: string;
    servings: number;
    totalTimeMinutes: number;
    difficulty: Difficulty;
    ingredients: string[];
}
