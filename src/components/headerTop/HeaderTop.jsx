import './header-top.css';

const HeaderTop = () => {
  return (
    <header className="header-top">
      <div className="container">
        <div className="header-top__wrapper">
          <div className="header-top__logo">
            <h1>Stud Progress</h1>
          </div>
          <button type="button" className="header-top__profile">
            <span className="header-top__icon material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;