import Error from "./Error.jsx";

const ErrorPost = ({message, back}) => {
  return (
    <Error
      message={message}
      buttons={[
        {title: 'назад', onClick: back}
      ]}
    />
  );
};

export default ErrorPost;