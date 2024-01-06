import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import "./components/global.css";
import NavbarDef from "./components/navbar/navbar";
import Table from "./components/user-list/table";
import UserList from "./components/user-list/userList";

function App() {
  return (
    <>
      <NavbarDef />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/user info" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
