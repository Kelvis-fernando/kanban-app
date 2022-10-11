import HeaderPage from "../../components/HeaderPage";

const Login = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen">
      <HeaderPage title={"Login"} subtitle={"Entry in your account."} />
      <form className="flex flex-col">
        <label htmlFor="email">Insert your e-mail</label>
        <input
          className="rounded-sm bg-zinc-500 text-zinc-200 p-4 w-4/4 h-8 my-2"
          type="email"
          name="email"
          id="email"
          placeholder="name@example.com"
        />
        <label htmlFor="password">Password</label>
        <input
          className="rounded-sm bg-zinc-500 text-zinc-200 p-4 w-4/4 h-8 my-2"
          type="password"
          name="password"
          id="password"
          placeholder="********"
        />
        <button className="bg-blue-300 text-zinc-700 font-semibold rounded-sm w-4/4 h-8 mt-3">Login</button>
      </form>
      <div className="flex flex-col items-center justify-center mt-4 font-light">
        <a href="">Create a account</a>
        <a href="">Forgot you password?</a>
      </div>
    </div>
  );
};

export default Login;
