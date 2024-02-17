import './subject-btn.css';

const SubjectBtn = ({className, title, icon, onClick}) => {
  return (
    <button
      className={className + ' btn-settings'}
      type="button"
      onClick={onClick}
    >
      <span className="btn-settings__title">
        {title}
      </span>
      <span className="btn-settings__icon material-symbols-outlined">
        {icon}
      </span>
    </button>
  );
};

export default SubjectBtn;