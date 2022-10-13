let song = [
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
        title: "Wake Me Up",
        artist: "Avicii",
        durasi: 3,
        genre: "EDM"
    },
    {
        title: "Wake Me Up",
        artist: "Avicii",
        durasi: 3,
        genre: "EDM"
    }
]

function filterTitle(song) {
     let SearchTitle = prompt('Artist yang dicari?')
    let ftitle = song.filter(song =>  song.artist === SearchTitle)
    // let ftitle = song.find(song => song.title == 'U suck')
    console.log(ftitle);
}
filterTitle(song);

function filterArtis(song) {
    let SearchArtist = prompt('Artist yang dicari?')
    let fartis = song.filter(song =>  song.artist === SearchArtist)
    // let fartis = song.filter(song => song.artist === 'Yoasobi')
    console.log(fartis);
}
filterArtis(song);

function filterGenre(song) {
    let SearchGenre = prompt('Artist yang dicari?')
    let fgenre = song.filter(song =>  song.artist === SearchGenre)
    // let fgenre = song.filter(song => song.genre === 'pop')
    console.log(fgenre);
}
filterGenre(song);

let waktu;
let durasilagu = 0;
let playlist = [];
let totaldurasi = 0;

for (let i = 0; i < song.length; i++) {
    durasilagu += song[i].durasi;
    if (durasilagu < waktu) {
        totaldurasi = (durasilagu)
        playlist[i] = (`Judul = ${song[i].title}, Artist = ${song[i].artist}, genre :${song[i].genre}, durasi :${song[i].durasi}`)

    } else {
        break;
    }
}

console.log(`total durasi lagu = ${totaldurasi}`)
console.log(playlist)






let notif = prompt('1 cari lagu / 2 buat playlist');
/* JavaScript if statement */
if (notif == 1) {
    let buku = prompt('cari lagu berdasarkan? (judul/artist/genre)');
    if (buku == "judul") {

        filterTitle(prompt(`Input Title : `))

    } else if (buku == "artist") {

        filterArtis(prompt(`Input Artist : `))

    } else if (buku == "genre") {

        filterGenre(prompt(`Input Genre : `))

    }else {
        console.log("buku yang sedang anda cari tidak tersedia")
    }

} else if (notif == 2){
    waktu(prompt(`Input durasi waktu playlist : `))
} 
else {
    console.log("Selamat Datang Kembali")
}