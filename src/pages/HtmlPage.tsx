import HtmlQuiz from "../components/HtmlQuiz.tsx";
import { img } from "../data/img.ts";

const HtmlPage = () => {
  return (
    <main
      className="bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${img.bg})` }}
    >
      <HtmlQuiz />
    </main>
  );
};

export default HtmlPage;
