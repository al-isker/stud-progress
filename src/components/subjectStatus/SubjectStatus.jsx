import './subject-status.css';

const SubjectStatus = ({className, rating}) => {
  if (!rating.length) return null;

  const lastScore = rating.at(-1);
  const averScore = rating.slice(0, -1).reduce((acc, n) => acc + n) / rating.slice(0, -1).length;
  const difference = lastScore - averScore;

  let status;

  if (difference < 0) {
    status = { trend: 'minus', icon: difference <= -1 ? 'stat_minus_3' : difference <= -0.5 ? 'stat_minus_2' : 'stat_minus_1' };
  } else if (difference > 0) {
    status = { trend: 'plus', icon: difference >= 1 ? 'stat_3' : difference >= 0.5 ? 'stat_2' : 'stat_1' };
  } else {
    status = { trend: 'normal', icon: 'check_indeterminate_small' };
  }

  return (
    <span
      className={className + ` subject-status subject-status_${status.trend} material-symbols-outlined`}
    >{status.icon}</span>
  );
};

export default SubjectStatus;