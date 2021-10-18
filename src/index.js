import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

// var test1 = "varは再宣言、再代入可能";

// console.log(test1);

// let test2 = "letは再代入不可、再宣言可能";

// console.log(test2);

// // できない→let test2 ="再代入できなかった、再宣言は出来た。"
// test2 = "再代入できなかった、再宣言は出来た。";

// console.log(test2);

// const test3 =
//   "constは再代入も再宣言もできないが、オブジェクトのプロパティは変更可能";

// console.log(test3);

// const test4 = { name: "kawakita", age: 32 };

// test4.name = "kazuya";
// test4.address = "Tokyo";

// console.log(test4);

// アロー関数

// const arrow1 = () => console.log("アロー関数は１行の場合returnを省略できる");

// arrow1();

// const arrow2 = () => {
//   return console.log("アロー関数2");
// };

// arrow2();

// const arrow3 = (weight, height) => {
//   const bmi = Math.floor(weight / height ** 2);
//   return console.log(`私のBMIは${bmi}です`);
// };

// arrow3(82, 1.82);

// スプレッド構文;
// const array1 = [100, 200, 300];
// const array2 = [400, 500, 600];

// const array3 = [...array1, ...array2];

// console.log(array3);

// map, filter;

const nameArr = ["kawakita", "yamada", "sato"];
// 従来;
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index　+　1}番目は${name}です`));
//第二引数に番号が振られる

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "kawakita") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
