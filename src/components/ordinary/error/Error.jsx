import Button from "../../ui/button/Button.jsx";
import {support} from "../../../config/API.js";

import '../../../styles/container.scss';
import './error.scss';

const Error = ({message, buttons}) => {

  return (
    <div className="error container">
      <div className="error__message">
        <span>Error: </span>
        {message}
      </div>

      <div className="error__settings">
        {buttons.map(btn => (
          <Button
            className="error__btn"
            title={btn.title}
            onClick={btn.onClick}
          />
        ))}
        <Button
          className="error__btn"
          title="тех поддержка"
          onClick={() => {
            location.href = support;
          }}
        />
      </div>
    </div>
  );
};

export default Error;