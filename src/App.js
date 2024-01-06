import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import "./components/global.css";
import Table from "./components/user-list/table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element = {<Table/>}/>
      </Routes>
    </>
  );
}

export default App;
