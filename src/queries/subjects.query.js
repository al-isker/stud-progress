import {subjects as URL} from "../config/API.js";

class subjectQuery {
  getAll = async () => {
    try {
      const response = await fetch(URL);

      if(!response.ok) {
        throw new Error('Error when receiving subjects');
      }

      return response.json();
    }
    catch(error) {
      console.error(error);
    }
  }

  create = async (newSubject) => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newSubject),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(!response.ok) {
        throw new Error('Error when adding post');
      }

      return response.json();
    }
    catch(error) {
      console.error(error);
    }
  }

  addScore = async (subject, score) => {
    subject.listScore.push(score);

    try {
      const response = await fetch(URL, {
        method: 'PUT',
        body: JSON.stringify(subject),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(!response.ok) {
        throw new Error('Error when adding score');
      }

      return response.json()
    }
    catch (error) {
      console.error(error);
    }
  }
}

export default new subjectQuery;