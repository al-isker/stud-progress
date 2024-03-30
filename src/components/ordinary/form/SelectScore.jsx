import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";
import {subjectScores} from '../../../config/constants.js';

const options = subjectScores.map(item => ({
  value: item.id,
  label: item.score
}));

const SelectScore = ({control, errors}) => {
  return (
    <InputWrapper
      error={errors.score?.message}
    >
      <CustomRadio
        control={control}
        name="score"
        options={options}
      />
    </InputWrapper>
  );
};

export default SelectScore;