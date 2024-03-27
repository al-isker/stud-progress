import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomInput from "../../ui/customInput/CustomInput.jsx";

const InputTargetScore = ({control, errors, defaultValue}) => {
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
        min={1}
        max={5}
        defaultValue={defaultValue ?? 5}
      />
    </InputWrapper>
  );
};

export default InputTargetScore;