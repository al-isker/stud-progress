import BtnBack from "../../ui/btnBack/BtnBack.jsx";

import './header-form.scss';

const HeaderForm = ({className="", backTo="", title}) => {
  return (
    <header className={className + ' header-form'}>
      <BtnBack
        className="header-form__btn-back"
        to={backTo}
      />
      <h2 className="header-form__title">
        {title}
      </h2>
    </header>
  );
};

export default HeaderForm;