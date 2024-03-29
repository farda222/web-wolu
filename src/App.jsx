import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Home-Page/Landingpage";
import Wolu from "./Pages/auth/Woluclass";
import Login from "./Pages/auth/WoluLogin";
import Teacher from "./Pages/Teacher-Page/Teacherpage";
import Student from "./Pages/Student-Page/Studentpage";
import Point from './Pages/Teacher-Page/PointPage'
import Classdetail from "./Pages/Teacher-Page/Detailclasspage";
import DetailTask from "./Pages/Teacher-Page/Detailtask";
import Addquiz from "./Pages/Teacher-Page/Addquizpage";
import Quiz from './Pages/Teacher-Page/QuizPage'
import Quizupload from "./Pages/Teacher-Page/Quizuploadedpage";
import Quizdetail from "./Pages/Teacher-Page/Quizdetailpage";
import Memberpage from "./Pages/Teacher-Page/Memberpage";
import Forum from "./Pages/Teacher-Page/Forumpage";
import Teacherprofile from './Pages/Teacher-Page/Accountteacher'
import Calendar from './Pages/Teacher-Page/Calendar'
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
        <Route path="/Quizpage" element={<Quiz/>}></Route>
        <Route path="/Addquiz" element={<Addquiz />}></Route>
        <Route path="/Quizupload" element={<Quizupload />}></Route>
        <Route path="/Quizdetail" element={<Quizdetail />}></Route>
        <Route path="/Memberpage" element={<Memberpage />}></Route>
        <Route path="/Forum" element={<Forum />}></Route>
        <Route path="/Profileteacher" element={<Teacherprofile />}></Route>
        <Route path="/Point" element={<Point />}></Route>
        <Route path="/Calendar" element={<Calendar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
