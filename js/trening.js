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

// массиви

// const arr = ["Jonson & Jonson", "Ajax", "Pull & Bear", "Jerry", "Tomas Kotik & Co."];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[0]);
// arr[3] = "Mause";
// console.log(arr[3]);
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr[2].length);
// console.log(arr[arr.length - 1]);
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// for ... of
// for (const item of arr) {
//   console.log(item);
// }
// const clients = ["Mango", "Poly", "Ajax"];
// const clientFind = "Poly";
// let message;
// for (const client of clients) {
//   if (client === clientFind) {
//     message = "У списку є такий клієнт";
//     break;
//   }
//   message = "У списку нема такого клієнта";
// }
// console.log(message);

// const numbers = [1, 4, 7, 8, 10, 11, 12, 17, 19, 22, 56];
// const threshold = 10;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold} : ${numbers[i]}`);
// }
// **********
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);
// a = 10;
// console.log(a);
// console.log(b);
// let c = a + b;
// console.log(c);
// ****************

// const a = ["Mango"];
// const b = a;
// console.log(a);
// console.log(b);
// a.push("Ajax");
// console.log(a);
// console.log(b);

// *********
// методи масиву split() join()
// const name = "Mango";
// console.log(name.split(""));
// const town = "London - is a capital Britany";
// const a = town.split("");
// const b = town.split(" ");
// console.log(a);
// console.log(b);
// console.log(a.join(""));
// console.log(a.join(" "));
// console.log(a.join("     "));
// const c = a.join("     ");
// console.log(c.length);
// console.log(name.indexOf("n"));
// console.log(a.indexOf("n"));
// console.log(town.indexOf("c"));
// ***************

// const color = ["yellow", "blue", "green", "red", "orange"];
// const green = "green";
// console.log(color.includes(green));
// console.log(color.indexOf("red"));
// console.log(color[4]);
// console.log(typeof color);
// console.log(color.length);
// console.log(color[1].length);
// console.log(color.push("fiolent", "lightgreen", "grey"));
// console.log(color);
// console.log(color[color.length - 1]);
// console.log(color.slice(0, 3));
// ****************
// методи push() pop()
// const numbers = [];
// numbers.push(2, 4, 8, 10);
// console.log(numbers);
// const numberPop = numbers.pop();
// console.log(numberPop);
// console.log(numbers);
// numbers.unshift(0, 1);
// console.log(numbers);
// const numberShift = numbers.shift();
// console.log(numberShift);
// console.log(numbers);
// numbers.unshift(-5, -4, -2, -1);
// console.log(numbers);
// numbers.push(19, 21, 24, 27, 30, 33);
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers.slice(3, 10));
// console.log(numbers);
// let num = numbers.shift();
// num = numbers.pop();
// console.log(numbers);
// const numberSplice = numbers.splice(2, 7);
// console.log(numberSplice);
// console.log(numbers);
// const numberConcate = numbers.concat(numberSplice);
// console.log(numberConcate);
// ++++++
// const array = ["Otto", "Pyton", "JS"];
// console.log(array);
// const newArray = ["Juzik", "Bobo", "Eleganza"];
// console.log(newArray);
// const unit = array.concat(newArray);
// console.log(unit);
// unit.push("Joy");
// unit.unshift("Gremmi");
// console.log(unit);
// const a = unit.join("");
// console.log(a);
// const b = a.split("");
// console.log(b);
// const c = unit.join(" ");
// console.log(c);
// const d = c.split(" ");
// console.log(d);
// console.log(d.join(" "));
// console.log(unit[2][2]);
// console.table(unit);
// ++++++
// const array = [3, 4, 7, 9, 76, 43, 56, 123, 555, 765, 34, 89, 77, 65, 88, 111];
// let item = 0;
// for (const element of array) {
//   console.log(element);

//   if (element % 2 === 0) {
//     console.log("четное");
//     item += element;
//   }
// }
// console.log(array.length);
// console.log(item);
// let conf;
// conf = array.slice(3, 7);
// console.log(conf);
// conf = array.join(" + ");
// console.log(conf);
// conf = conf.slice(0, 3);
// console.log(conf);
// +++++++++
// const arr = [
//   [2, 3, 4],
//   [5, 6, 7],
//   [8, 9],
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     // console.log(arr[i]);
//     console.log(arr[i][j]);
//     // console.log(arr[j]);
//   }
// }
// +++++++++++++++++++++
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// const a = 5678497632;
// const b = a.toString();
// console.log(b[0]);
// const c = Number(b[0] + b[b.length - 1]);
// console.log(c);
// console.log(Number(b[0]));
// const d = b[b.length - 1];
// console.log(d);
// ++++++++++++
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const a = 45;
// const b = 77;
// const c = a.toString();
// const d = b.toString();
// if (c[0] === d[0]) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// ++++++++++++++++++++
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const s = "ananas";
// console.log(s[s.length - 2]);
// ++++++++++++++++
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// const a = 19;
// const b = 6;
// if (a % b === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// +++++++++++++++
// Найдите сумму всех целых чисел от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// let total = 0;
// for (let i = 1; i <= 100; i++) {
//   total += i;
// }
// console.log(total);
// ++++++++++++++++
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let tot = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     tot += i;
//   }
// }
// console.log(tot);
// +++++++++++++++++++++
// Даны два целых числа. Найдите остаток от деления первого числа на второе.
// const a = 56;
// const b = 16;
// const c = a % b;
// console.log(c);
//++++++++++++
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
// const text = "See more friends";
// const newText = text.split("").reverse().join("");
// console.log(newText);
// for (let i = 0; i < newText.length; i += 1) {
//   console.log(newText[i]);
// }
// +++++++++++
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// const a = [13, 22, 3, 54];
// let total = 0;
// for (let i = 0; i < a.length; i += 1) {
//   let b = Math.pow(a[i], 2);
//   console.log(b);
//   total += b;
// }
// console.log(total);
// ++++++++++++++++
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const a = [15, 87, 90, 345, 9, 23];
// let total = 0;
// for (let i = 0; i < a.length; i += 1) {
//   let b = Math.sqrt(a[i]);
//   console.log(b);
//   total += b;
// }
// console.log(total);
// +++++++++++++++++++++
//Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const arr = [5, -14, 65, -18, 78, 90, -11];
// let total = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] > 0) {
//     console.log(arr[i]);
//     total += arr[i];
//   }
// }
// console.log(total);
// +++++++++++++++++++++++++++
//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// const arr = [5, -2, 7, 90, -65, 8, 10, 43];
// let total = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] > 0 && arr[i] < 10) {
//     console.log(arr[i]);
//     total += arr[i];
//   }
// }
// console.log(total);
// +++++++++++++++++++++++++++++
//Дана строка:
// 'abcde'
// Получите массив букв этой строки.
// const text = "abcde";
// const arr = text.split("");
// console.log(arr);
// ++++++++++++++++++++++++++++++++++++
//Дано некоторое число:
// 12345
// Получите массив цифр этого числа.
// const num = 12345;
// const arr = num.toString().split("");
// console.log(arr);
// +++++++++++++++++++++++++++++
// Дано некоторое число:
// 12345
// Переверните его:
// 54321
// const num = 12345;
// const newNum = num.toString().split("").reverse().join("");
// console.log(newNum);
// const numero = Number(newNum);
// console.log(numero);
//
// let numa = 1234567;
// numa.toString().split("").reverse().join("");
// console.log(typeof numa);
// console.log(numa);
// ++++++++++++++++++++++++++
// Заполните массив целыми числами от 1 до 10.
// let arr = [];
// for (let i = 1; i < 10; i += 1) {
//   arr += i;
// }
// console.log(arr);
// +++++++++++++++++++++++
// Заполните массив четными числами из промежутка от 1 до 100.
// let arr = [];
// for (let i = 1; i < 100; i += 1) {
//   if (i % 2 === 0) {
//     arr += i;
//   }
// }
// console.log(arr);
// +++++++++++++++++++++++++++
// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
//++++++++++++++++++++++++++++++++++++++++++++++
// робота зі splice - видалити, додати, замінити
// const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
// console.log(arr);
// let array = arr.splice(0, 3);
// console.log(array);
// console.log(arr);
// додати
// arr.splice(2, 0, 111);
// console.log(arr);
// замінити
// arr.splice(4, 2, "hi", "do", "yes");
// console.log(arr);
// ++++++++++++++++++++++++++++++++++++++++
// function multiply(a, b, c, d) {
//   console.log("Ти диви!");
//   console.log(a * b + c * d);
// }
// multiply(4, 5, 7, 9);

// Заполните массив целыми числами от 1 до 10.
// let array = [];
// for (let i = 1; i <= 10; i += 1) {
//   array.push(i);
// }
// console.log(array);

// Заполните массив четными числами из промежутка от 1 до 100.
// let array = [];
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 2 === 0) {
//     array.push(i);
//   }
// }
// console.log(array);

// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// const array = [1.456, 2.125, 3.32, 4.1, 5.34];
// let newArray = [];
// for (let i = 0; i < array.length; i += 1) {
//   //   console.log(array[i]);
//     let num = array[i].toFixed(1);
//   newArray.push(num);
// }
// console.log(newArray);

// Створи функцію яка буде розбивати початковий масив на потрібну кількість елементів розділяючи на декілька масивів.
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// function getCombination(arr, count) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += count) {
//     // console.log(arr[i]);
//     const combination = arr.slice(i, i + count);
//     // console.log(combination);
//     result.push(combination);
//   }

//   return result;
// }

// console.log(getCombination(data, 2));
// console.log(getCombination(data, 3));

// площа прямокутника
// напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.
// function getRectArea(dimensions) {
//   const values = dimensions.split(" ");
//   //   console.log(values);
//   const firstValue = Number(values[0]);
//   const secondValue = Number(values[1]);
//   // можна привести до числа рядок за допомогою унарного '+' замість методу намбер,але краще це не робить
//   // const firstValue = + values[0];
//   // const secondValue = + values[1];
//   //
//   //   console.log(firstValue);
//   //   console.log(secondValue);
//   return firstValue * secondValue;
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// напиши функцію для роботи з колекцією навчальних курсів
// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс
// updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ["HTML", "JavaScript", "CSS", "React", "Node.Js", "PostgreSQL"];
// function addCourse(name) {
//   if (courses.includes(name)) {
//     alert("Ви вже маєте такий курс!");
//   } else {
//     courses.push(name);
//   }
// }
// addCourse("Express");
// console.log(courses);

// function removeCourse(name) {
//   const idx = courses.indexOf(name);
//   console.log(idx);
//   if (idx === -1) {
//     return "Курс не знайдено";
//   }
//   courses.splice(idx, 1);
// }
// removeCourse("React");
// console.log(courses);

// 55555555555555555555555555555555555
// масиви
// const text = "Happy New Year";
// перетворює рядок у масив
// const arr = text.split(" ");
// console.log(arr);
// console.log(text.split(""));
// console.log(text.split(" "));
// console.log(text.slice(0, 5));
// додає новий елемент
// arr.splice(0, 0, "Wuff");
// console.log(arr);
// видаляє останнє і замінює на інше
// arr.splice(3, 1, "101 dogs");
// console.log(arr);
// видаляє перші 2 і замість них додає новий елемент
// arr.splice(0, 2, "huff");
// console.log(arr);

// console.log(arr.join(" "));

// напиши скрипт, який буде перебирати масив та видаляти з нього всі елементи що не є типом даних Number

// приклад 1 : при видаленні йде реіндексація і робимо компенсацію 'i -=1'
// const arr = [3, "Hello", null, 42, false];
// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== "number") {
//     console.log(arr[i]);
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(arr);

//приклад 2 починаємо перебирати з кінця масиву і не треба компенсувати реіндексацію
// const arr = [3, "Hello", null, 42, false];
// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   if (typeof arr[i] !== "number") {
// console.log(arr[i]);
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// Потрібно створити функцію яка буде приймати 1 параметр. Функція повинна відібрати з масиву тільки ті елементи, що дублюються в ньому та повернути їх у вигляді нового масиву.
// function getCommonElements(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }
// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));

// Створи функцію, приймає 2 параметри:
// 1- масив всіх юзерів
// 2- масив чоловіків
// функція повинна відібрати з масиву всіх юзерів лише жіночі імена та повернути їх.
// const users = ["Artem", "Anna", "Larisa", "Maksim", "Svetlana", "David", "Roman", "Olga"];
// const men = ["Artem", "Maksim", "David", "Roman"];
// function getWomen(users, men) {
//   const women = [];
//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }
//   return women;
// }
// console.log(getWomen(users, men));

// напиши скрипт, який розгортає рядок(зворотний порядок літер) і виведи в консоль.
// const string = "Welcome to the future";
// const newString = string.split("").reverse().join("");
// console.log(newString);

// напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання, якщо ні, то замінювати на вірні
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// for (let i = 1; i <li numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];
//   if (currentEl - prevEl !== 1) {
//     numbers[i] = prevEl + 1;
//   }
// }
// console.log(numbers);

//напиши функцію, яка на основі користувачив що поставили лайк формує та повертає рядок як у прикладах:
//  []  ===> 'no one likes this'
//  ['Peter'] ===> 'Peter likes this'
//  ['Jacob', 'Alex'] ===> 'Jacob and Alex like this'
//  ['Max', 'John', 'Mark'] ===> 'Max, John, Mark like this'
//  ['Alex', 'Jacob', 'Mark', 'Max'] ===> 'Alex, Jacob and 2 others like this'
// function createStr(arr) {
//   let result = "";
//   switch (arr.length) {
//     case 0:
//       result = "no one likes this";
//       break;
//     case 1:
//       result = `${arr[0]} likes this`;
//       break;
//     case 2:
//       result = `${arr[0]} and ${arr[1]} like this`;
//       break;
//     case 3:
//       result = `${arr[0]}, ${arr[1]}, ${arr[2]} like this`;
//       break;
//     default:
//       result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }
//   return result;
// }
// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// селект-меню з прослуховувачем події + html cod
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   console.log(selectedOptionValue);
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   console.log(selectedOptionIndex);
//   const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;
//   console.log(selectedOptionText);
//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// інпут виводить у строку текст з поля введення
// const textInput = document.querySelector(".text-input");
// const outPut = document.querySelector(".output");
// textInput.addEventListener("input", (event) => {
//   outPut.textContent = event.currentTarget.value;
//   console.log(outPut.textContent);
// });
//
// подіїї занурення-сплиття
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   console.log("Descendant click handler");
// });
//
// Об'єкти
// +++++++++++++++++++++++++
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// console.log(user.stats.likes);
// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ++++++++++
// const user = {
//   name: "Joys",
//   age: 44,
//   country: "USA",
//   city: "New York",
//   corp: "Pepsi Ko",
//   softSkills: ["sociability", "mutual assistance", "stress resistance"],
//   hardSkills: {
//     HTML: true,
//     CSS: true,
//     JS: true,
//     React: false,
//   },
// };
// console.log(user);
// console.log(user.corp);
// user.raityng = 9.3;
// user.scale = {
//   likes: 2453,
//   viev: 15433,
//   comments: 769,
// };
// console.log(user.scale.comments);

// const keys = Object.keys(user);
// console.log(keys);
// for (let key of keys) {
//   console.log(key);
// }
// const value = Object.values(user);
// console.log(value);
// console.log(value.length);
// for (let i = 0; i <= value.length; i += 1) {
//   console.log(i);
// }
// console.log(...value);
// console.log(Object.entries(user));
// +++++++++++++++
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };
// const keys = { ...recordCollection };
// console.log(keys);
// const newKeys = Object.keys(keys);
// console.log(newKeys);
// const value = Object.values(keys);
// console.log(value);
// ++++++++++++++++
//  1
// const object = {};
// object.name = "John";
// object.surname = "Smith";
// console.log(object);
// object.name = "Pete";
// console.log(object);
// delete object["name"];
// console.log(object);
// 2
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// const schedule = {};
// alert(isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));
// 3
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum);

// ++
// const userEmail = prompt("Введите свой email");
// const userLogin = prompt("Введите свой логин");
// const userName = prompt("Ввеlите ваше имя");
// const userlastName = prompt("Введите вашу фамилию");
// const userAge = prompt("Введите ваш возраст");
// console.log(userEmail);
// console.log(userLogin);
// console.log(userName);
// console.log(userlastName);
// console.log(userAge);

// const user = {
//   email: userEmail,
//   login: [userLogin],
//   name: [userName],
//   lastName: [userlastName],
//   age: [userAge],
// };
// console.log(user);

// -----------------
// const form = document.querySelector(".form");
// const email = document.querySelector(".email-f").value;
// const login = document.querySelector(".login-f").value;
// const name = document.querySelector(".name-f").value;
// const lastname = document.querySelector(".lastname-f").value;
// const age = document.querySelector(".age-f").value;
// const time = document.querySelector(".time-f").value;
// console.log(age);
// form.addEventListener("input", (value) => {
//   console.log(login);
// });

// const user = {
//   usEmail: email,
//   usLogin: login,
//   usName: name,
//   usLastName: lastname,
//   usAge: age,
//   usTime: time,
// };
// console.log(user);
//
// 555555555555555555555555555555555
// const usersList = [];
// let userCounter = 1;
// document.getElementById("userForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Предотвращаем отправку формы по умолчанию

//   // Получаем значения полей формы
//   const login = document.getElementById("login").value;
//   const email = document.getElementById("email").value;
//   const name = document.getElementById("name").value;
//   const age = document.getElementById("age").value;
//   const time = document.getElementById("time").value;

//   // Создаем объект user с данными пользователя
//   const user = {
//     id: userCounter, // Порядковый номер пользователя
//     login: login,
//     email: email,
//     name: name,
//     age: age,
//     time: time,
//   };
//   usersList.push(user);
//   // Увеличиваем счетчик для следующего пользователя
//   userCounter++;
//   console.log(user); // Выводим данные пользователя в консоль
//   const userKeys = Object.keys(user);
//   console.log(userKeys);
//   const userValues = Object.values(user);
//   console.log(userValues);
//   // Здесь можно добавить логику для отправки данных на сервер или их дальнейшей обработки
//   document.getElementById("login").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("age").value = "";
//   document.getElementById("time").value = "";
//   console.log(usersList);
// });

// // for (let elem of usersList) {
// //   console.log(elem);
// // }
// 5555555555555555555555555555555555555555
// деструктуризація  об'єкта у функції
// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// function getUserName({ name, skills: { html, css, js } }) {
//   console.log(`Hello my name is ${name}, I know html - ${html}, css - ${css}, js - ${js}`);
// }

// getUserName(user);
// 55555555555555555555555555555555555555555555
// деструктуризація об'єкта в циклі
// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }, {}];
// const names = [];
// // можна зазначити дефолт.значення якщо чогось не буде
// for (const { name = "Do not found" } of users) {
//   names.push(name);
// }
// console.log(names);
// 5555555555555555555555555555
// let arr = [];
// const numbers = [55, 77, 42, 1, 3, 6, 8, 2, 5, 11, 17];
// numbers.forEach(function (element, index) {
//   console.log(`Index ${index}, value ${element}`);
//   if (element % 2 !== 0) {
//     arr.push(element);
//   }
// });
// console.log(arr);
// console.log(numbers);
// console.log(numbers.join(" "));
// console.log(numbers.slice(1, 6));
// console.log(numbers.splice(1, 0, 88));
// console.log(numbers.splice(1, 3));
// for (let elem of numbers) {
//   console.log(elem);
// }

// let newArr = [];
// for (let elem of numbers) {
//   console.log(elem);
//   if (elem % 2 !== 0) {
//     newArr.push(elem);
//   }
// }
// console.log(newArr);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (elem) {
//     totalPrice += elem;
//   });
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([542, 4, 21]);
// calculateTotalPrice([14, 8, 29]);
// calculateTotalPrice([64, 480, 21]);
// const numero = [6, 9, 3, 5, 1, 2, 7, 8];
// console.log(numbers);
// const newArray = numbers.sort();
// console.log(newArray);
// console.log(numero.sort());
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//      title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);
// 44444444444444444444444444444444444444444444
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(numbers);
// console.log(evenNumbers);
// console.log(evenNumbers.sort());

// console.log(oddNumbers);
// console.log(oddNumbers.sort());
// console.log(oddNumbers.join("-"));
// console.log(oddNumbers.reverse());
// 4444444444444444444444444444444444444444
// const lowScore = 40;
// const highScore = 80;
// const students = [
//   { id: 1, name: "Ajax", score: 56, sciens: ["Math", "JS", "Node.js"] },
//   { id: 2, name: "Matias", score: 34, sciens: ["Vue", "React"] },
//   { id: 3, name: "Billy", score: 98, sciens: ["HTML", "CSS", "JS"] },
//   { id: 4, name: "Ted", score: 27, sciens: ["TS", "HTML", "CSS"] },
//   { id: 5, name: "Kevin", score: 75, sciens: ["Softskills", "Hardskills"] },
//   { id: 6, name: "Jolly", score: 53, sciens: ["Next.js"] },
//   { id: 7, name: "Rose", score: 81, sciens: ["JS", "HTML", "CSS"] },
// ];
// const low = students.filter((student) => student.score <= lowScore);
// console.log(low);
// const high = students.filter((student) => student.score > highScore);
// console.log(high);
// const midl = students.filter((student) => student.score > lowScore && student.score <= highScore);
// console.log(midl);
// const midi = students.filter(({ score }) => score > lowScore && score <= highScore);
// console.log(midi);
// const para = students.filter(({ id }) => id % 2 === 0);
// console.log(para);
// const nepara = students.filter(({ id }) => id % 2 !== 0);
// console.log(nepara);
// const fin = students.find(({ id }) => id === 2);
// console.log(fin);
// 2222222222222222222222222222222
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const names = users.toSorted((a, b) => a.balance - b.balance).map((user) => user.name);
// console.log(names);
// const bal = users.toSorted((a, b) => a.balance - b.balance);
// console.log(bal);
// const balu = users.toSorted((a, b) => a.balance - b.balance).map((user) => user.balance);
// console.log(balu);
// const a = users.flatMap((user) => user.friends);
// console.log(a);
// const b = a.filter((elem, index, array) => array.indexOf(elem) === index);
// console.log(b);
// const c = b.toSorted((a, b) => a.localeCompare(b));
// console.log(c);

// const d = users.reduce((acc, user) => acc + user.balance);
// console.log(d);
// console.log(typeof d);
// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// };
// console.log(calculateTotalBalance(users));

// 4444444444444444444
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// const a = scores.toSorted((a, b) => a - b);
// console.log(a);
// const b = scores.toSorted((a, b) => (a = 0));
// console.log(b);
// 666666666666666666666666666666666666666666666
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// // const names = books.filter((elem) => elem > MIN_BOOK_RATING);
// // .map((book) => book.author)
// // .toSorted((a, b) => a.localeCompare(b));
// console.log(names);
// 8888888888888888888888888888888888888
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace);
// 55555555555555555555555555
// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}
// 7777777777777777777777777777777
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// 9999999999999999999999999999999
// const arr = [1, 3, 6, 8, 2, 5, 4];
// console.log(arr);
// const a = arr.sort();
// console.log(a);
// console.log(arr);
// const b = arr.lastIndexOf(6);
// console.log(b);
// console.log(arr.indexOf(6));
// console.log(arr.includes(7));
// console.log(arr.reverse());
// console.log("join :", arr.join("-"));
// console.log("toString :", arr.toString());
// console.log("toLocaleString :", arr.toLocaleString());
// console.log("copyWithin :", arr.copyWithin());
// console.log("fill (мутуючий):", arr.fill(1, 3));
// console.log("slice :", arr.slice(3, 5));
// 77777777777777777777777777777777
// const arr = ["Mumu", "Skype", "35", "Tor", "Elite", "2022", "Mamont", "Dodik", "Josef-Kaz", "1980"];
// const mas = [8, 5, 23, 78, 12, 7, 4, 55, 69, 70];
// console.log(arr);
// console.log(arr.length);
// // console.log("toString :", arr.toString());
// // const a = arr.join("");
// // console.log(a);
// // console.log(a.split(""));
// // console.log("j0in :", arr.join(" "));
// // console.log("j0in :", arr.join("-"));
// // console.log("j0in :", arr.join(" ,"));
// console.log("pop :", arr.pop());
// console.log(arr);
// console.log("push :", arr.push("Royal House"));
// console.log(arr);
// console.log("shift :", arr.shift());
// console.log(arr);
// console.log("unshift :", arr.unshift("BMW"));
// console.log(arr);
// console.log(delete arr[1]);
// console.log(arr);
// const b = mas.toString().split(",");
// console.log(b);
// const c = arr.concat(b);
// console.log(c);
// const d = c.sort();
// console.log(d);
// console.log(mas);
// const dd = mas.splice(2, 1);
// console.log(dd);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(mas));
// console.log(mas.indexOf(78, 0));
// console.log(mas.indexOf(78, 6));
// const e = mas.find((elem) => elem > 10 && elem < 60);
// console.log(e);
// console.log(mas.findIndex((elem) => elem > 10));
// console.log(arr.includes("BMW"));
// console.log(mas.every((elem) => elem < 50));
// console.log(mas.some((elem) => elem < 25));
// console.log(mas.fill());
// 777777777777777777777777777777777777777777777777777
// function greetGuest(greeting) {
//   console.log(`Доречі ${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.
// 777777777777777777777777777777777777
// const abbik = {
//   name: "Otto",
// };
// const bobbik = Object.create(abbik);
// abbik.lastName = "Schmidtt";
// const doddik = Object.create(bobbik);
// doddik.age = 34;
// const coddik = Object.create(doddik);
// coddik.email = "ogogo@mail.com";
// console.log(abbik);
// console.log(bobbik);
// console.log(doddik);
// console.log(coddik);
// console.log(coddik.name);
// console.log(coddik.age);
// console.log(coddik.lastName);
// console.log(coddik.email);
// console.log(doddik.name);
// console.log(doddik.age);
// console.log(abbik.isPrototypeOf(coddik));
// console.log(coddik.hasOwnProperty("lastName"));
// 88888888888888888888888888888888888888
// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// 88888888888888888888888
// const a = {
//   a: 5,
// };
// console.log(a);
// const b = Object.create(a);
// b.b = 7;
// console.log(b);
// const c = Object.create(b);
// c.c = 9;
// console.log(c);
// const d = Object.create(a);
// d.d = 2;
// d.a = 1;
// console.log(d);
// 11111111111111111111111111111111
// function findLongestWord(string) {
//   // Change code below this line
//   const newString = string.split(" ");
//   console.log(newString);
//   let longestWord = newString[0];
//   console.log(longestWord);
//   for (let i = 0; i < newString.length; i += 1) {
//     console.log(i);
//     if (newString[i].length > longestWord.length) {
//       longestWord = newString[i];
//     }
//     console.log(longestWord[i]);
//     console.log(longestWord);
//     return longestWord;
//   }

//   // Change code above this line
// }
// findLongestWord("The box quick fly in Big Touer");

// function findLongestWord(string) {
//   // Change code below this line
//   let arrStr = string.split(" ");
//   console.log(arrStr);
//   let wordlength = 0;
//   let longestWord;
//   for (let i = 0; i < arrStr.length; i++) {
//     wordlength = arrStr[2].length;
//     console.log(wordlength);
//     if (arrStr[i].length > wordlength) {
//       longestWord = arrStr[i];
//       console.log(longestWord);
//       return longestWord;
//     }
//   }
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// 5555555555555555555555555555555
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// console.log(arr.push(6));
// console.log(arr.unshift(0));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.join("-"));
// console.log(arr.indexOf(3));
// console.log("4", arr.includes(4));
// console.log(arr.map((num) => Math.pow(num, 2)));
// console.log(arr.map((num) => Math.pow(num, 3)));
// console.log(arr.filter((num) => num % 2 === 0));
// console.log(arr.every((num) => num > 0));
// console.log(arr.some((num) => num < 3));
// // console.log(arr.fill(7));
// console.log(arr.reduce((acc, num) => acc + num, 0));
// console.log(arr.reduce((acc, num) => acc * num, 1));
// console.log(arr.concat(["tru-la-la", "Bob"]));
// console.log(arr.reverse());
// console.log(arr.sort());
// console.log(arr.find((num, i) => i === 2));
// console.log(arr.findIndex((num) => num === 5));
// console.log(arr.toString());

// let side1 = prompt("Длина прямоугольника ");
// let side2 = prompt("Ширина прямоугольника ");
// console.log(side1);
// console.log(side2);
// alert((Number(side1) + Number(side2)) * 2);
// console.log((Number(side1) + Number(side2)) * 2);

//goit-js-hw-06 task-1, task-2, task-3

// task-1
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// task-2
// class Storage {
//   #items = [];

//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     for (item of this.#items) {
//       if (item === itemToRemove) {
//         this.#items.splice(0, itemToRemove);
//       }
//       return;
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// 55555555555555555555555555555555555555555555555
// let num1 = 1;
// let num2 = 2;
// console.log("сумма: " + Number(num1 + num2));
// let num = "123";
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// console.log(sum);
// let num = 123;
// let numero = num.toString()[0];
// console.log(numero);
// let a = 24 * 60 * 60;
// console.log(a);
// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);
// let num = 123;
// let str = String(num);
// console.log(str.length);
// let a = "123";
// let b = "456";
// let s = Number(a) + Number(b);

// console.log(s);
// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(typeof aaa);
// console.log(aaa + bbb + ccc);
// alert(60 * 60 * 24 * 365);
// let arr = [1, 2, 3];
// console.log(arr[0] + arr[1] + arr[2]);
// let arr = ["a", "b", "c"];
// arr[0] += "!1";
// arr[1] += "!2";
// arr[2] += "!3";
// console.log(arr);

// 9999999999999999999999999999999999999
// модуль 5 заняття 10
// task 1
// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, heigth } = {}) {
//     this.#width = width;
//     this.#height = heigth;
//   }
//   get width() {
//     return this.#width;
//   }
//   get heigth() {
//     return this.#height;
//   }
//   set width(newWidth) {
//     if (typeof newWidth === "number" && newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       console.log("Ширина має бути числом і більша за 0");
//     }
//   }
//   set heigth(newHeigth) {
//     if (typeof newHeigth === "number" && newHeigth > 0) {
//       this.#height = newHeigth;
//     } else {
//       console.log("Висота має бути числом і більша за 0");
//     }
//   }
// }

// const item = new Rectangle({ width: 10, heigth: 5 });
// console.log(item);
// console.log(item.width);
// item.width = 12;
// console.log(item.width);

// task 2
// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     console.log(currentYear);
//     const diff = currentYear - this.year;
//     if (diff > 5) {
//       return "Студент закінчив навчання";
//     } else {
//       return `Студент навчається на ${diff} курсі`;
//     }
//   }
// }
// const student = new Student("Петрик", "П'яточкин", 2019);
// console.log(student);
// console.log(student.getFullName());
// console.log(student.getCourse());

// task 3
// Необхідно створити клас Hero, який представляє героя з гри.Клас повинен мати публічні властивості, та, а також методи та, шщо дозволяють герою атакувати та відновлювати здоров'я відповідно.
// також створи функціонал для підрахунку створених героїв
// властивість має зберігати ім'я героя
// властивість має зберігати рівень героя
// властивість має зберігати поточний рівень здоров'я героя
// метод наносить пошкодження в розмірі 10 одиниць
// метод додає до здоров'я героя 10 одиниць
// class Hero {
//   static counter = 0;
//   static addHero() {
//     // Hero.counter +=1; або
//     this.counter += 1;
//     console.log(`Кількість героїв ${this.counter}`);
//   }
//   #level;
//   constructor(name, level, health) {
//     this.name = name;
//     this.#level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }
//   attack() {
//     return "Атакує з 10";
//   }
//   heal() {
//     return (this.health += 10);
//   }
// }
// const bloodseker = new Hero("Bloodseker");
// const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");
// const bloodseker4 = new Hero("Bloodseker");
// console.log(bloodseker);
// console.log(bloodseker.attack());
// console.log(bloodseker.heal());

// task 4
// Необхідно створити клас BankAccount який представляє банківський рахунок. Клас повинен мати приватну властивість balance,яка представляє баланс рахунку. Клас також повинен мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.
// class BankAccount {
//   #balance;
//   constructor() {
//     this.#balance = 0;
//   }
//   #changeBalance(amount) {
//     this.#balance += amount;
//   }
//   // готівка на депозит
//   deposit(amount) {
//     if (amount <= 0) {
//       console.log("Сума має бути більша за нуль");
//       return;
//     }
//     this.#changeBalance(amount);
//     console.log(`Здійснено депозит на ${amount}`);
//   }
//   // зняття готівки
//   withdraw(amount) {
//     if (amount <= 0) {
//       console.log("Сума має бути більша за нуль");
//     } else if (amount > this.#balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       this.#changeBalance(-amount);
//       console.log(`Знято ${amount}`);
//     }
//   }
// }
// const instance = new BankAccount();
// instance.deposit(100);
// instance.deposit(1200);
// instance.withdraw(1000);
// console.log(instance);
// *****************************************************

// const technologies = ["Ops", "HTML", "1", "CSS", "JS", "React", "Node"];
// console.log(technologies);
// technologies.push("Ruby");
// console.log(technologies);
// const list = document.querySelector(".list");
// const markup = technologies.map((technology) => `<li class="list-item>${technology}</li>`).join(" ");
// console.log(markup);
// list.innerHTML = markup;
// const newTechnologies = ["Vue", "Angular", "TypeScript"];
// const newMarkup = newTechnologies.map((technolog) => `<li class="list-item new">${technolog}</li>`).join("");
// console.log(newMarkup);
// list.insertAdjacentHTML("beforeend", newMarkup);

// **************************************
const bambuk = {
  part: 3,
  salads: ["Cezar", "Oliv'e", "Bergamo"],
  table: 7,
  worker: "Mark",
  waiter: "",
};
console.log(bambuk);
