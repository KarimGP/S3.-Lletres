function VocalConsonant(argument) {

    // define un array de vocales
    let vocals = ['a', 'e', 'i', 'o', 'u'];
    // declara una variable de tipo boolean
    let argumentVocal = false;
    // convierte el argumento de entrada a minúsculas
    let stringToCompare = argument.toLowerCase();
  
    // iterar a través del array
    for (let index in vocals) {
      // Compara si el argumento dado coincide con cualquiera de los caracteres presentes en el array de vocales
      if (stringToCompare === vocals[index]) {
  
        console.log("He trobat la vocal: " + argument);
  
        // si el argumento dado es vocal, establezca la variable boolean en verdadera
        argumentVocal = true;
        break;
      }
    }
  
    if (!argumentVocal)
      console.log("He trobat la consonant: " + argument);
  
    /* if else (!=)
      console.log(argument+" es un número"); */
  
  }
  
  // Llamar a la función pasando diferentes caracteres
  VocalConsonant('K');
  
  VocalConsonant('A');
  
  VocalConsonant('R');
  
  VocalConsonant('I');
  
  VocalConsonant('M');
  
  VocalConsonant('6');