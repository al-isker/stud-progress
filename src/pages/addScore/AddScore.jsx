import {useForm} from "react-hook-form";

import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectScore from "../../components/ordinary/form/SelectScore.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './add-score.scss';

const CreateSubject = () => {
  const {control, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = (data) => {
    // отправка на сервер
    console.log(data);
  }

  const onError = (data) => console.warn('form invalid', data, errors);

  return (
    <MainWrapper className="add-score">
      <HeaderForm
        backTo="/home"
        title="Добавить балл"
      />

      <form
        className="add-score__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <SelectScore control={control} errors={errors} />

        <Button
          className="add-score__submit"
          type="submit"
          title="сохранить"
          icon="keep"
        />
      </form>
    </MainWrapper>
  );
};

export default CreateSubject;