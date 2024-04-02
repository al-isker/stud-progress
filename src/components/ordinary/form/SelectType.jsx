import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomSelect from "../../ui/cusomSelect/CustomSelect.jsx";
import {subjectTypes} from "../../../config/subjectData.js";

const typeOptions = subjectTypes.map(item => ({
  value: String(item),
  label: String(item)
}));

const SelectType = ({control, errors, defaultValue}) => {
  return (
    <InputWrapper
      title="Тип сдачи"
      error={errors.type?.message}
      htmlFor="type"
    >
      <CustomSelect
        control={control}
        name="type"
        options={typeOptions}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default SelectType;