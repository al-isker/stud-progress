import BtnBack from "../../ui/btnBack/BtnBack.jsx";

import './header-form.scss';

const HeaderForm = ({className="", backTo="", title}) => {
  return (
    <header className={className + ' header-inner-page'}>
      <BtnBack
        className="header-inner-page__btn-back"
        to={backTo}
      />
      <h2 className="header-inner-page__title">
        {title}
      </h2>
    </header>
  );
};

export default HeaderForm;