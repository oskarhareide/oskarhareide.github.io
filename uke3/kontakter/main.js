let frmKontakter = document.getElementById("frmKontakter");
let tbodyKontakter = document.getElementById("tbodyKontakter");
let inpFornavn = document.getElementById("inpFornavn");
let inpEtternavn = document.getElementById("inpEtternavn");
let inpTelefon = document.getElementById("inpTelefon");
let kontakter = new Map();//definerer en tom map
function oppdaterTabell(){
  tbodyKontakter.innerHTML = ""; // Nuller ut innholdet i kontaktlisten
  for(let kontakt of kontakter){
    tbodyKontakter.innerHTML += kontakt.tabellrad; //Får en tabellrad fra get-metoden
  }
  let kontakterSomArray = Array.from(kontakter.values());//Gjør om map til array
  localStorage.minekontakter = JSON.stringify(kontakterSomArray);//Lagre som JSON-data
}
function slettKontakt(telefon){
  kontakter.delete(telefon);//sletter kontakt med en nøkkel telefon fra Map
  oppdaterTabell();//Oppdaterer tabellen
}
frmKontakter.onsubmit = function(evt){
  evt.preventDefault();//forhindrer siden i å laste inn på inn på nytt
  let fornavn = inpFornavn.value; //Verdier fra input-feltene på HTML-siden
  let etternavn = inpEtternavn.value;
  let telefon = inpTelefon.value;
  let nyKontakt = new Kontakt(fornavn,etternavn, telefon)//oppretter objekt
  kontakter.set(telefon, nyKontakt); //telefon er key nyKontakt er value
  oppdaterTabell(); //Oppdater tabellen
  inpFornavn.value = inpEtternavn.value = inpTelefon.value =""; //Nuller ut input-feltene
  inpFonravn.focus(); //setter fokus i input-feltet inpFornavn
};
//sjekker om det er lagret noe i localStorage
if(localStorage.mineKontakter){
  var mineLagredeKontakter = JSON.parse(localStorage.mineKontakter);
  for(let k of mineLagredeKontakter){
    let nyKontakt = new Kontakt(k.fornavn, k.etternavn, k.telefon); //Oppretter objekt
    kontakter.set(nyKontakt.telefon, nyKontakt); //Legger det i Map
  }
  oppdaterTabell();
}
