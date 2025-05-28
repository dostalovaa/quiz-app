import { useQuiz } from "../../hooks/useQuiz";
import { useNavigate } from "react-router-dom";

type PlayAgainProps = {
  score: number;
  currentIndex: number;
};

const PlayAgain = ({ score, currentIndex }: PlayAgainProps) => {
  const { playAgain, theme } = useQuiz();
  const navigate = useNavigate();

  const handleBrowserBack = () => {
    playAgain();
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <h3
        className={`text-3xl font-bold ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Quiz completed
      </h3>
      <p
        className={`text-2xl ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Your scored:
        <span className="pl-2">
          {score} / {currentIndex}
        </span>
      </p>

      <button
        onClick={handleBrowserBack}
        className="py-2 border-2 border-[#3C087B] bg-white w-[50%] rounded m-auto font-semibold cursor-pointer hover:bg-[#b78eea] hover:text-white"
      >
        Play Again
      </button>
    </div>
  );
};

export default PlayAgain;
