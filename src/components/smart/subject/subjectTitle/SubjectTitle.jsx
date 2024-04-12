import {useState} from "react";

import './subject-title.scss'

const SubjectTitle = ({className="", title}) => {
  const [isShow, setShow] = useState(false);

  return (
    <h3
      className={className + (isShow ? ' subject-title subject-title_full' : ' subject-title')}
      onClick={() => setShow(!isShow)}
    >
      {title}
    </h3>
  );
};

export default SubjectTitle;