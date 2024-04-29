import {useEffect, useRef} from "react";
import {motion} from "framer-motion";

import Button from "../../ui/button/Button.jsx";

import './modal-window.scss';

const ModalWindow = (props) => {
  const {
    icon,
    content,
    isVisible,
    close,
    resolveTitle,
    onResolve,
    isDisabled
  } = props;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  const wrapperRef = useRef();

  const handleClick = (e) => e.target === wrapperRef.current && close();

  return (
    isVisible && (<>
      <motion.div
        key="overly"
        initial={{backdropFilter: 'blur(0px)'}}
        animate={{backdropFilter: 'blur(6px)'}}

        className="modal-delete-overly"
        ref={wrapperRef}
        onClick={handleClick}
      ></motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="modal-delete"
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
    </>)
  );
};

export default ModalWindow;