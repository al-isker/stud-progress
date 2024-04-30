import {Controller} from "react-hook-form";

import './custom-radio.scss';

const CustomRadio = (props) => {
  const {
    className,
    control,
    name,
    required,
    options,
    isDisabled,
    defaultValue
  } = props;

  return (
    <div
      className={(className ?? '') + ' custom-radio'}
      style={{"--amount-items": options.length}}
    >
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

          defaultValue={defaultValue === option}

          render={({field}) => (
            <label className={
              'custom-radio__btn' +
              (field.value == option ? ' custom-radio__btn_active' : '') +
              (isDisabled ? ' custom-radio__btn_disabled' : '')
            }>
              <input
                className="custom-radio__input"
                type="radio"
                value={option}
                onChange={field.onChange}
                checked={field.value == option}
                disabled={isDisabled}
              />
              {option}
            </label>
          )}
        />
      ))}
    </div>
  );
};

export default CustomRadio;