"use strict";
let case1 = [1, 'data', 3, 'result'];
let case2 = ['Bejo', 'has', '4', 'sport'];
let case3 = [10, 'data', 30, 'result'];
function getStr1(a) {
    return a.join(' ');
}
function getStr2(a) {
    return a.join(' ');
}
console.log(getStr1(case1));
console.log(getStr1(case2));
console.log(getStr1(case3));
console.log(getStr2(case3));
let cobaArray = ['budi', 'beli', 3, 'permen'];
let cobaObjek = { nama: 'budi', umur: 18, gender: true };
function cobaObj(cobaObjek) {
    if (cobaObjek.gender == true) {
        console.log('nama = ' + cobaObjek.nama + ', umur = ' + cobaObjek.umur + ', laki');
    }
    else {
        console.log(cobaObjek.nama + cobaObjek.umur + 'wanita');
    }
}
console.log(cobaArray);
cobaObj(cobaObjek);
