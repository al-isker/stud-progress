import CustomSelect from "../../ui/cusomSelect/CustomSelect.jsx";
import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import {subjectsFromDB} from "../../../data/data.js";

const subjectOptions = subjectsFromDB.map(item => ({
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