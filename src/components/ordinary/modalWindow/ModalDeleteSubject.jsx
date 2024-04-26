import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useQuerySubject from '../../../queries/subjects.query.js';

import ModalWindow from "./ModalWindow.jsx";

const ModalDeleteSubject = () => {
  const {data: subjects, refetch} = useQuerySubject.getAll();

  const {subjectId} = useParams();
  const targetSubject = subjects?.find(item => item.id === subjectId).title;

  const {
    isPending: isDeletePending,
    mutate,
    isSuccess: isDeleteSuccess
  } = useQuerySubject.delete();

  const deleteSubject = () => mutate(subjectId);

  const navigate = useNavigate();
  const back = () => navigate('/subjects');

  useEffect(() => {
    if(isDeleteSuccess) {
      back();
    }
  }, [isDeleteSuccess]);

  return (
    <ModalWindow
      icon="delete"
      content={`Вы уверены, что хотите удалить предмет ${targetSubject}?`}

      isVisible={true}
      close={back}

      resolveTitle="удалить"
      onResolve={deleteSubject}
      isDisabled={isDeletePending}
    />
  );
};

export default ModalDeleteSubject;