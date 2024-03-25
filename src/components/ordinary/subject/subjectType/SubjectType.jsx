import './subject-type.css';

const SubjectType = ({className="", type}) => {
  return (
    <p className={className + ' subject-type'}>
      {type}
    </p>
  );
};

export default SubjectType;