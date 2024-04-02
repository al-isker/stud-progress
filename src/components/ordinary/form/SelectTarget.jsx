import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";
import {subjectTargets} from "../../../config/subjectData.js";

const options = subjectTargets.map(item => ({
  value: item,
  label: String(item)
}));

const SelectTarget = ({control, errors, defaultValue}) => {
  return (
    <InputWrapper
      title="Цель"
      error={errors.target?.message}
    >
      <CustomRadio
        control={control}
        name="target"
        options={options}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default SelectTarget;