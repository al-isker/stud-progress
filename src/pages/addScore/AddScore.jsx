import {useForm} from "react-hook-form";

import DatePicker from "react-datepicker";

import MainContainer from "../../components/containers/mainContainer/MainContainer.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectScore from "../../components/ordinary/form/SelectScore.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './add-score.scss';
import {useState} from "react";

const CreateSubject = () => {
  const {control, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = (data) => {
    // отправка на сервер
    console.log(data);
  }

  const onError = (data) => console.warn('form invalid', data, errors);

  const [date, setDate] = useState(new Date());

  return (
    <MainContainer className="add-score">
      <HeaderForm
        backTo="/home"
        title="Добавить балл"
      />

      <form
        className="add-score__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <SelectScore control={control} errors={errors} />
        {/*<DatePicker />*/}

        <Button
          className="add-score__submit"
          type="submit"
          title="сохранить"
          icon="keep"
        />
      </form>
    </MainContainer>
  );
};

export default CreateSubject;