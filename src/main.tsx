import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QuizProvider from "./context/QuizProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
