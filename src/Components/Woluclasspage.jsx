import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Googlebutton from "../Components/Googlebutton";
import Logo from "../assets/img/Logo.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = ({ onNavigateToLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check password strength
    if (newPassword.length >= 8) {
      setPasswordStrength("Strong");
    } else if (newPassword.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const showToast = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyClassName: "toast-body",
      className: "toast-container",
    });
  };

  const handleNext = () => {
    const emailRegex = /@gmail\.com$|@yahoo\.com$/;

    if (!email || !username || !password || password.length < 8) {
      showToast("Semua kolom harus diisi dan password minimal 8 karakter");
    } else if (!emailRegex.test(email)) {
      showToast("Email harus mengandung @gmail.com atau @yahoo.com");
    } else {
      onNavigateToLogin();
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 px-4 font-custom font-Jakarta">
    <ToastContainer />
    <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 w-full max-w-md mt-1">
        <div className="mb-3 flex justify-center mt-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <p className="justify-center align-middle container mx-auto text-center flex text-xs font-extrabold text-black mb-4">WOLU</p>
        <h2 className="text-xl mb-7 text-center font-bold">
          Sign Up To <span className="text-indigo-600">Wolu</span> <span className="text-yellow-500">Class</span>
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="username">
            Fullname
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordStrength && <p className={`text-xs float-end mt-4 ${passwordStrength === "Weak" ? "text-red-500" : passwordStrength === "Medium" ? "text-yellow-500" : "text-green-500"}`}>{passwordStrength}</p>}
        </div>
        <div className="flex items-center justify-center mt-7">
          <button
            className="bg-white text-xs border-2 border-solid transition-all border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="flex items-center justify-center align-middle mx-auto gap-2 container mt-4">
          <div className="w-20 h-[0.2px] bg-black"></div>
          <p className="text-xs">Or With</p>
          <div className="w-20 h-[0.2px] bg-black"></div>
        </div>
        <div className="flex items-center justify-center align-middle mx-auto gap-5 container mt-4">
          <Googlebutton />
        </div>
        <div className="mt-6 text-center text-xs">
          Already have an account?{" "}
          <a onClick={() => navigate("/LoginWolu")} href="#login" className="text-blue-500">
            Login now
          </a>
        </div>
      </form>
    </div>
  );
};

SignUpPage.propTypes = {
  onNavigateToLogin: PropTypes.func.isRequired,
};

const ToastMessage = ({ message }) => {
  return (
    <div className="fixed bottom-8 w-full px-4 md:px-0">
      <div className="flex justify-center lg:float-right lg:mr-10">
        <div className="bg-neutral-100 text-indigo-600 rounded shadow-lg md:bg-white p-5">{message}</div>
      </div>
    </div>
  );
};

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired
};

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const handleLogin = () => {
    if (!username || !password) {
      setError("Semua kolom harus diisi");
      setTimeout(() => setError(""), 3000); // Menghapus pesan kesalahan setelah 3 detik
    } else {
      onLogin({ username, password });

      // Navigasi berdasarkan opsi radio yang dipilih
      if (selectedOption === "student") {
        navigate("/StudentPage"); // Navigasi ke halaman student
      } else if (selectedOption === "teacher") {
        navigate("/TeacherPage"); // Navigasi ke halaman teacher
      }
    }
  };

  return (
    <form className="flex flex-col items-center justify-center h-screen bg-gray-400 font-custom px-4 py-2 overflow-y-hidden font-Jakarta">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mt-4">
        <div className="mb-3 flex justify-center mt-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <p className="justify-center align-middle container mx-auto text-center flex text-xs font-extrabold text-black mb-4">WOLU</p>
        <h2 className="text-xl mb-6 text-center font-bold">
          Sign Up To <span className="text-indigo-600">Wolu</span> <span className="text-yellow-500">Class</span>
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            NIS
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="privacy-policy">
              <input className="mr-2 leading-tight" type="checkbox" id="privacy-policy" required />I agree to the privacy policy and terms of use of this site.
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center align-middle mx-auto gap-10 container">
          <label className={`relative flex items-center ${selectedOption === "student" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"} transition-all duration-300`}>
            <input type="radio" name="role" defaultValue="student" className="absolute opacity-0" onClick={() => handleClick("student")} />
            <span className="px-6 py-3 rounded-full cursor-pointer select-none text-xs font-semibold">Student</span>
          </label>
          <label className={`relative flex items-center ${selectedOption === "teacher" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"} transition-all duration-300`}>
            <input type="radio" name="role" defaultValue="teacher" className="absolute opacity-0" onClick={() => handleClick("teacher")} />
            <span className="px-6 py-3 rounded-full cursor-pointer select-none text-xs font-semibold">Teacher</span>
          </label>
        </div>
        {error && <p className="text-red-500 mb-2 text-sm text-center">{error}</p>}
        <div className="flex items-center justify-center mt-7">
          <button className="bg-indigo-600 hover:bg-indigo-800 transition-all text-white py-3 px-24 text-sm rounded-lg focus:outline-none focus:shadow-outline" type="button" onClick={handleLogin}>
            Register
          </button>
        </div>
        <div className="flex items-center justify-center align-middle mx-auto gap-2 container mt-6">
          <div className="w-20 h-[0.2px] bg-black"></div>
          <p className="text-xs">Or With</p>
          <div className="w-20 h-[0.2px] bg-black"></div>
        </div>
        <div className="flex items-center justify-center align-middle mx-auto gap-5 container mt-6">
          <Googlebutton />
        </div>
      </div>
    </form>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleNavigateToLogin = () => {
    setIsSignUp(false);
  };

  const handleLogin = (data) => {
    console.log("Login data:", data);
    // Proses autentikasi login di sini
  };

  return (
    <>{isSignUp ? <SignUpPage onNavigateToLogin={handleNavigateToLogin} /> : <LoginPage onLogin={handleLogin} />}</>
  );
};

export default AuthPage;
