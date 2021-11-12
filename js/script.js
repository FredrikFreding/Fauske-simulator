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
var random_bil = 0;
var bil_rand = 0;
var bil_cd = 0;
// Variabler

// Biler
var Volvo240glturbo = 0;
var Volvo740 = 0;
var Volvo940 = 0;
var Volvo240 = 0
var ToyotaHiAce = 0;
var BMWE30 = 0;
var OpelKadett = 0;
var OpelAstra = 0;
var FordMondeo = 0;
var VolkswagenUp = 0;
var FerrariLaFerrari = 0;
var Ferrari612Scaglietti = 0;
var LamborghiniDiablo = 0;
var ChevroletCorvetteZ06 = 0;
// Biler - priser
var volvo240glturbo_pris = 20000;
var Volvo740_pris = 23000;
var Volvo940_pris = 25000;
var Volvo240_pris = 17000
var ToyotaHiAce_pris = 10000;
var BMWE30_pris = 150000;
var OpelKadett_pris = 30000;
var OpelAstra_pris = 33000;
var FordMondeo_pris = 40000;
var VolkswagenUp_pris = 10000;
var FerrariLaFerrari_pris = 400000;
var Ferrari612Scaglietti_pris = 600000;
var LamborghiniDiablo_pris = 900000;
var ChevroletCorvetteZ06_pris = 400000;
// Biler

// Lister
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
    "Volkswagen Up!"
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

// Variabler for funksjoner global
var tullebukk = 0;
tullebukk = utfør_bil.length;
tullebukk = utfør_bil0.length;
tullebukk = nytt.length;
tullebukk = våpen.length;
tullebukk = utfør_ran.length;
tullebukk = cooldown_bil.length;
tullebukk = load.length;
tullebukk = nytt_offentlig.length;
tullebukk = nytt_bil.length;
tullebukk = nytt_bil0.length;
tullebukk = dinebiler.length;
// Variabler for funksjoner global

// Funksjoner
function utfør_bil() {
    var bilpris = 0;
    if (random_bil === "Volvo 240 GL Turbo") {
       bilpris = volvo240glturbo_pris;
    } else if (random_bil === "Volvo 740") {
        bilpris = Volvo740_pris;
    } else if (random_bil === "Volvo 940") {
        bilpris = Volvo940_pris;
    } else if (random_bil === "Volvo 240") {
        bilpris = Volvo240_pris;
    } else if (random_bil === "Toyota HiAce") {
        bilpris = ToyotaHiAce_pris;
    } else if (random_bil === "BMW E30") {
        bilpris = BMWE30_pris;
    } else if (random_bil === "Opel Kadett") {
        bilpris = OpelKadett_pris;
    } else if (random_bil === "Opel Astra") {
        bilpris = OpelAstra_pris;
    } else if (random_bil === "Ford Mondeo") {
        bilpris = FordMondeo_pris;
    } else if (random_bil === "Volkswagen Up!") {
        bilpris = VolkswagenUp_pris;
    }

    var myNode = document.getElementById("info01");
    while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
    document.getElementById("info01").innerHTML = "<p class='text-center' id='mld_bil'></p><p class='text-center' id='mld_bil00'></p>";
          if (bil_sjanse > bil_rand) {
            if (random_bil === "Volvo 240 GL Turbo") {
                volvo240glturbo = volvo240glturbo + 1;
             } else if (random_bil === "Volvo 740") {
                 Volvo740 = Volvo740 + 1;
             } else if (random_bil === "Volvo 940") {
                 Volvo940 = Volvo940 + 1;
             } else if (random_bil === "Volvo 240") {
                 Volvo240 = Volvo240 + 1;
             } else if (random_bil === "Toyota HiAce") {
                 ToyotaHiAce = ToyotaHiAce + 1;
             } else if (random_bil === "BMW E30") {
                 BMWE30 = BMWE30 + 1;
             } else if (random_bil === "Opel Kadett") {
                 OpelKadett = OpelKadett + 1;
             } else if (random_bil === "Opel Astra") {
                 OpelAstra = OpelAstra + 1;
             } else if (random_bil === "Ford Mondeo") {
                 FordMondeo = FordMondeo + 1;
             } else if (random_bil === "Volkswagen Up!") {
                 VolkswagenUp = VolkswagenUp + 1;
             }
            document.getElementById("mld_bil").innerHTML = "Du klarte å stjele en: <br>" + random_bil;
            document.getElementById("mld_bil00").innerHTML = "Bilen er verdt: <br>" + bilpris;
          } else {
            document.getElementById("mld_bil").innerHTML = "Du klarte ikke å stjele en: <br><br>" + random_bil;
          }
          bil_cd = 140;
}

function randombil() {
    var rand_bil_liste = Math.floor(Math.random() * bil_gata.length);
    random_bil = bil_gata[rand_bil_liste];

    bil_sjanse = Math.floor(Math.random() * 20) + 1;
    bil_rand = Math.floor(Math.random() * 101);

    document.getElementById("bil-type").innerHTML = "Du har funnet en " + random_bil + "!";
    document.getElementById("bil_sjanse").innerHTML = bil_sjanse + "%";
}

function randombil0() {
    var rand_bil_liste = Math.floor(Math.random() * bil_offentlig_person.length);
    random_bil = bil_offentlig_person[rand_bil_liste];

    bil_sjanse = Math.floor(Math.random() * 10) + 1;
    bil_rand = Math.floor(Math.random() * 101);

    document.getElementById("bil-type").innerHTML = "Du har funnet en " + random_bil + "!";
    document.getElementById("bil_sjanse").innerHTML = bil_sjanse + "%";
}

function utfør_bil0() {
    var bilpris = 0;
    if (random_bil === "Ferrari LaFerrari") {
       bilpris = FerrariLaFerrari_pris;
    } else if (random_bil === "Ferrari 612 Scaglietti") {
        bilpris = Ferrari612Scaglietti_pris;
    } else if (random === "Lamborghini Diablo") {
        bilpris = LamborghiniDiablo_pris;
    } else if (random === "Chevrolet Corvette Z06") {
        bilpris = ChevroletCorvetteZ06_pris;
    }

    var myNode = document.getElementById("info01");
    while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
    document.getElementById("info01").innerHTML = "<p class='text-center' id='mld_bil'></p><p class='text-center' id='mld_bil00'></p>";
          if (bil_sjanse > bil_rand) {
            if (random_bil === "Ferrari LaFerrari") {
                FerrariLaFerrari = FerrariLaFerrari + 1;
             } else if (random_bil === "Volvo 740") {
                 Volvo740 = Volvo740 + 1;
             } else if (random_bil === "Volvo 940") {
                 Volvo940 = Volvo940 + 1;
             } else if (random_bil === "Volvo 240") {
                 Volvo240 = Volvo240 + 1;
             } else if (random_bil === "Toyota HiAce") {
                 ToyotaHiAce = ToyotaHiAce + 1;
             } else if (random_bil === "BMW E30") {
                 BMWE30 = BMWE30 + 1;
             } else if (random_bil === "Opel Kadett") {
                 OpelKadett = OpelKadett + 1;
             } else if (random_bil === "Opel Astra") {
                 OpelAstra = OpelAstra + 1;
             } else if (random_bil === "Ford Mondeo") {
                 FordMondeo = FordMondeo + 1;
             } else if (random_bil === "Volkswagen Up!") {
                 VolkswagenUp = VolkswagenUp + 1;
             }
            document.getElementById("mld_bil").innerHTML = "Du klarte å stjele en: <br>" + random_bil;
            document.getElementById("mld_bil00").innerHTML = "Bilen er verdt: <br>" + bilpris;
          } else {
            document.getElementById("mld_bil").innerHTML = "Du klarte ikke å stjele en: <br><br>" + random_bil;
          }
          bil_cd = 140;
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
    if (timeleft > 0) {
        cooldown()
    }
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

function cooldown_bil(){
    if (bil_cd > 0) {
        var myNode = document.getElementById("info01");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info01").innerHTML = "<div class='d-flex flex-column justify-content-center align-items-center w-100 h-100'><p id='p_01'>Du har fortsett:</p> <br> <p class='text-center fs-3' id='countdown'></p> <br> <p id='p_01'>sekunder igjen.</p></div>"
        var timer = setInterval(function(){
            if(bil_cd <= 0){
            clearInterval(timer);
            endre("tilfeldig_bil")
            randombil()
            cooldown_bil()
            } else {
              document.getElementById("countdown").innerHTML = bil_cd;
            }
          }, 1000);
    }
}

setInterval(function(){ 
	if (timeleft > 0) {
        timeleft = timeleft - 1;
    }
    if (bil_cd > 0) {
        bil_cd = bil_cd - 1;
    }
}, 1000);


var intervalId = window.setInterval(function(){
    if (timeleft > 0) {
        timeleft = timeleft - 1
    } else {
        clearInterval(intervalId) 
    }
    if (bil_cd > 0) {
        bil_cd = bil_cd - 1;
    } else {
        clearInterval(intervalId)
    }
    savex();
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
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><p class='fs-1 text-center'>Ran en privatperson.</p><div class='align-self-center justify-content-center'><p class='fs-2 text-center'>Hvem vil du rane?</p><div class='align-self-center'> </div></div><button onclick='nytt_offentlig()' id='finn_ran' type='button'class='btn btn-secondary w-50 align-self-center'>Finn ransoffer - Pris: 200kr</button><p id='mld' class='text-center'></p><p id='ranoffer' class='align-self-center'></p><p class='fs-5 align-self-center' id='sjanse'></p><button onclick='våpen()' type='button'class='btn btn-secondary w-50 align-self-center'>Kjøp og bruk et våpen - pris: 1 500</button><button onclick='utfør_ran()'id='utfør_ran' type='button' class='btn btn-secondary w-50 align-self-center'>Utfør ran</button></div>" 
    } else if (type === "tilfeldig_bil") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Stjel en tilfeldig bil</h1><div id='idkxd' class='w-100 align-self-center d-flex align-items-center justify-content-center flex-column'><p class='text-center fs-4 text' id='bil-type'></p><p class='text-center fs-4 text' id='bil_sjanse'></p></div><button onclick='nytt_bil()' id='finn_bil' type='button' class='btn btn-secondary w-50 align-self-center'>Finn en ny bil - 1 000kr</button><p id='finn_ny_bil' class='text-center'></p><button onclick='utfør_bil()' id='utført_bil' type='button' class='btn btn-secondary w-50 align-self-center align-text-bottom mt-auto'>Utfør ran</button></div>" 
    } else if (type === "offentlig_bil") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Stjel en bil fra en offentlig person</h1><div id='idkxd' class='w-100 align-self-center d-flex align-items-center justify-content-center flex-column'><p class='text-center fs-4 text' id='bil-type'></p><p class='text-center fs-4 text' id='bil_sjanse'></p></div><button onclick='nytt_bil0()' id='finn_bil' type='button' class='btn btn-secondary w-50 align-self-center'>Finn en ny bil - 10 000kr</button><p id='finn_ny_bil' class='text-center'></p><button onclick='utfør_bil0()()' id='utført_bil' type='button' class='btn btn-secondary w-50 align-self-center align-text-bottom mt-auto'>Utfør ran</button></div>"
    } else if (type === "selg_biler") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Dine biler</h1><ul class='list-group overflow-auto'><li class='list-group-item d-flex justify-content-between align-items-center'>Volvo 240 GL Turbo<span id='volvo240glturbo' class='badge bg-primary rounded-pill'></span></li><li class='list-group-item d-flex justify-content-between align-items-center'>Volvo 740<span id='volvo740' class='badge bg-primary rounded-pill'></span></li><span id='volvo740' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Volvo 940 <span id='volvo940' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Volvo 240 <span id='volvo240' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Toyota HiAce <span id='toyotahiace' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> BMW E30 <span id='bmwe30' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Opel Kadett <span id='opelkadett' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Opel Astra <span id='opelastra' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Ford Mondeo <span id='fordmondeo' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Volkswagen Up! <span id='volkswagenup' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Ferrari LaFerrari <span id='ferrarilaferrari' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Ferrari 612 Scaglietti <span id='ferrari612scaglietti' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Lamborghini Diablo <span id='lamborghinidablo' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Chevrolet Corvette Z06 <span id='chevroletcorvettez06' class='badge bg-danger rounded-pill'></span> </li> </ul> <button class='btn btn-primary' type='button' onclick='endre('selg_biler')'>Selg biler</button> </div>"
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


    sjanse = Math.floor(Math.random() * 30 + 1);
    document.getElementById("ranoffer").innerHTML = "Offer:   " + randnavn;
    document.getElementById("sjanse").innerHTML = "Sjanse:   " + sjanse + "%";
}

function nytt_offentlig() {
    if (penger > 1500) {
        penger = penger - 1500;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        offentlig_ran();
    } else {
        document.getElementById("mld").innerHTML = "Du har ikke nok penger!";
    }
}

function nytt_bil() {
    if (penger >= 1000) {
        penger = penger - 1000;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        randombil()
    } else {
        document.getElementById("finn_ny_bil").innerHTML = "Du har ikke nok penger!"
    }
}

function nytt_bil0() {
    if (penger >= 10000) {
        penger = penger - 10000;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        randombil0()
    } else {
        document.getElementById("finn_ny_bil").innerHTML = "Du har ikke nok penger!"
    }
}

function dinebiler() {
    document.getElementById("volvo240glturbo").innerHTML = Volvo240glturbo;
    document.getElementById("volvo740").innerHTML = Volvo740;
    document.getElementById("volvo940").innerHTML = Volvo940;
    document.getElementById("volvo240").innerHTML = Volvo240;
    document.getElementById("toyotahiace").innerHTML = ToyotaHiAce;
    document.getElementById("bmwe30").innerHTML = BMWE30;
    document.getElementById("opelkadett").innerHTML = OpelKadett;
    document.getElementById("opelastra").innerHTML = OpelAstra;
    document.getElementById("fordmondeo").innerHTML = FordMondeo;
    document.getElementById("volkswagenup").innerHTML = VolkswagenUp;
    document.getElementById("ferrarilaferrari").innerHTML = FerrariLaFerrari;
    document.getElementById("ferrari612scaglietti").innerHTML = Ferrari612Scaglietti;
    document.getElementById("lamborghinidablo").innerHTML = LamborghiniDiablo;
    document.getElementById("chevroletcorvettez06").innerHTML = ChevroletCorvetteZ06;
}
//APP

//NAVBAR
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
   
      if(event.target.classList.contains('dropdown-toggle') ){
        event.target.classList.toggle('toggle-change');
      }
      else if(event.target.parentElement.classList.contains('dropdown-toggle')){
        event.target.parentElement.classList.toggle('toggle-change');
      }
    })
  });
//NAVBAR