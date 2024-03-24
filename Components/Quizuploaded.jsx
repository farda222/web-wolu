import Navbar from "../Components/NavbarUtama";
import Iconaccount from "../assets/img/Account.jpg";
import { useNavigate } from "react-router-dom";
import Icontask from "../assets/img/Iconquiz.svg";

const Quizuploaded = () => {
  const navigate = useNavigate();

  return (
    <div className="font-Jakarta overflow-y-hidden">
      <Navbar />
      <nav className="bg-white p-4 px-12 py-7 font-Jakarta lg:float-left border-b-2 border-neutral-300 lg:w-full 2xl:w-full">
        <ul className="flex justify-between items-center lg:gap-14 lg:float-left 2xl:gap-24 2xl:float-left">
          <li className="mr-2">
            <a onClick={() => navigate("/Yourclass")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Task
            </a>
          </li>
          <li className="mr-2">
            <a onClick={() => navigate("/Quizpage")} className="text-indigo-600 hover:text-indigo-600 border-b-4 border-indigo-600 w-56 font-semibold transition-all">Quiz</a>
          </li>
          <li className="mr-2">
            <a onClick={() => navigate("/Memberpage")} href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Member
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/Forum")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Forum
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center align-middle items-center mx-auto container gap-6 mt-7 ml-1 font-Jakarta lg:mt-24 2xl:mt-32 2xl:ml-5">
        <h1 className="text-black font-semibold text-2xl lg:text-3xl 2xl:ml-60">English XI PPLG 1</h1>
        <button className="text-white bg-indigo-600 w-16 h-7  font-semibold rounded-md text-xs lg:ml-[30rem] lg:w-20 lg:h-9 2xl:ml-[55rem]">Share</button>
        <div className="relative flex-row -ml-4">
          <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full focus:outline-none focus:bg-gray-300 lg:block lg:ml-6">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex gap-6 mt-10 bg-neutral-100 p-3 font-Jakarta">
        <h1 className="text-green-500 font-semibold ml-3 lg:ml-48 2xl:ml-60">Online</h1>
        <div className="flex gap-2">
          <img className="w-7  h-7 rounded-full " src={Iconaccount} alt="Icon Account" />
          <img className="w-7  h-7 rounded-full " src={Iconaccount} alt="Icon Account" />
          <img className="w-7  h-7 rounded-full " src={Iconaccount} alt="Icon Account" />
          <img className="w-7  h-7 rounded-full " src={Iconaccount} alt="Icon Account" />
          <img className="w-7  h-7 rounded-full " src={Iconaccount} alt="Icon Account" />
        </div>
      </div>
      <div className="flex justify-center align-middle items-center mx-auto container h-full">
        <img src=""></img>
        <input className="bg-white shadow-lg shadow-neutral-200 h-ful mb-6 w-[22rem] px-5 py-6 mt-10 rounded-lg 2xl:w-[35rem]" type="text" placeholder="Type Something..."></input>
      </div>
      <div className="px-5 flex justify-center align-middle items-center mx-auto container 2xl:px-10">
        <div className="max-w-md bg-white rounded-lg overflow-hidden border-2 border-neutral-200 mt-12 2xl:w-[130rem]">
          <div className="px-6 py-4 flex 2xl:px-0 2xl:ml-5">
            <img className="w-9 2xl:w-12" src={Icontask} />
            <div className="flex-row ml-5">
              <div onClick={() => navigate("/Quizdetail")} className="font-bold 2xl:text-xl mb-2 lg:text-xl text-sm">English Quiz</div>
              <p className="text-gray-700 text-sm lg:text-base 2xl:text-base">Deadline: March 10, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizuploaded;
