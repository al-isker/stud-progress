import BtnNav from "../../../ui/btnNav/BtnNav.jsx";

import './header-bottom.css';
import '../../../../styles/container.css';

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <nav className="header-bottom__container container">
        <BtnNav to="/home" className="header-bottom__btn-nav">Главная</BtnNav>
        <BtnNav to="/stat" className="header-bottom__btn-nav">Статистика</BtnNav>
        <BtnNav to="/rec" className="header-bottom__btn-nav">Рекомендации</BtnNav>
        <BtnNav to="/history" className="header-bottom__btn-nav">История</BtnNav>
      </nav>
    </div>
  );
};

export default HeaderBottom;