import {Outlet} from "react-router-dom";
import useQuerySubject from "../../queries/subjects.query.js";

import ErrorRefetch from "../../components/ordinary/error/ErrorRefetch.jsx";
import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import Subject from "../../components/smart/subject/subject/Subject.jsx";
import BtnCreateSubject from "../../components/ui/btnCreateSubject/BtnCreateSubject.jsx";

import './subjects.scss';

const Subjects = () => {
  const {
    isPending,
    error,
    data: subjects,
    isSuccess,
    refetch
  } = useQuerySubject.getAll();

  if (error) return <ErrorRefetch message={error?.message} refetch={refetch} />;

  return <>
    <Outlet />
    <MainWrapper className="subjects" isPending={isPending} isVisible={isSuccess}>
      {subjects && <>
        {subjects.map(subject => (
          <Subject
            key={subject.id}
            id={subject.id}
            title={subject.title}
            type={subject.type}
            listScore={subject.listScore}
          />
        ))}
        <BtnCreateSubject className="subjects__btn-create-subject"/>
      </>}
    </MainWrapper>
  </>;
};

export default Subjects;