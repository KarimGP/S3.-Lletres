const nomb = ["K", "A", "R", "I", "M"];
for (i = 0; i < nomb.length; i++) {
  console.log(nomb[i]);
}

const apellido = ["", "G", "H", "A", "Z", "A", "L"];
for (i = 0; i < apellido.length; i++) {
  console.log(apellido[i]);
}

const nombreCompleto = nomb.concat(apellido);
console.log(nombreCompleto);