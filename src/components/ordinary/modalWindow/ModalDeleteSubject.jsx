import useQuerySubject from '../../../queries/subjects.query.js';

import ModalWindow from "./ModalWindow.jsx";
import {useCallback, useEffect} from "react";

const ModalDeleteSubject = ({deleteId, setDeleteId, refetch}) => {
  const {isPending, mutate, isSuccess} = useQuerySubject.delete();

  useEffect(() => {
    if(isSuccess) {
      refetch();
      setDeleteId(false);
    }
  }, [isSuccess])

  const deleteSubject = async () => {
    await mutate(deleteId);
  }

  return (
    <ModalWindow
      icon="delete"
      content="Вы уверены, что хотите удалить предмет?"

      isVisible={deleteId}
      setIsVisible={setDeleteId}

      resolveTitle="удалить"
      onResolve={deleteSubject}
      isDisabled={isPending}
    />
  );
};

export default ModalDeleteSubject;