import { img } from "../../data/img";

const ErrorAnswer = () => {
  return (
    <div className="flex justify-center items-center gap-2 mb-4">
      <img src={img.incorrect} alt="Incorrect icon" className="w-[25px]" />
      <p className="text-red-400">Please select an answer</p>
    </div>
  );
};

export default ErrorAnswer;
