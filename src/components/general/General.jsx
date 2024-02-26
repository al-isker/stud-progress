import {Routes, Route} from "react-router-dom";

import Home from "../home/Home";

import './general.css';

const General = () => {
  return (
    <main className="general">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={null} />
        <Route path="/recommendation" element={null} />
        <Route path="/history" element={null} />
        <Route path="*" element={null} />
      </Routes>
    </main>
  );
};

export default General;