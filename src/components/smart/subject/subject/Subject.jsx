import SubjectTitle from "../subjectTitle/SubjectTitle.jsx";
import SubjectType from "../subjectType/SubjectType.jsx";
import SubjectListScore from "../subjectListScore/SubjectListScore.jsx";
import SubjectStatus from "../subjectStatus/SubjectStatus.jsx";
import SubjectAverageScore from "../subjectAverageScore/SubjectAverageScore.jsx";
import SubjectSettings from "../subjectSettings/SubjectSettings.jsx";

import './subject.scss';

const Subject = ({className, id, title, type, listScore}) => {
  return (
    <section className={(className ?? '') + ' subject'}>
      <SubjectTitle className="subject__title" title={title} />
      <SubjectType className="subject__type" type={type} />
      <SubjectListScore className="subject__list-score" listScore={listScore} />

      <div className="subject__average-score-status">
        <SubjectStatus
          className="subject__status"
          listScore={listScore}
        />
        <SubjectAverageScore
          className="subject__average-score"
          listScore={listScore}
        />
      </div>

      <SubjectSettings className="subject__settings" id={id} />
    </section>
  );
};

export default Subject;