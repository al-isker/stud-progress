import {useState, useEffect} from "react";

import MainContainer from "../../components/containers/mainContainer/MainContainer.jsx";
import Subject from "../../components/ordinary/subject/subject/Subject.jsx";
import BtnCreateSubject from "../../components/ui/btnCreateSubject/BtnCreateSubject.jsx";

import subjectQuery from "../../queries/subjects.query.js";

import './home.scss';

const Home = () => {
  const [subjects, setSubjects] = useState('loading');

  useEffect(() => {
    subjectQuery.getAll().then(data => setSubjects(data));
  }, []);


  if(subjects === 'loading') return (
    <div>loading...</div>
  );

  return (
    <MainContainer className="home">
      {subjects.map(subject => (
          <Subject
            key={subject.id}
            title={subject.title}
            type={subject.type}
            listScore={subject.listScore}
          />
        )
      )}

      <BtnCreateSubject className="home__btn-create-subject"/>
    </MainContainer>
  );
};

export default Home;