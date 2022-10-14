let list = [
    {
        title: "U suck",
        artist: "Khole",
        durasi: 30,
        genre: "pop"
    }, {
        title: "Toxic",
        artist: "BoyWithUke",
        durasi: 3,
        genre: "Hip - Hop"
    }, {
        title: "We Are",
        artist: "Hiroshi Kitadani",
        durasi: 14,
        genre: "J-pop"
    }, {
        title: "Secukupnya",
        artist: "Hindia",
        durasi: 3,
        genre: "Indie"
    }, {
        title: "Yesterday",
        artist: "The Beatles",
        durasi: 2,
        genre: "pop"
    }, {
        title: "Sesuatu Di Jogja",
        artist: "Adhitia Sofyan",
        durasi: 3,
        genre: "pop"
    }, {
        title: "Fly Me to the Moon",
        artist: "Frank Sinatra",
        durasi: 1,
        genre: "Jazz"
    }, {
        title: "祝福",
        artist: "Yoasobi",
        durasi: 3,
        genre: "J-pop"
    }, {
        title: "Bloom",
        artist: "The Paper Kites",
        durasi: 2,
        genre: "Indie"
    }, {
        title: "Wake Me Up",
        artist: "Avicii",
        durasi: 3,
        genre: "EDM"
    },
    {
        title: "Wake Me Up",
        artist: "Avicii",
        durasi: 16,
        genre: "EDM"
    },
    {
        title: "祝福",
        artist: "Yoasobi",
        durasi: 3,
        genre: "J-pop"
    },
    {
        title: "Wake Me Up",
        artist: "Avicii",
        durasi: 3,
        genre: "EDM"
    }
]


let song = list.sort(() => Math.floor((Math.random()*list.length)-1));
// let song = list.sort(() => Math.random() -1 );

function filterTitle(song, title) {
    let ftitle = song.find(song => song.title == title)
    console.log(ftitle);
}
filterTitle(song, 'U suck');


function filterArtis(song, artist) {
    let fartis = song.filter(song => song.artist.includes(artist))
    console.log(fartis);
}
filterArtis(song, 'Yoasobi');
filterArtis


function filterGenre(song, genre) {
    let fgenre = song.filter(song => song.genre.includes(genre))
    console.log(fgenre);
}
filterGenre(song, 'pop');

let waktu = 60;
let durasilagu = 0;
let playlist = [];
let totaldurasi = 0;

for (let i = 0; i < song.length; i++) {
    durasilagu += song[i].durasi;
   
    if (durasilagu < waktu) {

        totaldurasi = (durasilagu)
        playlist[i] = (`Judul = ${song[i].title}, Artist = ${song[i].artist}, genre :${song[i].genre}, durasi :${song[i].durasi}`)
        

    } else {
        // if (durasilagu > waktu) {
        //     let fdurasi = song.filter(song => song[i].durasi <= 60)
        // }

        //===============================================//

        // let sisa = song.slice(i, song.length)
        // for (let j=0;j<sisa.length; j++) {
        //     let random = sisa[j].durasi.split('.');
        // }

        // console.log(sisa)
        break;
    }
}
// let sisawaktu = 59 - song.length;
// console.log(sisawaktu)

console.log(`total durasi lagu = ${totaldurasi}`)
console.log(playlist)
// let random = Math.floor((Math.random()playlist))
// console.log(random);
