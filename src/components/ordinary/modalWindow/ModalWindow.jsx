import {useCallback, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";

import Button from "../../ui/button/Button.jsx";

import './modal-window.scss';

const ModalWindow = (props) => {
  const {
    icon,
    content,
    isVisible,
    setIsVisible,
    resolveTitle,
    onResolve,
    isDisabled
  } = props;

  const wrapperRef = useRef(0);

  const close = () => setIsVisible(false);

  const handleKeyDown = (e) => e.key === 'Escape' && close();
  const handleClick = (e) => e.target === wrapperRef.current && close();

  return <>
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="overly"
          initial={{backdropFilter: 'blur(0px)'}}
          animate={{backdropFilter: 'blur(6px)'}}
          exit={{backdropFilter: 'blur(0px)'}}

          className="modal-delete-overly"
          ref={wrapperRef}
          onClick={handleClick}
        ></motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}

          className="modal-delete"
          onKeyDown={handleKeyDown}
        >
          <div className="modal-delete__icon material-symbols-outlined">{icon}</div>

          <p className="modal-delete__content">{content}</p>

          <div className="modal-delete__control">
            <Button
              title="отмена"
              onClick={close}
              disabled={isDisabled}
            />
            <Button
              title={resolveTitle}
              onClick={onResolve}
              disabled={isDisabled}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>;
};

export default ModalWindow;