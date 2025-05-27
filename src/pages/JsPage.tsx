import JsQuiz from "../components/JsQuiz";
import { img } from "../data/img.ts";

const JsPage = () => {
  return (
    <main
      className="bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${img.bg})` }}
    >
      <JsQuiz />
    </main>
  );
};

export default JsPage;
