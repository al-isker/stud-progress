import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import NewSubjectForm from "../newSubjectForm/NewSubjectForm.jsx";
import NewSubjectOpenBtn from "../newSubjectOpenBtn/NewSubjectOpenBtn.jsx";

import './new-subject.css';

const NewSubject = ({className}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={className + ' new-subject'}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="new-subject__wrapper"
            initial={{ height:      0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit=   {{ height:      0, opacity: 0 }}
            transition={{duration: 0.2}}
          >
            <NewSubjectForm
              onClickDelete={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="new-subject__wrapper"
            initial={{ height:      0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit=   {{ height:      0, opacity: 0 }}
            transition={{duration: 0.2}}

            onClick={() => setOpen(true)}
          >
            <NewSubjectOpenBtn />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NewSubject;