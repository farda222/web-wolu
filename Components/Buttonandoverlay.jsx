import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from "../assets/img/Account.jpg";
import { useNavigate } from "react-router-dom";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [className, setClassName] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const [background, setBackground] = useState("");
  const [backgroundFileName, setBackgroundFileName] = useState(""); // State untuk menyimpan nama file gambar yang dipilih
  const [classes, setClasses] = useState([]);
  const [selectedClassIndex, setSelectedClassIndex] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const inputFileRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  const handleAddClass = () => {
    if (className === "" || classDescription === "") {
      return;
    }

    const newClass = {
      name: className,
      description: classDescription,
      background: background,
    };

    setClasses([...classes, newClass]);
    setClassName("");
    setClassDescription("");
    setBackground("");
    setBackgroundFileName("");
    setShowOverlay(false);
  };

  const handleBackgroundChange = (e) => {
    if (e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadstart = () => {
      setUploadProgress(0);
    };

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        setUploadProgress(progress);
      }
    };

    reader.onload = (e) => {
      setBackground(e.target.result);
      setBackgroundFileName(file.name); // Mengatur nama file gambar yang dipilih
      setUploadProgress(100);
      showToast("Image uploaded successfully");
    };

    reader.onerror = () => {
      showToast("Failed to upload image");
    };

    reader.readAsDataURL(file);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    setSelectedClassIndex(index);
  };

  const handleReportClass = () => {
    console.log("Kelas dilaporkan");
    setOpenDropdownIndex(null);
  };

  const handleDeleteClass = () => {
    if (selectedClassIndex !== null) {
      const updatedClasses = [...classes];
      updatedClasses.splice(selectedClassIndex, 1);
      setClasses(updatedClasses);
      setOpenDropdownIndex(null);
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

  return (
    <div className="flex flex-col items-center justify-center h-screen z-0 relative font-custom font-Jakarta">
      <ToastContainer />
      <button
        className="fixed z-50 bottom-10 right-10 w-14 h-14 lg:h-16 lg:w-[15rem] lg:rounded-md lg:bg-white lg:text-indigo-600 lg:shadow-none lg:border-2 lg:border-indigo-600 lg:border-solid lg:hover:bg-indigo-600 lg:hover:text-white transition-all rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg"
        onClick={handleButtonClick}>
        <div className="hidden lg:block">Add Class</div> <div className="lg:hidden block">+</div>
      </button>

      <div className="h-full mt-14 z-0 overflow-x-hidden lg:mx-auto lg:h-full px-14">
        <div className="w-72 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:mx-auto lg:flex-row lg:align-middle lg:items-center lg:container">
          {classes.map((classItem, index) => (
            <div key={index} className="relative">
              <div className={`bg-white rounded-xl shadow-md p-4 border-2 border-solid lg:border-indigo-600 border-neutral-300 lg:w-[50rem] 2xl:w-[75rem] 2xl:h-[20rem] ${classes.length === 1 && index === 0 ? "mt-20" : ""}`}>
                {classItem.background && <img src={classItem.background} alt="Background" className="w-full h-28 object-cover flex mb-2 rounded-t-lg z-0 2xl:h-40" />}
                <img className="h-14 w-14 rounded-full -mt-10 ml-44 z-50 lg:ml-[42rem] 2xl:ml-[63rem] 2xl:w-20 2xl:h-20 2xl:-mt-11" src={Icon} alt="Icon" />
                <h1 onClick={() => navigate("/Yourclass")} className="text-2xl font-bold mb-2 -mt-1 -mr-20 2xl:mt-0 2xl:text-3xl">
                  {classItem.name}
                </h1>
                <p className="text-sm text-gray-600 mb-2 2xl:text-lg">0 Member</p>

                <button onClick={() => toggleDropdown(index)} className="absolute top-full right-0 -mt-14 mr-2 px-2 py-1 z-50" id="options-menu" aria-haspopup="true" aria-expanded={openDropdownIndex === index ? "true" : "false"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
                  </svg>
                </button>

                {openDropdownIndex === index && (
                  <div className="absolute top-full right-0 -mt-24 mr-1 bg-white rounded-md shadow-lg z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button onClick={handleReportClass} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">
                        Laporkan
                      </button>
                      <button onClick={() => handleDeleteClass(index)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">
                        Hapus Kelas
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 rounded-md shadow-lg p-7">
            <h2 className="text-xl font-bold mb-4">Add Class</h2>
            <form>
              <div className="mb-4 mt-7">
                <input placeholder="Class name" type="text" id="className" value={className} onChange={(e) => setClassName(e.target.value)} className="w-full h-14 p-2 border border-gray-300 rounded-md focus:outline-none" />
              </div>
              <div className="mb-4 mt-10">
                <textarea
                  id="classDescription"
                  placeholder="Description"
                  value={classDescription}
                  onChange={(e) => setClassDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none h-14"></textarea>
              </div>
              <div className="mb-4 mt-10">
                <label htmlFor="background" className="w-full h-14 border border-gray-300 rounded-md focus:outline-none flex items-center justify-between px-4">
                  <span>{backgroundFileName ? backgroundFileName : "Choose background image"}</span>
                  {backgroundFileName && (
                    <button type="button" onClick={() => {setBackground(""); setBackgroundFileName("");}} className="text-red-500">Delete</button>
                  )}
                  <input ref={inputFileRef} type="file" id="background" accept="image/*" onChange={handleBackgroundChange} className="sr-only" />
                </label>
                {/* Pratinjau gambar */}
                {background && (
                  <img src={background} alt="Background Preview" className="mt-2 w-full max-h-40 object-contain" />
                )}
              </div>
              {uploadProgress > 0 && uploadProgress < 100 && (
                <progress value={uploadProgress} max={100} className="w-full h-2 mt-2 mb-4"></progress>
              )}
              <div className="flex justify-end mt-16 gap-4">
                <button type="button" onClick={handleOverlayClose} className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                  Cancel
                </button>
                <button type="button" onClick={handleAddClass} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-600">
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
