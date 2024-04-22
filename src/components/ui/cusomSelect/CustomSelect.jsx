import Select from "react-select";
import {Controller} from "react-hook-form";

import './custom-select.scss';

const CustomSelect = (props) => {
  const {
    control,
    name,
    required,
    placeholder,
    options,
    idDisabled,
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
        }
      }}

      render={({field: {value, onChange}}) => (
        <Select
          classNamePrefix="custom-select"

          inputId={name}
          options={options}
          placeholder={placeholder ?? 'выбрать...'}
          isDisabled={idDisabled}
          defaultValue={options.find(item => item.label === defaultValue)}

          value={value?.label}
          onChange={newValue => onChange(newValue['value'])}
        />
      )}
    />
  );
};

export default CustomSelect;