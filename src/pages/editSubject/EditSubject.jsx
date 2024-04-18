import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import useQuerySubject from '../../queries/subjects.query.js';

import Error from "../../components/ordinary/error/Error.jsx";
import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import Button from "../../components/ui/button/Button.jsx";

import './edit-subject.scss';

const EditSubject = () => {
  const {subjectId} = useParams();

  const {
    isPending: isPendingGet,
    error: errorGet,
    data,
    refetchGet
  } = useQuerySubject.getById(subjectId);

  const onSubmit = (data) => console.log(data);
  const onError = (data) => console.warn('form invalid', data);


  if (errorGet) return <Error message={errorGet?.message} refresh={refetchGet}/>;

  return (
    <MainWrapper className="edit-subject" isPending={isPendingGet}>
      {data && (
        <EditSubjectForm
          defaultValues={data}
          onSubmit={onSubmit}
          onError={onError}
        />
      )}
    </MainWrapper>
  );
};


const EditSubjectForm = ({defaultValues, onSubmit, onError}) => {
  const {
    control,
    formState: {errors: formError},
    handleSubmit
  } = useForm({defaultValues});

  return <>
    <HeaderForm
      backTo="/home"
      title="Редактировать предмет"
    />

    <form
      className="create-subject__form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <SelectTitle control={control} errors={formError} defaultValue={defaultValues.title}/>
      <SelectType control={control} errors={formError} defaultValue={defaultValues.type}/>
      <SelectTarget control={control} errors={formError} defaultValue={defaultValues.target}/>

      <Button
        className="create-subject__submit"
        type="submit"
        title="сохранить"
        icon="keep"
      />
    </form>
  </>;
};


export default EditSubject;