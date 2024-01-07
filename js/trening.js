// надо решить правильно
// let cost;
// let subscription = "premium";
// if (subscription === "free") {
//   cost = 0;
// } else if ((subscription = "pro")) {
//   cost = 100;
// } else if ((subscription = "premium")) {
//   cost = 500;
// }
// console.log(cost);

// надо решить правильно
// let mounts = "7";
// if ((mounts = "12, 1, 2")) {
//   ("seasons: winter");
// } else if ((mounts = "3, 4, 5")) {
//   ("seasons: spring");
// } else if ((mounts = "6, 7, 8")) {
//   ("seasons: summer");
// } else if ((mounts = "9, 10, 11")) {
//   ("seasons: autumn");
// }
// console.log(mounts[7]);

// let a = prompt("Введи первое число");
// a = parseInt(a);
// let b = prompt("Введи второе число");
// b = parseInt(b);
// alert(a * b);

// эту задачу надо решить правильно
// let mounts = prompt("Введи номер месяца");
// if ((mounts == 12, 1, 2)) {
//   alert("Winter");
// } else if ((mounts == 3, 4, 5)) {
//   alert("Spring");
// } else if ((mounts == 6, 7, 8)) {
//   alert("Summer");
// } else if ((mounts == 9, 10, 11)) {
//   alert("Autumn");
// }

// Викторина работает
// let point = 0;
// let answer = "";
// answer = prompt("Какая птица санитар леса?");
// answer = answer.toLowerCase();
// if (answer == "дятел") {
//   alert("Верно");
//   alert("Потрясающе!");
//   point++;
// } else {
//   alert("Неверно");
// }
// answer = prompt("Река в Киеве");
// answer = answer.toLowerCase();
// if (answer == "днепр") {
//   alert("Верно");
//   alert("Ты молодец! Так держать!");
//   point++;
// } else {
//   alert("Неверно");
// }
// if (point === 2) {
//   alert(`Ваш бал: ${point}.Поздравляем!`);
// } else if (point === 1) {
//   alert(`Ваш бал: ${point}.Желаем быть более успешным!`);
// } else if (point === 0) {
//   alert(`Ваш бал: ${point}.Улучшите свои знания!`);
// }

// task 2
// let answers = [];
// let questions = [
//   "Как тебя зовут?",
//   "Сколько тебе лет?",
//   "Где ты живеш?",
//   "Чем ты занимаешся?",
//   "Что ты изучаеш?",
//   "Что такое хорошо?",
// ];
// for (let i = 0; i < questions.length; i++) {
//   answers[i] = prompt(questions[i]);
// }

// document.write(answers);
// console.log(answers);

// task 3
// const hours = 15;
// const minute = 7;
// let timestring;
// if (minute > 0) {
//   timestring = console.log(`${hours}г. ${minute}хв`);
// } else {
//   timestring = console.log(`${hours}г.`);
// }
// console.log(typeof minute);

// task 4
// const userInput = Number(prompt("Введіть число"));
// console.log(typeof userInput);
// if (userInput > 0) {
//   console.log("Це позитивне число");
// } else if (!userInput) {
//   console.log("Це нуль");
// } else {
//   console.log("Це негативне число");
// }

// task 5 парне чи непарне число
// const userInput = Number(prompt("Введіть число"));
// if (userInput % 2) {
//   console.log(`${userInput} - Непарне число`);
// } else {
//   console.log(`${userInput} - Парне число`);
// }

// або тернарка
// const userInput = Number(prompt("Введіть число"));
// console.log(userInput % 2 ? "Непарне" : "Парне");

// task 6
// const a = 120;
// const b = 180;
// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }
// або тернарка
// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// task 7 форматування посилання - додаємо '/'
// let link = "http://my-site.com/about";
// if (!link.endsWith("/")) {
//   link += "/";
// }
// console.log(link);

// task 8 форматув. посилання з includes  та &&
// let link = "http://somesite.com/about";
// if (!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }
// console.log(link);

// або тернарка
// console.log(!link.endsWith("/") && link.includes("my-site") ? (link += "/") : link);

// task 9
// const hours = 19;
// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// task 10
// const daysUntilDeadLine = 1;
// if (!daysUntilDeadLine) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadLine === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadLine === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }

// через swith + if-else
// const daysUntilDeadLine = 1;
// if (daysUntilDeadLine >= 0) {
//   switch (daysUntilDeadLine) {
//     case 0:
//       console.log("Сьогодні");
//       break;
//     case 1:
//       console.log("Завтра");
//       break;
//     case 2:
//       console.log("Післязавтра");
//       break;
//     default:
//       console.log("Дата у майбутньому");
//       break;
//   }
// } else {
//   console.log("Друже ти проспав");
// }

// task 11
// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// task 12
// const login = prompt("ВВедіть логін");
// if (login == "Адмін" || login == "адмін") {
//   const passsword = prompt("Введіть пароль");
//   // if (passsword == "Я адмін") {
//   //   console.log("Доброго дня");
//   // } else {
//   //   console.log("Невірний пароль");
//   // }
//   console.log(passsword === "Я адмін" ? "Доброго дня" : "Невірний пароль");
// }
// // else if (login == "" || 'Esc')
// else if (!login) {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }
