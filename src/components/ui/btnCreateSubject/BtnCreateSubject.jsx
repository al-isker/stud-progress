import {Link} from "react-router-dom";
import {motion} from 'framer-motion'

import './btn-create-subject.scss';

const BtnCreateSubject = ({className}) => {
  return (
    <motion.section
      className={className + ' btn-create-subject'}
      initial={{height: 0}}
      animate={{
        height: 'auto',
        transition: {
          delay: 0.3
        }
    }}
    >
      <Link
        className="btn-create-subject__link"
        to="subjects/create-subject"
      >
        <p className="btn-create-subject__text">Создать предмет</p>
        <span className="btn-create-subject__icon material-symbols-outlined">
          add_circle
        </span>
      </Link>
    </motion.section>
  );
};

export default BtnCreateSubject;