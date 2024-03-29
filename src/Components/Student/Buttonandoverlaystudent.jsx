import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "../../assets/img/Account.jpg";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [link, setLink] = useState(""); // State untuk menyimpan link gambar kelas
  const [classes, setClasses] = useState([]);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  const handleAddClass = () => {
    if (!isValidLink(link)) {
      // Jika link tidak valid, tampilkan pesan toast
      toast.error("Link harus dimulai dengan 'https://', 'http://', atau 'www.'");
      return;
    }

    // Validasi berhasil, tambahkan kelas baru
    if (link === "") {
      // Jika link tidak disediakan, gunakan gambar acak dari Lorem Picsum
      const randomImage = getRandomImage();
      const newClass = {
        name: "New Class",
        description: "New Class Description",
        background: randomImage,
      };
      setClasses([...classes, newClass]);
    } else {
      // Buat objek kelas dengan link gambar yang dimasukkan
      const newClass = {
        name: "New Class",
        description: "New Class Description",
        background: link, // Menggunakan link gambar yang dimasukkan
      };
      setClasses([...classes, newClass]);
    }
    setShowOverlay(false);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddClass();
    }
  };

  // Fungsi untuk memeriksa apakah link dimulai dengan 'http://' atau 'https://' atau 'www.'
  const isValidLink = (link) => {
    return /^(https?:\/\/|www\.)/i.test(link);
  };

  // Fungsi untuk mendapatkan gambar acak dari Lorem Picsum
  const getRandomImage = () => {
    const width = 800; // Lebar gambar
    const height = 600; // Tinggi gambar
    const imageId = Math.floor(Math.random() * 1000); // ID gambar acak dari 1 hingga 1000
    return `https://picsum.photos/${width}/${height}?random=${imageId}`;
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

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedClassIndex, setSelectedClassIndex] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen z-0 relative font-custom font-Jakarta">
      <ToastContainer />
      <button
        className="fixed z-50 bottom-10 right-10 w-14 h-14 lg:h-16 lg:w-[15rem] lg:rounded-md lg:bg-white lg:text-indigo-600 lg:shadow-none lg:border-2 lg:border-indigo-600 lg:border-solid lg:hover:bg-indigo-600 lg:hover:text-white transition-all rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg"
        onClick={handleButtonClick}>
        <div className="hidden lg:block">Add Class</div> <div className="lg:hidden block">+</div>
      </button>

      {showOverlay && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 rounded-md shadow-lg p-7">
            <h2 className="text-xl font-bold mb-4">Add Class</h2>
            <form>
              <div className="mb-4 mt-7">
                <input placeholder="Enter Class Link" type="text" id="classLink" value={link} onChange={handleLinkChange} onKeyPress={handleKeyPress} className="w-full h-14 p-2 border border-gray-300 rounded-md focus:outline-none" />
              </div>
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

      <div className="h-full mt-14 z-0 overflow-x-hidden lg:mx-auto lg:h-full px-14">
        <div className="w-72 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:mx-auto lg:flex-row lg:align-middle lg:items-center lg:container">
          {classes.map((classItem, index) => (
            <div key={index} className="relative">
              <div className={`bg-white rounded-xl shadow-md p-4 border-2 border-solid lg:border-indigo-600 border-neutral-300 lg:w-[50rem] 2xl:w-[75rem] 2xl:h-[20rem] ${classes.length === 1 && index === 0 ? "mt-20" : ""}`}>
                {classItem.background && <img src="https://placehold.co/600x400" alt="Background" className="w-full h-28 object-cover flex mb-2 rounded-t-lg z-0 2xl:h-40" />}
                <img className="h-14 w-14 rounded-full -mt-10 ml-44 z-50 lg:ml-[42rem] 2xl:ml-[63rem] 2xl:w-20 2xl:h-20 2xl:-mt-11" src={Icon} alt="Icon" />
                <h1 className="text-2xl font-bold mb-2 -mt-1 -mr-20 2xl:mt-0 2xl:text-3xl">{classItem.name}</h1>
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
    </div>
  );
}

export default App;
