import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";
import Button from "../../ui/button/Button.jsx";
import {subjectScores} from "../../../config/subjectData.js";

import './edit-score.scss';

const EditScore = ({control, isDisabled, defaultValue}) => {
  // убрать выборку и оставить только вариант удаления

  return <>
    <div className="edit-score">
      <CustomRadio
        className="edit-score__custom-radio"
        control={control}
        name="score"
        options={subjectScores}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
      />
      <span className="edit-score__line"></span>
      <Button
        className="edit-score__button"
        icon="delete"
        onClick={() => console.log('click delete')}
      />
    </div>
  </>
}

export default EditScore;