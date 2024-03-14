import { useState } from "react";
import Icontask from "../assets/img/Icontask.svg"; // Import gambar
import { useNavigate } from "react-router-dom";
function TaskManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    points: "",
    deadline: "",
    link: "",
    createdAt: "",
  });

  const [isLinkOverlayOpen, setIsLinkOverlayOpen] = useState(false);
  const [linkFormData, setLinkFormData] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLinkInputChange = (event) => {
    setLinkFormData(event.target.value);
  };

  const handleLinkConfirm = () => {
    setFormData({
      ...formData,
      link: linkFormData,
    });
    setIsLinkOverlayOpen(false);
    setLinkFormData("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      ...formData,
      createdAt: new Date().toLocaleDateString(), // Tanggal dibuat
    };
    setTasks([newTask, ...tasks]); // Menambahkan task baru ke depan array
    setIsOpen(false);
    setFormData({
      heading: "",
      description: "",
      points: "",
      deadline: "",
      link: "",
      createdAt: "",
    });
  };

  return (
    <div className="container mx-auto mt-8 font-Jakarta items-center align-middle flex-row">
      {tasks.map((task, index) => (
        <div key={index} onClick={() => navigate("/Detailtask")} className="border rounded-lg p-4 mb-4 flex w-[23rem] items-center align-middle container mx-auto lg:w-[40rem] 2xl:w-[50rem]">
          <div className="mr-4 lg:mr-7">
            <img src={Icontask} alt="Task Icon" /> {/* Menampilkan gambar */}
          </div>
          <div className="lg:mt-3">
            <div className="font-bold mb-2">{task.heading}</div>
            <div className="mb-2 hidden">{task.description}</div>
            <div className="flex justify-between mb-2">
              <div className="hidden">Points: {task.points}</div>
              <div className="mb-2 text-xs">{task.createdAt} -</div>
              <div className="text-xs ml-[0.20rem]">
                <span className="text-red-500 font-semibold">Deadline:</span> {task.deadline}
              </div>
            </div>
            <div className="hidden">
              <a href={task.link} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-xs hover:bg-indigo-600 transition-all hover:text-white text-indigo-600 border-2 border-indigo-600 border-solid py-3 px-7 rounded ml-3 lg:px-16 lg:py-4 lg:ml-80 lg:mt-10 lg:mb-10 2xl:ml-64">
        Add Task
      </button>

      {/* Form untuk menambahkan task */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 py-8 rounded-lg relative w-[95%] 2xl:w-[65%]">
            <h2 className="text-lg font-bold mb-10">Add Task</h2>
            <form onSubmit={handleSubmit}>
              {/* Form input fields */}
              <div className="lg:flex">
                <div className="lg:flex-row">
                  <div className="mb-4">
                    <input placeholder="Heading" type="text" id="heading" name="heading" value={formData.heading} onChange={handleInputChange} className="border rounded px-7 py-5 w-full text-xs font-semibold lg:w-[35rem]" required />
                  </div>
                  <div className="mb-10">
                    <textarea placeholder="Description" id="description" name="description" value={formData.description} onChange={handleInputChange} className="border rounded px-7 py-5 w-full text-xs font-semibold lg:w-[35rem] lg:h-[11rem]" rows="4" required />
                  </div>
                </div>
                <div className="lg:flex-row lg:ml-10 lg:-mt-1">
                  <div className="mb-4">
                    <label htmlFor="points" className="block text-gray-700 font-bold text-sm">
                      Points
                    </label>
                    <input type="number" id="points" name="points" value={formData.points} onChange={handleInputChange} className="border px-3 py-2 mx-auto rounded bg-gray-100 lg:px-5 lg:py-3" min="0" max="100" required />
                  </div>
                  <div className="mb-10">
                    <label htmlFor="deadline" className="block text-gray-700 font-bold text-sm">
                      Deadline
                    </label>
                    <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleInputChange} className="border rounded px-3 py-2 w-full bg-gray-100 lg:px-16 lg:py-3" required />
                  </div>
                </div>
              </div>
              {/* Tombol untuk upload image */}
              <div className="mb-4">
                <div className="flex items-center justify-between lg:float-left">
                  <input type="file" id="image" name="image" className="hidden" />
                  <label htmlFor="image" className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded cursor-pointer text-xs">
                    Upload Image
                  </label>
                  <button type="button" onClick={() => setIsLinkOverlayOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-10 rounded cursor-pointer text-xs lg:ml-10">
                    Paste Link
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-[2.66rem] rounded text-xs lg:right-0 lg:top-0 lg:absolute lg:mt-10 lg:mr-10">
                  Assigment
                </button>
                <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded lg:ml-[65rem] lg:absolute lg:-mt-14" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isLinkOverlayOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative">
            {/* Link Overlay Content */}
            <h2 className="text-lg font-bold mb-4">Paste Link</h2>
            <div className="mb-4">
              <input type="text" value={linkFormData} onChange={handleLinkInputChange} placeholder="Paste link here" className="border rounded px-3 py-2 w-full" />
            </div>
            <div className="flex justify-between">
              <button onClick={handleLinkConfirm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Confirm
              </button>
              <button onClick={() => setIsLinkOverlayOpen(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskManager;
