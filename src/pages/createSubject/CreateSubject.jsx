import {useForm} from "react-hook-form";

import MainContainer from "../../components/containers/mainContainer/MainContainer.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import Button from "../../components/ui/button/Button.jsx";
import subjectQuery from "../../queries/subjects.query.js";

import './create-subject.scss';

const CreateSubject = () => {
  const {control, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = (data) => {
    subjectQuery.create(data).then(console.log);
  }

  const onError = (data) => console.warn('form invalid', data, errors);

  return (
    <MainContainer className="create-subject">
      <HeaderForm
        backTo="/home"
        title="Новый предмет"
      />

      <form
        className="create-subject__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <SelectTitle control={control} errors={errors} />
        <SelectType control={control} errors={errors} />
        <SelectTarget control={control} errors={errors} />

        <Button
          className="create-subject__submit"
          type="submit"
          title="сохранить"
          icon="keep"
        />
      </form>
    </MainContainer>
  );
};

export default CreateSubject;