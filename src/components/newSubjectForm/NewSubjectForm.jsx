import {subjectsDB, typesDB} from "../../assets/data.js";

import SubjectInputText from "../subjectInputText/SubjectInputText.jsx";
import SubjectInputRadio from "../subjectInputRadio/SubjectInputRadio.jsx";
import SubjectBtn from "../subjectBtn/SubjectBtn.jsx";

import './new-subject-form.css';

const NewSubjectForm = ({onClickDelete}) => {
  return (
    <div className="new-subject-form">
      <SubjectInputText name="Subject" db={subjectsDB} placeholder="Предмет" />
      <SubjectInputRadio name="Type" db={typesDB}/>
      <SubjectInputRadio name="Type" db={typesDB}/>
      {/*<SubjectInputRadio name="GradingScale" options={maxScoreDB}/>*/}

      <div className="new-subject-form__settings">
        <SubjectBtn
          className="new-subject-form__btn"
          title="удалить"
          icon="delete_forever"
          onClick={onClickDelete}
        />
        <SubjectBtn
          className="new-subject-form__btn"
          title="сохранить"
          icon="push_pin"
          onClick={() => console.log('click: save new subject')}
        />
      </div>
    </div>
  );
};

export default NewSubjectForm;