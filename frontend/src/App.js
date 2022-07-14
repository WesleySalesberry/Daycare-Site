import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MessagesPage } from "./pages/MessagesPage";
import { ContactPage } from "./pages/ContactPage";

import { MESSAGE } from "./utils/paths";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path={`/${MESSAGE}`} element={<MessagesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;