import { Schema } from 'mongoose';

interface Answer {
    text: string;
    isCorrect: boolean;
  }

interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export type { Answer, Question };