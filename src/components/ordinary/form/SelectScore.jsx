import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";

const SelectScore = ({control, errors}) => {
  const options = [
    {label: 'нб', value: 'absent'},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
  ];

  return (
    <InputWrapper
      error={errors.score?.message}
    >
      <CustomRadio
        control={control}
        name="score"
        options={options}
      />
    </InputWrapper>
  );
};

export default SelectScore;