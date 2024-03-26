import {Controller} from "react-hook-form";

import './custom-input.scss';

const CustomInput = (props) => {
  const {
    control,
    type,
    name,
    required,
    min,
    max,
    minLength,
    maxLength,
    placeholder,
    defaultValue
  } = props;


  return (
    <Controller
      control={control}
      name={name}

      rules={{
        required: {
          value: required ?? true,
          message: 'поле обязательно для заполнения'
        },
        minLength: {
          value: minLength,
          message: `должно быть не менее ${minLength}`
        },
        maxLength: {
          value: maxLength,
          message: `должно быть не менее ${maxLength}`
        },
        min: {
          value: min,
          message: `значение не может быть меньше, чем ${min}`
        },
        max: {
          value: max,
          message: `значение не может быть больше, чем ${max}`
        }
      }}

      defaultValue={defaultValue ?? ""}

      render={({ field }) => (
        <input
          className="input-number"
          type={type}
          id={name}
          placeholder={placeholder ?? ""}
          {...field}
        />
      )}
    />
  );
};

export default CustomInput;