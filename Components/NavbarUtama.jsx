import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdHelp } from "react-icons/md";
import Home from "../assets/img/solar--home-smile-linear";
import Calendar from "../assets/img/Calendar";
import Trophy from "../assets/img/Trophy";
import Logo from "../assets/img/Logo.svg";
import Icon from "../assets/img/Account.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <Home size={25} className="mr-4 font-extrabold" />, text: "Home", route: "/" },
    { icon: <Calendar size={25} className="mr-4" />, text: "Calendar", route: "/calendar" },
    { icon: <Trophy size={25} className="mr-4" />, text: "Quiz", route: "/Quizpage" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Account Name", route: "/Profileteacher" }, // Menambahkan properti route
  ];

  const handleNavClick = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-full mx-auto flex justify-between items-center p-5 shadow-sm transition-all border-b-[0.1px] border-neutral-500 border-solid mb-0 font-custom z-50 w-full font-Jakarta">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={handleNavClick} className="cursor-pointer lg:ml-7">
          <AiOutlineMenu size={20} />
        </div>
        <img className="w-4 ml-5 lg:w-6 lg:ml-6" src={Logo} alt="Logo"></img>
        <h1 className="text-md font-extrabold lg:w-[96.58px] text-black lg:text-xl lg:font-extrabold lg:tracking-[4.79px] px-2 font-custom lg:ml-4">WOLU</h1>
        <div>
          <img className="w-10 rounded-full h-10 ml-40 lg:ml-[58rem] 2xl:lg:ml-[97rem]" src={Icon} alt="Icon"></img>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" onClick={handleNavClick}></div> : ""}
      {/* Side drawer menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 lg:block"}>
        <AiOutlineClose onClick={handleNavClick} size={20} className="absolute right-[15.3rem] top-10 cursor-pointer" />
        <nav className="lg:block">
          <ul className="flex flex-col text-gray-800 py-5 mt-16 lg:block">
            {menuItems.map(({ icon, text, route }, index) => (
              <li key={index} className="text-md font-medium mt-3 flex cursor-pointer hover:text-indigo-600 w-full mx-auto px-8 p-5 hover:bg-indigo-600 hover:bg-opacity-10 hover:border-l-4 hover:border-indigo-600 hover:border-solid transition-all" onClick={handleNavClick}>
                <Link to={route} className="flex items-center w-full"> {/* Gunakan Link */}
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
