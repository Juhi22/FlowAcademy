let vampire_osszeg = 12;
let vampire_no = 3;
let vampire_alfa = 1;
let vampire_him = vampire_osszeg - (vampire_alfa + vampire_no);

let leterit_him = 4;
let leterit_no = leterit_him / 2;
let leterit_osszno = leterit_no * vampire_no
let leteri_alfa = leterit_him * 3;
let leterit_osszes = leterit_him * vampire_him + leteri_alfa * vampire_alfa + leterit_no * vampire_no;

let sam_tar = 3;
let sam_tarmeret = 8;
let sam_tolteny = sam_tar * 8;
let dean_tar = 4;
let dean_tarmeret = 10;
let dean_tolteny = dean_tar * 10;
let ossztolteny = sam_tolteny + dean_tolteny

//ha kifogynak Castiel jön

console.log(dean_tolteny);
console.log(sam_tolteny);
console.log(sam_tolteny + dean_tolteny);
console.log(leterit_no);
console.log(leteri_alfa);

if (sam_tolteny > dean_tolteny) {
    console.log('Samn-nek van több lőszere.');
} else {
    console.log('Dean-nek van több lőszere.');
}

console.log(leterit_osszes);

if ( leterit_osszes <= sam_tolteny + dean_tolteny){
 console.log('Castiel nem jön.');
} else {
 console.log('Castiel jön.');
}

if ( leterit_osszes <= sam_tolteny + dean_tolteny){
    console.log('Castiel nem jön, ezért nem sérül meg.');
   } else {
    console.log('Castiel jön.', (leterit_osszes - ossztolteny) * 0.03);
   }

let dean_whisky_loves = dean_tolteny * 0.6

if(dean_whisky_loves > sam_tolteny){
    console.log('Dean lőtt le többet.')
} else if (dean_whisky_loves == sam_tolteny){
    console.log('Ugyan annyit öltek.')
} else {
    console.log('Sam ölt többet.')
}

console.log(dean_whisky_loves)
console.log(sam_tolteny)

let ossztolteny_whisky = sam_tolteny + dean_whisky_loves
let leterit_Crowley = leteri_alfa * 5
if ( ossztolteny_whisky >= leterit_Crowley){
    console.log('Marad elég lőszer.')
} else {
    console.log('Nem marad elég lőszer.')
}

let TasiIttTart = 23 * 7 + 18
let TasiEgyHeten = 5 * 5 + 2 * 10
console.log(TasiIttTart)
console.log('Tasi megnéz heti ' + TasiEgyHeten + ' részt.')
console.log(TasiIttTart / TasiEgyHeten )