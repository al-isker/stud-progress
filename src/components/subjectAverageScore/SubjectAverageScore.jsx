import './subject-average-score.css';

const SubjectAverageScore = ({className, maxScore, rating}) => {
  if (!rating.length) return null;

  const averScore = rating.reduce((acc, n) => acc + n) / rating.length;

  return (
    <div
      className={className + ' subject-average-score'}
      style={{'--progress': averScore / maxScore * 100 + '%'}}
    >
      <div className="subject-average-score__value">
        {averScore.toFixed(maxScore.toString().length === 1 ? 1 : 0)}
      </div>
    </div>
  );
};

export default SubjectAverageScore;