import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import SubjectInputRadio from "../subjectInputRadio/SubjectInputRadio.jsx";
import SubjectBtn from "../subjectBtn/SubjectBtn";
import {subjectsDB, typesDB, maxScoreDB} from '../../assets/data.js';

import './new-subject.css';
import SubjectInputText from "../subjectInputText/SubjectInputText.jsx";

const NewSubject = ({className}) => {
  const [isCreation, setCreation] = useState(false);

  return (
    <section className={className + ' new-subject'}>
      <AnimatePresence>
        {isCreation && (
          <motion.div
            initial={{ height:      0, paddingBlock:      0, opacity: 0 }}
            animate={{ height: 'auto', paddingBlock: '12px', opacity: 1 }}
            exit=   {{ height:      0, paddingBlock:      0, opacity: 0 }}
            transition={{duration: 0.15}}
            className="new-subject__creation"
          >
            <SubjectInputText name="Subject" db={subjectsDB} placeholder="Предмет" />
            <SubjectInputRadio name="Type" db={typesDB}/>
            {/*<SubjectInputRadio name="GradingScale" options={maxScoreDB}/>*/}

            <div className="new-subject__settings">
              <SubjectBtn
                className="new-subject__btn"
                title="удалить"
                icon="delete_forever"
                onClick={() => {
                  setCreation(false);
                  console.log('click: delete new subject')
                }}
              />
              <SubjectBtn
                className="new-subject__btn"
                title="сохранить"
                icon="push_pin"
                onClick={() => console.log('click: save new subject')}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isCreation && (
          <motion.button
            className="new-subject__not-creation"
            initial={{ height:  0, opacity: 0 }}
            animate={{ height: 50, opacity: 1 }}
            exit=   {{ height:  0, opacity: 0 }}
            transition={{duration: 0.15}}
            type="button"
            onClick={() => setCreation(true)}
          >
            <span className="new-subject__icon material-symbols-outlined">add_box</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NewSubject;