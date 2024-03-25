import './input-wrapper.css';

const InputWrapper = ({children, className, title, error, htmlFor}) => {
  return (
    <section className={(className ?? '') + ' input-wrapper'}>
      {title && (
        <label className="input-wrapper__title" htmlFor={htmlFor}>
          {title}
        </label>
      )}

      {children}

      {error && (
        <div className="input-wrapper__error">
          {error}
        </div>
      )}
    </section>
  );
};

export default InputWrapper;