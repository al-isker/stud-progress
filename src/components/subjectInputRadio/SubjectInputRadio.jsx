import {useState} from "react";

import './subject-input-radio.css';

const SubjectInputRadio = ({className="", name, db}) => {
  const [value, setValue] = useState(null);
  const [isError, setError] = useState(true);

  return (
    <div
      className={className + ' subject-input-radio'}
      style={{"--count-items": db.length}}
    >
      {db.map((item, i) => (
        <label
          key={i}
          className={value === item
            ? 'subject-input-radio__item subject-input-radio__item_active'
            : 'subject-input-radio__item'}
        >
          <input
            className="subject-input-radio__input"
            type="radio"
            name={name}
            value={item}
            onChange={() => {
              setValue(item);
              setError(false);
            }}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default SubjectInputRadio;