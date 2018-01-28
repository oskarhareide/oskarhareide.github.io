const skjema = document.getElementById("skjema");
const inpFornavn = document.getElementById("inpFornavn");
const inpEtternavn = document.getElementById("inpEtternavn");
const text = document.getElementById("text");
const submit = document.getElementById("submit");

let kontakter = [];

class Kontakter{
  constructor(fornavn, etternavn, telefon){
    this.fornavn = fornavn;
    this.etternavn = etternavn;
    this.telefon = telefon;
  }
  get fulltnavn(){
    return `${this.fornavn} ${this.etternavn}`;
  }
  get tabellrad(){
    return  `<tr>
              <td>${this.fulltnavn}</td>
              <td>${this.telefon}</td>
              <td><button class="button" onclick="slettKontakt('${this.telefon}')">X</button></td>
            </tr>`
  }
}
