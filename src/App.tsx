import Kanban from "./pages/Kanban";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Users from "./pages/Users";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <div className="flex bg-zinc-800 h-screen text-white">
      <BrowserRouter>
        <div className="flex space-x-auto">
          <Routes>
            <Route path="/" element={<Kanban />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
