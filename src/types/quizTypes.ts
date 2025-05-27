export interface QuizState {
  currentIndex: number;
  score: number;
  answer: string;
  isAnswered: boolean;
  unAnswered: boolean;
  done: boolean;
  error: boolean;
}

export type QuizAction =
  | { type: "SCORE" }
  | { type: "ANSWER"; payload: string }
  | { type: "NEXT" }
  | { type: "RESET" }
  | { type: "ERROR" }
  | { type: "DONE" };
