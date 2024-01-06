import { Route, Routes } from "react-router-dom";
import "./components/global.css";
import NavbarDef from "./components/navbar/navbar";
import Home from "./components/home/index";
import UserList from "./components/user-list/userList";
import UserInfo from "./components/home/user-info/userInfo";


function App() {
  return (
    <>
      <NavbarDef/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user info" element={<UserList />} />
        <Route path="/user/add" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
