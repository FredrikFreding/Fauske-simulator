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


const navn00f = Math.floor(Math.random() * random_fornavn.length);
const navn00e = Math.floor(Math.random() * random_etternavn.length);

var
