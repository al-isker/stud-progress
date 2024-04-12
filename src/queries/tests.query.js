import {API} from "../config/API.js";

const testQueryOne = async (subjectId) => {
  const response = await fetch(API + '/subjects' + '/' + subjectId);
}

const id = 9;

testQueryOne(id).then(console.log);