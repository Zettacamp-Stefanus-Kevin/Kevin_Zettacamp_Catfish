console.log('hello world');
var FirstName = "Learning Typescript is different than Javascript";
console.log(FirstName);
function untukpotong(t, c, k) {
    var apa = t.slice(c, k);
    return apa;
}
console.log(untukpotong(FirstName, 0, 9));
console.log(untukpotong(FirstName, 9, 19));
console.log(untukpotong(FirstName, 19, 22));
console.log(untukpotong(FirstName, 22, 32));
console.log(untukpotong(FirstName, 32, 37));
console.log(untukpotong(FirstName, 38, 50));
