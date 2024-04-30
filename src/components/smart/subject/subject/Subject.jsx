import {useMemo} from 'react';

import SubjectTitle from "../subjectTitle/SubjectTitle.jsx";
import SubjectType from "../subjectType/SubjectType.jsx";
import SubjectListScore from "../subjectListScore/SubjectListScore.jsx";
import SubjectStatus from "../subjectStatus/SubjectStatus.jsx";
import SubjectAverageScore from "../subjectAverageScore/SubjectAverageScore.jsx";
import SubjectSettings from "../subjectSettings/SubjectSettings.jsx";

import './subject.scss';

const Subject = ({className, id, title, type, listScore}) => {
  const listOnlyScore = useMemo(() => {
    return listScore.map(item => item.score);
  }, []);

  return (
    <section className={(className ?? '') + ' subject'}>
      <SubjectTitle className="subject__title" title={title} />
      <SubjectType className="subject__type" type={type} />
      <SubjectListScore className="subject__list-score" listScore={listOnlyScore} />

      {listOnlyScore.length ? (
        <div className="subject__average-score-status">
          <SubjectStatus
            className="subject__status"
            listScore={listOnlyScore}
          />
          <SubjectAverageScore
            className="subject__average-score"
            listScore={listOnlyScore}
          />
        </div>
      ) : null}

      <SubjectSettings className="subject__settings" id={id}/>
    </section>
  );
};

export default Subject;