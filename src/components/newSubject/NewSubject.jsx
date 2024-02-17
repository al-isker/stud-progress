import './new-subject.css';

const NewSubject = ({onClick}) => {
  return (
    <button
      type="button"
      className="new-subject"
      onClick={onClick}
    >
      <span className="new-subject__icon material-symbols-outlined">add_box</span>
    </button>
  );
};

export default NewSubject;