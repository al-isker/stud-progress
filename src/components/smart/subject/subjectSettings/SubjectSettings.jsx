import {Link} from "react-router-dom";

import Button from "../../../ui/button/Button.jsx";

import './subject-settings.scss';

const SubjectSettings = ({className, id, onDelete}) => {
  return (
    <div className={className + ' subject-settings'}>
      <Link
        to={`subjects/${id}/edit`}
        className="subject-settings__btn-edit"
      >
        <Button title="редактировать" icon="edit"/>
      </Link>

      <Link
        to={`subjects/${id}/add-point`}
        className="subject-sttings__btn-add-point"
      >
        <Button title="добавить балл" icon="data_saver_on"/>
      </Link>

      <Button
        className="subject-settings__btn-delete"
        icon="delete"
        onClick={onDelete}
      />
    </div>
  );
};

export default SubjectSettings;