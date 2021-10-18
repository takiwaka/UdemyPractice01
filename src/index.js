import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

var test1 = "varは再宣言、再代入可能";

console.log(test1);

let test2 = "letは再代入不可、再宣言可能";

console.log(test2);

// できない→let test2 ="再代入できなかった、再宣言は出来た。"
test2 = "再代入できなかった、再宣言は出来た。";

console.log(test2);

const test3 =
  "constは再代入も再宣言もできないが、オブジェクトのプロパティは変更可能";

console.log(test3);

const test4 = { name: "kawakita", age: 32 };

test4.name = "kazuya";
test4.address = "Tokyo";

console.log(test4);
