import './button.css';

const Button = ({className, title, icon, type, onClick, disabled}) => {
  return (
    <button
      className={(className ?? '') + ' button'}
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button__title">
        {title}
      </span>
      <span className="button__icon material-symbols-outlined">
        {icon}
      </span>
    </button>
  );
};

export default Button;