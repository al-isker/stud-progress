import {Controller} from "react-hook-form";

import './custom-radio.scss';

const CustomRadio = (props) => {
  const {
    control,
    name,
    required,
    options,
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
              field.value == option.value ?
                'custom-radio__btn custom-radio__btn_active' :
                'custom-radio__btn'
            }>
              <input
                className="custom-radio__input"
                type="radio"
                value={option.value}
                checked={field.value == option.value}
                onChange={field.onChange}
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