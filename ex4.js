const nombre = ["K", "A", "R", "I", "M"];
for (i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
}

const apellido = ["", "G", "H", "A", "Z", "A", "L"];
for (i = 0; i < apellido.length; i++) {
  console.log(apellido[i]);
}

const nombreCompleto = nombre.concat(apellido);
console.log(nombreCompleto);
