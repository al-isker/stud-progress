import {useMemo} from "react";

import './subject-status.scss';

const SubjectStatus = ({className, listScore}) => {
  const averScore = useMemo(() => {
    return listScore.slice(0, -1).reduce((acc, n) => acc + n, 0) / listScore.slice(0, -1).length;
  }, []);

  const difference = listScore.at(-1) - averScore;

  const status = useMemo(() => {
    if (difference < 0) return {
      trend: 'minus',
      icon: difference <= -1 ? 'stat_minus_3' : difference <= -0.5 ? 'stat_minus_2' : 'stat_minus_1'
    }
    else if (difference > 0) return {
      trend: 'plus',
      icon: difference >= 1 ? 'stat_3' : difference >= 0.5 ? 'stat_2' : 'stat_1'
    }
    else return  {
      trend: 'normal',
      icon: 'check_indeterminate_small'
    }
  }, []);

  return (
    <span
      className={className + ` subject-status subject-status_${status.trend} material-symbols-outlined`}
    >{status.icon}</span>
  );
};

export default SubjectStatus;