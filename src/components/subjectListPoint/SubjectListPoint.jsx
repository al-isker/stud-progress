import './subject-list-point.css';

const SubjectListPoint = ({className, rating}) => {
  return (
    <div className={className + ' list-point'}>
      {rating.map((item, i) => (
        <div
          key={i}
          className="list-point__item"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubjectListPoint;