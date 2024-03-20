import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landingpage";
import Wolu from "./Pages/Woluclass";
import Login from "./Pages/WoluLogin";
import Teacher from "./Pages/Teacherpage";
import Student from "./Pages/Studentpage";
import Classdetail from "./Pages/Detailclasspage";
import DetailTask from "./Pages/Detailtask";
import Poinpageteacher from "./Pages/Point";
import Quizpage from "./Pages/Quiz";
import Addquiz from "./Pages/Addquizpage";
import Quizupload from "./Pages/Quizuploadedpage";
import Quizdetail from "./Pages/Quizdetailpage";
import Memberpage from "./Pages/Memberpage";
import Forum from "./Pages/Forumpage";
import Teacherprofile from './Pages/Accountteacher'
import Calendar from './Pages/Calendar'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Wolu" element={<Wolu />}></Route>
        <Route path="/LoginWolu" element={<Login />}></Route>
        <Route path="/TeacherPage" element={<Teacher />}></Route>
        <Route path="/StudentPage" element={<Student />}></Route>
        <Route path="/Yourclass" element={<Classdetail />}></Route>
        <Route path="/Detailtask" element={<DetailTask />}></Route>
        <Route path="/Point" element={<Poinpageteacher />}></Route>
        <Route path="/Quizpage" element={<Quizpage />}></Route>
        <Route path="/Addquiz" element={<Addquiz />}></Route>
        <Route path="/Quizupload" element={<Quizupload />}></Route>
        <Route path="/Quizdetail" element={<Quizdetail />}></Route>
        <Route path="/Memberpage" element={<Memberpage />}></Route>
        <Route path="/Forum" element={<Forum />}></Route>
        <Route path="/Profileteacher" element={<Teacherprofile />}></Route>
        <Route path="/Calendar" element={<Calendar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
