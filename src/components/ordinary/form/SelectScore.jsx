import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";
import {subjectScores} from '../../../config/subjectData.js';

const options = subjectScores.map(item => ({
  value: item,
  label: String(item)
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