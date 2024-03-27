import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";

const SelectTarget = ({control, errors, defaultValue}) => {
  const options = [
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
  ];

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