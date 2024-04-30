import {useEffect, useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import useQuerySubject from '../../queries/subjects.query.js';

import ErrorRefetch from "../../components/ordinary/error/ErrorRefetch.jsx";
import ErrorBack from "../../components/ordinary/error/ErrorBack.jsx";
import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectScore from "../../components/ordinary/form/SelectScore.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './add-score.scss';

const AddScore = () => {
  const {subjectId} = useParams();

  const {
    isPending: isGetPending,
    data: subjects,
    error: getError,
    refetch: getRefetch
  } = useQuerySubject.getAll();

  const listScore = useMemo(() => {
    return subjects?.find(item => item.id === subjectId).listScore;
  }, [subjects]);

  const {
    isPending: isAddPending,
    mutate,
    isSuccess: isAddSuccess,
    error: addError
  } = useQuerySubject.edit();

  const navigate = useNavigate();

  useEffect(() => {
    if(isAddSuccess) {
      navigate('/subjects');
    }
  }, [isAddSuccess]);

  const addScore = ({score}) => {
    listScore.push({
      score: Number(score),
      date: new Date()
    });

    mutate({
      id: subjectId,
      newSubject: {listScore}
    });
  }


  if(getError) return <ErrorRefetch message={getError?.message} refetch={getRefetch} />;
  if(addError) return <ErrorBack message={addError?.message} to="/subjects" />;

  return (
    <MainWrapper
      isPending={isGetPending || isAddPending}
      isVisible={!isGetPending}
    >
      <AddScoreFrom
        onSubmit={addScore}
        isDisabled={isAddPending}
      />
    </MainWrapper>
  );
};


const AddScoreFrom = ({onSubmit, isDisabled}) => {
  const {control, formState: {errors}, handleSubmit} = useForm();

  const onError = (data) => console.warn(data);

  return <>
    <HeaderForm
      backTo="/subjects"
      title="Добавить балл"
    />

    <form
      className="add-score__form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <SelectScore control={control} errors={errors} isDisabled={isDisabled} />

      <Button
        className="add-score__submit"
        type="submit"
        title="сохранить"
        icon="keep"
      />
    </form>
  </>
}


export default AddScore;