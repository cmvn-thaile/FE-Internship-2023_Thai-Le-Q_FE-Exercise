// Cho biết kết quả in ra của đoạn code sau.
// console.log("stack [1]");
// setTimeout(function A() {
//   console.log("macro [2]");
// }, 0);
// setTimeout(function B() {
//   console.log("macro [3]");
// }, 0);
// const p = Promise.resolve();
// p.then(function C() {
//   setTimeout(function D() {
//     console.log("macro [4]");
//     setTimeout(function E() {
//       console.log("macro [5]");
//     });
//     p.then(function F() {
//       console.log("micro [6]");
//     });
//   }, 0);
//   console.log("micro [7]");
// });
// console.log("stack [8]");

//1 8 7 2 3 4 6 5

//event loop sẽ ưu tiên những task đồng bộ do đó in 1 sau đó đến 8
// tiếp theo đưa setTimeout của function A và B và promise của function C cho web time out sử lý
// promise là miscro task nên sẽ được ưu tiên hơn
// mà ở trong promise C có console log đồng bộ nên ra 7 trước
// sau đó ném function D cho web  API xử lí và lúc đó thì setTimeout của A và B hoàn thành
// nên A và B sẽ ra trước sau đó là 4 trong fucntion D và promise trong funtion D là 6 và cuối cùng setTimeout 5
