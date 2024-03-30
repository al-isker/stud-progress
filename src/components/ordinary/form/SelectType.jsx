import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomSelect from "../../ui/cusomSelect/CustomSelect.jsx";
import {subjectTypes} from "../../../config/constants.js";

const typeOptions = subjectTypes.map(item => ({
  value: item.id,
  label: item.type
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