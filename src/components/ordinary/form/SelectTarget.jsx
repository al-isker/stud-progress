import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";
import {subjectScores} from "../../../config/subjectData.js";

const SelectTarget = ({control, errors, isDisabled, defaultValue}) => {
  return (
    <InputWrapper
      title="Цель"
      error={errors.target?.message}
    >
      <CustomRadio
        control={control}
        name="target"
        options={subjectScores}
        isDisabled={isDisabled}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default SelectTarget;