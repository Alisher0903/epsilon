import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import "./components/global.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
