import {useState} from "react";

import SubjectTitle from "../subjectTitle/SubjectTitle.jsx";
import SubjectType from "../subjectType/SubjectType.jsx";
import SubjectListPoint from "../subjectListPoint/SubjectListPoint.jsx";
import AverageScore from "../averageScore/AverageScore";
import SubjectBtn from "../subjectBtn/SubjectBtn.jsx";

import './subject.css';

const Subject = ({title, type, rating}) => {
  const [form, setForm] = useState(
    <div className="subject__settings">
      <SubjectBtn
        className="subject__btn"
        title="редактировать"
        icon="edit"
        onClick={() => setForm(formComponent)}
      />
      <SubjectBtn
        className="subject__btn"
        title="добавить"
        icon="data_saver_on"
        onClick={() => setForm(formComponent)}
      />
    </div>
  );

  const formComponent = (<div>open From</div>);

  return (
    <section className="subject">
      <SubjectTitle className="subject__title" title={title} />
      <SubjectType className="subject__type" type={type} />
      <SubjectListPoint className="subject__list-point" rating={rating} />
      <AverageScore className="subject__average-score" rating={rating} />
      {form}
    </section>
  );
};

export default Subject;