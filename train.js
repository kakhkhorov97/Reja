// H - TAsk
function getPositive(arr) {
 let result = "";
  for (let num of arr) {
      if (num > 0) {
         result += String(num);
         }
        }
     return result; }
      console.log(getPositive([3, -1, 7, -5]))


// G-Task
// function getHighestIndex(arr) {
//     let highest = Math.max(...arr)
//     return arr.indexOf(highest)
// }

// console.log(getHighestIndex([6, 55, 118, 2, 50]))

// F-Task

// function findDoublers(str) {
//   let letters = [];

//   for (let i = 0; i < str.length; i++) {
//     if (letters.includes(str[i])) {
//       return true;
//     }

//     letters.push(str[i]);
//   }

//   return false;
// }

// console.log(findDoublers("hello"));


// //E-Task:
// function getReverse (str) {
//   return str.split("").reverse("").join("");}
//   console.log(getReverse ("Shohjahon"));



//D-Task:

// function checkContent(a, b) {
//   if (a.length !== b.length) return false;
//   return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(checkContent("Barcelona", "celonaBar")); 

// function checkContent(a, b) {
//   if (a.length !== b.length) return false;
//   return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(checkContent("Barcelona", "Realmadrid")); 


//C-Task:

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola
//     };
//   }
//   getTime() {
//     const now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();

//     if (minutes < 10) minutes = "0" + minutes;
//     return `${hours}:${minutes}`;
//   }
//     qoldiq() {
//     console.log(
//       `Hozir ${this.getTime()}da ${this.products.non}ta non, ${this.products.lagmon}ta lag'mon va ${this.products.cola}ta cola mavjud`
//     );
//   }

//   sotish(product, amount) {
//     if (this.products[product] >= amount) {
//       this.products[product] -= amount;
//       console.log(`${amount}ta ${product} sotildi`);
//     } else {
//       console.log(`${product} yetarli emas`);
//     }
//   }

//   qabul(product, amount) {
//     this.products[product] += amount;
//     console.log(`${amount}ta ${product} qabul qilindi`);
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();


//B-Task:

// function countDigits(str) {
//   let count = 0;
// for (let char of str) {
// if (char >= '0' && char <= '9') {
//     count++; }
// }
// return count;
// }
// console.log(countDigits("8H2kL9vP3mN7xR1qW5zT6bY4uJ8"));



//A-Task:

// function countLetter(letter, word) {
//     return word.split(letter).length - 1;
// }

// const word = "entertainment";
// const letter = "e";

// const result = countLetter(letter, word);

// console.log(result);


// console.log("Jack Ma maslahatlari");
// const list = [
// "Yaxshi talaba bo'ling", //20
// "To'g'gri boshliq tanlang va ko'proq xato qiling",  //20-30
// "Ozingiz ishlashni boshlang", //30-40
// "O'zingiz kuchli bo'lgan narsalarni qiling", //40-50
// "Toshlarga investitsiya qiling", //50-60
// "Endi dam oling" //60-70
// ];

//  async function maslahatBering(a,) {
//     if(typeof a !== "number") throw new Error("iltimos raqam kiriting");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <=30) return list[1];
//     else if (a > 30 && a <=40) return list[2];
//     else if (a > 40 && a <=50) return list[3];
//     else if (a > 50 && a <=60) return list[4];
//     else {
//         //  return list[5];
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });  
//     }
// }
//  console.log("Passed here");

// maslahatBering(65).then(data => {
//     console.log('javob:', data);
// }).catch(err => {
//     console.error('ERROR:', err);
// });

// console.log("Passed here 1");        

// async function run () {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();







// console.log("Jack Ma maslahatlari");
// const list = [
// "Yaxshi talaba bo'ling", //20
// "To'g'gri boshliq tanlang va ko'proq xato qiling",  //20-30
// "Ozingiz ishlashni boshlang", //30-40
// "O'zingiz kuchli bo'lgan narsalarni qiling", //40-50
// "Toshlarga investitsiya qiling", //50-60
// "Endi dam oling" //60-70
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("iltimos raqam kiriting", null);
//     else if (a <= 20) callback(null, list[0])
//     else if (a > 20 && a <=30) callback(null, list[1]);
//     else if (a > 30 && a <=40) callback(null, list[2]);
//     else if (a > 40 && a <=50) callback(null, list[3]);
//     else if (a > 50 && a <=60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000);
//     }

// }
//  console.log("Passed here");

// maslahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:", err);
//    else {
//      console.log('javob:', data);
//    }
// });

//  console.log("Passed here 1");