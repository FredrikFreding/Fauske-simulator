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



function randomran() {
    var navn00f = Math.floor(Math.random() * random_fornavn.length);
    var navn00e = Math.floor(Math.random() * random_etternavn.length);
    let navn01f = random_fornavn[navn00f];
    let navn01e = random_etternavn[navn00e];

    var penga_nivå = Math.floor(Math.random() * 101) + 1;
    
    if (penga_nivå > 0 && penga_nivå < 5) {
        penge_nivå = 5;
      } else if (penga_nivå >= 5 && penga_nivå < 15) {
        penge_nivå = 4;
      } else if (penga_nivå >= 15 && penga_nivå < 30) {
        penge_nivå = 3;
      } else if (penga_nivå >= 30 && penga_nivå < 60) {
        penge_nivå = 2;
      } else if (penga_nivå >= 60 && penga_nivå < 70) {
        penge_nivå = 1;
      } else if (penga_nivå >= 70 && penga_nivå < 101) {
        penge_nivå = 0;
      }

    var randnavn = navn01f + " " + navn01e;
    sjanse = Math.floor(Math.random() * 101);
    let peng_nivå = penger_nivå[penge_nivå]
    document.getElementById("ranoffer").innerHTML = "Offer:   " + randnavn;
    document.getElementById("sjanse").innerHTML = "Sjanse:   " + sjanse + "%";
    document.getElementById("penger_nivå").innerHTML = "Penger nivå:   " + peng_nivå;
    document.getElementById("lagre").innerHTML = sjanse;
    document.getElementById("lagre01").innerHTML = sjanse;
}


function våpen() {
    if (document.getElementById("flexCheckDefault").checked) {
        var våpen_sjansje = 0;
        var p = document.getElementById('lagre');
        våpen_sjansje = p.textContent;
        våpen_sjansje = parseInt (våpen_sjansje, 10);
        våpen_sjansje = våpen_sjansje + 30;
        if (våpen_sjansje > 100) {
            våpen_sjansje = 100;
        }
        document.getElementById("sjanse").innerHTML = "Sjanse:   " + våpen_sjansje + "%";
        document.getElementById("lagre01").innerHTML = gammel_sjansje;
    } else {
        var p = document.getElementById('lagre');
        var gammel_sjansje = 0;
        gammel_sjansje = p.textContent;
        gammel_sjansje = parseInt (gammel_sjansje, 10);
        document.getElementById("sjanse").innerHTML = "Sjanse:   " + gammel_sjansje + "%";
        document.getElementById("lagre01").innerHTML = gammel_sjansje;
    }
}

var utført = false;

function utfør_ran() {
    var rand_tall = 0;
    var sjansje = 0;
    rand_tall = Math.floor(Math.random() * 101) + 1;

    var p = document.getElementById('lagre01');
    sjansje = p.textContent;
    sjansje = parseInt (sjansje, 10);

    var reward = 0;

    
    var myNode = document.getElementById("info01");
    while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
    
    document.getElementById("info01").innerHTML = "<div class='alignt-content-center'><p>Gratulerer, du klarte det!</p><p id='reward'></p></div><div id='countdown'></div>"
    
    if (sjansje > rand_tall) {

    }
    document.getElementById("lagre02").innerHTML = 70;
    utført = true
    if (utført) {
        console.log("Braaa")
        cooldown()
    }
}


function cooldown(){
    var timeleft = 0;
    timeleft = document.getElementById('lagre02').textContent;
    timeleft = parseInt (timeleft, 10);
    localStorage.setItem("tid", timeleft);
    timeleft = localStorage.getItem("tid");
    
    if (timeleft > 0) {
        var myNode = document.getElementById("info01");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info01").innerHTML = "<div class='d-flex flex-column justify-content-center align-items-center w-100 h-100'><p id='p_01'>Du har fortsett:</p> <br> <p class='text-center fs-3' id='countdown'></p> <br> <p id='p_01'>sekunder igjen.</p></div>"
        var timer = setInterval(function(){
            if(timeleft <= 0){
              clearInterval(timer);
              location.reload();
            } else {
              document.getElementById("countdown").innerHTML = timeleft;
            }
            timeleft -= 1;
          }, 1000);
    }
}