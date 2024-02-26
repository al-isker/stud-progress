import NavBtn from "../navBtn/NavBtn";
import './header-bottom.css';

const HeaderBottom = () => {
  return (
    <header className="header-bottom">
      <div className="header-bottom__container container">
        <nav className="header-bottom__wrapper">
          <NavBtn className="header-bottom__nav-btn" to="/">Главная</NavBtn>
          <NavBtn className="header-bottom__nav-btn" to="/statistics">Статистика</NavBtn>
          <NavBtn className="header-bottom__nav-btn" to="/recommendation">Рекомендации</NavBtn>
          <NavBtn className="header-bottom__nav-btn" to="/history">История</NavBtn>
        </nav>
      </div>
    </header>
  );
};

export default HeaderBottom;