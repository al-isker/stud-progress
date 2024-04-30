import {useCallback, useEffect, useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useQuerySubject from '../../../queries/subjects.query.js';

import ModalWindow from "./ModalWindow.jsx";
import ErrorBack from "../error/ErrorBack.jsx";

const ModalDeleteSubject = () => {
  const {subjectId} = useParams();

  const {data: subjects, error: getError, refetch: getRefetch} = useQuerySubject.getAll();

  const targetSubjectTitle = useMemo(() => {
    return subjects?.find(item => item.id === subjectId).title;
  }, [subjects]);

  const {
    isPending: isDeletePending,
    mutate,
    isSuccess: isDeleteSuccess,
    error: deleteError
  } = useQuerySubject.delete();

  const deleteSubject = useCallback(() => mutate(subjectId), []);

  const navigate = useNavigate();
  const back = () => navigate('/subjects');

  useEffect(() => {
    if(isDeleteSuccess) {
      getRefetch().then();
      back();
    }
  }, [isDeleteSuccess]);


  if(getError) return <ErrorBack message={getError?.message} to="/subjects" />;
  if(deleteError) return <ErrorBack message={deleteError?.message} to="/subjects" />;

  return (
    <ModalWindow
      icon="delete"
      content={`Вы уверены, что хотите удалить предмет ${targetSubjectTitle ?? ''}?`}

      isVisible={true}
      close={back}

      resolveTitle="удалить"
      onResolve={deleteSubject}
      isDisabled={isDeletePending}
    />
  );
};

export default ModalDeleteSubject;