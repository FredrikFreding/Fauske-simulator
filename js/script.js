// Variabler
var utført = false;
var sjanse = 0;
var timeleft = 0;
var rand_tall = rand_tall = Math.floor(Math.random() * 101) + 1;
var penger = 99999999;
var penge_nivå = 0;
var reward = 0;
var randnavn = "";
var bil_sjanse = 0;
var random_bil = 0;
var bil_rand = 0;
var bil_cd = 0;
var antall_biler = 0;
var verdi_biler = 0;
var solgt_biler = 0;
solgt_biler = "solgt_biler"
var adressa = 0;
var hus_cd = 0;
var antall_tinga = 0;
var tinga_verdig = 0;
var antall_ting = 0;
// Variabler

// Narkotika
var Kokain = 0;
var Kokain_gram = 0;
var Hasj = 0;
var Hasj_gram = 0;
var Amfetamin = 0;
var Amfetamin_gram = 0;
var Xanax = 0;
var Xanax_piller = 0;
var Molly = 0;
var Molly_gram = 0;
var cola = 0;
var weed = 0;
var amf = 0;
var xan = 0;
var molly = 0;
// Priser
var pris_kokain = 200000;
var pris_hasj = 75000;
var pris_amfetamin = 100000;
var pris_xanax = 3000;
var pris_molly = 250000;
// Narkotika


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

// Hus
var TV = 0;
var Alarmsystem = 0;
var Dress = 0;
var Gitarsamling = 0;
var Laptop = 0;
var PC = 0;
var Radiostyrtbil = 0;
var PS4 = 0;
var PS5 = 0;
var XboxOne = 0;
var Xbox360 = 0;
var GamingPC = 0;
var Effektanlegg = 0;
var Stereoanlegg = 0;
var Gressklipper = 0;
var Turbo = 0;
var Anlegg = 0;
var Motorsag = 0;
// Hus priser
var TV_pris = 600;
var Alarmsystem_pris = 2000;
var Dress_pris = 3000;
var Gitarsamling_pris = 5000;
var Laptop_pris = 1500;
var PC_pris = 3000;
var Radiostyrtbil_pris = 500;
var PS4_pris = 1000;
var PS5_pris = 7000;
var XboxOne_pris = 1500;
var Xbox360_pris = 500;
var GamingPC_pris = 10000;
var Effektanlegg_pris = 20000;
var Stereoanlegg_pris = 7000;
var Gressklipper_pris = 12000;
var Turbo_pris = 30000;
var Anlegg_pris = 5000;
var Motorsag_pris = 3000;
// Hus

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

const biltema = [
    "Effektanlegg",
    "Stereo anlegg",
    "Gressklipper",
    "Turbo",
    "Anlegg",
    "Motorsag"
]

const stjel_hus_privatperson = [
    "TV",
    "Alarmsystem",
    "Dress",
    "Gitar samling",
    "Laptop",
    "PC",
    "Radiostyrt bil",
    "PS4",
    "PS5",
    "Xbox One",
    "Xbox 360",
    "Gaming PC"
];
const traphouse = [
    "Kokain",
    "Hasj",
    "Amfetamin",
    "Xanax",
    "Molly"
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

var gata = "Åkerveien Ålegressveien Andedamveien Ankerveien Ankjellveien Asalveien Åsbakk Aspveien Badestrandveien Bådsvik Balmig Bentevassveien Bergverksveien Bjørkmoveien Bjørkveien Bjørnmoveien Blålyngveien Blåskjellveien Bodøveien Brattengveien Bratthaugen Brekka Bremsebk Brinkveien Buen Buveien Bærlyngveien Dalanveien Djupdal Eiaveien Einerveien Einmoen Eliasbakken Eriksbakkveien Erikshøgda Erikstadtunet Erikstadveien Eriksvollveien Farvikveien Finneidgata FjæreveienFollaveien Framsynveien Fritunbakken Fuglveien Furulia Furutoppen Furuveien Gautvollen Geitbergveien Granveien Grendeveien Greplyngveien Gryttingveien Grønås Grønåsveien Gymnasveien Haganesveien Hammerveien Håndverksveien Hansbakken HauanveienHaubakken Haugveien Heggveien Hegreveien Heia Helligberget Helsetunet Helskarveien Hjemås Holstad Holtan Høgstveien Industriveien Jernbanegata Kantlyngveien Kirkeveien Kjerrveien Kleiva Kleivbakken Kleivhammaren Kleivmyra Klungset Kopparveien Krabbeveien Krepsveien Krokvollveien Kvitblik Kvitlyngveien Leitebakken Leivset Liaveien Lillnesveien Linerleveien Linneaveien Lund Lundhøgda Lundveien Lyngveien Løgavlen Lønneveien Løvgavlveien Måkeveien Malmveien Marbakken MarmorveienMedås Midtigardsveien Moen Moselyngveien Mosemyrveien Moveien Muslingveien Myrkollveien Myrveien Møllnveien Naustveien Nedre Hauanvei Nedre Tortenli Nerigardsveien Nermoveien Nordimarkveien Ny-Jord Nymoveien Nyveien Oldern Oppigardsveien Poppelveien Postveien Rabbenveien Rådhusgata Reinroseveien Reitanveien Reitvollveien Rekeveien Rismoveien Risvoll Rognveien Rødås Rørvik Røsslyngveien Røvik Saltbakkveien Saltdalveien Sandmoveien Selbergveien Seljeveien Setsåbakken Sildreveien Sisikveien Siva Sjåheiveien Sjøgata Sjønellikveien Sjønståveien Sjøroseveien Sjøstjerneveien Sjøvollveien Skiferveien Skjerstadveien Skoanveien Skogholtveien Skogveien Skysselvik Smedveien Soleieveien Solhøgda Solvik Solvollveien Storgaten Stranda Strandbuen Stærveien Sulitjelmaveien Svaleveien Svartvassveien Svenskveien Sykehusveien Symreveien Tangveien Tareveien Telegrafveien Terminalveien Terneveien Tinkeliheia Tiurveien Tjeldveien Torggata Triangelveien Trostveien Tunveien Tuven Tverå Tørresvik Valnesfjordveien Vangsveien Vatnan Vatnbygda Vatnbygdveien Venset Vesterveien Vikaveien Vinkelen Virumveien Vollgata Ytterveien Øvre Tortenli Øynes";
const gater = gata.split(' ');
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
tullebukk = kjøp_kokain.length;
// Midlertidlig løsning
// Variabler for funksjoner global

// Funksjoner
function selge(type) {
    if (type === "klubben") {
        console.log("klubben")
    } else if (type === "amfi") {
        console.log("amfi")
    } else if (type === "rema") {
        console.log("rema")
    } else if (type === "tunet") {
        console.log("tunet")
    }
}


function kjøp(type) {
    if (type === "kokain") {
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Kjøp Kokain</h1><br><p class='text-center' id='pris'></p><br><p class='text-center'>Hvor mange plater vil du kjøpe?</p><div class='quantity-field' ><button class='value-button decrease-button' onclick='decreaseValue(this)' title='Azalt'>-</button><div class='number'>0</div><button class='value-button increase-button' onclick='increaseValue(this, 100)'title='Arrtır'>+</button></div><button onclick='kjøp_kokain()' id='colaa' type='button' class='btn btn-secondary w-50 align-self-center'>Kjøp kokain</button><br><p class='text-center' id='cola'></p></div>"
        document.getElementById("pris").innerHTML = "Prisen på kokain er for øyeblikket: <b>" + pris_kokain + "</b> per plate (100 gram)"
    }
    if (type === "hasj") {
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Kjøp Hasj</h1><br><p class='text-center' id='pris'></p><br><p class='text-center'>Hvor mange plater vil du kjøpe?</p><div class='quantity-field' ><button class='value-button decrease-button' onclick='decreaseValueh(this)' title='Azalt'>-</button><div class='number'>0</div><button class='value-button increase-button' onclick='increaseValueh(this, 100)'title='Arrtır'>+</button></div><button onclick='kjøp_hasj()' id='hasj' type='button' class='btn btn-secondary w-50 align-self-center'>Kjøp hasj</button><br><p class='text-center' id='cola'></p></div>"
        document.getElementById("pris").innerHTML = "Prisen på hasj er for øyeblikket: <b>" + pris_hasj + "</b> per plate (100 gram)"
    }
    if (type === "amfetamin") {
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Kjøp Amfetamin</h1><br><p class='text-center' id='pris'></p><br><p class='text-center'>Hvor mange plater vil du kjøpe?</p><div class='quantity-field' ><button class='value-button decrease-button' onclick='decreaseValuea(this)' title='Azalt'>-</button><div class='number'>0</div><button class='value-button increase-button' onclick='increaseValuea(this, 100)'title='Arrtır'>+</button></div><button onclick='kjøp_amfetamin()' id='amf' type='button' class='btn btn-secondary w-50 align-self-center'>Kjøp amfetamin</button><br><p class='text-center' id='cola'></p></div>"
        document.getElementById("pris").innerHTML = "Prisen på amfetamin er for øyeblikket: <b>" + pris_amfetamin + "</b> per plate (100 gram)"
    }
    if (type === "benzo") {
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Kjøp Benzo</h1><br><p class='text-center' id='pris'></p><br><p class='text-center'>Hvor mange plater vil du kjøpe?</p><div class='quantity-field' ><button class='value-button decrease-button' onclick='decreaseValuex(this)' title='Azalt'>-</button><div class='number'>0</div><button class='value-button increase-button' onclick='increaseValuex(this, 100)'title='Arrtır'>+</button></div><button onclick='kjøp_xanax()' id='xan' type='button' class='btn btn-secondary w-50 align-self-center'>Kjøp xanax</button><br><p class='text-center' id='cola'></p></div>"
        document.getElementById("pris").innerHTML = "Prisen på xanax er for øyeblikket: <b>" + pris_xanax + "</b> per boks (100 piller)"
    }
    if (type === "molly") {
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Kjøp Molly</h1><br><p class='text-center' id='pris'></p><br><p class='text-center'>Hvor mange plater vil du kjøpe?</p><div class='quantity-field' ><button class='value-button decrease-button' onclick='decreaseValuem(this)' title='Azalt'>-</button><div class='number'>0</div><button class='value-button increase-button' onclick='increaseValuem(this, 100)'title='Arrtır'>+</button></div><button onclick='kjøp_molly()' id='molly' type='button' class='btn btn-secondary w-50 align-self-center'>Kjøp molly</button><br><p class='text-center' id='cola'></p></div>"
        document.getElementById("pris").innerHTML = "Prisen på molly er for øyeblikket: <b>" + pris_molly + "</b> per stein (100 gram)"
    }
}

function kjøp_kokain() {
    if (penger >= pris_kokain * cola) {
        penger = penger - pris_kokain * cola;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        document.getElementById("cola").innerHTML = "Du kjøpte <b>" + cola + "</b> plater med kokain for <b>" + pris_kokain * cola + "</b>."
        Kokain = Kokain + cola
        Kokain_gram = Kokain * 100;
    } else {
        document.getElementById("cola").innerHTML = "Du har ikke nok penger."
    }
}
function kjøp_hasj() {
    if (penger >= pris_hasj * weed) {
        penger = penger - pris_hasj * weed;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        document.getElementById("cola").innerHTML = "Du kjøpte <b>" + weed + "</b> plater med hasj for <b>" + pris_hasj * weed + "</b>."
        Hasj = Hasj + cola
        Hasj_gram = Hasj * 100;
    } else {
        document.getElementById("cola").innerHTML = "Du har ikke nok penger."
    }
}
function kjøp_amfetamin() {
    if (penger >= pris_amfetamin * amf) {
        penger = penger - pris_amfetamin * amf;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        document.getElementById("cola").innerHTML = "Du kjøpte <b>" + amf + "</b> plater med amfetamin for <b>" + pris_amfetamin * amf + "</b>."
        Amfetamin = Amfetamin + amf;
        Amfetamin_gram = Amfetamin * 100;
    } else {
        document.getElementById("cola").innerHTML = "Du har ikke nok penger."
    }
}
function kjøp_xanax() {
    if (penger >= pris_xanax * xan) {
        penger = penger - pris_xanax * xan;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        document.getElementById("cola").innerHTML = "Du kjøpte <b>" + xan + "</b> bokser med xanax for <b>" + pris_xanax * xan + "</b>."
        Xanax = Xanax + xan;
        Xanax_piller = Xanax * 100;
    } else {
        document.getElementById("cola").innerHTML = "Du har ikke nok penger."
    }
}
function kjøp_molly() {
    if (penger >= pris_molly * molly) {
        penger = penger - pris_molly * molly;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        document.getElementById("cola").innerHTML = "Du kjøpte <b>" + molly + "</b> stein(er) med molly for <b>" + pris_molly * molly + "</b>."
        Molly = Molly + molly;
        Molly_gram = Molly * 100;
    } else {
        document.getElementById("cola").innerHTML = "Du har ikke nok penger."
    }
}
// Kopiert https://codepen.io/gknasln/pen/WNbQmLP og endret litt.
// Kokain
function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
    cola++;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_kokain * cola + "</b>"
  }
  
  
  function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
    cola--;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_kokain * cola + "</b>"
  }
// Kokain
// Hasj
  function increaseValueh(button, limit, type) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
    weed++;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_hasj * weed + "</b>"
  }
  
  
  function decreaseValueh(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
    weed--;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_hasj * weed + "</b>"
  }
// Hasj
// Amfetamin
  function increaseValuea(button, limit, type) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
    amf++;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_amfetamin * amf + "</b>"
  }
  
  
  function decreaseValuea(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
    amf--;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_amfetamin * amf + "</b>"
  }
// Amfetamin
// Xanax
function increaseValuex(button, limit, type) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
    xan++;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_xanax * xan + "</b>"
  }
  
  
  function decreaseValuex(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
    xan--;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_xanax * xan + "</b>"
  }
// Xanax
// Molly
  function increaseValuem(button, limit, type) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
    molly++;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_molly * molly + "</b>"
  }
  
  
  function decreaseValuem(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
    molly--;
    document.getElementById("cola").innerHTML = "Prisen blir: <b>" + pris_molly * molly + "</b>"
  }
// Molly
// Kopiert https://codepen.io/gknasln/pen/WNbQmLP og endret litt.

function ran_biltema() {
    sjanse = Math.floor(Math.random() * (10 - 0 + 1) + 0)
    document.getElementById("sjanse").innerHTML = "Du har: <b>" + sjanse + "%</b> sjanse"
}

function utfør_biltema() {
    var randomsjanse = Math.floor(Math.random() * 101) + 1;
    if (sjanse >= randomsjanse) {
            document.getElementById("info01").innerHTML = "<h1 class='text-center'>Du klarte det!</h1><br><p class='text-center' id='mld00'></p><p class='text-center'>Du fikk meg deg:</p><p class='text-center' id='mld01'></p><p class='text-center' id='mld02'></p><p class='text-center' id='mld03'></p><p class='text-center' id='mld04'></p><p class='text-center' id='mld05'></p><p class='text-center' id='mld06'></p><p class='text-center' id='mld07'></p><p class='text-center' id='mld08'></p><p class='text-center' id='mld09'></p><p class='text-center' id='mld10'></p>"
            var hus1 = Math.floor(Math.random() * biltema.length);
            var hus2 = Math.floor(Math.random() * biltema.length);
            var hus3 = Math.floor(Math.random() * biltema.length);
            var hus_ting1 = biltema[hus1];
            var hus_ting2 = biltema[hus2];
            var hus_ting3 = biltema[hus3];
            var pengaf = Math.floor(Math.random() * (70000 - 10000 + 1) + 10000)
            penger = penger + pengaf;
            document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;

    
            antall_ting = Math.floor(Math.random() * (3 + 1) + 0);

            document.getElementById("mld00").innerHTML = "Du klarte å rane: <b>Biltema</b>";
            if (antall_ting === 1) {
                document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>"
                document.getElementById("mld04").innerHTML = "<b>" + pengaf + "</b> kroner"
                if (hus_ting1 === "Effektanlegg") {
                    Effektanlegg++;
                } else if (hus_ting1 === "Stereo anlegg") {
                    Stereoanlegg++;
                } else if (hus_ting1 === "Gressklipper") {
                    Gressklipper++;
                } else if (hus_ting1 === "Turbo") {
                    Turbo++;
                } else if (hus_ting1 === "Anlegg") {
                    Anlegg++;
                } else if (hus_ting1 === "Motorsag") {
                    Motorsag++;
                }
            } else if (antall_ting === 2) {
                document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>"
                document.getElementById("mld02").innerHTML = "<b>" + hus_ting2 + "</b>"
                document.getElementById("mld04").innerHTML = "<b>" + pengaf + "</b> kroner"
                if (hus_ting1 === "Effektanlegg") {
                    Effektanlegg++;
                } else if (hus_ting1 === "Stereo anlegg") {
                    Stereoanlegg++;
                } else if (hus_ting1 === "Gressklipper") {
                    Gressklipper++;
                } else if (hus_ting1 === "Turbo") {
                    Turbo++;
                } else if (hus_ting1 === "Anlegg") {
                    Anlegg++;
                } else if (hus_ting1 === "Motorsag") {
                    Motorsag++;
                }
                if (hus_ting2 === "Effektanlegg") {
                    Effektanlegg++;
                } else if (hus_ting2 === "Stereo anlegg") {
                    Stereoanlegg++;
                } else if (hus_ting2 === "Gressklipper") {
                    Gressklipper++;
                } else if (hus_ting2 === "Turbo") {
                    Turbo++;
                } else if (hus_ting2 === "Anlegg") {
                    Anlegg++;
                } else if (hus_ting2 === "Motorsag") {
                    Motorsag++;
                }
            } else if (antall_ting === 3) {
                document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>"
                document.getElementById("mld02").innerHTML = "<b>" + hus_ting2 + "</b>"
                document.getElementById("mld03").innerHTML = "<b>" + hus_ting3 + "</b>"
                document.getElementById("mld04").innerHTML = "<b>" + pengaf + "</b> kroner"

                if (hus_ting1 === "Effektanlegg") {
                    Effektanlegg++;
                } else if (hus_ting1 === "Stereo anlegg") {
                    Stereoanlegg++;
                } else if (hus_ting1 === "Gressklipper") {
                    Gressklipper++;
                } else if (hus_ting1 === "Turbo") {
                    Turbo++;
                } else if (hus_ting1 === "Anlegg") {
                    Anlegg++;
                } else if (hus_ting1 === "Motorsag") {
                    Motorsag++;
                }
                if (hus_ting2 === "Effektanlegg") {
                    Effektanlegg++;
                } else if (hus_ting2 === "Stereo anlegg") {
                    Stereoanlegg++;
                } else if (hus_ting2 === "Gressklipper") {
                    Gressklipper++;
                } else if (hus_ting2 === "Turbo") {
                    Turbo++;
                } else if (hus_ting2 === "Anlegg") {
                    Anlegg++;
                } else if (hus_ting2 === "Motorsag") {
                    Motorsag++;
                }
                if (hus_ting3 === "Effektanlegg") {
                    Effektanlegg++;
                } else if (hus_ting3 === "Stereo anlegg") {
                    Stereoanlegg++;
                } else if (hus_ting3 === "Gressklipper") {
                    Gressklipper++;
                } else if (hus_ting3 === "Turbo") {
                    Turbo++;
                } else if (hus_ting3 === "Anlegg") {
                    Anlegg++;
                } else if (hus_ting3 === "Motorsag") {
                    Motorsag++;
                }
            } else if (antall_ting === 0) {
                document.getElementById("mld01").innerHTML = "<b>" + pengaf + "</b> kroner"
            }
    } else {
        document.getElementById("info01").innerHTML = "<h1 class='text-center'>Du klarte det ikke</h1><br><p class='text-center' id='mld'></p><p class='text-center' id='mld2'></p>";
        document.getElementById("mld").innerHTML = "Du klarte ikke å rane: <b>Biltema</b>"
        document.getElementById("mld2").innerHTML = "Prøv igjen senere!"
    } 
}



function stjelprivathus() {
    if (hus_cd > 0) {
        cooldown_hus()
    }
    const d = new Date();
    var hour = d.getHours();

    var navn00f = Math.floor(Math.random() * random_fornavn.length);
    var navn00e = Math.floor(Math.random() * random_etternavn.length);
    var navn01f = random_fornavn[navn00f];
    var navn01e = random_etternavn[navn00e];
    randnavn = navn01f + " " + navn01e;
    var gatehus = Math.floor(Math.random() * gater.length);
    var gategg = gater[gatehus]
    var gatenmr = Math.floor(Math.random() * 101) + 1;
    adressa = gategg + " " + gatenmr;

    if (hour > 7 && hour < 19) {
        sjanse = Math.floor(Math.random() * (10 - 0 + 1) + 0)
        document.getElementById("sjansaa").innerHTML = "Du har: <b>" + sjanse + "%</b> sjanse"
        document.getElementById("natt/dag").innerHTML = "Siden det er dag, har du mindre sjanse (<b>0</b> - <b>10%</b>)"
    } else {
        sjanse = Math.floor(Math.random() * (40 - 10 + 1) + 10)
        document.getElementById("sjansaa").innerHTML = "Du har: <b>" + sjanse + "%</b> sjanse"
        document.getElementById("natt/dag").innerHTML = "Siden det er natt, har du mer sjanse (<b>10</b> - <b>40%</b>)"
    }
    document.getElementById("adresse").innerHTML = "<b>Adresse:</b> " + adressa;
    document.getElementById("person").innerHTML = "Bryt deg inn hos: <b>" + randnavn + "</b>";
}

function stjelprivathus_nytt() {
    if (penger >= 1000) {
        penger = penger - 1000;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        stjelprivathus();
    } else {
        document.getElementById("ny_mld").innerHTML = "Du har ikke nok penger!"
    }
}

function utfør_privathus() {
    var myNode = document.getElementById("info00");
    while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
    var randsjanse = Math.floor(Math.random() * 101) + 1;

    if (sjanse >= randsjanse) {
        document.getElementById("info00").innerHTML = "<h1 class='text-center'>Du klarte det!</h1><br><p class='text-center' id='mld00'></p><p class='text-center'>Du fikk meg deg:</p><p class='text-center' id='mld01'></p><p class='text-center' id='mld02'></p><p class='text-center' id='mld03'></p><p class='text-center' id='mld04'></p><p class='text-center' id='mld05'></p><p class='text-center' id='mld06'></p><p class='text-center' id='mld07'></p><p class='text-center' id='mld08'></p><p class='text-center' id='mld09'></p><p class='text-center' id='mld10'></p>"
        var hus1 = Math.floor(Math.random() * stjel_hus_privatperson.length);
        var hus2 = Math.floor(Math.random() * stjel_hus_privatperson.length);
        var hus3 = Math.floor(Math.random() * stjel_hus_privatperson.length);
        var hus4 = Math.floor(Math.random() * stjel_hus_privatperson.length);
        var hus5 = Math.floor(Math.random() * stjel_hus_privatperson.length);
        var hus6 = Math.floor(Math.random() * stjel_hus_privatperson.length);
        var hus_ting1 = stjel_hus_privatperson[hus1];
        var hus_ting2 = stjel_hus_privatperson[hus2];
        var hus_ting3 = stjel_hus_privatperson[hus3];
        var hus_ting4 = stjel_hus_privatperson[hus4];
        var hus_ting5 = stjel_hus_privatperson[hus5];
        var hus_ting6 = stjel_hus_privatperson[hus6];

        var antall_ting = Math.floor(Math.random() * (6 + 1) + 1)

        document.getElementById("mld00").innerHTML = "Du klarte å rane: <b>" + randnavn + "</b>"

        if (antall_ting === 1) {
            document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>";
            if (hus_ting1 === "TV") {
                TV++;
            } else if (hus_ting1 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting1 === "Dress") {
                Dress++;
            } else if (hus_ting1 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting1 === "Laptop") {
                Laptop++;
            } else if (hus_ting1 === "PC") {
                PC++;
            } else if (hus_ting1 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting1 === "PS4") {
                PS4++;
            } else if (hus_ting1 === "PS5") {
                PS5++;
            } else if (hus_ting1 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting1 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting1 === "Gaming PC") {
                GamingPC++;
            }

        } else if (antall_ting === 2) {
            document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>";
            document.getElementById("mld02").innerHTML = "<b>" + hus_ting2 + "</b>";

            if (hus_ting1 === "TV") {
                TV++;
            } else if (hus_ting1 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting1 === "Dress") {
                Dress++;
            } else if (hus_ting1 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting1 === "Laptop") {
                Laptop++;
            } else if (hus_ting1 === "PC") {
                PC++;
            } else if (hus_ting1 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting1 === "PS4") {
                PS4++;
            } else if (hus_ting1 === "PS5") {
                PS5++;
            } else if (hus_ting1 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting1 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting1 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting2 === "TV") {
                TV++;
            } else if (hus_ting2 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting2 === "Dress") {
                Dress++;
            } else if (hus_ting2 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting2 === "Laptop") {
                Laptop++;
            } else if (hus_ting2 === "PC") {
                PC++;
            } else if (hus_ting2 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting2 === "PS4") {
                PS4++;
            } else if (hus_ting2 === "PS5") {
                PS5++;
            } else if (hus_ting2 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting2 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting2 === "Gaming PC") {
                GamingPC++;
            }
        } else if (antall_ting === 3) {
            document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>";
            document.getElementById("mld02").innerHTML = "<b>" + hus_ting2 + "</b>";
            document.getElementById("mld03").innerHTML = "<b>" + hus_ting3 + "</b>";

            if (hus_ting1 === "TV") {
                TV++;
            } else if (hus_ting1 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting1 === "Dress") {
                Dress++;
            } else if (hus_ting1 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting1 === "Laptop") {
                Laptop++;
            } else if (hus_ting1 === "PC") {
                PC++;
            } else if (hus_ting1 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting1 === "PS4") {
                PS4++;
            } else if (hus_ting1 === "PS5") {
                PS5++;
            } else if (hus_ting1 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting1 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting1 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting2 === "TV") {
                TV++;
            } else if (hus_ting2 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting2 === "Dress") {
                Dress++;
            } else if (hus_ting2 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting2 === "Laptop") {
                Laptop++;
            } else if (hus_ting2 === "PC") {
                PC++;
            } else if (hus_ting2 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting2 === "PS4") {
                PS4++;
            } else if (hus_ting2 === "PS5") {
                PS5++;
            } else if (hus_ting2 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting2 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting2 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting3 === "TV") {
                TV++;
            } else if (hus_ting3 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting3 === "Dress") {
                Dress++;
            } else if (hus_ting3 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting3 === "Laptop") {
                Laptop++;
            } else if (hus_ting3 === "PC") {
                PC++;
            } else if (hus_ting3 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting3 === "PS4") {
                PS4++;
            } else if (hus_ting3 === "PS5") {
                PS5++;
            } else if (hus_ting3 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting3 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting3 === "Gaming PC") {
                GamingPC++;
            }

        } else if (antall_ting === 4) {
            document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>";
            document.getElementById("mld02").innerHTML = "<b>" + hus_ting2 + "</b>";
            document.getElementById("mld03").innerHTML = "<b>" + hus_ting3 + "</b>";
            document.getElementById("mld04").innerHTML = "<b>" + hus_ting4 + "</b>";

            if (hus_ting1 === "TV") {
                TV++;
            } else if (hus_ting1 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting1 === "Dress") {
                Dress++;
            } else if (hus_ting1 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting1 === "Laptop") {
                Laptop++;
            } else if (hus_ting1 === "PC") {
                PC++;
            } else if (hus_ting1 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting1 === "PS4") {
                PS4++;
            } else if (hus_ting1 === "PS5") {
                PS5++;
            } else if (hus_ting1 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting1 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting1 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting2 === "TV") {
                TV++;
            } else if (hus_ting2 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting2 === "Dress") {
                Dress++;
            } else if (hus_ting2 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting2 === "Laptop") {
                Laptop++;
            } else if (hus_ting2 === "PC") {
                PC++;
            } else if (hus_ting2 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting2 === "PS4") {
                PS4++;
            } else if (hus_ting2 === "PS5") {
                PS5++;
            } else if (hus_ting2 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting2 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting2 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting3 === "TV") {
                TV++;
            } else if (hus_ting3 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting3 === "Dress") {
                Dress++;
            } else if (hus_ting3 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting3 === "Laptop") {
                Laptop++;
            } else if (hus_ting3 === "PC") {
                PC++;
            } else if (hus_ting3 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting3 === "PS4") {
                PS4++;
            } else if (hus_ting3 === "PS5") {
                PS5++;
            } else if (hus_ting3 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting3 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting3 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting4 === "TV") {
                TV++;
            } else if (hus_ting4 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting4 === "Dress") {
                Dress++;
            } else if (hus_ting4 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting4 === "Laptop") {
                Laptop++;
            } else if (hus_ting4 === "PC") {
                PC++;
            } else if (hus_ting4 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting4 === "PS4") {
                PS4++;
            } else if (hus_ting4 === "PS5") {
                PS5++;
            } else if (hus_ting4 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting4 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting4 === "Gaming PC") {
                GamingPC++;
            }

        } else if (antall_ting === 5) {
            document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>";
            document.getElementById("mld02").innerHTML = "<b>" + hus_ting2 + "</b>";
            document.getElementById("mld03").innerHTML = "<b>" + hus_ting3 + "</b>";
            document.getElementById("mld04").innerHTML = "<b>" + hus_ting4 + "</b>";
            document.getElementById("mld05").innerHTML = "<b>" + hus_ting5 + "</b>";

            if (hus_ting1 === "TV") {
                TV++;
            } else if (hus_ting1 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting1 === "Dress") {
                Dress++;
            } else if (hus_ting1 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting1 === "Laptop") {
                Laptop++;
            } else if (hus_ting1 === "PC") {
                PC++;
            } else if (hus_ting1 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting1 === "PS4") {
                PS4++;
            } else if (hus_ting1 === "PS5") {
                PS5++;
            } else if (hus_ting1 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting1 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting1 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting2 === "TV") {
                TV++;
            } else if (hus_ting2 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting2 === "Dress") {
                Dress++;
            } else if (hus_ting2 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting2 === "Laptop") {
                Laptop++;
            } else if (hus_ting2 === "PC") {
                PC++;
            } else if (hus_ting2 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting2 === "PS4") {
                PS4++;
            } else if (hus_ting2 === "PS5") {
                PS5++;
            } else if (hus_ting2 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting2 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting2 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting3 === "TV") {
                TV++;
            } else if (hus_ting3 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting3 === "Dress") {
                Dress++;
            } else if (hus_ting3 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting3 === "Laptop") {
                Laptop++;
            } else if (hus_ting3 === "PC") {
                PC++;
            } else if (hus_ting3 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting3 === "PS4") {
                PS4++;
            } else if (hus_ting3 === "PS5") {
                PS5++;
            } else if (hus_ting3 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting3 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting3 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting4 === "TV") {
                TV++;
            } else if (hus_ting4 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting4 === "Dress") {
                Dress++;
            } else if (hus_ting4 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting4 === "Laptop") {
                Laptop++;
            } else if (hus_ting4 === "PC") {
                PC++;
            } else if (hus_ting4 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting4 === "PS4") {
                PS4++;
            } else if (hus_ting4 === "PS5") {
                PS5++;
            } else if (hus_ting4 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting4 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting4 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting5 === "TV") {
                TV++;
            } else if (hus_ting5 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting5 === "Dress") {
                Dress++;
            } else if (hus_ting5 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting5 === "Laptop") {
                Laptop++;
            } else if (hus_ting5 === "PC") {
                PC++;
            } else if (hus_ting5 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting5 === "PS4") {
                PS4++;
            } else if (hus_ting5 === "PS5") {
                PS5++;
            } else if (hus_ting5 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting5 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting5 === "Gaming PC") {
                GamingPC++;
            }

        } else if (antall_ting === 6) {
            document.getElementById("mld01").innerHTML = "<b>" + hus_ting1 + "</b>";
            document.getElementById("mld02").innerHTML = "<b>" + hus_ting2 + "</b>";
            document.getElementById("mld03").innerHTML = "<b>" + hus_ting3 + "</b>";
            document.getElementById("mld04").innerHTML = "<b>" + hus_ting4 + "</b>";
            document.getElementById("mld05").innerHTML = "<b>" + hus_ting5 + "</b>";
            document.getElementById("mld06").innerHTML = "<b>" + hus_ting6 + "</b>";

            if (hus_ting1 === "TV") {
                TV++;
            } else if (hus_ting1 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting1 === "Dress") {
                Dress++;
            } else if (hus_ting1 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting1 === "Laptop") {
                Laptop++;
            } else if (hus_ting1 === "PC") {
                PC++;
            } else if (hus_ting1 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting1 === "PS4") {
                PS4++;
            } else if (hus_ting1 === "PS5") {
                PS5++;
            } else if (hus_ting1 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting1 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting1 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting2 === "TV") {
                TV++;
            } else if (hus_ting2 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting2 === "Dress") {
                Dress++;
            } else if (hus_ting2 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting2 === "Laptop") {
                Laptop++;
            } else if (hus_ting2 === "PC") {
                PC++;
            } else if (hus_ting2 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting2 === "PS4") {
                PS4++;
            } else if (hus_ting2 === "PS5") {
                PS5++;
            } else if (hus_ting2 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting2 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting2 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting3 === "TV") {
                TV++;
            } else if (hus_ting3 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting3 === "Dress") {
                Dress++;
            } else if (hus_ting3 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting3 === "Laptop") {
                Laptop++;
            } else if (hus_ting3 === "PC") {
                PC++;
            } else if (hus_ting3 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting3 === "PS4") {
                PS4++;
            } else if (hus_ting3 === "PS5") {
                PS5++;
            } else if (hus_ting3 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting3 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting3 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting4 === "TV") {
                TV++;
            } else if (hus_ting4 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting4 === "Dress") {
                Dress++;
            } else if (hus_ting4 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting4 === "Laptop") {
                Laptop++;
            } else if (hus_ting4 === "PC") {
                PC++;
            } else if (hus_ting4 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting4 === "PS4") {
                PS4++;
            } else if (hus_ting4 === "PS5") {
                PS5++;
            } else if (hus_ting4 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting4 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting4 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting5 === "TV") {
                TV++;
            } else if (hus_ting5 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting5 === "Dress") {
                Dress++;
            } else if (hus_ting5 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting5 === "Laptop") {
                Laptop++;
            } else if (hus_ting5 === "PC") {
                PC++;
            } else if (hus_ting5 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting5 === "PS4") {
                PS4++;
            } else if (hus_ting5 === "PS5") {
                PS5++;
            } else if (hus_ting5 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting5 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting5 === "Gaming PC") {
                GamingPC++;
            }
            if (hus_ting6 === "TV") {
                TV++;
            } else if (hus_ting6 === "Alarmsystem") {
                Alarmsystem++;
            } else if (hus_ting6 === "Dress") {
                Dress++;
            } else if (hus_ting6 === "Gitar samling") {
                Gitarsamling++;
            } else if (hus_ting6 === "Laptop") {
                Laptop++;
            } else if (hus_ting6 === "PC") {
                PC++;
            } else if (hus_ting6 === "Radiostyrt bil") {
                Radiostyrtbil++;
            } else if (hus_ting6 === "PS4") {
                PS4++;
            } else if (hus_ting6 === "PS5") {
                PS5++;
            } else if (hus_ting6 === "Xbox One") {
                XboxOne++;
            } else if (hus_ting6 === "Xbox 360") {
                Xbox360++;
            } else if (hus_ting6 === "Gaming PC") {
                GamingPC++;
            }

        } else {
            document.write = "Error"
        }

    } else {
        document.getElementById("info00").innerHTML = "<h1 class='text-center'>Du klarte det ikke</h1><br><p class='text-center' id='mld'></p><p class='text-center' id='mld2'></p>";
        document.getElementById("mld").innerHTML = "Du klarte ikke å rane: <b>" + randnavn + "</b>"
        document.getElementById("mld2").innerHTML = "På adressen: <b>" + adressa + "</b>"
    }
    hus_cd = 200;
}

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
                Volvo240glturbo = Volvo240glturbo + 1;
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
          load();
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
    } else if (random_bil === "Lamborghini Diablo") {
        bilpris = LamborghiniDiablo_pris;
    } else if (random_bil === "Chevrolet Corvette Z06") {
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
             } else if (random_bil === "Ferrari 612 Scaglietti") {
                 ChevroletCorvetteZ06 = ChevroletCorvetteZ06 + 1;
             }

            document.getElementById("mld_bil").innerHTML = "Du klarte å stjele en: <br>" + random_bil;
            document.getElementById("mld_bil00").innerHTML = "Bilen er verdt: <br>" + bilpris;
          } else {
            document.getElementById("mld_bil").innerHTML = "Du klarte ikke å stjele en: <br><br>" + random_bil;
          }
          bil_cd = 140;
          load();
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
        document.getElementById("info01").innerHTML = "<div class='d-flex flex-column justify-content-center align-items-center w-100 h-100'><p id='p_01'>Du har fortsett:</p> <br> <p class='text-center fs-3' id='bil_cd'></p> <br> <p id='p_01'>sekunder igjen.</p></div>"
        var timer = setInterval(function(){
            if(bil_cd <= 0){
            clearInterval(timer);
            endre("tilfeldig_bil")
            randombil()
            cooldown_bil()
            } else {
              document.getElementById("bil_cd").innerHTML = bil_cd;
            }
          }, 1000);
    }
}
function cooldown_hus(){
    if (hus_cd > 0) {
        var myNode = document.getElementById("info00");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info00").innerHTML = "<div class='d-flex flex-column justify-content-center align-items-center w-100 h-100'><p id='p_01'>Du har fortsett:</p> <br> <p class='text-center fs-3' id='hus_cd'></p> <br> <p id='p_01'>sekunder igjen.</p></div>"
        var timer = setInterval(function(){
            if(hus_cd <= 0){
            clearInterval(timer);
            endre("privathus")
            stjelprivathus()
            } else {
              document.getElementById("hus_cd").innerHTML = hus_cd;
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
    if (hus_cd > 0) {
        hus_cd = hus_cd - 1;
    }
}, 1000);





function selg_biler() {
    verdi_biler = Volvo240glturbo * volvo240glturbo_pris + Volvo740 * Volvo740_pris + Volvo940 * Volvo940_pris + Volvo240 * Volvo240_pris + ToyotaHiAce * ToyotaHiAce_pris + BMWE30 * BMWE30_pris + OpelKadett * OpelKadett_pris + OpelAstra * OpelAstra_pris + FordMondeo * FordMondeo_pris + VolkswagenUp * VolkswagenUp_pris + FerrariLaFerrari * FerrariLaFerrari_pris + Ferrari612Scaglietti * Ferrari612Scaglietti_pris + LamborghiniDiablo * LamborghiniDiablo_pris + ChevroletCorvetteZ06 * ChevroletCorvetteZ06_pris;
    antall_biler = Volvo240glturbo + Volvo740 + Volvo940 + Volvo240 + ToyotaHiAce + BMWE30 + OpelKadett + OpelAstra + FordMondeo + VolkswagenUp + FerrariLaFerrari + Ferrari612Scaglietti + LamborghiniDiablo + ChevroletCorvetteZ06;
    var myNode = document.getElementById("info");
    while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
    document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Selg ting</h1><br><br><p class='text-center' id='solgte_biler'></p><p class='text-center' id='tjente_penger'></p><p class='text-center' id='littainfoo'></p></div>"

    document.getElementById("solgte_biler").innerHTML = antall_biler + " stk"
    document.getElementById("tjente_penger").innerHTML = verdi_biler + " kroner"
    document.getElementById("littainfoo").innerHTML = "Du solgte " + antall_biler + " bil(er) og fikk " + verdi_biler + " kroner for de."

    penger = penger + verdi_biler;
    Volvo240glturbo = 0;
    Volvo740 = 0;
    Volvo940 = 0;
    Volvo240 = 0;
    ToyotaHiAce = 0;
    BMWE30 = 0;
    OpelKadett = 0;
    OpelAstra = 0;
    FordMondeo = 0;
    VolkswagenUp = 0;
    FerrariLaFerrari = 0;
    Ferrari612Scaglietti = 0;
    LamborghiniDiablo = 0;
    ChevroletCorvetteZ06 = 0;
    verdi_biler = Volvo240glturbo * volvo240glturbo_pris + Volvo740 * Volvo740_pris + Volvo940 * Volvo940_pris + Volvo240 * Volvo240_pris + ToyotaHiAce * ToyotaHiAce_pris + BMWE30 * BMWE30_pris + OpelKadett * OpelKadett_pris + OpelAstra * OpelAstra_pris + FordMondeo * FordMondeo_pris + VolkswagenUp * VolkswagenUp_pris + FerrariLaFerrari * FerrariLaFerrari_pris + Ferrari612Scaglietti * Ferrari612Scaglietti_pris + LamborghiniDiablo * LamborghiniDiablo_pris + ChevroletCorvetteZ06 * ChevroletCorvetteZ06_pris;
    antall_biler = Volvo240glturbo + Volvo740 + Volvo940 + Volvo240 + ToyotaHiAce + BMWE30 + OpelKadett + OpelAstra + FordMondeo + VolkswagenUp + FerrariLaFerrari + Ferrari612Scaglietti + LamborghiniDiablo + ChevroletCorvetteZ06;

    document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
}

function selg_ting() {
    tinga_verdig = TV * TV_pris + Alarmsystem * Alarmsystem_pris + Dress * Dress_pris + Gitarsamling * Gitarsamling_pris + Laptop * Laptop_pris + PC * PC_pris + Radiostyrtbil * Radiostyrtbil_pris + PS4 * PS4_pris + PS5 * PS5_pris + XboxOne * XboxOne_pris + Xbox360 * Xbox360_pris + GamingPC * GamingPC_pris + Effektanlegg * Effektanlegg_pris + Stereoanlegg * Stereoanlegg_pris + Gressklipper * Gressklipper_pris + Turbo * Turbo_pris + Anlegg * Anlegg_pris + Motorsag * Motorsag_pris;
    antall_tinga = TV + Alarmsystem + Dress + Gitarsamling + Laptop + PC + Radiostyrtbil + PS4 + PS5 + XboxOne + Xbox360 + GamingPC + Effektanlegg + Stereoanlegg + Gressklipper + Turbo + Anlegg + Motorsag;
    var myNode = document.getElementById("info");
    while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
          }
    document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Selg ting</h1><br><br><p class='text-center' id='solgte_biler'></p><p class='text-center' id='tjente_penger'></p><p class='text-center' id='littainfoo'></p></div>"

    document.getElementById("solgte_biler").innerHTML = antall_tinga + " stk"
    document.getElementById("tjente_penger").innerHTML = tinga_verdig + " kroner"
    document.getElementById("littainfoo").innerHTML = "Du solgte " + antall_tinga + " ting og fikk " + tinga_verdig + " kroner for de."

    penger = penger + tinga_verdig
    TV = 0;
    Alarmsystem = 0;
    Dress = 0;
    Gitarsamling = 0;
    Laptop = 0;
    PC = 0;
    Radiostyrtbil = 0;
    PS4 = 0;
    PS5 = 0;
    XboxOne = 0;
    Xbox360 = 0;
    GamingPC = 0;
    Effektanlegg = 0;
    Stereoanlegg = 0;
    Gressklipper = 0;
    Turbo = 0;
    Anlegg = 0;
    Motorsag = 0;
    tinga_verdig = TV * TV_pris + Alarmsystem * Alarmsystem_pris + Dress * Dress_pris + Gitarsamling * Gitarsamling_pris + Laptop * Laptop_pris + PC * PC_pris + Radiostyrtbil * Radiostyrtbil_pris + PS4 * PS4_pris + PS5 * PS5_pris + XboxOne * XboxOne_pris + Xbox360 * Xbox360_pris + GamingPC * GamingPC_pris + Effektanlegg * Effektanlegg_pris + Stereoanlegg * Stereoanlegg_pris + Gressklipper * Gressklipper_pris + Turbo * Turbo_pris + Anlegg * Anlegg_pris + Motorsag * Motorsag_pris;
    antall_tinga = TV + Alarmsystem + Dress + Gitarsamling + Laptop + PC + Radiostyrtbil + PS4 + PS5 + XboxOne + Xbox360 + GamingPC + Effektanlegg + Stereoanlegg + Gressklipper + Turbo + Anlegg + Motorsag;
    document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
}




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
        document.getElementById("info").innerHTML = "<div id='info00' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Hovedkvarter</h1><div id='littinfo' class='w-100 align-self-center'><p class='text-center fs-4'><b>Biler</b></p><div class='litta align-self-center'><p class='text-center gg' id='bila_verdi'></p><p class='text-center gg' id='bila_antall'></p></div><br><p class='text-center fs-4'><b>Ting</b></p><div class='litta align-self-center'><p class='text-center gg' id='tinga_verdi'></p><p class='text-center gg' id='tinga_antall'></p></div><br><p class='text-center fs-4'><b>Narkotika</b></p><div class='litta align-self-center'><p class='text-center gg' id='narko_verdi'></p><p class='text-center gg' id='narko_antall'></p></div></div></div>"
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
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Stjel en bil fra en offentlig person</h1><div id='idkxd' class='w-100 align-self-center d-flex align-items-center justify-content-center flex-column'><p class='text-center fs-4 text' id='bil-type'></p><p class='text-center fs-4 text' id='bil_sjanse'></p></div><button onclick='nytt_bil0()' id='finn_bil' type='button' class='btn btn-secondary w-50 align-self-center'>Finn en ny bil - 10 000kr</button><p id='finn_ny_bil' class='text-center'></p><button onclick='utfør_bil0()' id='utført_bil' type='button' class='btn btn-secondary w-50 align-self-center align-text-bottom mt-auto'>Utfør ran</button></div>"
    } else if (type === "selg_biler") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Dine biler</h1><ul class='list-group overflow-auto'><li class='list-group-item d-flex justify-content-between align-items-center'>Volvo 240 GL Turbo<span id='volvo240glturbo' class='badge bg-primary rounded-pill'></span></li><li class='list-group-item d-flex justify-content-between align-items-center'>Volvo 740<span id='volvo740' class='badge bg-primary rounded-pill'></span></li><span id='volvo740' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Volvo 940 <span id='volvo940' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Volvo 240 <span id='volvo240' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Toyota HiAce <span id='toyotahiace' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> BMW E30 <span id='bmwe30' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Opel Kadett <span id='opelkadett' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Opel Astra <span id='opelastra' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Ford Mondeo <span id='fordmondeo' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Volkswagen Up! <span id='volkswagenup' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Ferrari LaFerrari <span id='ferrarilaferrari' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Ferrari 612 Scaglietti <span id='ferrari612scaglietti' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Lamborghini Diablo <span id='lamborghinidablo' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'> Chevrolet Corvette Z06 <span id='chevroletcorvettez06' class='badge bg-danger rounded-pill'></span> </li> </ul> <button onclick='selg_biler()' class='btn btn-primary' type='button'>Selg biler</button> </div>"
    } else if (type === "privathus") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info00' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Bryt deg inn i et hus</h1><p class='text-center' id='person'></p><p class='text-center' id='adresse'></p><p class='text-center' id='gataa'></p><p class='text-center' id='sjansaa'></p><p class='text-center' id='natt/dag'></p><br><br><button onclick='stjelprivathus_nytt()' type='button' class='btn btn-secondary w-50 align-self-center'>Finn et nytt hus - pris: 1 000kr</button><p class='text-center' id='ny_mld'></p><br><button onclick='utfør_privathus()' type='button' class='btn btn-secondary w-50 align-self-center'>Utfør ran</button></div>"
    } else if (type === "selg_ting") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Dine biler</h1><ul class='list-group overflow-auto'><li class='list-group-item d-flex justify-content-between align-items-center'>TV<span id='tv' class='badge bg-primary rounded-pill'></span></li><li class='list-group-item d-flex justify-content-between align-items-center'>Alarmsystem<span id='alarmsystem' class='badge bg-primary rounded-pill'></span></li><li class='list-group-item d-flex justify-content-between align-items-center'>Dress<span id='dress' class='badge bg-primary rounded-pill'></span></li><li class='list-group-item d-flex justify-content-between align-items-center'>Gitarsamling<span id='gitarsamling' class='badge bg-primary rounded-pill'></span> </li><li class='list-group-item d-flex justify-content-between align-items-center'>Laptop<span id='laptop' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>PC<span id='pc' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Radiostyrtbil<span id='radiostyrtbil' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>PS4<span id='ps4' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>PS5<span id='ps5' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Xbox One<span id='xboxone' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Xbox 360<span id='xbox360' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Gaming PC<span id='gamingpc' class='badge bg-primary rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Effektanlegg<span id='effektanlegg' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Stereoanlegg<span id='stereoanlegg' class='badge bg-danger rounded-pill'></span> </li><li class='list-group-item d-flex justify-content-between align-items-center'>Gressklipper<span id='gressklipper' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Turbo<span id='turbo' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Anlegg<span id='anlegg' class='badge bg-danger rounded-pill'></span> </li> <li class='list-group-item d-flex justify-content-between align-items-center'>Motorsag<span id='motorsag' class='badge bg-danger rounded-pill'></span> </li> </ul><button onclick='selg_ting()' class='btn btn-primary' type='button'>Selg ting</button> </div>"
    } else if (type === "ran_biltema") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Ran Biltema</h1><br><p class='text-center' id='sjanse'></p><br><br><button onclick='utfør_biltema()'id='utfør_ran' type='button' class='btn btn-secondary w-50 align-self-center'>Utfør ran</button></div>"
    } else if (type === "kjøp_narkotika") {
        var myNode = document.getElementById("info");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
              }
        document.getElementById("info").innerHTML = "<div id='info01' class='border border-3 w-50 h-50 d-flex align-content-center shadow-lg p-3 mb-5 bg-body rounded flex-column'><h1 class='text-center'>Hent varer fra Traphous</h1><p class='text-center'><b>Kjøp noe:</b></p><button onclick='kjøp(\"kokain\")' class='btn btn-primary w-50 align-self-center' type='button'>Kokain</button><br><button onclick='kjøp(\"hasj\")' class='btn btn-primary w-50 align-self-center' type='button'>Hasj</button><br><button onclick='kjøp(\"amfetamin\")' class='btn btn-primary w-50 align-self-center' type='button'>Amfetamin</button><br><button onclick='kjøp(\"benzo\")' class='btn btn-primary w-50 align-self-center' type='button'>Benzo</button><br><button onclick='kjøp(\"molly\")' class='btn btn-primary w-50 align-self-center' type='button'>Molly</button></div>"
    }
}

function load() {

    verdi_biler = Volvo240glturbo * volvo240glturbo_pris + Volvo740 * Volvo740_pris + Volvo940 * Volvo940_pris + Volvo240 * Volvo240_pris + ToyotaHiAce * ToyotaHiAce_pris + BMWE30 * BMWE30_pris + OpelKadett * OpelKadett_pris + OpelAstra * OpelAstra_pris + FordMondeo * FordMondeo_pris + VolkswagenUp * VolkswagenUp_pris + FerrariLaFerrari * FerrariLaFerrari_pris + Ferrari612Scaglietti * Ferrari612Scaglietti_pris + LamborghiniDiablo * LamborghiniDiablo_pris + ChevroletCorvetteZ06 * ChevroletCorvetteZ06_pris;
    antall_biler = Volvo240glturbo + Volvo740 + Volvo940 + Volvo240 + ToyotaHiAce + BMWE30 + OpelKadett + OpelAstra + FordMondeo + VolkswagenUp + FerrariLaFerrari + Ferrari612Scaglietti + LamborghiniDiablo + ChevroletCorvetteZ06;
    antall_tinga = TV + Alarmsystem + Dress + Gitarsamling + Laptop + PC + Radiostyrtbil + PS4 + PS5 + XboxOne + Xbox360 + GamingPC + Effektanlegg + Stereoanlegg + Gressklipper + Turbo + Anlegg + Motorsag;
    tinga_verdig = TV * TV_pris + Alarmsystem * Alarmsystem_pris + Dress * Dress_pris + Gitarsamling * Gitarsamling_pris + Laptop * Laptop_pris + PC * PC_pris + Radiostyrtbil * Radiostyrtbil_pris + PS4 * PS4_pris + PS5 * PS5_pris + XboxOne * XboxOne_pris + Xbox360 * Xbox360_pris + GamingPC * GamingPC_pris + Effektanlegg * Effektanlegg_pris + Stereoanlegg * Stereoanlegg_pris + Gressklipper * Gressklipper_pris + Turbo * Turbo_pris + Anlegg * Anlegg_pris + Motorsag * Motorsag_pris;

    document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
    document.getElementById("bila_verdi").innerHTML = verdi_biler + " kroner"
    document.getElementById("bila_antall").innerHTML = antall_biler + " stk"
    document.getElementById("tinga_antall").innerHTML = antall_tinga + " stk"
    document.getElementById("tinga_verdi").innerHTML = tinga_verdig + " kroner"
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

// Finn en ny bil hvis bruker ikke er fornøyd med bilen han/hun fant, dette er biler fra en privat person. Koster 1 000.
function nytt_bil() {
    // Hvis brukeren ikke har nok penger skriver den ut en error, hvis den har nokker trekker den fra
    // og skriver ut de nye pengene og deretter kjører funksjonen på nytt som finner en ny bil.
    if (penger >= 1000) {
        penger = penger - 1000;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        randombil()
    } else {
        document.getElementById("finn_ny_bil").innerHTML = "Du har ikke nok penger!"
    }
}
// Finn en ny bil hvis bruker ikke er fornøyd med bilen han/hun fant, dette er biler fra en privat person. Koster 1 000.


// Finn en ny bil hvis bruker ikke er fornøyd med bilen han/hun fant, dette er biler fra en offentlig person. Koster 10 000.
function nytt_bil0() {
    // Hvis bruker ikke har nok penger, så skriver den ut "Du har ikke nok penger!", hvis bruker har nok
    // penger, trekker den fra pengene og skriver ut de nye pengene i sidebar, også laster den siden på nytt.
    if (penger >= 10000) {
        penger = penger - 10000;
        document.getElementById("pengsjit").innerHTML = "<i class='fas fa-coins fa-fw'></i> Penger: " + penger;
        randombil0()
    } else {
        document.getElementById("finn_ny_bil").innerHTML = "Du har ikke nok penger!"
    }
}
// Finn en ny bil hvis bruker ikke er fornøyd med bilen han/hun fant. Koster 10 000.


// Skriver ut alle bilene til brukeren og antall biler når man trykker på "biler" på sidebar.
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
// Skriver ut alle bilene til brukeren og antall biler når man trykker på "biler" på sidebar.

function dineting() {
    document.getElementById("tv").innerHTML = TV;
    document.getElementById("alarmsystem").innerHTML = Alarmsystem;
    document.getElementById("dress").innerHTML = Dress;
    document.getElementById("gitarsamling").innerHTML = Gitarsamling;
    document.getElementById("laptop").innerHTML = Laptop;
    document.getElementById("pc").innerHTML = PC;
    document.getElementById("radiostyrtbil").innerHTML = Radiostyrtbil;
    document.getElementById("ps4").innerHTML = PS4;
    document.getElementById("ps5").innerHTML = PS5;
    document.getElementById("xboxone").innerHTML = XboxOne;
    document.getElementById("xbox360").innerHTML = Xbox360;
    document.getElementById("gamingpc").innerHTML = GamingPC;
    document.getElementById("effektanlegg").innerHTML = Effektanlegg;
    document.getElementById("stereoanlegg").innerHTML = Stereoanlegg;
    document.getElementById("gressklipper").innerHTML = Gressklipper;
    document.getElementById("turbo").innerHTML = Turbo;
    document.getElementById("anlegg").innerHTML = Anlegg;
    document.getElementById("motorsag").innerHTML = Motorsag; 
}


//APP

//NAVBAR - ikke min kode
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