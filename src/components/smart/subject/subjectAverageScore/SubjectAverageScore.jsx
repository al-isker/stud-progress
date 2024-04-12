import './subject-average-score.scss';

const SubjectAverageScore = ({className, listScore}) => {
  if (!listScore.length) return null;

  const averScore = listScore.reduce((acc, n) => acc + n) / listScore.length;
  // const progress = averScore / maxScore * 100;
  const progress = averScore * 20;

  return (
    <div
      className={className + ' subject-average-score'}
      style={{'--progress': progress + '%'}}
    >
      <div className="subject-average-score__value">
        {/*{averScore.toFixed(maxScore.toString().length === 1 ? 1 : 0)}*/}
        {averScore.toFixed(1)}
      </div>
    </div>
  );
};

export default SubjectAverageScore;