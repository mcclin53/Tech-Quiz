import questions from "../../fixtures/mockQuestions.json";
import { Question } from "../types";

export const mockState: Question[] = questions.map((q, i) => ({
    id: `mock-id-${i + 1}`,
    question: q.question,
    answers: q.answers,
  }));