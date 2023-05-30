const nombre = "Giuseppe";
const edad = "30";

console.log(`Hola ${nombre}, así que tenés ${edad} años.`);
document.write(`Hola ${nombre}, así que tenés ${edad} años.`);

//Si sos mayor de edad (21+) la cuota es de $500. Si sos menor de 21, la cuota es de $350.

const edad1 = 18;
const edad2 = 32;

const mensaje1 = `La cuota para personas de ${edad1} es de ${
  edad1 >= 21 ? 500 : 350
}`;

console.log(mensaje1);

const mensaje2 = `La cuota para personas de ${edad2} es de ${
  edad2 >= 21 ? 500 : 350
}`;

console.log(mensaje2);
