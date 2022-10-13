let song = [
     {
        title: "Yesterday",
        artist: "The Beatles",
        durasi : 2,
        genre : "pop"
    }, {
        title: "Toxic",
        artist: "BoyWithUke",
        durasi : 3,
        genre : "Hip - Hop"
    }, {
        title: "We Are",
        artist: "Hiroshi Kitadani",
        durasi : 4,
        genre : "J-pop"
    }, {
        title: "Secukupnya",
        artist: "Hindia",
        durasi : 3,
        genre : "Indie"
    }, {
        title: "Sesuatu Di Jogja",
        artist: "Adhitia Sofyan",
        durasi : 5,
        genre : "pop"
    }, {
        title: "Fly Me to the Moon",
        artist: "The Macarons Project",
        durasi : 2,
        genre : "Jazz"
    }, {
        title: "祝福",
        artist: "Yoasobi",
        durasi : 3,
        genre : "J-pop"
    }, {
        title: "U suck",
        artist: "Khole",
        durasi : 30,
        genre : "pop"
    },{
        title: "Bloom",
        artist: "The Paper Kites",
        durasi : 3,
        genre : "Indie"
    }, {
        title: "Wake Me Up",
        artist: "Avicii",
        durasi : 3,
        genre : "EDM"
    },
    {
        title: "Wake Me Up",
        artist: "Avicii",
        durasi : 3,
        genre : "EDM"
    }
]

function filterTitle(song){
    //  let SearchTitle = prompt('Artist yang dicari?')
    // let fartis = song.filter(song =>  song.artist === SearchTitle)
    let ftitle = song.find(song =>  song.title == 'U suck')
    console.log(ftitle);
}
// filterTitle(song);

function filterArtis(song){
    // let SearchArtist = prompt('Artist yang dicari?')
    // let fartis = song.filter(song =>  song.artist === SearchArtist)
    let fartis = song.filter(song =>  song.artist === 'Yoasobi')
    console.log(fartis);
}
// filterArtis(song);


function filterGenre(song){
     // let SearchGenre = prompt('Artist yang dicari?')
    // let fartis = song.filter(song =>  song.artist === SearchGenre)
    let fgenre = song.filter(song =>  song.genre === 'pop')
    console.log(fgenre);
}
// filterGenre(song);

const waktu = 60;
let durasilagu = 0;
let playlist = []


for(let i=0; i<song.length; i++){
    durasilagu += song[i].durasi;
    if(durasilagu <= waktu){
        playlist[i] = (`Judul =${song[i].title} = durasi :${song[i].durasi}`)
    }else{
        break;
    }
    
}
// console.log(durasilagu)
console.log(playlist)
// kurang random 