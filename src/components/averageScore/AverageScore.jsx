import './average-score.css';

const AverageScore = ({className, rating}) => {
  const getAverageScore = (arr) => arr.reduce((acc, n) => acc + n) / arr.length;

  return (
    <div className={className + ' average-score'}>
      {/*<span className="average-score__status_minus average-score__status material-symbols-outlined">*/}
      {/*  stat_3*/}
      {/*  stat_2*/}
      {/*  stat_minus_2*/}
      {/*  stat_minus_3*/}
      {/*</span>*/}


      <div
        className="average-score__progress-circle"
        // как-то передавать процентное значение прогресса
      >
        <div className="average-score__value">
          {getAverageScore(rating).toFixed(1)}
        </div>
      </div>

    </div>
  );
};

export default AverageScore;