import Error from "./Error.jsx";

const ErrorGet = ({message, refetch}) => {
  return (
    <Error
      message={message}
      buttons={[
        {title: 'обновить', onClick: refetch}
      ]}
    />
  );
};

export default ErrorGet;