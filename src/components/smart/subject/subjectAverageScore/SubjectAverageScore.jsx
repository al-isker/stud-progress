import {useMemo} from "react";

import './subject-average-score.scss';

const SubjectAverageScore = ({className, listScore}) => {
  const averScore = useMemo(() => {
    return listScore.reduce((acc, n) => acc + n, 0) / listScore.length;
  }, []);

  return (
    <div
      className={className + ' subject-average-score'}
      style={{'--progress': `${averScore * 20}%`}}
    >
      <div className="subject-average-score__value">
        {/*{averScore.toFixed(maxScore.toString().length === 1 ? 1 : 0)}*/}
        {averScore.toFixed(1)}
      </div>
    </div>
  );
};

export default SubjectAverageScore;