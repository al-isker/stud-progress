import {useState} from "react";

import './subject-title.css'

const SubjectTitle = ({className, title}) => {
  const [isShow, setShow] = useState(false);

  const handleClick = () => setShow(!isShow);

  return (
    <h2
      className={className + (isShow ? ' title title_full' : ' title')}
      onClick={handleClick}
    >
      {title}
    </h2>
  );
};

export default SubjectTitle;