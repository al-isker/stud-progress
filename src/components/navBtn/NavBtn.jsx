import './nav-btn.css';

const NavBtn = ({children, isActive, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? 'nav-btn nav-btn_active' : 'nav-btn'}
    >
      <div className="nav-btn__text">
        {children}
      </div>
    </button>
  );
};

export default NavBtn;