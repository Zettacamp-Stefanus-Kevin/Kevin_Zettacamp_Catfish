console.log('hello world')
let sentence :string= "Learning Typescript is different than Javascript";

let a;
a = 6;

console.log(sentence)

function potong(text,num1:number,num2:number):string{
    let word : string = text.slice(num1,num2)
    return word;
}

// console.log(potong(sentence,0,9));
console.log(potong(sentence,9,19));
// console.log(potong(sentence,19,22));
// console.log(potong(sentence,22,32));
// console.log(potong(sentence,32,37));
// console.log(potong(sentence,38,50));






// let assign : string ="ini assgin"
// console.log(assign)
// let inferen = "ini inferen"
// console.log(inferen)

// let duanda : boolean = true

// console.log(duanda);

// let farhan : any = 'tester'

// console.log(farhan)

