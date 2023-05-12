// Tableau de données pour les différentes catégories d'IMC

const IMCData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];


// Sélection du formulaire dans le document HTML
const form = document.querySelector('form');

// Ajout d'un écouteur d'événement pour empêcher le comportement par défaut lors de la soumission du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  calculateIMC();
})

// Sélection de tous les éléments 'input' du document HTML
const inputs = document.querySelectorAll('input');

// Fonction pour calculer l'IMC en utilisant les valeurs des inputs
function calculateIMC() {
  const height = inputs[0].value;
  const weight = inputs[1].value;
  
  // Vérification de la validité des valeurs de hauteur et de poids
  if (!height || !weight || height <= 0 || weight <= 0) {
    Error();
    return;
  } else {
    //calcul des puissance et utilisation toFixed() pour un chiffre après la virgule
    // IMC = poids en kg / taille² en m
    const IMC = (weight / Math.pow(height /100, 2)).toFixed(1);
    
    showResult(IMC);
  }

}

// Sélection des éléments HTML pour afficher les résultats de l'IMC
const valueIMC = document.querySelector('.imc-value');
const infoIMC = document.querySelector('.imc-info');

// Fonction pour afficher une erreur si les valeurs de hauteur et de poids sont incorrectes
function Error() {
  valueIMC.textContent = "Error";
  infoIMC.textContent = "Remplissez correctement les champs"
}

// Fonction pour afficher le résultat de l'IMC en fonction des données du tableau IMCData
function showResult(IMC) {

  // Parcourt de l'objet pour voir où se situe l'imc dans les intervalles de range dans l'objet
  const rank = IMCData.find(data => {
    if(IMC >= data.range[0] && IMC <= data.range[1]) {
      return data;
      // si range est un nombre ?
    } else if(typeof data.range === "number" && IMC >= data.range) {
      return data;
    }
  })
  valueIMC.textContent = IMC;
  valueIMC.style.color = `${rank.color}`;
  infoIMC.textContent = `Résultat : ${rank.name}`
}