import {Controller} from "react-hook-form";

import './custom-radio.scss';

const CustomRadio = (props) => {
  const {
    control,
    name,
    required,
    options,
    isDisabled,
    defaultValue
  } = props;

  return (
    <div className="custom-radio" style={{"--amount-items": options.length}}>
      {options.map((option, i) => (
        <Controller
          key={i}
          control={control}
          name={name}

          rules={{
            required: {
              value: required ?? true,
              message: 'должен быть выбран один из вариантов'
            },
          }}

          defaultValue={defaultValue === option.value}

          render={({field}) => (
            <label className={
              'custom-radio__btn' +
              (field.value == option.value ? ' custom-radio__btn_active' : '') +
              (isDisabled ? ' custom-radio__btn_disabled' : '')
            }>
              <input
                className="custom-radio__input"
                type="radio"
                value={option.value}
                onChange={field.onChange}
                checked={field.value == option.value}
                disabled={isDisabled}
              />
              {option.label}
            </label>
          )}
        />
      ))}
    </div>
  );
};

export default CustomRadio;