import './header-top.scss';
import '../../../../styles/container.scss';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top__container container">
        <div className="header-top__logo">
          <h1>Stud Progress</h1>
        </div>
        <button type="button" className="header-top__profile">
          <span className="header-top__icon material-symbols-outlined">person</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;