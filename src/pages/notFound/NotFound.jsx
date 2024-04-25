import ErrorBack from "../../components/ordinary/error/ErrorBack.jsx";

const NotFound = () => {
  return (
    <ErrorBack
      message="Page is not found 404"
      to="/subjects"
    />
  );
};

export default NotFound;