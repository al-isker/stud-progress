import './subject-list-score.css';

const SubjectListScore = ({className, rating}) => {
  if(!rating.length) return null;

  return (
    <div className={className + ' subject-list-score'}>
      {rating.map((item, i) => (
        <div key={i} className="subject-list-score__item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubjectListScore;