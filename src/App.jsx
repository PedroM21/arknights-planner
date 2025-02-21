import Home from "./pages/Home";
import OperatorReport from "./pages/OperatorReport";
import Planner from "./pages/Planner";
import { Routes, Route } from "react-router-dom";
import { OperatorProvider } from "./contexts/OperatorContext";

function App() {
  return (
    <OperatorProvider>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OperatorReport" element={<OperatorReport />} />
          <Route path="/Planner" element={<Planner />} />
        </Routes>
      </div>
    </OperatorProvider>
  );
}

export default App;
