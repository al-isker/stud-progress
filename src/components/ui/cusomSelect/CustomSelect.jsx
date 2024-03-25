import Select from "react-select";
import {Controller} from "react-hook-form";

import './custom-select.css';

const CustomSelect = ({control, name, required, placeholder, options, defaultValue}) => {
  return (
    <Controller
      control={control}
      name={name}

      rules={{
        required: {
          value: required ?? true,
          message: 'поле обязательно для заполнения'
        }
      }}

      render={({ field: {value, onChange} }) => (
        <Select
          classNamePrefix="custom-select"

          inputId={name}
          options={options}
          placeholder={placeholder ?? 'выбрать...'}
          defaultValue={options[defaultValue]}

          value={value?.label}
          onChange={newValue => onChange(newValue['value'])}
        />
      )}
    />
  );
};

export default CustomSelect;