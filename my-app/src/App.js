import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import HomePage from "./pages/homePage";
import StudentsPage from "./pages/studentsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
