// TASK D
function checkContent( a, b ) {
  if(a.length !== b.length) {
    return false;
  }

let ele1 = a.split("");
let ele2 = b.split("");

ele1.sort();
ele2.sort();

let el1 = ele1.join("");
let el2 = ele2.join("");

return el1 === el2;
}

const result = checkContent("computer", "putcomer");
console.log(result);

const result1 = checkContent("omadbek", "mark");
console.log(result1);


// TASK C
// class Shop {
//   constructor(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }

//   qoldiq(time) {
//     console.log(`Hozir ${time} da ${this.a}ta Iphone, ${this.b}ta Xiaomi va ${this.c}ta Samsung mavjud!`)
//   };
//   sotish(product, amount) {
//     if (product === "Iphone") {
//       this.a -= amount

//       console.log(`${product} sotish: ${amount}`);
//     };
//   };
//   qabul(product, amount) {
//     if (product === "Samsung") {
//       this.c += amount
//       console.log(`${product} qabul: ${amount}`);
//     };
//   };
  
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq("20:40"); 
// shop.sotish("Iphone", 3);
// shop.qabul("Samsung", 4);
// shop.qoldiq("20:50"); 


// // TASK B

// function countDigits(num) {
//   let count = 0;

//   for(let ele of num) {
//     if(ele >= '0' && ele <= '9') {
//       count++
//     }   
//   }
//   return count;
// }

// const result1 = countDigits("8ey65fd9a1tdh7s4d3");
// console.log(result1);

// // TASK A
// function countLetter(letter, word){
//   let count = 0;

//   for(let char of word) {
//     if(char === letter) {
//       count++
//     }
//   }
//   return count;
// }
// const result = countLetter("a", "real madrid");
// console.log(result);


// console.log("Jack Ma Maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "uzingizni ishlaringizni boshlang",  // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi)" // 60
// ];

// // CALLBACK FUNCTIONS
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//       setInterval(function () {
//           callback(null, list[5]);
//       }, 2000);
      
//     }
    
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//   if(err) console.log('Error:', err);
//   else {
//     console.log('javob:', data);
//   }
// });
// console.log('passed here 1');


// ASYNC function
// async function maslahatBering(a) {
//   if(typeof a !== 'number') throw new Error("insert a number");
//   else if(a <= 20) return list[0];
//   else if(a > 20 && a <= 30) return list[1];
//   else if(a > 30 && a <= 40) return list[2];
//   else if(a > 40 && a <= 50) return list[3];
//   else if(a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//         setInterval(function(){
//         resolve(list[5]);
//     }, 1000);
//     })

    
//   }
// }

// Call via then/catch
// console.log('passed here 0');
// maslahatBering(25).then(data => {
//     console.log('javob:', data);
// }).catch(err => {
//     console.log('Error', err);
// })
// console.log('passed here 1');

// Call via async/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
  // javob = await maslahatBering(70);
  // console.log(javob);
  // javob = await maslahatBering(41);
  // console.log(javob);
// }
// run();

