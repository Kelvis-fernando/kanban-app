import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { UserCircle, Kanban } from "phosphor-react";
import Avatar from "./users/Avatar";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center bg-zinc-900 w-14">
      <img src={logo} alt="logo" className=" mt-4 w-8 h-8" />
      <div className="my-4">
        <a className="cursor-pointer m-1" onClick={() => navigate("/")}>
          <Kanban size={32} className="hover:text-zinc-300" />
        </a>
        <a className="cursor-pointer m-1" onClick={() => navigate("/users")}>
          <UserCircle size={32} className="hover:text-zinc-300" />
        </a>
      </div>
      <Avatar
        image={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/33aba100-11ff-4207-aff3-ef848ddbb7e8-profile_image-70x70.png"
        }
      />
    </div>
  );
};

export default Nav;
