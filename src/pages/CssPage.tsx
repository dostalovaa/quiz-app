import CssQuiz from "../components/CssQuiz";
import { img } from "../data/img.ts";

const CssPage = () => {
  return (
    <main
      className="bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${img.bg})` }}
    >
      <CssQuiz />
    </main>
  );
};

export default CssPage;
