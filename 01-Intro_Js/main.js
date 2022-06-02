//----------------Ejercicio 1------------------

/*
const mascota1 = "Pedrito";
const mascota2 = "Rufo";
const mascota3 = "Chancla";

console.log("Mis mascotas son " + mascota1 + ", " + mascota2 + " y " + mascota3 + ". Les quiero mucho" );
*/

//------------------Ejercicio 2---------------------

/*let mascota1 = prompt("Ingresa el nombre de tu mascota...");
let mascota2 = prompt("Ingresa el nombre de tu mascota...");

console.log("Quiero mucho a mis mascotas " + mascota1 + " y " + mascota2);*/

//------------------Ejercicio 3 ------------------------

/*const numero = "100";

console.log(numero + " es de tipo " + typeof numero);

const nuevoNumero = parseInt(numero);

console.log(nuevoNumero + " es de tipo " + typeof nuevoNumero);

console.log(numero);
console.log(nuevoNumero);*/



//-----------Ejercicio 01/06/22

alert('Bienvenido la portal de vacunación.....!');

const sexo = prompt('Ingresa tu sexo (M / F)');
let edad = '';
let embarazada = '';


if(sexo == 'M' || sexo == 'm'){
    edad = prompt('Ingresa tu edad...');
    if(Number(edad) >= 18){
        alert('!Felicidades eres candidato para vacunarte contra el Covid-19¡');
    }
    else{
        alert('Lo siento, por el momento no eres candidato para vacunarte contra Covid-19');
    }
}
else{
    edad = prompt('Ingresa tu edad2...');
    if(Number(edad) >= 18){
        embarazada = prompt('Estas embarazada con al menos 9 semanas de gestacion? (S / N)');
        if(embarazada == 'S' || embarazada == 's'){
            alert('!Felicidades eres candidato para vacunarte contra el Covid-19¡');
        }
        else{
            alert('Lo siento, por el momento no eres candidato para vacunarte contra Covid-19');
        }
        
    }
    else{
        alert('Lo siento, por el momento no eres candidato para vacunarte contra Covid-19');
    }
}
