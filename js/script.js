// Variabler

var utført = false;
var sjanse = 0;
var timeleft = 0;
var rand_tall = rand_tall = Math.floor(Math.random() * 101) + 1;
var penger = 0;
var penge_nivå = 0;
var reward = 0;
var randnavn = "";
var bil_sjanse = 0;

// Lister
const bil_privatperson = [
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
    "Toyota HiAce",
    "BMW E30",
    "Opel Kadett",
    "Opel Astra",
    "Ford Mondeo",
    "Volkswagen Up!",
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


// Funksjoner

function randombil() {
    var random_bil = 0;
    var rand_bil_liste = Math.floor(Math.random() * bil_gata.length);
    random_bil = bil_gata[rand_bil_liste];

    bil_sjanse = Math.floor(Math.random() * 20) + 1;

    document.getElementById("bil-type").innerHTML = "Du har funnet en " + random_bil + "!"
    document.getElementById("bil_sjanse").innerHTML = bil_sjanse + "%"
}
function randomran() {
    var navn00f = Math.floor(Math.random() * random_fornavn.length);
    var navn00e = Math.floor(Math.random() * random_etternavn.length);
    var navn01f = random_fornavn[navn00f];
    var navn01e = random_etternavn[navn00e];
    var penge_nivå = 0;
    var penga_nivå = Math.floor(Math.random() * 101) + 1;
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    
    if (penga_nivå > 0 && penga_nivå < 5) {
        penge_nivå = 5;
        reward = randomIntFromInterval(3000, 5000)
      } else if (penga_nivå >= 5 && penga_nivå < 15) {
        penge_nivå = 4;
        reward = randomIntFromInterval(2000, 3000)
      } else if (penga_nivå >= 15 && penga_nivå < 30) {
        penge_nivå = 3;
        reward = randomIntFromInterval(1000, 2000)
      } else if (penga_nivå >= 30 && penga_nivå < 60) {
        penge_nivå = 2;
        reward = randomIntFromInterval(500, 1000)
      } else if (penga_nivå >= 60 && penga_nivå < 70) {
        penge_nivå = 1;
        reward = randomIntFromInterval(200, 500)
      } else if (penga_nivå >= 70 && penga_nivå < 101) {
        penge_nivå = 0;
        reward = randomIntFromInterval(0, 200)
      }

    randnavn = navn01f + " " + navn01e;
    sjanse = Math.floor(Math.random() * 101);
    peng_nivå = penger_nivå[penge_nivå]
    document.getElementById("ranoffer").innerHTML = "Offer:   " + randnavn;
    document.getElementById("sjanse").innerHTML = "Sjanse:   " + sjanse + "%";
    document.getElementById("penger_nivå").innerHTML = "Penger nivå:   " + peng_nivå;
}

function nytt() {
    if (penger >= 200) {
        penger = penger - 200;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        randomran()
    } else {
        document.getElementById("mld").innerHTML = "Du har ikke nok penger!"
    }
}
function våpen() {
        if (penger > 1500) {
            var ekstra_sjansje = 30;
            sjanse = sjanse + ekstra_sjansje
            if (sjanse > 100) {
                sjanse = 100;
            }
            document.getElementById("sjanse").innerHTML = "Sjanse:   " + sjanse + "%";
            penger = penger - 1500;
        }
    }
function utfør_ran() {

    var myNode = document.getElementById("info01");
    while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
    
    if (sjanse > rand_tall) {
        document.getElementById("info01").innerHTML = "<div><p id='person' class='text-center'></p><br><div><p class='text-center' id='reward'></p></div><br></div>";
        document.getElementById("reward").innerHTML = "Du tjente: " + reward + "kroner";
        document.getElementById("person").innerHTML = "Gratuler! Du klarte å rane:<br><br>" + randnavn;
        penger = penger + reward;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
    } else {
        document.getElementById("info01").innerHTML = "<div><p id='person' class='text-center'></p><br><div><p class='text-center' id='reward'></p></div><br></div>";
        document.getElementById("person").innerHTML = "Du klarte ikke å rane<br><be>" + randnavn;
    }
    timeleft = 70;
}
function cooldown(){
    if (timeleft > 0) {
        var myNode = document.getElementById("info01");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info01").innerHTML = "<div class='d-flex flex-column justify-content-center align-items-center w-100 h-100'><p id='p_01'>Du har fortsett:</p> <br> <p class='text-center fs-3' id='countdown'></p> <br> <p id='p_01'>sekunder igjen.</p></div>"
        var timer = setInterval(function(){
            if(timeleft <= 0){
            clearInterval(timer);
            endre("ran_privat")
            randomran()
            cooldown()
            } else {
              document.getElementById("countdown").innerHTML = timeleft;
            }
          }, 1000);
    }
}

setInterval(function(){ 
	if (timeleft > 0) {
        timeleft = timeleft - 1;
    }
}, 1000);


var intervalId = window.setInterval(function(){
    if (timeleft > 0) {
        timeleft = timeleft - 1
    } else {
        clearInterval(intervalId) 
    }
  }, 1000);

function endre(type) {
    if (type === "ran_privat") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><p class='fs-1 text-center'>Ran en privatperson.</p><div class='align-self-center justify-content-center'><p class='fs-2 text-center'>Hvem vil du rane?</p><div class='align-self-center'> </div></div><button onclick='nytt()' id='finn_ran' type='button'class='btn btn-secondary w-50 align-self-center'>Finn ransoffer - Pris: 200kr</button><p id='mld' class='text-center'></p><p id='ranoffer' class='align-self-center'></p><p class='fs-5 align-self-center' id='sjanse'></p><p class='fs-5 align-self-center' id='penger_nivå'></p><button onclick='våpen()' type='button'class='btn btn-secondary w-50 align-self-center'>Kjøp og bruk et våpen - pris: 1 500</button><button onclick='utfør_ran()'id='utfør_ran' type='button' class='btn btn-secondary w-50 align-self-center'>Utfør ran</button></div>"
    } else if (type === "main") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><div><h1 class='text-center'>Hovedkvarter</h1></div></div>"
    } else if (type === "offentlig_ran") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><p class='fs-1 text-center'>Ran en privatperson.</p><div class='align-self-center justify-content-center'><p class='fs-2 text-center'>Hvem vil du rane?</p><div class='align-self-center'> </div></div><button onclick='nytt()' id='finn_ran' type='button'class='btn btn-secondary w-50 align-self-center'>Finn ransoffer - Pris: 200kr</button><p id='mld' class='text-center'></p><p id='ranoffer' class='align-self-center'></p><p class='fs-5 align-self-center' id='sjanse'></p><p class='fs-5 align-self-center' id='penger_nivå'></p><button onclick='våpen()' type='button'class='btn btn-secondary w-50 align-self-center'>Kjøp og bruk et våpen - pris: 1 500</button><button onclick='utfør_ran()'id='utfør_ran' type='button' class='btn btn-secondary w-50 align-self-center'>Utfør ran</button></div>" 
    }
}

function load() {
    document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
}

function offentlig_ran() {
    var navn_len = Math.floor(Math.random() * offentlige_personer.length);
    randnavn = offentlige_personer[navn_len];
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    reward = randomIntFromInterval(5000, 15000)


    sjanse = 100;    //Math.floor(Math.random() * 20);
    document.getElementById("ranoffer").innerHTML = "Offer:   " + randnavn;
    document.getElementById("sjanse").innerHTML = "Sjanse:   " + sjanse + "%";
}