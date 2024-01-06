import { Route, Routes } from "react-router-dom";
import "./components/global.css";
import NavbarDef from "./components/navbar/navbar";
import Home from "./components/home/index";
import UserInfo from "./components/home/user-info/userInfo";
import Table from "./components/user-list/table";
import UserList from "./components/user-list/userList";

function App() {
  return (
    <>
      <NavbarDef />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/table" element={<Table />} />
        <Route path="/user info" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
