// тут должны быть запросы на сервер

// const fetchPosts = async () => {
//   console.time();
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const json = response.json();
//   console.log('ready posts');
//   console.timeEnd();
// }

export const subjectsFromDB = [
  { id: 0, title: 'Анатомия' },
  { id: 1, title: 'Биохимия' },
  { id: 2, title: 'Введение в специальность' },
  { id: 3, title: 'Генетика' },
  { id: 4, title: 'Гигиена' },
  { id: 5, title: 'Информатика' },
  { id: 6, title: 'История' },
  { id: 7, title: 'Латинский язык' },
  { id: 8, title: 'Религоведение' },
  { id: 9, title: 'Физика' },
  { id: 10, title: 'Физическая культура' }
];

export const typesFromDB = [
  { id: 0, type: 'экзамен' },
  { id: 1, type: 'диф зачёт' },
  { id: 2, type: 'зачёт' }
];

// console.log(subjectsDatabase.sort((a, b) => a.localeCompare(b)))