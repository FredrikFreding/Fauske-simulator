const bil_privatperson = [
    "Volvo 240",
    "BMW E30",
    "Opel Kadett",
    "Opel Astra",
    "Ford Mondeo",
    "Volkswagen Up!",
    "Toyota HiAce",
    "Volvo 740",
    "Volvo 940"
];
const bil_offentlig_person = [
    "Ferrari LaFerrari",
    "Ferrari 612 Scaglietti",
    "Lamborghini Diablo",
    "Chevrolet Corvette Z06"
];
const bil_gata = [
    "Volvo 240 GL Turbo",
    "Volvo 740",
    "Volvo 940",
    "Volvo 240",
    "Toyota HiAce"
];


const stjel_hus_gata = [
    "snus",
    "bankkort",
    "Luftfilter",
    "Badering",
    "Bedøvelsespistol"
];
const stjel_hus_butikk = [
    "TV",
    "Radio",
    "Effektanlegg",
    "Senkesett",
    "Turbo",
    "Gullsmykke"
];
const stjel_hus_offentlig = [
    "Gull Trone",
    "Konge krone",
    "Diamant smykke",
    "Stor Diamant"
];
const stjel_hus_privatperson = [
    "TV",
    "Alarmsystem",
    "Dress",
    "Gitar samling",
    "Laptop",
    "PC",
    "Radiostyrt bil"
];

const traphouse = [
    "Kokain",
    "Hasj",
    "Amfetamin",
    "Benzo",
    "Molly",
];

const random_fornavn = [
    "Per",
    "Noah",
    "Magnus",
    "Elias",
    "Fredrik",
    "Magne",
    "Odd",
    "Olav",
    "Nikko",
    "Nico",
    "Oliver",
    "Jakob",
    "Phillip",
    "Wilhelm",
    "Christian",
    "Nicolay",
    "Liam",
    "Oskar",
    "Aksel",
    "Theodor",
    "Kasper",
    "Johannes",
    "Isak",
    "Mathias",
    "Tobias",
    "Olav",
    "Sander",
    "Håkon",
    "Jonas",
    "Ludvig",
    "Benjamin"
];

const random_etternavn = [
    "Olavson",
    "Fredrikson",
    "Hansen",
    "Johansen",
    "Olsen",
    "Larsen",
    "Andersen",
    "Pedersen",
    "Nilsen",
    "Kristiansen",
    "Jensen",
    "Karlsen",
    "Johnsen",
    "Pettersen",
    "Eriksen",
    "Berg",
    "Haugen",
    "Hagen",
    "Jacobsen",
    "Dahl",
    "Jørgensen",
    "Stormo",
    "Henriksen",
    "Moen",
    "Iversen",
    "Strand"
];

const offentlige_personer = [
    "Kongen",
    "Bent Høie",
    "Erna Solberg",
    "Sjaman Durek",
    "Ida Pinnerød",
    "Trygve Vedum",
    "Prinsen",
    "MagneMaker",
    "Raymond Andreassen"
];

const penger_nivå = [
    "Veldig lavt",
    "Lavt",
    "Middels",
    "Høyt",
    "Veldig høyt",
    "Ekstremt høyt"
];

var randnavn = "";
var money = 0;
var sjanse = Math.floor(Math.random() * 101);

function randomran() {
    var navn00f = Math.floor(Math.random() * random_fornavn.length);
    var navn00e = Math.floor(Math.random() * random_etternavn.length);
    let navn01f = random_fornavn[navn00f];
    let navn01e = random_etternavn[navn00e];

    var penga_nivå = Math.floor(Math.random() * 101) + 1;
    
    if (penga_nivå > 0 && penga_nivå < 5) {
        penge_nivå = 5;
        console.log(penge_nivå)
        console.log(penga_nivå)
      } else if (penga_nivå >= 5 && penga_nivå < 15) {
        penge_nivå = 4;
        console.log(penge_nivå)
        console.log(penga_nivå)
      } else if (penga_nivå >= 15 && penga_nivå < 30) {
        penge_nivå = 3;
        console.log(penge_nivå)
        console.log(penga_nivå)
      } else if (penga_nivå >= 30 && penga_nivå < 60) {
        penge_nivå = 2;
        console.log(penge_nivå)
        console.log(penga_nivå)
      } else if (penga_nivå >= 60 && penga_nivå < 70) {
        penge_nivå = 1;
        console.log(penge_nivå)
        console.log(penga_nivå)
      } else if (penga_nivå >= 70 && penga_nivå < 101) {
        penge_nivå = 0;
        console.log(penge_nivå)
        console.log(penga_nivå)
      }

    var randnavn = navn01f + " " + navn01e;
    console.log(randnavn);
    sjanse = Math.floor(Math.random() * 101);
    let peng_nivå = penger_nivå[penge_nivå]
    document.getElementById("ranoffer").innerHTML = "Offer:   " + randnavn;
    document.getElementById("sjanse").innerHTML = "Sjanse:   " + sjanse + "%";
    document.getElementById("penger_nivå").innerHTML = "Penger nivå:   " + peng_nivå;
}


function våpen() {
    våpen_sjanse = document.getElementById("sjanse");
    våpen_sjanse + 30
    if (våpen_sjansje >= 100) {
        våpen_sjansje = 100;
    }
}