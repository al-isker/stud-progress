import React from 'react';

import './styles/reset.css';
import './styles/common.css';

import HeaderTop from './components/headerTop/HeaderTop.jsx';
import HeaderBottom from './components/headerBottom/HeaderBottom.jsx';
import General from "./components/general/General";

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