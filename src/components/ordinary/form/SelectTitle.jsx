import CustomSelect from "../../ui/cusomSelect/CustomSelect.jsx";
import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import {subjectTitles} from "../../../config/subjectData.js";

const subjectOptions = subjectTitles.map(item => ({
  value: String(item),
  label: String(item)
}));

const SelectTitle = ({control, isDisabled, errors, defaultValue}) => {
  return (
    <InputWrapper
      title="Предмет"
      error={errors.title?.message}
      htmlFor="title"
    >
      <CustomSelect
        control={control}
        name="title"
        options={subjectOptions}
        idDisabled={isDisabled}
        defaultValue={defaultValue?.title}
      />
    </InputWrapper>
  );
};

export default SelectTitle;