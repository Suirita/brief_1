function Conversion() {

  let S = document.getElementById("DS").value;
  let C = document.getElementById("DC").value;
  let montant = parseInt(document.getElementById("input").value);
  let tdc = [["USD to MAD", 10.24], ["USD to EUR", 0.95], ["USD to GBP", 0.82], ["MAD to EUR", 0.0923], ["MAD to GBP", 0.080], ["EUR to GBP", 0.86]];
  let resultat = 0;

  for (let i = 0; i < tdc.length; i++) {

    if (tdc[i][0] === `${S} to ${C}`) {
      resultat = montant * tdc[i][1];
      break;
    }
    
    else if (tdc[i][0] === `${C} to ${S}`) {
      resultat = montant / tdc[i][1];
      break;
    }

    else {
      resultat = "coisir le devise cible";
      break;
    }

  }

  document.getElementById("output").value = resultat;


}