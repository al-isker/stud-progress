import MainContainer from "../../components/containers/mainContainer/MainContainer.jsx";
import Subject from "../../components/ordinary/subject/subject/Subject.jsx";
import BtnCreateSubject from "../../components/ui/btnCreateSubject/BtnCreateSubject.jsx";

import './home.css';

const Home = () => {
  return (
    <MainContainer className="home">
      <Subject
        className="home__item"
        title="Латинский язык"
        type="зачёт"
        maxScore={5}
        rating={[2, 2, 3, 4, 5, 3, 4, 3]}
      />
      <Subject
        className="home__item"
        title="Анатомия"
        type="экзамен"
        maxScore={5}
        rating={[2, 3, 4, 3, 3]}
      />
      <Subject
        className="home__item"
        title="ОРГ"
        type="зачёт"
        maxScore={5}
        rating={[3, 3, 3, 4, 3]}
      />
      <Subject
        className="home__item"
        title="Информатика"
        type="экзамен"
        maxScore={5}
        rating={[2, 2, 3, 3]}
      />
      <Subject
        className="home__item"
        title="История"
        type="зачёт"
        maxScore={5}
        rating={[3, 2, 3, 2, 3, 2]}
      />
      <Subject
        className="home__item"
        title="Правоведение"
        type="зачёт"
        maxScore={5}
        rating={[3, 2, 3]}
      />
      <Subject
        className="home__item"
        title="Экономика"
        type="зачёт"
        maxScore={5}
        rating={[4, 2, 3, 4, 3]}
      />
      <Subject
        className="home__item"
        title="Биология"
        type="экзамен"
        maxScore={5}
        rating={[3, 3, 4, 3, 4, 2, 2, 3]}
      />
      <Subject
        className="home__item"
        title="Психология"
        type="зачёт"
        maxScore={5}
        rating={[3, 3, 5, 5]}
      />

      <BtnCreateSubject className="home__item home__btn-create-subject"/>
    </MainContainer>
  );
};

export default Home;