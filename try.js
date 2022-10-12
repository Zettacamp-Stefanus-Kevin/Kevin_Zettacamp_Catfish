// const favorites = ['Seafood', 'Salad', "Nugget", "Soup"];
// const others = ['Cake', "Pie", 'Donut'];
// const all = [favorites, others];
// const allfavorites = [...favorites,...others];

// console.log(favorites);
// console.log(others);
// console.log(...favorites);
// console.log(...others);
// console.log(favorites,others);
// console.log(...favorites,...others);
// console.log(all);
// console.log(allfavorites);

// let angka = [1, 2, 3, 4, 5];
// let puluhan = [10, 20, 30, 40, 50];


// const map = puluhan.map(x => x * 2);
// console.log(map);

// a
// destructuring
// const [a,b,c, , e]= angka;
// console.log(e)

// object
// const book/*variabel*/ = {
//     "title": "Manusia Setengah Salmon",
//     "author": "Raditya Dika",
//     "publisher": {
//         "name": "Gagas Media",
//         "address": "Jakarta Selatan"
//     }
// }

// const pulpen = {
//     'warna': 'biru',
//     'merk': "abc"
// }

// const title = book.title;
// const author = book.author;
// const publisher = book.publisher;

// console.log("saya membeli buku berjudul ", title);
// console.log("buku ini karya ", author);
// console.log("buku ini diterbitkan oleh ", publisher.name, "di kota ", publisher.address);

//spread
// const newob = {...book, ...pulpen}
// console.log(newob);

// destructuring
// const { title, author, publisher: { name, address } } = book;

// console.log(title, author, name, address);

//funtion
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName())