import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavbarUtama";
import { useState } from "react";
const Membercomponent = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-Jakarta">
      <Navbar />
      <nav className="bg-white p-4 px-12 py-7 font-Jakarta lg:float-left border-b-2 border-neutral-300 lg:w-full 2xl:w-full">
        <ul className="flex justify-between items-center lg:gap-14 lg:float-left 2xl:gap-24 2xl:float-left">
          <li className="mr-2">
            <a onClick={() => navigate("/Yourclass")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Task
            </a>
          </li>
          <li className="mr-2">
            <a onClick={() => navigate("/Quizpage")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Quiz
            </a>
          </li>
          <li className="mr-2">
            <a onClick={() => navigate("/Memberpage")} href="#" className="text-indigo-600 hover:text-indigo-600 border-b-4 border-indigo-600 w-56 font-semibold transition-all">
              Member
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/Forum")} href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Forum
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center align-middle items-center mx-auto container gap-28 mt-7 ml-1 font-Jakarta lg:mt-20 2xl:mt-32 lg:gap-[30rem] lg:border-b-neutral-300 lg:border-b-2 lg:py-8 2xl:gap-[60rem] 2xl:border-none 2xl:w-full">
        <h1 className="text-black font-semibold text-2xl lg:text-3xl 2xl:ml-60">English XI PPLG 1</h1>
        <div className="relative flex-row -ml-4">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-8 h-8 bg-white rounded-full focus:outline-none focus:bg-gray-300 lg:block lg:ml-6">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 1
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 2
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 3
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-5 mt-10 lg:px-[56rem] lg:-ml-[53rem] 2xl:px-[88rem] 2xl:-ml-[85rem] 2xl:mt-20">
        <div className="border-b-indigo-600 py-6 px-2 border-b-2">
          <h1 className="text-indigo-600 text-2xl font-semibold">Member</h1>
        </div>
      </div>
      <div className="container mx-auto align-middle items-center flex justify-start p-4 mt-10">

        <ul className="grid grid-cols-1 gap-5">
          {/* Student 1 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Student 1" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Ms. Ika</span>
          </li>

          {/* Student 2 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Student 2" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Alexxander Agung</span>
          </li>

          {/* Teacher 1 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Teacher 1" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Rafif Naufal Aditya</span>
          </li>

          {/* Teacher 2 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Teacher 2" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Aditya Widodo Putra</span>
          </li>
          {/* Student 1 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Student 1" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Farda Syarif Mubarok</span>
          </li>

          {/* Student 2 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Student 2" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Sekar Ayu Wardani</span>
          </li>

          {/* Teacher 1 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Teacher 1" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Olivia</span>
          </li>

          {/* Teacher 2 */}
          <li className="p-4 rounded-lg flex items-center">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Teacher 2" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
            <span className="ml-7 lg:ml-10 lg:text-xl">Yanto Kusumo</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Membercomponent;
