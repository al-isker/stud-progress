import './input-wrapper.scss';

const InputWrapper = ({children, className, title, error, htmlFor}) => {
  return (
    <section className="input-wrapper">
      {title && (
        <label className="input-wrapper__title" htmlFor={htmlFor}>
          {title}
        </label>
      )}

      <div className={className}>
        {children}
      </div>

      {error && (
        <div className="input-wrapper__error">
          {error}
        </div>
      )}
    </section>
  );
};

export default InputWrapper;