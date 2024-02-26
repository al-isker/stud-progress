import './subject-type.css';

const SubjectType = ({className, type}) => {
  return (
    <div className={className + ' subject-type'}>
      {type}
    </div>
  );
};

export default SubjectType;