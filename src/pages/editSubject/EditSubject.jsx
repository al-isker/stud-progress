import {useForm} from "react-hook-form";

import MainContainer from "../../components/containers/mainContainer/MainContainer.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import InputTargetScore from "../../components/ordinary/form/InputTargetScore.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './edit-subject.scss';

const EditSubject = () => {
  // забираем информацию о subject
  const subject = {
    title: 0,
    type: 0,
    targetScore: 3,
    listScore: [3, 4, 2, 3]
  };

  const {control, formState: {errors}, handleSubmit} = useForm({
    defaultValues: subject
  });

  const onSubmit = (data) => {
    // отправка на сервер
    console.log(data);
  }

  const onError = (data) => console.warn('form invalid', data, errors);

  return (
    <MainContainer className="edit-subject">
      <HeaderForm
        backTo="/home"
        title="Редактировать предмет"
      />

      <form
        className="create-subject__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <SelectTitle control={control} errors={errors} defaultValue={subject.title}/>
        <SelectType control={control} errors={errors} defaultValue={subject.type} />
        <InputTargetScore control={control} errors={errors} defaultValue={subject.targetScore} />

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

export default EditSubject;