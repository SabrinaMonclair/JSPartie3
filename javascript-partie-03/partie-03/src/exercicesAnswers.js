//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  console.log (sentence);
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  console.log (sentence);
  return sentence.replace('e',' ');
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  console.log (firstSentence, secondSentence);
  return firstSentence.concat(secondSentence);
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  console.log (sentence);
  return sentence.charAt(4);
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  console.log (sentence);
  return sentence.slice(0,9);
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  console.log (sentence);
  return sentence.toLocaleUpperCase();
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  console.log (sentence);
  return sentence.toLocaleLowerCase();
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  console.log (sentence);
  return sentence.trim(' ');
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  console.log (sentence);
  return typeof(sentence) === "string";
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  console.log (fileName);
  return fileName.slice(-3);
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  console.log (sentence);
  return (sentence.split(' ').length - 1);
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  console.log (sentence);
  return (sentence.split('').reverse().join(''));
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  console.log (sentence);
  return sentence.includes('La Manu');
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  console.log (number);
  return (Math.abs(number));
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  console.log (numbersArray);
  return numbersArray.map(Math.abs);
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  console.log (radius);
  return Math.round(Math.PI * Math.pow(radius,2));
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  console.log (a, b);
  return Math.floor(Math.hypot(a, b));
}
