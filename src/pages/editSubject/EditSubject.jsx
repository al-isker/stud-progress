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
import EditScore from "../../components/ordinary/editScore/EditScore.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './edit-subject.scss';
import {useQueryClient} from "@tanstack/react-query";

const EditSubject = () => {
  const {subjectId} = useParams();

  const {
    isPending: isGetPending,
    data: subjects,
    error: getError,
    refetch: getRefetch,
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

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditSuccess) {
      queryClient.invalidateQueries({queryKey: ['subjects']})
        .then(() => navigate('/subjects'));
    }
  }, [isEditSuccess]);

  const editSubject = useCallback((data) => {
    const newSubject = {};

    if (data.title !== targetSubject.title) newSubject.title = data.title;
    if (data.type !== targetSubject.type) newSubject.type = data.type;
    if (data.target !== targetSubject.target) newSubject.target = data.target;
    newSubject.listScore = [];

    targetSubject.listScore.forEach(({score, date}, i) => {
      if (data[`score${i}`] === score) {
        newSubject.listScore.push({score, date});
      }
      else if(data[`score${i}`] !== score) {
        if(data[`score${i}`] !== 'deleted') {
          newSubject.listScore.push({score: Number(data[`score${i}`]), date: new Date()});
        }
      }
    });

    mutate({id: subjectId, newSubject});
  }, [targetSubject]);


  if (getError) return <ErrorRefetch message={getError?.message} refetch={getRefetch}/>;
  if (editError) return <ErrorBack message={editError?.message} to="/subjects"/>;

  return <>
    <Outlet/>
    <MainWrapper
      isPending={isGetPending || isEditPending}
      isVisible={!isGetPending}
    >
      {targetSubject && (
        <EditSubjectForm
          subject={targetSubject}
          onSubmit={editSubject}
          isDisabled={isEditPending}
        />
      )}
    </MainWrapper>
  </>;
};


const EditSubjectForm = ({subject: {title, type, listScore, target}, onSubmit, isDisabled}) => {
  const {control, formState: {errors: formError}, handleSubmit, setValue} = useForm({
    defaultValues: {
      title,
      type,
      ...listScore.reduce((obj, item, i) => ({...obj, [`score${i}`]: item.score}), {}),
      target
    }
  });

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
      <SelectTitle control={control} errors={formError} defaultValue={title} isDisabled={isDisabled}/>
      <SelectType control={control} errors={formError} defaultValue={type} isDisabled={isDisabled}/>
      <SelectTarget control={control} errors={formError} defaultValue={target} isDisabled={isDisabled}/>

      <InputWrapper title="Оценки" className="edit-subject__edit-scores">
        {listScore.map(({score, date}, i) => (
          <EditScore
            key={i}
            control={control}
            name={`score${i}`}
            score={score}
            date={date}
            isDisabled={isDisabled}
            setValue={setValue}
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