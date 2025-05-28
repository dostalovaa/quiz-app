import { useNavigate } from "react-router-dom";
import { useQuiz } from "../hooks/useQuiz.ts";
import { img } from "../data/img.ts";
import ThemeBtn from "../components/ui/ThemeBtn.js";

const HomePage = () => {
  const { theme } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="w-[90%] max-w-7xl mx-auto py-10 px-4">
      <header className="flex justify-between items-center">
        <img src={img.quiz_logo} alt="Quiz Logo" className="w-20 sm:w-24" />
        <ThemeBtn />
      </header>

      <main className="mt-20 md:mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <h1
            className={`text-center md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight ${
              theme === "light" ? "text-[#254ED2]" : "text-[#ffffff]"
            } `}
          >
            <span
              className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 ${
                theme === "light" ? "text-[#4A4A4A]" : "text-[#e3e3e3]"
              }`}
            >
              Welcome to our
            </span>
            Frontend Quiz
          </h1>

          <div className="w-full md:w-1/2 space-y-5">
            {[
              {
                label: "HTML",
                path: "/html",
                icon: img.HTML_logo,
                size: "w-7",
              },
              { label: "CSS", path: "/css", icon: img.CSS_logo, size: "w-7" },
              {
                label: "JavaScript",
                path: "/javascript",
                icon: img.js_logo,
                size: "w-9",
              },
            ].map(({ label, path, icon, size }) => (
              <div
                key={label}
                onClick={() => navigate(path)}
                className={`flex items-center p-4 gap-4 border-3  rounded-2xl cursor-pointer  text-xl sm:text-2xl  font-semibold transition ${
                  theme === "light"
                    ? "bg-white hover:bg-[#b78eea] hover:border-[#3C087B] border-[#3C087B] text-[#2D2D2D]"
                    : "bg-[#3a3a3a] border-white text-white hover:border-black hover:bg-[#575757]"
                }`}
              >
                <img src={icon} alt={`${label} Logo`} className={size} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
