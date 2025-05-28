type AnswerBtnProps = {
  option: string;
  selected: string;
  correctAnswer: string;
  isAnswered: boolean;
  onSelect: (option: string) => void;
};

const AnswerBtn = ({
  option,
  selected,
  correctAnswer,
  isAnswered,
  onSelect,
}: AnswerBtnProps) => {
  const isSelected = selected === option;
  const isCorrect = correctAnswer === option;
  const isWrongSelected = isSelected && !isCorrect;

  const baseClass = "h-[70px] w-[300px] rounded-md p-2";

  let colorClass = "";
  if (isAnswered) {
    if (isCorrect) {
      colorClass =
        "bg-green-300 text-white border-2 border-green-600 cursor-not-allowed";
    } else if (isWrongSelected) {
      colorClass =
        "bg-red-300 text-white border-2 border-red-600 cursor-not-allowed";
    } else {
      colorClass = "cursor-not-allowed bg-white";
    }
  } else if (isSelected) {
    colorClass =
      "bg-[#b78eea] text-white border-2 border-[#3C087B] cursor-pointer";
  } else {
    colorClass =
      "bg-white hover:border-2 hover:border-[#3C087B] cursor-pointer";
  }

  return (
    <button
      onClick={() => onSelect(option)}
      disabled={isAnswered}
      className={`${baseClass} ${colorClass} `}
    >
      {option}
    </button>
  );
};

export default AnswerBtn;
