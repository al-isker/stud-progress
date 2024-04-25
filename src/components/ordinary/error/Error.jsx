import Button from "../../ui/button/Button.jsx";
import {support} from "../../../config/API.js";

import '../../../styles/container.scss';
import './error.scss';
import MainWrapper from "../../containers/mainWrapper/MainWrapper.jsx";

const Error = ({message, title, onClick}) => {
  return (
    <MainWrapper className="error">
      <div className="error__message">
        <span>Error: </span>
        {message}
      </div>

      <div className="error__settings">
        <Button
          className="error__btn"
          title={title}
          onClick={onClick}
        />
        <Button
          className="error__btn"
          title="тех поддержка"
          onClick={() => {
            location.href = support;
          }}
        />
      </div>
    </MainWrapper>
  );
};

export default Error;