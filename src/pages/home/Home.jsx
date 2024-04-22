import useQuerySubject from "../../queries/subjects.query.js";

import MainWrapper from "../../components/containers/mainWrapper/MainWrapper.jsx";
import Subject from "../../components/smart/subject/subject/Subject.jsx";
import BtnCreateSubject from "../../components/ui/btnCreateSubject/BtnCreateSubject.jsx";
import Error from "../../components/ordinary/error/Error.jsx";

import './home.scss';

const Home = () => {
  const {
    isPending,
    error,
    data,
    isSuccess,
    refetch
  } = useQuerySubject.getAll();

  if (error) return <Error message={error?.message} refresh={refetch} />;

  return (
    <MainWrapper className="home" isPending={isPending} isVisible={isSuccess}>
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