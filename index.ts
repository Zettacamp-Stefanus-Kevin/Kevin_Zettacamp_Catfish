
let case1: (string | number)[] = [1, 'data', 3, 'result']
let case2: string[] = ['Bejo', 'has', '4', 'sport']
type combination = (string | number);
let case3: (combination)[] = [10, 'data', 30, 'result']

function getStr1(a: (string | number)[]): string {
    return a.join(' ');
}
function getStr2(a: combination[]): string {
    return a.join(' ');
}

let tryarray = ['test', 1,3]
console.log


console.log(getStr1(case1))
console.log(getStr1(case2))
console.log(getStr1(case3))
console.log(getStr2(case3))

// let result : string ='';
// function getStr2() :any {
//     for(let i = 0; i<case2.length; i++){
//         result += case2[i]+' ';
//     }
//     return result;
// }
// console.log(getStr2());


type combinedType1 = (string | number)[];
type combinedType2 = { nama: string, umur: number, gender: boolean };

let cobaArray: combinedType1 = ['budi', 'beli', 3, 'permen'];
let cobaObjek: combinedType2 = { nama: 'budi', umur: 18, gender: true }
function cobaObj(cobaObjek: combinedType2) {
    if (cobaObjek.gender == true) {
        console.log('nama = ' + cobaObjek.nama + ', umur = ' + cobaObjek.umur + ', laki')
    } else {
        console.log(cobaObjek.nama + cobaObjek.umur + 'wanita')
    }
}

console.log(cobaArray);
cobaObj(cobaObjek)

enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 3,
    Book = 10
}
console.log(PrintMedia.Magazine)
