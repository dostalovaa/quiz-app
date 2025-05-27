import { createContext, useReducer } from "react";
import { initialState, quizReducer } from "../reducer/quizReducer";
import type { QuizState, QuizAction } from "../types/quizTypes";
import type { Question } from "../types/question";

export const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
  playAgain: () => void;
  nextQuestion: (questions: Question[]) => void;
  checkAnswear: (answer: string, question: Question) => Question | undefined;
}>({
  state: initialState,
  dispatch: () => {},
  playAgain: () => {},
  nextQuestion: () => {},
  checkAnswear: () => undefined,
});

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const nextQuestion = (questions: Question[]): Question | undefined => {
    const newIndex = state.currentIndex + 1;

    if (newIndex >= questions.length) {
      dispatch({ type: "DONE" });
      return;
    }

    dispatch({ type: "NEXT" });
    return questions[newIndex];
  };

  const checkAnswear = (
    answer: string,
    question: Question
  ): Question | undefined => {
    if (answer === "") {
      dispatch({ type: "ERROR" });
      return undefined;
    }
    dispatch({ type: "ANSWER", payload: answer });
    if (answer === question.correctAnswer) {
      dispatch({ type: "SCORE" });
    }
    return question;
  };

  const playAgain = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <QuizContext.Provider
      value={{ state, dispatch, playAgain, checkAnswear, nextQuestion }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
