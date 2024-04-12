import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import Error from "../../components/ordinary/error/Error.jsx";
import MainWrapper from "../../components/containers/mainContainer/MainWrapper.jsx";
import HeaderForm from "../../components/ordinary/headerForm/HeaderForm.jsx";
import SelectTitle from "../../components/ordinary/form/SelectTitle.jsx";
import SelectType from "../../components/ordinary/form/SelectType.jsx";
import SelectTarget from "../../components/ordinary/form/SelectTarget.jsx";
import Button from "../../components/ui/button/Button.jsx";
import subjectsQuery from "../../queries/subjects.query.js";

import './edit-subject.scss';

const EditSubject = () => {
  const params = useParams();

  const {
    isPending,
    error: queryError,
    data,
    refetch
  } = subjectsQuery.useGetById(params.subjectId);

  const onSubmit = (data) => console.log(data);
  const onError = (data) => console.warn('form invalid', data);


  if (queryError) return <Error message={queryError?.message} refresh={refetch}/>;

  return (
    <MainWrapper className="edit-subject" isPending={isPending}>
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