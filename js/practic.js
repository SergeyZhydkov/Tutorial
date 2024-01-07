// const profile = {
//   name: "Job",
//   tag: "jobik",
//   location: "Ocho Rios, Jamaica",
//   age: 34,
//   stats: {
//     followers: 5432,
//     views: 789,
//     likes: 456,
//   },
// };
// const {
//   name,
//   tag,
//   location,
//   age,
//   stats: { views, likes },
// } = profile;
// console.log(name, tag, location, age, views, likes);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };
// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
//   //   const [name, rating] = entry;
//   //   const name = entry[0];
//   //   const rating = entry[1];
//   console.log(name, rating);
// }

// const book = {
//   title: "АББАТ",
//   author: "Dan Kasper",
// };
// console.log(book);
// const { title: newTitle, author: cvazyAuthor } = book;
// console.log(newTitle);
// console.log(cvazyAuthor);

// const firstBlock = [1, 2, 3, 4];
// const secondBlock = [9, 10, 11, 12];
// const thirdBlock = [21, 22, 23, 24];
// const allBlock = [...firstBlock, 6, 7, ...secondBlock, 15, 16, 17, ...thirdBlock];
// console.log(allBlock);
// const newBlock = [...allBlock, 111, 222, 333];
// console.log(newBlock);

// const first = {
//   a: 15,
//   b: 20,
//   c: 25,
//   d: 15,
// };
// const second = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
// };
// const third = {
//   ...first,
//   ...second,
// };
// console.log(first);
// console.log(second);
// console.log(third);
//
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let productPrice;
//   for (const product of products) {
//     if (product === productName) {
//       productPrice.push(product.price);
//     } else {
//       productPrice = null;
//     }
//   }

//   // Change code above this line
// }
// getProductPrice("Scanner");

// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);
