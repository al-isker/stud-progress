import useQuerySubject from "../../queries/subjects.query.js";

import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import Subject from "../../components/smart/subject/subject/Subject.jsx";
import BtnCreateSubject from "../../components/ui/btnCreateSubject/BtnCreateSubject.jsx";
import Error from "../../components/ordinary/error/Error.jsx";

import './home.scss';

const Home = () => {
  const {
    isPending,
    error: queryError,
    data,
    refetch
  } = useQuerySubject.getAll();

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