import {useEffect, useCallback, useMemo} from "react";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import useQuerySubject from '../../queries/subjects.query.js';

import ErrorBack from "../../components/ordinary/error/ErrorBack.jsx";
import ErrorRefetch from "../../components/ordinary/error/ErrorRefetch.jsx";
import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import InputWrapper from "../../components/ordinary/inputWrapper/InputWrapper.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './edit-subject.scss';
import EditScore from "../../components/ordinary/form/EditScore.jsx";

const EditSubject = () => {
  const {subjectId} = useParams();

  const {
    isPending: isGetPending,
    data: subjects,
    error: getError,
    refetch: getRefetch,
  } = useQuerySubject.getAll();

  const targetSubject = useMemo(() => {
    console.log(subjects?.find(item => item.id === subjectId))
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

  const editSubject = useCallback(({title, type, target}) => {
    mutate({
      id: subjectId,
      newSubject: {title, type, target}
    });
  }, []);


  if(getError) return <ErrorRefetch message={getError?.message} refetch={getRefetch} />;
  if(editError) return <ErrorBack message={editError?.message} to="/subjects" />;

  return <>
    <Outlet />
    <MainWrapper
      isPending={isGetPending || isEditPending}
      isVisible={!isGetPending}
    >
      {targetSubject && (
        <EditSubjectForm
          defaultValues={targetSubject}
          onSubmit={editSubject}
          isDisabled={isEditPending}
        />
      )}
    </MainWrapper>
  </>;
};


const EditSubjectForm = ({defaultValues, onSubmit, isDisabled}) => {
  const {control, formState: {errors: formError}, handleSubmit} = useForm({defaultValues});

  const onError = (data) => console.warn(data);

  return <>
    <HeaderForm
      backTo="/subjects"
      title="Редактировать предмет"
    />

    <form
      className="edit-subject__form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <SelectTitle control={control} errors={formError} defaultValue={defaultValues} isDisabled={isDisabled} />
      <SelectType control={control} errors={formError} defaultValue={defaultValues} isDisabled={isDisabled} />
      <SelectTarget control={control} errors={formError} defaultValue={defaultValues} isDisabled={isDisabled} />

      <InputWrapper title="Оценки">
        {defaultValues.listScore.map((item, i) => (
          <EditScore
            key={i}
            control={control}
            isDisabled={isDisabled}
            defaultValue={item.score}
          />
        ))}
      </InputWrapper>

      <Button
        className="edit-subject__submit"
        type="submit"
        title="сохранить"
        icon="keep"
      />
    </form>
  </>;
};


export default EditSubject;