import {useState} from "react";

import './subject-input-text.css';

const SubjectInputText = ({name, db, placeholder}) => {
  const [value, setValue] = useState('');
  const [isValid, setValid] = useState('default');
  const [isSuggest, setSuggest] = useState(false);

  const validation = (e) => db.includes(e.target.value.trim());

  return (
    <label className="subject-input-text">
      <input
        className={
          'subject-input-text__input' + ' ' +
          `subject-input-text__input_${isValid}`
        }
        type="text"
        autoComplete="off"
        name={name}
        placeholder={placeholder ?? ''}
        value={value}

        onChange={(e) => {
          setValue(e.target.value);

          if (validation(e)) setValid('valid');
        }}

        onFocus={() => {
          setSuggest(true);
        }}

        onBlur={(e) => {
          setValue(e.target.value);

          setSuggest(false);

          if (validation(e)) setValid('valid')
          else setValid('invalid');
        }}
      />

      <span
        className={
          'material-symbols-outlined' + ' ' +
          'subject-input-text__icon' + ' ' +
          `subject-input-text__icon_${isValid}`
        }
      ></span>

      {isSuggest && (
        <div className="subject-input-text__suggest">
          {db.filter(item => item.toLowerCase().includes(value.toLowerCase()))
            .slice(0, 5).map((item, i) => (
            <div key={i} className="subject-input-text__suggest__item">{item}</div>
          ))}
        </div>
      )}
    </label>
  );
};

export default SubjectInputText;