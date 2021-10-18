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

const arrow1 = () => console.log("アロー関数は１行の場合returnを省略できる");

arrow1();

const arrow2 = () => {
  return console.log("アロー関数2");
};

arrow2();

const arrow3 = (weight, height) => {
  const bmi = Math.floor(weight / height ** 2);
  return console.log(`私ののBMIは${bmi}です`);
};

arrow3(82, 1.82);
