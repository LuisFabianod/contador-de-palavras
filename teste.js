const texto = "Exemplo de texto, com diferentes delimitadores! Será dividido.";
const substrings = texto.split(/[ ,.:!?()@#$*0123456789]/);
console.log(substrings);