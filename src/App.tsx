import Kanban from "./pages/Kanban";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Users from "./pages/Users";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

const App = () => {
  return (
    <div className="flex bg-zinc-800 h-screen text-white">
      <BrowserRouter>
        <div className="flex space-x-auto">
          <Routes>
            <Route path="/" element={<Kanban />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
