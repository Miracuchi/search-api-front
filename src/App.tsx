// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ResultsPage from "./pages/Results";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}
