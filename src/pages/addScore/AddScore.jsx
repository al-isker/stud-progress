import {useForm} from "react-hook-form";

import MainContainer from "../../components/containers/mainContainer/MainContainer.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './add-score.scss';
import SelectScore from "../../components/ordinary/form/SelectScore.jsx";

const CreateSubject = () => {
  const {control, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = (data) => {
    // отправка на сервер
    console.log(data);
  }

  const onError = (data) => console.warn('form invalid', data, errors);

  return (
    <MainContainer className="create-subject">
      <HeaderForm
        backTo="/home"
        title="Добавить балл"
      />

      <form
        className="create-subject__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <SelectScore control={control} errors={errors} />

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