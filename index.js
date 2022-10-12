let notif = confirm('kau beli buku dak?');
/* JavaScript if statement */
if (notif == true) {
    let buku = prompt('mau beli buku apa? (html/javascript)');
    if (buku == "html") {

        function purchasing(price, diskon, tax, beli) {


            let stock = 5; /*variabel*/
            let amountprice = 0;
            const pricediskon = price * diskon / 100;
            let afterdiskon = price - pricediskon;
            const pricetax = pricediskon * tax / 100;
            let aftertax = pricediskon + pricetax;
            let total = price - pricediskon + pricetax;


            for (let i = 0; beli > i; i++) {
                if (i > (stock - 1)) {
                    // console.log('|   Total                  Rp' + (beli*total));
                    console.log('maaf, stok sudah habis');
                    break;
                } else {
                    console.log('>> beli ' + (i + 1) + ' buku,  harga = Rp' + (amountprice += total));
                }
                console.log('sisa stock = ' + (stock - (i + 1)));
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
            console.log(`|   Total                  Rp ${amountprice}   |`);
            console.log("|--------------------------------------|");
        }

        purchasing(10000, 50, 10, prompt('mau beli berapa buku ? (stok 5)'));

    } else if (buku == "javascript") {
        function purchasing(price, diskon, tax, beli) {


            let stock = 10;
            let amountprice = 0;
            const pricediskon = price * diskon / 100;
            let afterdiskon = price - pricediskon;
            const pricetax = price * tax / 100;
            let aftertax = price + pricetax;
            let total = price - pricediskon + pricetax;

            for (let i = 0; beli > i; i++) {
                if (i > (stock - 1)) {
                    console.log('maaf, stok sudah habis');
                    break;
                } else {
                    console.log('>> beli ' + (i + 1) + ' buku,  harga = Rp' + (amountprice += total));
                }
                console.log('sisa stock = ' + (stock - (i + 1)));
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
            console.log('|   Total                  Rp' + amountprice + "    |");
            console.log("|--------------------------------------|");

        }

        purchasing(100000, 20, 7, prompt('mau beli berapa buku ? (stok 10)'));
    } else {
        console.log("buku yang sedang anda cari tidak tersedia")
    }

} else {
    console.log("Selamat Datang Kembali")
}













