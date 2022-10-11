let beli = confirm('kau beli buku dak?');
/* JavaScript if statement */
if (beli == true) {
    let buku = prompt('mau beli buku apa? (1 untuk buku html/ 2 untuk buku javascript)');
    if (buku == "1") {
        function purchasing(price, diskon, tax) {


            const pricediskon = price * diskon / 100;
            const afterdiskon = price - pricediskon;
            const pricetax = price * tax / 100;
            const aftertax = price + pricetax;
            const total = price - pricediskon + pricetax;

            // let afterdiskon = price - diskon;
            // let aftertax = price + tax;
            console.log("            Hello World");
            console.log("       Welcome to our olshop");
            console.log("--------------------------------------");
            console.log("       Belanjaan anda memperoleh      ");
            console.log("   Diskon sebesar 15% dan ada tax 5%  ");
            console.log("======================================");
            console.log('|   harga buku HTML        Rp' + price);
            console.log('|   Amount of discount     Rp' + pricediskon);
            console.log('|   Price after discount   Rp' + afterdiskon);
            console.log('|   Amount of tax          Rp' + pricetax);
            console.log('|   Price after tax        Rp' + aftertax);
            console.log("--------------------------------------");
            console.log('|   Total                  Rp' + total);

        }

        purchasing(50000, 15, 5);
    } else {
        function purchasing(price, diskon, tax) {


            const pricediskon = price * diskon / 100;
            const afterdiskon = price - pricediskon;
            const pricetax = price * tax / 100;
            const aftertax = price + pricetax;
            const total = price - pricediskon + pricetax;

            // let afterdiskon = price - diskon;
            // let aftertax = price + tax;
            console.log("            Hello World");
            console.log("       Welcome to our olshop");
            console.log("--------------------------------------");
            console.log("       Belanjaan anda memperoleh      ");
            console.log("   Diskon sebesar 20% dan ada tax 7%  ");
            console.log("======================================");
            console.log('|   harga buku Javascript  Rp' + price);
            console.log('|   Amount of discount     Rp' + pricediskon);
            console.log('|   Price after discount   Rp' + afterdiskon);
            console.log('|   Amount of tax          Rp' + pricetax);
            console.log('|   Price after tax        Rp' + aftertax);
            console.log("--------------------------------------");
            console.log('|   Total                  Rp' + total);

        }

        purchasing(100000, 20, 7);
    }

} else {
console.log("Selamat Datang Kembali")
}











