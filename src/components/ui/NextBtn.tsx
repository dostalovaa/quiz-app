import { useQuiz } from "../../hooks/useQuiz";
import type { Question } from "../../types/question";

type NextBtnProps = {
  question: Question[];
  setQuestion: React.Dispatch<React.SetStateAction<Question>>;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  setBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

const NextBtn = ({
  question,
  setQuestion,
  setAnswer,
  setBtn,
}: NextBtnProps) => {
  const { nextQuestion } = useQuiz();

  const handleClick = () => {
    const newQuestion = nextQuestion(question);
    if (newQuestion !== undefined) {
      setQuestion(newQuestion);
    }
    setAnswer("");
    setBtn(false);
  };

  return (
    <button
      onClick={handleClick}
      className="py-2 border-2 border-[#3C087B] bg-white p-5 rounded m-auto font-semibold cursor-pointer hover:bg-[#3C087B] hover:text-white"
    >
      Next Question
    </button>
  );
};

export default NextBtn;
