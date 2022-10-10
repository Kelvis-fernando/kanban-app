import HeaderPage from "../../components/HeaderPage";

const Login = () => {
  return (
    <div className="m-10">
      <HeaderPage title={"Login"} subtitle={"Entry in your account."} />
      <form className="flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          className="rounded-md text-black w-4/4 h-8 my-2"
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="rounded-md text-black w-4/4 h-8 my-2"
          type="password"
          name="password"
          id="password"
        />
        <button className="bg-zinc-600 rounded-sm w-4/4">Login</button>
      </form>
    </div>
  );
};

export default Login;
