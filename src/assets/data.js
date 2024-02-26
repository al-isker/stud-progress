// тут должны быть запросы на сервер

// const fetchPosts = async () => {
//   console.time();
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const json = response.json();
//   console.log('ready posts');
//   console.timeEnd();
// }

export const subjectsDB = [
  'Анатомия',
  'Биохимия',
  'Введение в специальность',
  'Генетика',
  'Гигиена',
  'Информатика',
  'История',
  'Латинский язык',
  'Религоведение',
  'Физика',
  'Физическая культура',
];

export const typesDB = [
  'экзамен',
  'диф зачёт',
  'зачёт',
];

export const maxScoreDB = [
  {option: '5 балльная система', value: 5},
  {option: '100 балльная система', value: 100},
];


// console.log(subjectsDatabase.sort((a, b) => a.localeCompare(b)))