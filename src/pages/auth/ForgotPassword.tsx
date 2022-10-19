import HeaderPage from "../../components/HeaderPage";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="logo" className="my-4 w-16 h-16" />
      <HeaderPage title={"Forgot Password"} subtitle={"Pass your e-mail"} />
      <form className="flex flex-col">
        <label htmlFor="email">Insert your e-mail</label>
        <input
          className="rounded-sm bg-zinc-500 text-zinc-200 p-4 w-4/4 h-8 my-2"
          type="email"
          name="email"
          id="email"
          placeholder="name@example.com"
        />
        <button className="bg-blue-300 text-zinc-700 font-semibold rounded-sm w-4/4 h-8 mt-3">
          Send
        </button>
      </form>
      <div className="flex flex-col items-center justify-center mt-4 font-light">
        <a className="cursor-pointer" onClick={() => navigate("/login")}>
          Back
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
