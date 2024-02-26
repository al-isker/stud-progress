import {forwardRef, useState} from "react";

import './subject-title.css'

const SubjectTitle = ({className, title}) => {
  const [isShow, setShow] = useState(false);

  return (
    <h2
      className={className + (isShow ? ' subject-title subject-title_full' : ' subject-title')}
      onClick={() => setShow(!isShow)}
    >{title}</h2>
  );
};

export default SubjectTitle;