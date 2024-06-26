import {useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import useQuerySubject from '../../queries/subjects.query.js';

import ErrorBack from "../../components/ordinary/error/ErrorBack.jsx";
import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './create-subject.scss';

const CreateSubject = () => {
  const {
    isPending: isCreatePending,
    mutate,
    isSuccess: isCreateSuccess,
    error: createError
  } = useQuerySubject.create();

  const navigate = useNavigate();

  useEffect(() => {
    if(isCreateSuccess) {
      navigate('/subjects');
    }
  }, [isCreateSuccess]);

  const createSubject = useCallback(({title, type, target}) => {
    mutate({title, type, target, date: new Date()});
  }, []);


  if (createError) return <ErrorBack message={createError?.message} to="/subjects"/>;

  return (
    <MainWrapper className="create-subject" isPending={isCreatePending}>
      <CreateSubjectForm onSubmit={createSubject} isDisabled={isCreatePending} />
    </MainWrapper>
  );
};


const CreateSubjectForm = ({onSubmit, isDisabled}) => {
  const {control, formState: {errors: formError}, handleSubmit} = useForm();

  const onError = (data) => console.warn(data);

  return <>
    <HeaderForm
      backTo="/subjects"
      title="Новый предмет"
    />

    <form
      className="create-subject__form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <SelectTitle control={control} errors={formError} isDisabled={isDisabled} />
      <SelectType control={control} errors={formError} isDisabled={isDisabled} />
      <SelectTarget control={control} errors={formError} isDisabled={isDisabled} />

      <Button
        className="create-subject__submit"
        type="submit"
        title="сохранить"
        icon="keep"
      />
    </form>
  </>;
}


export default CreateSubject;