import {useMemo} from 'react';
import {motion} from "framer-motion";``
import {LinearProgress} from "@mui/material";

import './main-wrapper.scss';

const MainWrapper = ({children, className="", isPending, isVisible}) => {
  const transition = useMemo(() => {
    return {
      initial: {
        x: '-12vw',
      },
      animate: {
        x: '0',
        transition: {
          type: "spring",
          mass: 0.3,
        },
      }
    };
  }, []);

  return (
    <main className="main-wrapper">
      {isPending && (
        <div className="main-wrapper__linear-loading">
          <LinearProgress color="inherit" />
        </div>
      )}
      {(isVisible ?? true) && (
        <motion.div
          className={className + ' container'}
          style={{paddingTop: '1.4em'}}
          variants={transition}
          initial="initial"
          animate="animate"
        >
          {children}
        </motion.div>
      )}
    </main>
  );
};

export default MainWrapper;