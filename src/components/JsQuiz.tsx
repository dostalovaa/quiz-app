import { useState } from "react";
import { jsQuestions } from "../data/jsQuestions";
import { useQuiz } from "../hooks/useQuiz";
import TimeLiner from "./ui/TimeLiner";
import ErrorAnswer from "./ui/ErrorAnswer";
import PlayAgain from "./ui/PlayAgain";
import NextBtn from "./ui/NextBtn";
import SubmitBtn from "./ui/SubmitBtn";
import AnswerBtn from "./ui/AnswerBtn";

const JsQuiz = () => {
  const { state } = useQuiz();
  const [question, setQuestion] = useState(jsQuestions[0]);
  const [answer, setAnswer] = useState("");
  const [btn, setBtn] = useState(false);

  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <div className="md:max-w-5xl w-[90%] m-auto">
        <div className="mb-8 w-[80%] m-auto">
          <TimeLiner
            currentIndex={state.currentIndex}
            length={jsQuestions.length}
          />
        </div>

        <div className="bg-[#F0F0F0] rounded-2xl p-10 flex flex-col justify-center items-center text-center">
          {state.done ? (
            <PlayAgain score={state.score} currentIndex={state.currentIndex} />
          ) : (
            <>
              <h3 className="font-bold text-2xl mb-4">{question.question}</h3>

              {state.error && <ErrorAnswer />}

              <div className="md:grid md:grid-cols-2 gap-6 mb-5 flex flex-col">
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
                  question={jsQuestions}
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

export default JsQuiz;
