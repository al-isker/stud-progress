import {useState} from "react";
import useQuerySubject from "../../queries/subjects.query.js";

import ErrorGet from "../../components/ordinary/error/ErrorGet.jsx";
import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import Subject from "../../components/smart/subject/subject/Subject.jsx";
import BtnCreateSubject from "../../components/ui/btnCreateSubject/BtnCreateSubject.jsx";
import ModalDeleteSubject from "../../components/ordinary/modalWindow/ModalDeleteSubject.jsx";

import './home.scss';

const Home = () => {
  const [deleteId, setDeleteId] = useState(false);

  const {
    isPending,
    error,
    data: subjects,
    isSuccess,
    refetch
  } = useQuerySubject.getAll();

  if (error) return <ErrorGet message={error?.message} refetch={refetch} />;

  return <>
    <MainWrapper className="home" isPending={isPending} isVisible={isSuccess}>
      {subjects && <>
        {subjects.map(subject => (
          <Subject
            key={subject.id}
            id={subject.id}
            title={subject.title}
            type={subject.type}
            listScore={subject.listScore}
            onDelete={() => setDeleteId(subject.id)}
          />
        ))}
        <BtnCreateSubject className="home__btn-create-subject"/>
      </>}
    </MainWrapper>

    <ModalDeleteSubject
      deleteId={deleteId}
      setDeleteId={setDeleteId}
      refetch={refetch}
    />
  </>;
};

export default Home;