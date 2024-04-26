import {useEffect} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";

import Layout from "./components/containers/layout/Layout.jsx";
import Subjects from "./pages/subjects/Subjects.jsx";
import AddScore from "./pages/addScore/AddScore.jsx";
import EditSubject from "./pages/editSubject/EditSubject.jsx";
import CreateSubject from "./pages/createSubject/CreateSubject.jsx";
import Stat from "./pages/stat/Stat.jsx";
import Rec from "./pages/rec/Rec.jsx";
import History from "./pages/history/History.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

import './styles/reset.css';
import './styles/common.scss';
import './styles/container.scss';
import ModalDeleteSubject from "./components/ordinary/modalWindow/ModalDeleteSubject.jsx";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/subjects');
    }
  }, []);

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="subjects/" element={<Subjects/>}>
            <Route path=":subjectId/delete" element={<ModalDeleteSubject/>} />
          </Route>
          <Route path="subjects/:subjectId/add-score" element={<AddScore/>} />
          <Route path="subjects/:subjectId/edit" element={<EditSubject/>} />
          <Route path="subjects/create-subject" element={<CreateSubject/>} />

          <Route path="stat" element={<Stat/>} />
          <Route path="rec" element={<Rec/>} />
          <Route path="history" element={<History/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;