const IMCData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

// Récupérer le form
const form = document.querySelector('form');

// empêcher le comportement par défaut lors de la soumission d'un formulaire HTML
form.addEventListener("submit", (e) => {
  e.preventDefault();

  calculateIMC();
})

// Récupérer les inputs
const inputs = document.querySelectorAll('input');

// function qui va récupérer les valeurs des inputs
function calculateIMC() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  //Vérifier si taille et hauteur soient non vides et positifs
  if (!height || !weight || height <= 0 || weight <= 0) {
    Error();
    return;
  } else {
    //calcul des puissance et utilisation toFixed() pour un chiffre après la virgule
    const IMC = (weight / Math.pow(height /100, 2)).toFixed(1);
    showResult(IMC);
  }

}

const valueIMC = document.querySelector('.imc-value');
const infoIMC = document.querySelector('.imc-info');

//fonction pour afficher les erreurs
function Error() {
  valueIMC.textContent = "Error";
  infoIMC.textContent = "Remplissez correctement les champs"
}

