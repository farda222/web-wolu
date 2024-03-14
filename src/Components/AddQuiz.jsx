import { useState } from "react";
import Navbar from "../Components/NavbarUtama";
import Penicon from "../assets/img/Pen.svg";
import Imageicon from "../assets/img/Imageicon.svg";
import { useNavigate } from "react-router-dom";

const AddQuiz = () => {
  const [deadline, setDeadline] = useState("");
  const [timer, setTimer] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleTimerChange = (e) => {
    setTimer(e.target.value);
  };

  const handleImageUploadClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayCancel = () => {
    setShowOverlay(false);
  };

  const handleOverlayOK = () => {
    // Mengambil aksi untuk mengunggah gambar jika diperlukan
    setShowOverlay(false);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, questions.length + 1]);
  };

  return (
    <div className="font-Jakarta">
      <Navbar />
      <div className="flex justify-center mx-auto align-middle items-center container mt-7 gap-16 lg:gap-96 lg:mt-20 2xl:gap-[50rem]">
        <h1 className="text-xl font-semibold">English XI PPLG 1 - Quiz</h1>
        <div>
          <img src={Penicon} alt="Pen Icon" />
        </div>
      </div>
      <div className="flex justify-center mx-auto align-middle items-center container mt-20 gap-5 px-10 ml-3 2xl:px-0 2xl:ml-44 2xl:gap-28">
        <div className="flex flex-col space-y-4">
          <label htmlFor="deadline" className="text-gray-700 font-semibold text-xs 2xl:text-lg">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            placeholder="No Time Limit"
            className="border border-gray-300 rounded-md p-4 w-full 2xl:w-[100%] 2xl:text-lg text-xs bg-neutral-200 text-black"
            value={deadline}
            onChange={handleDeadlineChange}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label htmlFor="timer" className="text-gray-700 font-semibold text-xs 2xl:text-lg">
            Timer (minutes):
          </label>
          <input
            type="number"
            id="timer"
            name="timer"
            placeholder="No Time Limit"
            min="1"
            step="1"
            className="border border-gray-300 rounded-md p-4 w-[83%] 2xl:w-[100%] 2xl:text-lg text-xs bg-neutral-200 text-black"
            value={timer}
            onChange={handleTimerChange}
          />
        </div>
      </div>
      {questions.map((questionId) => (
        <div id={`Soal${questionId}`} className="container mt-16 px-5 flex mx-auto items-center align-middle justify-center" key={questionId}>
          <div className="flex flex-col space-y-4">
            <div className="relative flex items-center 2xl:w-full">
              <h1 className="ml-2 mr-1 2xl:text-lg">{questionId}.</h1>
              <input placeholder="Questions" type="text" id={`question${questionId}`} name={`question${questionId}`} className="rounded-md p-4 w-[83%] text-sm bg-white text-black 2xl:text-lg" />
              <div className="absolute top-0 right-0 h-full flex items-center mr-3 ">
                <label htmlFor={`image${questionId}`} className="cursor-pointer">
                  <img className="w-5 h-5 mt-1" src={Imageicon} alt="Upload Image" onClick={handleImageUploadClick} />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap ml-4 lg:ml-0">
              <div className="flex flex-col space-y-4 items-start w-1/2 2xl:space-y-8">
                <div className="flex space-x-4 items-center">
                  <input type="checkbox" id={`optionA${questionId}`} name={`answer${questionId}`} value="A" />
                  <input type="text" placeholder="A" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[100%] lg:h-12" />
                </div>
                <div className="flex space-x-4 items-center">
                  <input type="checkbox" id={`optionB${questionId}`} name={`answer${questionId}`} value="B" />
                  <input type="text" placeholder="B" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[95%] lg:h-12" />
                </div>
              </div>
              <div className="flex flex-col space-y-4 items-start w-1/2 2xl:space-y-8">
                <div className="flex space-x-4 items-center">
                  <input className="ml-2" type="checkbox" id={`optionC${questionId}`} name={`answer${questionId}`} value="C" />
                  <input type="text" placeholder="C" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[95%] lg:h-12" />
                </div>
                <div className="flex space-x-4 items-center">
                  <input className="ml-2" type="checkbox" id={`optionD${questionId}`} name={`answer${questionId}`} value="D" />
                  <input type="text" placeholder="D" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[95%] lg:h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="ml-7 mt-10 lg:ml-72">
        <button onClick={handleAddQuestion} className="px-4 py-2 lg:px-10 lg:py-4 border-indigo-600 border-2 bg-white text-indigo-600 rounded-sm text-xs">
          Add Question
        </button>
      </div>
      <div className="float-right mr-7 mb-10">
        <button onClick={() => navigate("/Quizupload")} className="bg-indigo-600 text-white px-7 py-4 text-xs lg:px-12 lg:py-6 lg:mr-20">
          Upload Quiz
        </button>
      </div>

      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center">
            <input type="file" id="image" name="image" />
            <div className="mt-4 flex gap-4">
              <button onClick={handleOverlayCancel} className="px-4 py-2 bg-red-500 text-white rounded-md">
                Cancel
              </button>
              <button onClick={handleOverlayOK} className="px-4 py-2 bg-green-500 text-white rounded-md">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddQuiz;
