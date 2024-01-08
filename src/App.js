import { Route, Routes } from "react-router-dom";
import "./components/global.css";
import Home from "./components/home/index";
import UserList from "./components/user-list/userList";
import UserInfo from "./components/home/user-info/userInfo";
import Login from "./components/login/Login";


function App() {
  return (
    <>
      {/* <NavbarDef/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user info" element={<UserList />} />
        <Route path="/user/add" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
