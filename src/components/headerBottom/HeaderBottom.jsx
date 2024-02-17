import {useState} from 'react';

import NavBtn from "../navBtn/NavBtn.jsx";
import './header-bottom.css';

const pages = [
  'Главная',
  'Статистика',
  'Рекомендации',
  'История',
];

const HeaderBottom = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  const clickHandler = (n) => {
    setActiveBtn(n);
  }

  return (
    <header className="header-bottom">
      <div className="header-bottom__container container">
        <nav className="header-bottom__wrapper">
          {pages.map((item, i) => (
            <NavBtn
              key={i}
              isActive={i === activeBtn}
              onClick={() => clickHandler(i)}
            >
              {item}
            </NavBtn>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderBottom;