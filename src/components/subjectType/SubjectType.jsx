import './subject-type.css';

const SubjectType = ({className, type}) => {
  return (
    <div
      className={className + ' type'}
    >
      {type}
    </div>
  );
};

export default SubjectType;