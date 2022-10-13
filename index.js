function purchasing(price, diskon, tax, beli, credit) {

    let stock = 10;
    let amountprice = 0;
    const pricediskon = price * diskon / 100;
    let afterdiskon = price - pricediskon;
    const pricetax = pricediskon * tax / 100;
    let aftertax = afterdiskon + pricetax;
    let total = aftertax * beli;

    for (let i = 0; beli > i; i++) {
        if (i > (stock - 1)) {
            console.log('maaf, stok sudah habis');
            break;
        } else {
            console.log('>> beli ' + (i + 1) + ' buku,  harga = Rp' + (amountprice += aftertax));
        }
        console.log('sisa stock = ' + (stock - (i + 1)));
    }

    let cicilan = parseFloat((amountprice / credit).toFixed(2));
    let termOfCredit = [];
    let amountCredit = 0;

    for (let i = 1; i <= credit; i++) {
        // if (cicilan !== amountCredit){
            
        // }
        amountCredit += cicilan;

        if(  i == credit) {
            let selisih = price - amountCredit;
            cicilan += selisih;
            amountCredit += selisih ;
        }
        termOfCredit.push({
            termin: i,
            price: parseFloat(cicilan.toFixed(2)),
            totally: parseFloat(amountCredit.toFixed(2))
        }
        )
    }

    console.log("|--------------------------------------|");
    console.log("|            Hello World               |");
    console.log("|       Welcome to our olshop          |");
    console.log("|--------------------------------------|");
    console.log("|       Belanjaan anda memperoleh      |");
    console.log("|   Diskon sebesar 15% dan ada tax 5%  |");
    console.log("|======================================|");
    console.log('|   harga buku Javascript  Rp' + price + "     |");
    console.log('|   Amount of discount     Rp' + pricediskon + "      |");
    console.log('|   Price after discount   Rp' + afterdiskon + "     |");
    console.log('|   Amount of tax          Rp' + pricetax + "      |");
    console.log('|   Price after tax        Rp' + aftertax + "     |");
    console.log("|--------------------------------------|");
    console.log('|   Total                  Rp' + total + "    |");
    console.log("|--------------------------------------|");

    console.log(`lama cicilan ${credit} bulan`);
    console.log(`cicilan perbulan = Rp${cicilan}`);
    console.log(termOfCredit);

}

let notif = confirm('kau beli buku dak?');
/* JavaScript if statement */
if (notif == true) {
    let buku = prompt('mau beli buku apa? (html/javascript)');
    if (buku == "html") {

        purchasing(6000, 0, 0, prompt('mau beli berapa buku ? (stok 10)'), prompt('bisa nyicil, mau nyicil brp bulan?'));

    } else if (buku == "javascript") {

        purchasing(100000, 20, 7, prompt('mau beli berapa buku ? (stok 10)'), prompt('bisa nyicil, mau nyicil brp bulan?'));

    } else {
        console.log("buku yang sedang anda cari tidak tersedia")
    }

} else {
    console.log("Selamat Datang Kembali")
}


// const a = "terserah";
// const card = document.getElementById("bebas");
// card.innerHTML= 'zasss'









