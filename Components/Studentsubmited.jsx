import { useState } from "react";
import Iconeye from "../assets/img/solar_eye-linear.svg";
import { useNavigate } from "react-router-dom";

const StudentComponent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("submitted");
  const [students] = useState([
    { id: 1, name: "Alexander Agung", submitted: true, score: 90, iconUrl: "https://via.placeholder.com/30/FF5733" },
    { id: 2, name: "Aditya Widodo P", submitted: false, score: 0, iconUrl: "https://via.placeholder.com/30/FFC300" },
    { id: 3, name: "Farda Syarif Mubarok", submitted: false, score: 0, iconUrl: "https://via.placeholder.com/30/C70039" },
    { id: 4, name: "Rafif Naufal Aditya", submitted: true, score: 80, iconUrl: "https://via.placeholder.com/30/900C3F" },
    { id: 5, name: "Sekar Ayu Wardani", submitted: true, score: 95, iconUrl: "https://via.placeholder.com/30/581845" },
    { id: 6, name: "Unknown", submitted: false, score: 0, iconUrl: "https://via.placeholder.com/30/DAF7A6" },
    // Tambahkan data siswa lainnya di sini
  ]);

  const submittedStudents = students.filter((student) => student.submitted);
  const unsubmittedStudents = students.filter((student) => !student.submitted);

  return (
    <div className="container mx-auto px-4 py-8 lg:px-0 lg:-ml-1 lg:w-full lg:mt-20 2xl:mx-auto 2xl:px-32 font-Jakarta">
      <div className="flex mb-4 ml-2 mx-auto container items-center align-middle justify-center w-full lg:border-b-[0.3px] lg:border-neutral-500 lg:w-full 2xl:w-full 2xl:px-0 2xl:border-none">
        <button className={`mr-4 font-semibold py-2 px-4 text-sm lg:w-56 ${activeTab === "submitted" ? "bg-white text-indigo-600 border-b-2 border-indigo-600 text-sm" : "bg-white"}`} onClick={() => setActiveTab("submitted")}>
          Submitted
        </button>
        <button
          className={`mr-4 font-semibold py-2 px-4 text-sm ml-20 lg:ml-40 lg:w-56 2xl:ml-[10rem] ${activeTab === "unsubmitted" ? "bg-white text-indigo-600 border-b-2 border-indigo-600 text-sm" : "bg-white"}`}
          onClick={() => setActiveTab("unsubmitted")}>
          Unsubmitted
        </button>
      </div>
      {activeTab === "submitted" && (
        <div className="px-3 lg:px-80">
          <ul>
            {submittedStudents.map((student) => (
              <li key={student.id} className="mb-2 flex items-center mt-8 text-xs">
                <img src={student.iconUrl} alt="icon" className="mr-2 rounded-full lg:text-lg" />
                <span className="ml-2 text-xs lg:text-sm lg:ml-7">{student.name}</span>
                <span className="ml-auto text-xs lg:text-sm">{student.score}/100 </span>
                <div onClick={() => navigate("/Point")} className="ml-2 lg:mr-16">
                  <img src={Iconeye}></img>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "unsubmitted" && (
        <div className="px-3 lg:px-80">
          <ul>
            {unsubmittedStudents.map((student) => (
              <li key={student.id} className="mb-2 flex items-center mt-8 text-xs">
                <img src={student.iconUrl} alt="icon" className="mr-2 rounded-full lg:text-lg" />
                <span className="ml-2 text-xs lg:text-sm lg:ml-7">{student.name}</span>
                <span className="ml-auto text-xs">{student.score}/100</span>
                <div onClick={() => navigate("/Point")} className="ml-2 lg:mr-16">
                  <img src={Iconeye}></img>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentComponent;
