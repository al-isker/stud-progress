import './button.scss';

const Button = ({className = "", title, icon, type, onClick, disabled}) => {
  return (
    <button
      className={
        className + ' button'
      }
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {title && (
        <span className="button__title">
          {title}
        </span>
      )}
      {icon && (
        <span className="button__icon material-symbols-outlined">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;