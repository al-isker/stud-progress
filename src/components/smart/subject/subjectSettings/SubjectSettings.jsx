import {Link} from "react-router-dom";
import Button from "../../../ui/button/Button.jsx";

import './subject-settings.scss';
import ModalDelete from "../../../ordinary/modalDelete/ModalDelete.jsx";
import {useState} from "react";

const SubjectSettings = ({className, id}) => {
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

      <BtnDeleteSubject className="subject-settings__btn-delete" />
    </div>
  );
};


const BtnDeleteSubject = ({className}) => {
  const [isModal, setIsModal] = useState(false);

  const handleClickDelete = () => {
    console.log('click delete subject');
  }

  return (
    <>
      <Button
        className={className}
        icon="delete"
        onClick={() => setIsModal(true)}
      />
      <ModalDelete
        content="Вы уверены, что хотите удалить предмет?"
        isVisible={isModal}
        onCancel={() => setIsModal(false)}
        onDelete={handleClickDelete}
      />
    </>
  )
}


export default SubjectSettings;