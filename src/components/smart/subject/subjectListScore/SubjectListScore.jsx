import './subject-list-score.scss';

const SubjectListScore = ({className, listScore}) => {
  if(!listScore.length) return null;

  return (
    <div className={className + ' subject-list-score'}>
      {listScore.map((item, i) => (
        <div key={i} className="subject-list-score__item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubjectListScore;