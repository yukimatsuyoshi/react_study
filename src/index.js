/**
 * テンプレート文字列
 */
// const name = "yuki";
// const age = "29";

// const message = `名前：${name}, 年齢:${age}`;

// console.log(message);

/**
 * アロー関数
 */
// const func = (str) => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("test"));

/**
 * 分割代入
 * メモ: デフォルト値を設定可能
 */
// const myProfile = {
//   name: "test",
//   age: 29
// };

// const message2 = `名前:${myProfile.name}, 年齢:${myProfile.age}`;
// console.log(message2);

// const { name, age } = myProfile;
// const message3 = `名前:${name}, 年齢:${age}`;
// console.log(message3);

// 配列の分割代入
// const myProfile = ["test", 29];
// const message = `名前:${myProfile[0]}, 年齢:${myProfile[1]}`;
// console.log(message);

// const [name, age] = myProfile;
// const message2 = `名前:${name}, 年齢:${age}`;
// console.log(message2);

/**
 * スプレッド構文 ...
 */
// 配列の展開（unpack）
// const array = [1, 2];
// // console.log(array);
// // console.log(...array);

// const sum = (num1, num2) => console.log(num1 + num2);
// sum(array[0], array[1]);
// sum(...array); //引数のunpack

// packing
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(array3);

// 配列のコピー、結合
// const array4 = [10, 20];
// const array5 = [30, 40];

// const array6 = [...array4];
// console.log(array4);

// const array7 = [...array4, ...array5];
// console.log(array7);

// イコールでコピーした場合は参照になるので、要素を変更した時にコピー元に影響が出る
// スプレッド構文を利用した場合はsharrow copy

/**
 * mapやfilterを使った配列の処理
 */
const namearr = ["a", "b", "c"];
// for (let i = 0; i < namearr.length; i++) {
//   console.log(namearr[i]);
// }

// 配列をループして処理を実行し、それを新たな配列に格納
// const namearr2 = namearr.map((name) => name);
// console.log(namearr2);

// 配列をループして、要素に対して処理を実行
// namearr.map((name, i) => console.log(`${i + 1}: ${name}`));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const evenArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(evenArr);

// const newNameArr = namearr.map((name) => {
//   if (name === "a") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// const newNameArr = namearr.map((name) => (name === "a" ? name : `${name}さん`));
// console.log(newNameArr);
