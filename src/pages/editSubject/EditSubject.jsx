import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import useQuerySubject from '../../queries/subjects.query.js';

import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './edit-subject.scss';
import {useCallback, useEffect, useMemo} from "react";
import ErrorBack from "../../components/ordinary/error/ErrorBack.jsx";
import ErrorRefetch from "../../components/ordinary/error/ErrorRefetch.jsx";

const EditSubject = () => {
  const {subjectId} = useParams();

  const {
    isPending: isGetPending,
    data: subjects,
    error: getError,
    refetch: getRefetch
  } = useQuerySubject.getAll();

  const targetSubject = useMemo(() => {
    return subjects?.find(item => item.id === subjectId);
  }, [subjects]);

  const {
    isPending: isEditPending,
    mutate,
    isSuccess: isEditSuccess,
    error: editError
  } = useQuerySubject.edit();

  const navigate = useNavigate();

  useEffect(() => {
    if(isEditSuccess) {
      navigate('/subjects');
    }
  }, [isEditSuccess]);

  const editSubject = useCallback((data) => {
    // смешать targetSubject && data;

    mutate(subjectId, targetSubject);
  }, []);


  if(getError) return <ErrorRefetch message={getError?.message} refetch={getRefetch} />;
  if(editError) return <ErrorBack message={editError?.message} to="/subjects" />;

  return (
    <MainWrapper
      className="edit-subject"
      isPending={isGetPending || isEditPending}
      isVisible={!isGetPending}
    >
      {targetSubject && (
        <EditSubjectForm defaultValues={targetSubject} onSubmit={editSubject} />
      )}
    </MainWrapper>
  );
};


const EditSubjectForm = ({defaultValues, onSubmit}) => {
  const {control, formState: {errors: formError}, handleSubmit} = useForm({defaultValues});

  const onError = (data) => console.warn(data);

  return <>
    <HeaderForm
      backTo="/subjects"
      title="Редактировать предмет"
    />

    <form
      className="create-subject__form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <SelectTitle control={control} errors={formError} defaultValue={defaultValues.title}/>
      <SelectType control={control} errors={formError} defaultValue={defaultValues.type}/>
      <SelectTarget control={control} errors={formError} defaultValue={defaultValues.target}/>

      <Button
        className="create-subject__submit"
        type="submit"
        title="сохранить"
        icon="keep"
      />
    </form>
  </>;
};


export default EditSubject;