// const a = "2Fj(jjbFsuj";
// const b = "eoZiugBf&g9";
// function contrasenaValida(string) {
//     if(string == a || string == b){
//         return true;
//     }else{
//         return false;
//     }
// }

// function calcularImpuestos (edad, ingresos){
//     if(edad >= 18 && ingresos >= 1000){
//         return ingresos * 0.4
//     }else{
//         return 0;
//     }
// }

// function bmi (peso, altura){
//     const calculo = peso/(altura**2)
//     if (calculo < 18.5) {
//       return "bajo de peso";
//     } else if (calculo >= 18.5 && calculo <= 24.9) {
//       return "normal";
//     } else if (calculo >= 25 && calculo <= 29.9) {
//       return "Sobrepeso";
//     } else if (calculo >= 30) {
//       return "Obeso";
//     }
// }

//  function imprimirArreglo(...element) {
//    const array = [... element];
//    array.forEach((e) => {
//      console.log(`${e}`);
//    });
//  }

// function likes(numero) {
//   let dat = numero.toString();
//   if(dat.length < 4 ){
//     return console.log(dat)
//   }
//   if (dat.length == 4) {
//     console.log(dat.substring(0, 1) + "k");
//   } else if (dat.length <= 5) {
//     console.log(dat.substring(0, 2) + "k");
//   } else if (dat.length <= 6) {
//     console.log(dat.substring(0, 3) + "k");
//   } else if (dat.length == 7) {
//     console.log(dat.substring(0, 1) + "M");
//   } else if (dat.length >= 8) {
//     console.log(dat.substring(0, 2) + "M");
//   }
// }

// function fizzBuzz (numero){
//     let m3 = numero % 3 ===0;
//     let m5 = numero % 5 ===0;
//     if (m3 && m5) {
//       console.log("fizzBuzz");
//     }
//     else if(m3){
//         console.log("fizz")
//     }
//     else if (m5) {
//       console.log("buzz");
//     }else {
//         console.log(numero)
//     }
// }

// function contarRango (n1, n2){
//     let contador = 0;
//     for (let i = 0 ; n1 < n2;i++){
//         n1++
//         contador = i

//     }
//     console.log(contador);
// }

// function sumarRango(ni, nf) {
//   acumulador = ni;
//   if (acumulador != 0) {
//     for (let i = 0; ni < nf; i++) {
//       ni++;
//       acumulador += ni;
//     }
//     console.log(acumulador);
//   }else{
//     return 0
//   }
// }
// function numeroDeCaracteres(string, caracter) {
//   let nVeces = 0;
//   string1 = string.split("");
//   string1.forEach((letra) => {
//     if (letra === caracter) {
//       nVeces++;
//     }
//   });
//   console.log(nVeces);
// }

// function sumarArreglo(array) {
//   let acumulador = 0;
//   array.forEach((item) => {
//     acumulador += item;
//   });
//   console.log(acumulador);
// }

// function multiplicarArreglo(array){
//     let acumulador =  1;
//     array.forEach((item) => {
//         acumulador *= item;
//     });
//     console.log(acumulador);
// }

// function removerCeros(array) {
//   // array.flat(3);
//   let rsta = array.filter(n => n != 0)
//   console.log(rsta)
// }

// function sumarArreglo(array, pI, pF) {
//   let acumulador = 0;
//   let rta = pI >= pF ? 0 : array.slice(pI, pF + 1);
//   for (let item = 0; item < rta.length; item++) {
//     acumulador += rta[item];
//   }
//   console.log(acumulador);
// }

// function transcribir(string) {
//   const arrString = string.split("");
//   for (let i = 0; i < arrString.length; i++) {
//     if (arrString[i] === "G") {
//       arrString[i] = "C";
//     } else if (arrString[i] === "C") {
//       arrString[i] = "G";
//     } else if (arrString[i] === "T") {
//       arrString[i] = "A";
//     } else if (arrString[i] === "A") {
//       arrString[i] = "U";
//     }
//   }
//   let rta = String(arrString);
//   console.log(rta);
// }

// function capitalizar(string) {
//   if (string.length != 0) {
//     let arrString = [];

//     for (caracter of string.split(" ")) {
//       caracter != ""
//         ? arrString.push(caracter[0].toUpperCase() + caracter.substring(1))
//         : "e";
//     }
//     let rta = arrString.join(" ");
//     console.log(rta);
//   }
// }

// function capitalizar(string) {
//   if (string.length != 0) {
//     let rta = string[0].toUpperCase() + string.substring(1);
//     console.log(rta);
//   }
// }

// function min(array){
//     let nMin = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < nMin) {
//             nMin = array[i];
//         }
//     }
//     console.log(nMin)
// }

// function password(string) {
//   let arr = string.toLowerCase().split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "a") {
//       arr[i] = "4";
//     } else if (arr[i] === "e") {
//       arr[i] = "3";
//     } else if (arr[i] === "i") {
//       arr[i] = "1";
//     } else if (arr[i] === "o") {
//       arr[i] = "0";
//     }
//   }
//   let newString = arr.join("").replace(/ /g, "");
//   console.log(newString);
// }

// function pares(array) {
//   let rta = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       rta.push(array[i]);
//     }
//   }
//   console.log(rta);
//

// function posiciones(array){
//     const newArr = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             newArr.push(i);
//         }
//     }
//     console.log(newArr);
// }

// function duplicar (array){
//     let rta = [];
//     for (let i = 0; i < array.length; i++) {
//         rta.push(array[i]*2);
//     }
//     console.log(rta);
// }

// function empiezanConA(array) {
//   let rta = [];
//   const r = array.filter((item) => {
//     if (item[0] == "a" || item[0] == "A") {
//       rta.push(item);
//     }
//   });
//   console.log(rta);
// }

function terminanConS(array) {
  let rta = [];
  const r = array.filter((item) => {
    if (item.endsWith("s") || item.endsWith("S")) {
      rta.push(item);
    }
  });
  console.log(rta);
}
terminanConS(["pruebas", "arroz", "árbol", "tokens"]); // ["pruebas", "tokens"]
terminanConS(["beta", "delta", "gama"]); // []
terminanConS([]);
