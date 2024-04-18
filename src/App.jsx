import './styles/reset.css';
import './styles/common.scss';
import './styles/container.scss';

import {Routes, Route} from "react-router-dom";

import Layout from "./components/containers/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import AddScore from "./pages/addScore/AddScore.jsx";
import EditSubject from "./pages/editSubject/EditSubject.jsx";
import CreateSubject from "./pages/createSubject/CreateSubject.jsx";
import Stat from "./pages/stat/Stat.jsx";
import Rec from "./pages/rec/Rec.jsx";
import History from "./pages/history/History.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="home/" element={null}>
          <Route index element={<Home/>} />
          <Route path="subjects/:subjectId/add-point" element={<AddScore/>} />
          <Route path="subjects/:subjectId/edit" element={<EditSubject/>} />
          <Route path="subjects/create-subject" element={<CreateSubject/>} />
        </Route>
        <Route path="stat" element={<Stat/>} />
        <Route path="rec" element={<Rec/>} />
        <Route path="history" element={<History/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;