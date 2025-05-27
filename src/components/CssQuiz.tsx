import { useState } from "react";
import { cssQuestions } from "../data/cssQuestions";
import { useQuiz } from "../hooks/useQuiz";
import TimeLiner from "./ui/TimeLiner";
import ErrorAnswer from "./ui/ErrorAnswer";
import PlayAgain from "./ui/PlayAgain";
import NextBtn from "./ui/NextBtn";
import SubmitBtn from "./ui/SubmitBtn";
import AnswerBtn from "./ui/AnswerBtn";

const CssQuiz = () => {
  const { state } = useQuiz();
  const [question, setQuestion] = useState(cssQuestions[0]);
  const [answer, setAnswer] = useState("");
  const [btn, setBtn] = useState(false);

  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <div className="w-[50%] m-auto">
        <div className="mb-8 w-[80%] m-auto">
          <TimeLiner
            currentIndex={state.currentIndex}
            length={cssQuestions.length}
          />
        </div>

        <div className="bg-[#F0F0F0] rounded-2xl p-10 flex flex-col justify-center items-center text-center">
          {state.done ? (
            <PlayAgain score={state.score} currentIndex={state.currentIndex} />
          ) : (
            <>
              <h3 className="font-bold text-2xl mb-4">{question.question}</h3>

              {state.error && <ErrorAnswer />}

              <div className="grid grid-cols-2 gap-5 mb-5">
                {question.options.map((option, index) => (
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
