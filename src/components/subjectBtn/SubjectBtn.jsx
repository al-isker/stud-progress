import './subject-btn.css';

const SubjectBtn = ({className, title, icon, onClick}) => {
  return (
    <button
      className={className + ' subject-btn'}
      type="button"
      onClick={onClick}
    >
      <span className="subject-btn__title">
        {title}
      </span>
      <span className="subject-btn__icon material-symbols-outlined">
        {icon}
      </span>
    </button>
  );
};

export default SubjectBtn;