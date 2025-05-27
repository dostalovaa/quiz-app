import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HTMLPage from "./pages/HtmlPage";
import CSSPage from "./pages/CssPage";
import JSPage from "./pages/JsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/css" element={<CSSPage />} />
        <Route path="/javascript" element={<JSPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
