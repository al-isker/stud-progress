import {useState} from "react";

import './subject-input-text.css';

const SubjectInputText = ({name, db, placeholder}) => {
  const [value, setValue] = useState({
    id: undefined,
    str: ''
  });
  const [suggest, setSuggest] = useState({
    show: false,
    elements: []
  });
  const [isValid, setValid] = useState('default');

  const validation = (e, db) => {
    const value = e.target.value.trim().toLowerCase();

    // пусть this ф-я принимает значение параметром bd
    // в качестве bd передавать suggest.elements, которые уже отсортированы
    // это позволит оптимизировать валидация
    return db.some(item => item.subject.toLowerCase() === value);
  }

  const handleOnChange = (e) => {
    setValue({
      ...value,
      str: e.target.value
    });

    let elements = [];

    if(e.target.value.trim().length) {
      elements = db.filter(item => (
        item.subject.toLowerCase().includes(e.target.value.trim().toLowerCase())
      ));

      console.log('filter...');
    }

    setSuggest({
      show: Boolean(elements.length),
      elements: elements
    });

    if (validation(e, suggest.elements)) setValid('valid');
  }

  const handleOnFocus = () => {
    setSuggest({
      ...suggest,
      show: Boolean(suggest.elements.length)
    });
  }

  const handleOnBlur = (e) => {
    setSuggest({
      ...suggest,
      show: true // вернуть false
    });

    if (!validation(e, suggest.elements)) setValid('invalid');
  }

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
        value={value.str}

        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />

      <span
        className={
          'material-symbols-outlined' + ' ' +
          'subject-input-text__icon' + ' ' +
          `subject-input-text__icon_${isValid}`
        }
      ></span>

      {suggest.show && (
        <div className="subject-input-text__suggest">
          {suggest.elements.length > 0 && suggest.elements.map(item => {
            return (
              <div
                key={item.id}
                className="subject-input-text__suggest__item"
              >{item.subject}</div>
            );
          })}
        </div>
      )}
    </label>
  );
};

export default SubjectInputText;