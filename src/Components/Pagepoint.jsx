import Navbar from "../Components/NavbarUtama";
import { useNavigate } from "react-router-dom";
import Icontask from "../assets/img/Icontask.svg";
import Back from "../assets/img/mingcute_left-line.svg";
import Icon from "../assets/img/Account.jpg";
import Cardimage from "../assets/img/R.jpg";
import { useState } from "react";
const Point = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Memastikan nilai yang dimasukkan adalah angka antara 0 dan 100
    value = Math.min(Math.max(parseInt(value), 0), 100);
    setInputValue(value);
  };

  return (
    <div className="mb-5">
      <Navbar />
      <div className="font-Jakarta">
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
        <div className="flex mt-10 ml-6 lg:ml-96 2xl:ml-[40rem] 2xl:mt-16">
          <img className="w-10 h-10 rounded-full 2xl:w-14 2xl:h-14" src={Icon}></img>
          <h1 className="font-semibold mt-2 ml-4 2xl:text-lg 2xl:mt-3">Farda syarif mubarok</h1>
        </div>
        <div className="flex conatiner mx-auto items-center align-middle justify-center gap-6 ml-5 mr-5 mt-10 2xl:mt-20">
          <div>
            <img className="rounded-lg lg:w-72 2xl:w-96" src={Cardimage}></img>
            <div className="flex mt-3">
              <img className="w-5"></img>
              <h1 className="text-sm font-semibold ml-5">IMG_287393</h1>
            </div>
          </div>
          <div>
            <img className="rounded-lg lg:w-72 2xl:w-96" src={Cardimage}></img>
            <div className="flex mt-3">
              <img className="w-5"></img>
              <h1 className="text-sm font-semibold ml-5">IMG_287393</h1>
            </div>
          </div>
        </div>
        <div className="ml-5 lg:ml-[21.3rem] 2xl:ml-[33.5rem]">
          <h1 className="mt-12 font-semibold lg:text-xl">Points</h1>
          <div className="mt-2">
            <input type="number" min="0" max="100" className="w-24 h-10 lg:h-14 px-3 mr-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-600" placeholder=".../100" value={inputValue} onChange={handleInputChange} />
          </div>
        </div>
        <button className="w-fit h-fit bg-indigo-600 text-white font-semibold px-6 py-3 bottom-0 right-0 float-right mr-5 mt-16 lg:px-8 lg:py-4 2xl:mt-36 2xl:mr-12 2xl:px-10 2xl:py-5">Submit</button>
      </div>
    </div>
  );
};
export default Point;
