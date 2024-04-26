import {useEffect, useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useQuerySubject from '../../../queries/subjects.query.js';

import ModalWindow from "./ModalWindow.jsx";
import ErrorBack from "../error/ErrorBack.jsx";

const ModalDeleteSubject = () => {
  const {data: subjects, refetch} = useQuerySubject.getAll();

  const {subjectId} = useParams();

  const targetSubject = useMemo(() => {
    return subjects?.find(item => item.id === subjectId).title;
  }, [subjectId]);

  const {
    isPending: isDeletePending,
    mutate,
    isSuccess: isDeleteSuccess,
    error: deleteError
  } = useQuerySubject.delete();

  const deleteSubject = () => mutate(subjectId);

  const navigate = useNavigate();
  const back = () => navigate('/subjects');

  useEffect(() => {
    if(isDeleteSuccess) {
      refetch().then();
      back();
    }
  }, [isDeleteSuccess]);

  if(deleteError) return <ErrorBack message={error.message} to="/subjects" />;

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