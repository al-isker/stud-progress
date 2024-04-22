import {useForm} from "react-hook-form";
import useQuerySubject from '../../queries/subjects.query.js';

import Error from "../../components/ordinary/error/Error.jsx";
import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './create-subject.scss';
import {useEffect, useState} from "react";

const CreateSubject = () => {
  const {isPending: isPostPending, mutate, error: postError} = useQuerySubject.create();

  const [switcher, setSwitcher] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSwitcher(!switcher);
    }, 500);
  }, [switcher]);

  const onSubmit = (data) => {
    mutate(data);
    // переходНаРоут("/home");
  }

  if (postError) return <Error message={postError?.message} refresh={onSubmit}/>;

  return (
    <MainWrapper className="create-subject" isPending={switcher && !isPostPending}>
      <CreateSubjectForm onSubmit={onSubmit} isDisabled={isPostPending} />
    </MainWrapper>
  );
};


const CreateSubjectForm = ({onSubmit, isDisabled}) => {
  const {control, formState: {errors: formError}, handleSubmit} = useForm();

  const onError = (data) => console.warn(data);

  return <>
    <HeaderForm
      backTo="/home"
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