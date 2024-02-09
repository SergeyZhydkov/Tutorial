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
// for (let i = 1; i < numbers.length; i += 1) {
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
