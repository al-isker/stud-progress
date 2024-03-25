import {motion} from "framer-motion";

import './main-container.css';

const MainContainer = ({children, className}) => {
  const transition = {
    initial: {
      x: '-60px',
    },
    animate: {
      x: '0',
      transition: {
        type: "spring",
        mass: 0.4,
      },
    }
  };

  return (
    <motion.main
      className={className + ' main-container container'}
      variants={transition}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.main>
  );
};

export default MainContainer;