import {useCallback, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import CustomRadio from "../../ui/customRadio/CustomRadio.jsx";
import Button from "../../ui/button/Button.jsx";
import {subjectScores} from "../../../config/subjectData.js";

import './edit-score.scss';

const EditScore = ({control, name, score, date, setValue, isDisabled}) => {
  const [isShow, setIsShow] = useState(true);

  const handleDeleteClick = useCallback(() => {
    setValue(name, 'deleted');
    setIsShow(!isShow);
  }, []);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          animate={{
            x: '0',
            height: 'auto',
          }}
          exit={{
            x: '-100vw',
            height: '0',
          }}
        >
          <div className="edit-score">
            <div className="edit-score__date">
            <span>
              {new Date(date).toLocaleString('default', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
              <span>
              {new Date(date).toLocaleString('default', {
                hour: 'numeric',
                minute: 'numeric'
              })}
            </span>
            </div>
            <div className="edit-score__control">
              <CustomRadio
                className="edit-score__custom-radio"
                control={control}
                name={name}
                defaultValue={score}
                options={subjectScores}
                required={false}
                isDisabled={isDisabled}
              />
              <span className="edit-score__line"></span>
              <Button
                className="edit-score__button"
                icon="delete"
                onClick={handleDeleteClick}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EditScore;