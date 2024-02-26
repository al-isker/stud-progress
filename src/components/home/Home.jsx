import Subject from "../subject/Subject";
import NewSubject from "../newSubject/NewSubject";

import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__container">
          <div className="home__wrapper">
            <Subject
              className="home__subject"
              title="Латинский язык"
              type="зачёт"
              maxScore={5}
              rating={[2, 2, 3, 4, 5, 3, 4, 3]}
            />
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="Анатомия"*/}
            {/*  type="экзамен"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[2, 3, 4, 3, 3]}*/}
            {/*/>*/}
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="ОРГ"*/}
            {/*  type="зачёт"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[3, 3, 3, 4, 3]}*/}
            {/*/>*/}
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="Информатика"*/}
            {/*  type="экзамен"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[2, 2, 3, 3]}*/}
            {/*/>*/}
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="История"*/}
            {/*  type="зачёт"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[3, 2, 3, 2, 3, 2]}*/}
            {/*/>*/}
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="Правоведение"*/}
            {/*  type="зачёт"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[3, 2, 3]}*/}
            {/*/>*/}
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="Экономика"*/}
            {/*  type="зачёт"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[4, 2, 3, 4, 3]}*/}
            {/*/>*/}
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="Биология"*/}
            {/*  type="экзамен"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[3, 3, 4, 3, 4, 2, 2, 3]}*/}
            {/*/>*/}
            {/*<Subject*/}
            {/*  className="home__subject"*/}
            {/*  title="Психология"*/}
            {/*  type="зачёт"*/}
            {/*  maxScore={5}*/}
            {/*  rating={[3, 3, 5, 5]}*/}
            {/*/>*/}

            <NewSubject className="home__new-subject"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;