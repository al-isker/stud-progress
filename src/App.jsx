import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './styles/reset.css';
import './styles/common.css';

import HeaderTop from './components/headerTop/HeaderTop.jsx';
import HeaderBottom from './components/headerBottom/HeaderBottom.jsx';
import General from "./components/general/General.jsx";

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <General />
    </>
  );
}

export default App;