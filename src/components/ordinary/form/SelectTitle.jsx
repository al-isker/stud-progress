import CustomSelect from "../../ui/cusomSelect/CustomSelect.jsx";
import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import {subjectTitles} from "../../../config/constants.js";

const subjectOptions = subjectTitles.map(item => ({
  value: item.id,
  label: item.title
}));

const SelectTitle = ({control, errors, defaultValue}) => {
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
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default SelectTitle;