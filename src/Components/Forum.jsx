import Navbar from "../Components/NavbarUtama";
import { useNavigate } from "react-router-dom";
import Iconaccount from "../assets/img/Account.jpg";
import moment from "moment-timezone";
import { useState } from "react";
import Send from "../assets/img/Send.svg";

const Forum = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        sender: "user",
        timestamp: new Date().getTime(), // Menggunakan waktu saat ini dalam milidetik
        senderName: "Your Name", // Ganti dengan nama pengirim yang sesuai
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const isValidTimestamp = (timestamp) => {
    // Periksa apakah timestamp adalah angka dan lebih besar dari 0
    return !isNaN(timestamp) && timestamp > 0;
  };

  // Fungsi untuk memformat waktu
  const formatTime = (timestamp, timezone) => {
    // Periksa apakah timestamp valid sebelum memformatnya
    if (isValidTimestamp(timestamp)) {
      return moment(timestamp).tz(timezone).format("HH:mm");
    } else {
      return "Invalid Time";
    }
  };
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
            <a onClick={() => navigate("/Memberpage")} href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Member
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/Forum")} href="#" className="text-indigo-600 hover:text-indigo-600 border-b-4 border-indigo-600 w-56 font-semibold transition-all">
              Forum
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center align-middle items-center mx-auto container gap-6 mt-7 ml-1 font-Jakarta lg:mt-28 2xl:mt-32 2xl:ml-5">
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
      <div className="mx-auto rounded-lg overflow-hidden mt-5 w-full lg:px-64 lg:mt-10 2xl:px-96">
        <div className="flex">
          <div className="messages-container p-4 space-y-4 overflow-y-auto max-h-full bg-neutral-300 w-fit ml-4 rounded-lg rounded-tl-none">
            <p className="text-sm font-semibold">Alexander Agung</p>
            <h1 className="text-sm">Halo semuanya aku alex</h1>
          </div>
          <p className="text-xs ml-2 mt-[4.5rem]">07:09 AM</p>
        </div>
        <div className="messages-container p-4 space-y-4 overflow-y-auto max-h-[calc(100vh - 400px)]">
          {/* Pesan dari pengguna lain */}
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`message ${msg.sender === "user" ? "bg-indigo-600 text-white rounded-lg rounded-tr-none px-3 py-2" : "bg-white text-gray-800 rounded-lg rounded-tr-none"} max-w-[70%] lg:max-w-[80%] xl:max-w-[90%]`}
                style={{ wordWrap: "break-word" }}>
                <div className="flex justify-between items-center">
                  {msg.sender !== "user" && (
                    <div className="flex items-center">
                      <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-6 h-6 rounded-full mr-2" />
                      <p className="text-sm font-semibold">{msg.senderName}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold mb-2">{msg.sender === "user" ? "You" : msg.senderName}</p>
                  </div>
                </div>
                {msg.text}
                <p className="text-xs text-neutral-400 mt-3">{formatTime(msg.timestamp, "Asia/Jakarta")}</p> {/* Format waktu di bawah teks pesan */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-28 lg:px-60">
        <div className="input-container p-4 flex justify-center align-middle items-center mx-auto container bottom-0 left-0 mt-72 fixed bg-white border-2 border-neutral-300 w-full lg:w-[50%] lg:ml-80 lg:mb-10 lg:rounded-2xl lg:px-10 2xl:ml-[30rem]">
          <img className="w-9 h-9 rounded-full mr-3" src={Iconaccount} />
          <input type="text" value={message} onChange={handleMessageChange} onKeyDown={handleKeyPress} placeholder="Type your message..." className="flex-1 px-4 py-2 rounded-full bg-white max-w-[80%] lg:max-w-[90%] overflow-hidden" />
          <button onClick={handleSendMessage} className="px-4 py-2 bg-white text-white rounded-full focus:outline-none hover:bg-neutral-100 transition-all">
            <img className="w-7 h-7" src={Send} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forum;
