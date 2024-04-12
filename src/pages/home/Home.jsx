import MainWrapper from "../../components/containers/mainContainer/MainWrapper.jsx";
import Subject from "../../components/smart/subject/subject/Subject.jsx";
import BtnCreateSubject from "../../components/ui/btnCreateSubject/BtnCreateSubject.jsx";
import Error from "../../components/ordinary/error/Error.jsx";
import subjectQuery from "../../queries/subjects.query.js";

import './home.scss';

const Home = () => {
  const {
    isPending,
    error: queryError,
    data,
    refetch
  } = subjectQuery.useGetAll();


  if (queryError) return <Error message={queryError?.message} refresh={refetch} />;

  return (
    <MainWrapper className="home" isPending={isPending}>
      {data && <>
        {data.map(subject => (
          <Subject
            key={subject.id}
            id={subject.id}
            title={subject.title}
            type={subject.type}
            listScore={subject.listScore}
          />
        ))}
        <BtnCreateSubject className="home__btn-create-subject"/>
      </>}
    </MainWrapper>
  );
};

export default Home;