import Subject from "../subject/Subject";
import NewSubject from "../newSubject/NewSubject";

import './general.css';

const General = () => {
  return (
    <main className="general">
      <div className="general__container container">
        <div className="general__wrapper">
          <Subject
            title="Анатомия"
            type="экзамен"
            rating={[2, 2, 3, 3, 2, 4, 3]}
          />
          <Subject
            title="Введение в специальность"
            type="экзамен"
            rating={[3, 2, 4, 3, 4, 4]}
          />
          <Subject
            title="Генетика"
            type="зачёт"
            rating={[4, 3, 4, 2, 3, 5, 3, 3]}
          />
          <NewSubject />
        </div>
      </div>
    </main>
  );
};

export default General;