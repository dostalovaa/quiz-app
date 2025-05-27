import { useQuiz } from "../../hooks/useQuiz";
import type { Question } from "../../types/question";

type SubmitBtnProps = {
  answer: string;
  question: Question;
  setBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubmitBtn = ({ answer, question, setBtn }: SubmitBtnProps) => {
  const { checkAnswear } = useQuiz();

  const handleClick = () => {
    checkAnswear(answer, question);
    setBtn(true);
  };
  return (
    <button
      onClick={handleClick}
      className="py-2 border-2 border-[#3C087B] bg-white p-5 rounded m-auto font-semibold cursor-pointer hover:bg-[#3C087B] hover:text-white"
    >
      Submit Answer
    </button>
  );
};

export default SubmitBtn;
