import {NavLink} from "react-router-dom";

import './nav-btn.css';

const NavBtn = ({className, children, to}) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) => className + (isActive ? ' nav-btn nav-btn_active' : ' nav-btn')}
    >
      <div className="nav-btn__text">
        {children}
      </div>
    </NavLink>
  );
};

export default NavBtn;