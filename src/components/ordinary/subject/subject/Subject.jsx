import {Link} from "react-router-dom";

import SubjectTitle from "../subjectTitle/SubjectTitle.jsx";
import SubjectType from "../subjectType/SubjectType.jsx";
import SubjectListScore from "../subjectListScore/SubjectListScore.jsx";
import SubjectStatus from "../subjectStatus/SubjectStatus.jsx";
import SubjectAverageScore from "../subjectAverageScore/SubjectAverageScore.jsx";
import Button from "../../../ui/button/Button.jsx";

import './subject.css';

const Subject = ({className, title, type, maxScore, rating}) => {
  return (
    <section className={(className ?? '') + ' subject'}>
      <SubjectTitle className="subject__title" title={title} />
      <SubjectType className="subject__type" type={type} />
      <SubjectListScore className="subject__list-point" rating={rating} />

      <div className="subject__average-score-status">
        <SubjectStatus
          className="subject__status"
          rating={rating}
        />
        <SubjectAverageScore
          className="subject__average-score"
          maxScore={maxScore}
          rating={rating}
        />
      </div>

      <div className="subject__settings">
        <Link to="subject/edit" className="subject__link">
          <Button title="редактировать" icon="edit" />
        </Link>
        <Link to="subject/add-point" className="subject__link">
          <Button title="добавить балл" icon="data_saver_on" />
        </Link>
      </div>
    </section>
  );
};

export default Subject;