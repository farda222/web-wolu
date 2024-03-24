import Logo from "../assets/img/Logo.svg";
import Google from "../assets/img/Google.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <form className="flex flex-col items-center justify-center h-screen bg-gray-400 font-custom px-4 font-Jakarta">
        <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-md mt-1">
          <div className="mb-3 flex justify-center mt-2">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </div>
          <p className="justify-center align-middle container mx-auto text-center flex text-xs font-extrabold text-black mb-4">WOLU</p>
          <h2 className="text-xl mb-2 text-center font-bold">
            Welcome to <span className="text-indigo-600">Wolu</span> <span className="text-yellow-500">Class</span>
          </h2>
          <p className="justify-center align-middle container mx-auto text-center flex text-[10px] text-neutral-400 mb-7">Create an account or sign in to access this web</p>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" required />
          </div>
          <a className="text-xs">Forgot password ?</a>
          <div className="flex items-center justify-center mt-7">
            <button className="bg-indigo-600 hover:bg-indigo-800 transition-all text-white py-3 px-24 text-sm rounded-lg focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center align-middle mx-auto gap-7 container mt-8">
            <div className="w-20 h-[0.2px] bg-black"></div>
            <p className="text-[10px] font-semibold">Or With</p>
            <div className="w-20 h-[0.2px] bg-black"></div>
          </div>
          <div className="flex items-center justify-center align-middle mx-auto gap-5 container mt-8">
            <button className="bg-neutral-200 font-bold text-xs w-28 h-10 rounded-md flex items-center justify-center align-middle gap-2 container">
              <img src={Google} />
              Google
            </button>
          </div>
          <div className="mt-8 text-center text-xs">
            Dont have an account ?{" "}
            <a onClick={() => navigate("/Wolu")} href="#login" className="text-blue-500">
              Sign Up Now
            </a>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;