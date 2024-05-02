import Button from "../../ui/button/Button.jsx";

import './edit-score.scss';

const EditScore = ({score, date, isDisabled}) => {
  const dateObj = new Date(date);

  return <>
    <div className="edit-score">
      <div className="edit-score__score">{score}</div>
      <div className="edit-score__date-time">
        <div className="edit-score__date">
          {dateObj.toLocaleString('default', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
        <span className="edit-score__line"></span>
        <div className="edit-score__date">
          {dateObj.toLocaleString('default', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </div>
      </div>
      <Button
        className="edit-score__button"
        icon="delete"
        onClick={() => console.log('click delete')}
        isDisabled={isDisabled}
      />
    </div>
  </>
}

export default EditScore;