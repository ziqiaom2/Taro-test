// function foo() { console.log( a ) }
// function bar() {
//   let a = 3;
//   {
//     console.log(a);
//   }
// }
// var a = 2;
// bar();

function foo() {
  console.log(a);
}
function bar() {
  let a = 3;
  foo();
}
// var a = 2;
bar();
