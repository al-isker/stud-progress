import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomInput from "../../ui/customInput/CustomInput.jsx";

const InputTargetScore = ({control, errors, defaultValue}) => {
  return (
    <InputWrapper
      title="Целевая отметка"
      error={errors.targetScore?.message}
      htmlFor="targetScore"
    >
      <CustomInput
        control={control}
        type="number"
        name="targetScore"
        min={1}
        max={5}
        defaultValue={defaultValue ?? 5}
      />
    </InputWrapper>
  );
};

export default InputTargetScore;