import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center bg-green-600 w-14">
      <img src={logo} alt="logo" className=" mt-4 w-8 h-8" />
      <a className="cursor-pointer" onClick={() => navigate("/")}>
        Kanban
      </a>
      <a className="cursor-pointer" onClick={() => navigate("/users")}>
        Users
      </a>
    </div>
  );
};

export default Nav;
