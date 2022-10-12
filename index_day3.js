let notif = confirm('kau beli buku dak?');
/* JavaScript if statement */
if (notif == true) {
    let buku = prompt('mau beli buku apa? (html/javascript)');
    if (buku == "html") {

        function purchasing(price, diskon, tax, beli, credit) {

            let stock = 5; /*variabel*/
            let amountprice = 0;
            const pricediskon = price * diskon / 100;
            let afterdiskon = price - pricediskon;
            const pricetax = pricediskon * tax / 100;
            let aftertax = afterdiskon + pricetax;
            let total = aftertax * beli;


            for (let i = 0; beli > i; i++) {
                if (i > (stock - 1)) {
                    // console.log('|   Total                  Rp' + (beli*total));
                    console.log('maaf, stok sudah habis');
                    break;
                } else {
                    console.log('>> beli ' + (i + 1) + ' buku,  harga = Rp' + (amountprice += aftertax));
                }
                console.log('sisa stock = ' + (stock - (i + 1)));
            }

            const cicilan = amountprice / credit;
            let termOfCredit = [];
            let amountCredit = 0;

            for (i = 1; i <= credit; i++) {
                amountCredit += cicilan;
                termOfCredit.push({
                    termin: i,
                    price: cicilan,
                    totally: amountCredit
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
            console.log(`|   harga buku HTML  Rp${price}        |`);
            console.log('|   Amount of discount     Rp' + pricediskon + "      |");
            console.log('|   Price after discount   Rp' + afterdiskon + "     |");
            console.log('|   Amount of tax          Rp' + pricetax + "      |");
            console.log('|   Price after tax        Rp' + aftertax + "     |");
            console.log("|--------------------------------------|");
            console.log(`|   Total                  Rp ${total}   |`);
            console.log("|--------------------------------------|");

            console.log(`lama cicilan ${credit} bulan`);
            console.log(`cicilan perbulan = Rp${cicilan}`);
            console.log(termOfCredit);

        }

        purchasing(50000, 50, 10, prompt('mau beli berapa buku ? (stok 5)'), prompt('bisa nyicil, mau nyicil brp bulan?'));

    } else if (buku == "javascript") {
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

            const cicilan = amountprice / credit;
            let termOfCredit = [];
            let amountCredit = 0;

            for (i = 1; i <= credit; i++) {
                amountCredit += cicilan;
                termOfCredit.push({
                    termin: i,
                    price: cicilan,
                    totally: amountCredit
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

        purchasing(100000, 20, 7, prompt('mau beli berapa buku ? (stok 10)'), prompt('bisa nyicil, mau nyicil brp bulan?'));
    } else {
        console.log("buku yang sedang anda cari tidak tersedia")
    }

} else {
    console.log("Selamat Datang Kembali")
}













