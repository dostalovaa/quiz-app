import { useState } from "react";
import { cssQuestions } from "../data/cssQuestions";
import { useQuiz } from "../hooks/useQuiz";
import type { Question } from "../types/question";
import TimeLiner from "./ui/TimeLiner";
import ErrorAnswer from "./ui/ErrorAnswer";
import PlayAgain from "./ui/PlayAgain";
import NextBtn from "./ui/NextBtn";
import SubmitBtn from "./ui/SubmitBtn";
import AnswerBtn from "./ui/AnswerBtn";

const CssQuiz = () => {
  const { state, theme } = useQuiz();
  const [question, setQuestion] = useState<Question>(cssQuestions[0]);
  const [answer, setAnswer] = useState<string>("");
  const [btn, setBtn] = useState<boolean>(false);

  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <div className="md:max-w-5xl w-[90%] m-auto">
        <div className="mb-8 w-[80%] m-auto">
          <TimeLiner
            currentIndex={state.currentIndex}
            length={cssQuestions.length}
          />
        </div>

        <div
          className={` rounded-2xl p-10 flex flex-col justify-center items-center text-center mb-2 ${
            theme === "light" ? "bg-[#F0F0F0]" : "bg-[#585858]"
          }`}
        >
          {state.done ? (
            <PlayAgain score={state.score} currentIndex={state.currentIndex} />
          ) : (
            <>
              <h3
                className={`font-bold lg:text-3xl md:text-2xl mb-4 text-[18px] ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                {question.question}
              </h3>

              {state.error && <ErrorAnswer />}

              <div className="md:grid md:grid-cols-2 md:gap-6 md:mb-5 flex flex-col gap-3 mb-3">
                {question.options.map((option: string, index: number) => (
                  <div key={index}>
                    <AnswerBtn
                      option={option}
                      selected={answer}
                      correctAnswer={question.correctAnswer}
                      isAnswered={state.isAnswered}
                      onSelect={setAnswer}
                    />
                  </div>
                ))}
              </div>

              {btn ? (
                <NextBtn
                  question={cssQuestions}
                  setQuestion={setQuestion}
                  setAnswer={setAnswer}
                  setBtn={setBtn}
                />
              ) : (
                <SubmitBtn
                  answer={answer}
                  question={question}
                  setBtn={setBtn}
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CssQuiz;
