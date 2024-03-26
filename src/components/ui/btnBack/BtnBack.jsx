import {Link} from "react-router-dom";

import './btn-back.scss';

const BtnBack = ({className, to}) => {
  return (
    <Link
      className={className + ' btn-back'}
      to={to}
    >
      <span className="btn-back__icon material-symbols-outlined">
        keyboard_backspace
      </span>
    </Link>
  );
};

export default BtnBack;