import { useReducer, useEffect, useState } from "react";
import { initialState, quizReducer } from "../reducer/quizReducer";
import type { Question } from "../types/question";
import { QuizContext } from "../types/quizContext";

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

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
      value={{
        state,
        dispatch,
        theme,
        toggleTheme,
        playAgain,
        checkAnswear,
        nextQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
