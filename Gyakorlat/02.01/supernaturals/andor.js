let vampir= {no: {db : 3, hp: 2}, ferfi:{db: 8, hp: 4}, alfa:{db: 1, hp: 12}};
let ember= {Sam:{tar : 3, golyo : 8},Dean: {tar: 4, golyo: 10}};

//elso feladat
let Deantolteny= ember.Dean.tar * ember.Dean.golyo;
console.log('Deantolteny:',Deantolteny);

//masodik feladat
let Samtolteny= ember.Sam.tar * ember.Sam.golyo;
console.log('Samtolteny: ',Samtolteny);

//harmadik feladat
let ossztolteny= Deantolteny + Samtolteny;
console.log('Ossztolteny',ossztolteny);

// negyedik feladat
console.log('egy noi vampir kivegzesehez ennyi tolteny kell:',vampir.no.hp);

//otodik feladat
console.log('egy alfahoz ennyi kell:', vampir.alfa.hp);

//hatodik feladat
if(Samtolteny>Deantolteny){
   console.log('Samnek van tobb toltenye');
} else {
   console.log('Deannek van tobb toltenye');
}

//hetedik feladat
let VampirOsszHP= vampir.no.db * vampir.no.hp + vampir.ferfi.db * vampir.ferfi.hp + vampir.alfa.db * vampir.alfa.hp;
console.log('Osszesen ennyi tolteny kell az ossz vampir megolesehez:', VampirOsszHP);

//hetedik feladat: Ha minden golyó betalál, Samnek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?
let a1= ember.Sam.golyo;
console.log('ennyi golyoja maradt Samnek');
if (a1<vampir.no.hp){

   console.log(vampir.no.hp - a1);
}else if(a1<vampir.no.hp*2){
   console.log(vampir.no.hp - a1);
}else if(a1<vampir.no.hp*3){
   console.log(vampir.no.hp - a1);
}else if(a1> vampir.no.hp*3){
   console.log(a1-vampir.no.hp*3);
}

//nyolcadik feladat:
let a2= ember.Dean.golyo;
console.log('ennyi golyoja maradt Deannek');
if (a2<vampir.no.hp){

   console.log(vampir.no.hp - a2);
}else if(a2<vampir.no.hp*2){
   console.log(vampir.no.hp - a2);
}else if(a2<vampir.no.hp*3){
   console.log(vampir.no.hp - a2);
}else if(a2> vampir.no.hp*3){
   console.log(a2-vampir.no.hp*3);
}

//kilencedik feladat

if(ossztolteny< VampirOsszHP){
   console.log('Szukseg van Castielre');
} else {
   console.log('Nincs szukseg Castielre');
}

//tizedik feladat
if(ossztolteny< VampirOsszHP){
   console.log('Szukseg van Castielre ezert az esely a serulesre:', (VampirOsszHP-ossztolteny)*0.03);
} else {
   console.log('Nincs szukseg Castielre,ezert nem fog serulni');
}

//tizenegyedik feladat
Deangolyo= Deantolteny * 0.66;
if(Deangolyo> Samtolteny){
   console.log('Dean lott le tobbet');
} else {
   console.log('Sam lott le tobbet');
}

//tizenkettedik feladat
Deangolyo= Deantolteny * 0.66;
if(Deangolyo> Samtolteny){
   console.log('Dean lott le tobbet');
   if(Deangolyo+ 0.1*Deangolyo > Samtolteny){
       console.log('Dean elerte a tobblet 10%-ot');
   } else {
       console.log('Dean nem erte el a tobblet 10%-ot');
   }
} else {
   console.log('Sam lott le tobbet,szoval Dean nem erte el a tobblet 10%-t');
}


//tizenharmadik feladat
let Crowleyhp= vampir.alfa.hp * 5;
console.log('Crowleyba ennyi golyo kell:', Crowleyhp);
if (ossztolteny-VampirOsszHP > Crowleyhp){
   console.log('Maradt eleg golyo Crowleyra');
} else {
   console.log('Nem maradt eleg golyo Crowleyra');
}

//tizennegyedik feladat
let Tasi= 7*23 + 18; //Ennyi reszt nezett meg Tasi
console.log('Tasi ennyi hete nezi:', (Tasi/5)/7);