import {Link} from "react-router-dom";

import Button from "../../../ui/button/Button.jsx";

import './subject-settings.scss';

const SubjectSettings = ({className, id}) => {
  return (
    <div className={className + ' subject-settings'}>
      <Link
        to={`${id}/edit`}
        className="subject-settings__btn-edit"
      >
        <Button title="редактировать" icon="edit"/>
      </Link>

      <Link
        to={`${id}/add-point`}
        className="subject-sttings__btn-add-point"
      >
        <Button title="добавить балл" icon="data_saver_on"/>
      </Link>

      <Link
        to={`${id}/delete`}
        className="subject-settings__btn-delete"
      >
        <Button icon="delete" />
      </Link>
    </div>
  );
};

export default SubjectSettings;