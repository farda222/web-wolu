import Navbar from "../Components/NavbarUtama";
import Icontask from "../assets/img/Icontask.svg";
import Back from "../assets/img/mingcute_left-line.svg";
import Cardimage from "../assets/img/Gambar-card.svg";
import { useNavigate } from "react-router-dom";
import Submit from "../Components/Studentsubmited";
import Pdf from "../assets/img/Convert_PDF_2.svg";
import Link from "../assets/img/Link_Chain.svg";

const Detailtask = () => {
  const navigate = useNavigate();
  return (
    <div className="font-Jakarta">
      <Navbar />
      <div onClick={() => navigate("/Yourclass")} className="absolute mt-12 ml-4">
        <img className="w-7 lg:ml-20 lg:w-10" src={Back}></img>
      </div>
      <div className="flex mx-auto container align-middle items-center justify-center mt-10 lg:-ml-24 2xl:ml-20">
        <img className="ml-3 w-9 lg:w-11" src={Icontask} />
        <div className="ml-5 -mt-1 flex-row">
          <h1 className="font-semibold text-sm lg:text-lg">English Listening - Chapter 2</h1>
          <p className="text-[10px] mt-1 font-semibold">
            12 February 2024 - <span className="text-red-500">Deadline</span> 15 February 2024{" "}
          </p>
        </div>
      </div>
      <div className="bg-indigo-600 py-[0.5px] w-60 ml-24 mt-5 flex mx-auto container align-middle items-center justify-center lg:ml-[29rem] lg:w-80 2xl:ml-[47.7rem]"></div>
      <div className="flex mx-auto container align-middle items-center justify-center lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container lg:w-full">
        <h1 className="text-xs w-80 mt-10 lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container lg:w-full">Please complete the assignment I have given and remain silent in the class during my teaching hours.</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-10 lg:w-[30rem] lg:h-20 lg:mt-20">
        <img className="-ml-1 w-24 lg:-ml-[8rem] lg:w-32" src={Cardimage}></img>
        <h1 className="mr-3 text-xs lg:text-sm lg:ml-4">Learn to read and listen to English</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-4 lg:w-[30rem] lg:h-fit">
        <div className="p-6 px-7 bg-neutral-300 lg:w-28 lg:-ml-28">
          <img className="w-5 lg:w-5 lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container" src={Pdf} />
        </div>
        <h1 className="mr-3 text-xs px-5 lg:text-sm">Click to download the file task</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-4 lg:w-[30rem] lg:h-fit">
        <div className="p-6 px-7 bg-neutral-300 lg:w-28 lg:-ml-28">
          <img className="w-5 lg:w-5 lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container" src={Link} />
        </div>
        <a className="mr-3 text-xs text-indigo-600 px-7 lg:text-sm" href="https://www.adidas.com/us" target="_blank" rel="noopener noreferrer">
          https://www.adidas.com...
        </a>
      </div>
      <Submit />
    </div>
  );
};

export default Detailtask;
