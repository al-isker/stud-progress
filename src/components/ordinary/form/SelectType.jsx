import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomSelect from "../../ui/cusomSelect/CustomSelect.jsx";
import {typesFromDB} from "../../../data/data.js";

const typeOptions = typesFromDB.map(item => ({
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