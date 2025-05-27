import { useNavigate } from "react-router-dom";
import { img } from "../data/img.ts";
import ThemeBtn from "../components/ui/ThemeBtn.js";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] max-w-7xl mx-auto py-10 px-4">
      <header className="flex justify-between items-center">
        <img src={img.quiz_logo} alt="Quiz Logo" className="w-20 sm:w-24" />
        <ThemeBtn />
      </header>

      <main className="mt-20 md:mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <h1 className="text-center md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#254ED2]">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#4A4A4A] font-medium mb-2">
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
                className="flex items-center p-4 gap-4 border-2 border-[#3C087B] rounded-2xl cursor-pointer bg-white hover:bg-[#b78eea] hover:border-[#3C087B] text-xl sm:text-2xl text-[#2D2D2D] font-semibold transition"
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
