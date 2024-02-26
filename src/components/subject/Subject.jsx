import {useState} from "react";

import SubjectTitle from "../subjectTitle/SubjectTitle";
import SubjectType from "../subjectType/SubjectType";
import SubjectListPoint from "../subjectListPoint/SubjectListPoint";
import SubjectAverageScore from "../subjectAverageScore/SubjectAverageScore";
import SubjectStatus from "../subjectStatus/SubjectStatus";
import SubjectBtn from "../subjectBtn/SubjectBtn";
import SubjectInputRadio from "../subjectInputRadio/SubjectInputRadio";

import './subject.css';

const Subject = ({className, title, type, maxScore, rating}) => {
  const [isEdit, setEdit] = useState(false);
  const [isAdd, setAdd] = useState(false);

  // поделить все три состояния на компоненты
  // так как будут ещё эффекты анимации

  return (
    <section className={className + ' subject'}>
      <SubjectTitle className="subject__title" title={title} />
      <SubjectType className="subject__type" type={type} />
      <SubjectListPoint className="subject__list-point" rating={rating} />

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

      {!isEdit && !isAdd && (
        <div className="subject__settings">
          <SubjectBtn
            className="subject__btn"
            title="редактировать"
            icon="edit"
            onClick={() => {
              // setEdit(true);
              console.log('click: edit subject');
            }}
          />
          <SubjectBtn
            className="subject__btn"
            title="добавить балл"
            icon="data_saver_on"
            onClick={() => {
              setAdd(true);
              console.log('click: add point subject');
            }}
          />
        </div>
      )}

      {isAdd && (
        <>
          <SubjectInputRadio
            className="subject__input-radio"
            name="newPoint"
            db={[...new Array(maxScore)].map((_, i) => i + 1)}
          />

          <div className="subject__settings">
            <SubjectBtn
              className="subject__btn"
              title="сохранить"
              icon="push_pin"
              onClick={() => {
                setAdd(false);
                console.log('click: save point subject');
              }}
            />
            <SubjectBtn
              className="subject__btn"
              title="добавить балл"
              icon="data_saver_on"
              onClick={() => {
                // setAdd(true);
                console.log('click: add one more point subject');
              }}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Subject;