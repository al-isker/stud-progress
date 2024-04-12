import './subject-type.scss';

const SubjectType = ({className="", type}) => {
  return (
    <p className={className + ' subject-type'}>
      {type}
    </p>
  );
};

export default SubjectType;