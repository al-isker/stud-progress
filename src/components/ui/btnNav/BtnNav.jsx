import {Link, useMatch} from "react-router-dom";

import './btn-nav.scss';

const BtnNav = ({className="", children, to}) => {
  const match = useMatch({
    path: to,
    end: to.length === 1
  });

  return (
    <Link
      to={to}
      className={className + (match ? ' btn-nav btn-nav_active' : ' btn-nav')}
    >
      <div className="btn-nav__text">
        {children}
      </div>
    </Link>
  );
};

export default BtnNav;