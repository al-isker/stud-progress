import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";
import {subjectScores} from '../../../config/subjectData.js';

const SelectScore = ({control, errors, isDisabled, defaultValue}) => {
  return (
    <InputWrapper
      error={errors.score?.message}
    >
      <CustomRadio
        control={control}
        name="score"
        options={subjectScores}
        isDisabled={isDisabled}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default SelectScore;