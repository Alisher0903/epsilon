import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import "./components/global.css";
import NavbarDef from "./components/navbar/navbar";

function App() {
  return (
    <>
    <NavbarDef />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
