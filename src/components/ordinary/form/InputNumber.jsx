import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomInput from "../../ui/customInput/CustomInput.jsx";

const InputNumber = ({control, errors, min, max, defaultValue}) => {
  return (
    <InputWrapper
      title="Цель"
      error={errors.target?.message}
      htmlFor="target"
    >
      <CustomInput
        control={control}
        type="number"
        name="target"
        min={min}
        max={max}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default InputNumber;