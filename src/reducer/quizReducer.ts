import type { QuizState, QuizAction } from "../types/quizTypes";

export const initialState = {
  currentIndex: 0,
  score: 0,
  answer: "",
  isAnswered: false,
  unAnswered: false,
  done: false,
  error: false,
};

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SCORE":
      return {
        ...state,
        score: state.score + 1,
      };
    case "ANSWER":
      return {
        ...state,
        answer: action.payload,
        isAnswered: true,
      };

    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        answer: "",
        isAnswered: false,
        error: false,
      };
    case "DONE":
      return {
        ...state,
        done: true,
      };

    case "ERROR":
      return {
        ...state,
        error: true,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
