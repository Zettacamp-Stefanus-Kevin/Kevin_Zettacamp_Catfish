console.log('hello world')
let sentence :string= "Learning Typescript is different than Javascript";


console.log(sentence)

function untukpotong(t:string,c:number,k:number){
    let apa : string = t.slice(c,k)
    return apa;
}

console.log(untukpotong(sentence,0,9));
console.log(untukpotong(sentence,9,19));
console.log(untukpotong(sentence,19,22));
console.log(untukpotong(sentence,22,32));
console.log(untukpotong(sentence,32,37));
console.log(untukpotong(sentence,38,50));



let duanda : boolean = true

console.log(duanda);

let farhan : any = 'tester'

console.log(farhan)
