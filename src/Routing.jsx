import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import Home from "./pages/home/Home.jsx";
import CreateSubject from "./pages/createSubject/CreateSubject.jsx";
import AddPoint from "./pages/addPoint/AddPoint.jsx";
import EditSubject from "./pages/editSubject/EditSubject.jsx";
import Stat from "./pages/stat/Stat.jsx";
import Rec from "./pages/rec/Rec.jsx";
import History from "./pages/history/History.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Layout from "./components/containers/layout/Layout.jsx";

const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout/>}>
          <Route path="home/" element={null}>
            <Route index element={<Home/>} />
            <Route path="subject/add-point" element={<AddPoint/>} />
            <Route path="subject/edit" element={<EditSubject/>} />
            <Route path="create-subject" element={<CreateSubject/>} />
          </Route>
          <Route path="stat" element={<Stat/>} />
          <Route path="rec" element={<Rec/>} />
          <Route path="history" element={<History/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
