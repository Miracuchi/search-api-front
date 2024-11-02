// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />}>
          <Route path="/results" />
        </Route>
      </Routes>
    </Router>
  );
}
