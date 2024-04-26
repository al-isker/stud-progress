import Error from "./Error.jsx";

const ErrorRefetch = ({message, refetch}) => {
  return (
    <Error
      message={message}
      title="обновить"
      onClick={refetch}
    />
  );
};

export default ErrorRefetch;