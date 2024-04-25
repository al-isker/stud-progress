import Error from "./Error.jsx";
import {useNavigate} from "react-router-dom";

const ErrorBack = ({message, to}) => {
  const navigate = useNavigate();

  return (
    <Error
      message={message}
      title="назад"
      onClick={() => navigate(to)}
    />
  );
};

export default ErrorBack;