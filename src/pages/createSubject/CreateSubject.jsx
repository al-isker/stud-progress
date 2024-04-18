import {useForm} from "react-hook-form";
import useQuerySubject from '../../queries/subjects.query.js';

import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './create-subject.scss';

const CreateSubject = () => {
  const onSubmit = (data) => {
    console.log(data);
    useQuerySubject.post(data);
  }

  const onError = (data) => console.warn(data);

  return (
    <MainWrapper className="create-subject">
      <CreateSubjectForm
        onSubmit={onSubmit}
        onError={onError}
      />
    </MainWrapper>
  );
};


const CreateSubjectForm = ({onSubmit, onError}) => {
  const {
    control,
    formState: {errors: formError},
    handleSubmit
  } = useForm();

  return <>
    <HeaderForm
      backTo="/home"
      title="Новый предмет"
    />

    <form
      className="create-subject__form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <SelectTitle control={control} errors={formError} />
      <SelectType control={control} errors={formError} />
      <SelectTarget control={control} errors={formError} />

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