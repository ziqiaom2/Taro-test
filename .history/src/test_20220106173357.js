function foo() { console.log( a ); // 3（不是 2 ！） }
function bar() {
var a = 3; foo()}
var a = 2; bar()