import './subject-list-point.css';

const SubjectListPoint = ({className, rating}) => {
  if(!rating.length) return null;

  return (
    <div className={className + ' subject-list-point'}>
      {rating.map((item, i) => (
        <div key={i} className="subject-list-point__item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubjectListPoint;