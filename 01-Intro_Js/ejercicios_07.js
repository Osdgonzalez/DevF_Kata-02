// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene// 
//escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a
// hacer un algoritmo que haga esto por el? (editado) 

/*for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}*/




//Escribir todos los números que terminan en 0 y estén entre 2 y 121 (editado) 

/*for(let i = 0; i <= 121; i++){
    if(i % 10 === 0){
        console.log(i);
    }
}*/

//EXTRA// Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,
// ¿podrías ayudarle a crear un algoritmo que haga eso por el?


/*const mate = 8, fisica = 7, literatura = 9, programacion = 10, etica = 5;
let promedio = 0;

console.log((mate + fisica  + literatura + programacion + etica) / 5);*/



//Ejercicios de Funciones

// Hacer una función que convierta pesos a dólares - RETURN


/*function divisas(pesos){
    return (pesos / 19.59 );
}
console.log(divisas(5000) + ' dolares');*/



// Hacer una función que cuente el número de caracteres de una palabra - RETURN

/*function caracteres(palabra){
    return palabra.split('').length
}
console.log(caracteres('hola'));*/




// Hacer una función que halle el máximo entre dos números - RETURN

/*function maximo(a , b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log('El numero mayor es: ' + maximo(5 , 10));*/







// Hacer una función que halle el máximo entre tres números - RETURN

/*function maximo(a , b , c){
    if(a > b){
        if(a > c){
            return a
        }
        else{
            return c;
        }
    }
    else{
        if(b > c){
            return b;
        }
        else{
            return c;
        }
    }
}

console.log('El mayor es: ' + maximo(1 , 2 , 1));*/


// Hacer una función que calcule el IVA de una cantidad (16%) - RETURN (editado) 

/*function iva(cantidad){
    return( cantidad * 0.16 );
}
console.log(iva(500));*/


// Hacer una función para ingresar cualquier letra del alfabeto  - RETURN
// y verifique si es vocal o consonante


/*const vocales = ['A' , 'E' , 'I' , 'O' , 'U' , 'a' , 'e' , 'i' , 'o' , 'u'];
function letter(letra){
    return (vocales.includes(letra)) ? 'Vocal' : 'Consonante'
}
console.log(letter('a'));*/


// Hacer una función que verifique si un número es positivo o negativo - RETURN

/*function evaluate(num){
    if(num > 0){
        return 'Positivo';
    }
    else if(num < 0){
        return 'Negativo';
    }
    else{
        return 'Cero';
    }
}
console.log(evaluate(-5));*/

//Funcion y for
// Hacer una función que imprima todos los números pares entre 1 y 100

/*function pares(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
pares();*/

// Hacer una función que halle la suma de todos los números naturales entre 1 y n - RETURN

/*function sumaNaturales(max){
    let res = 0;
    for(let i = 0; i <= max; i++){
        res = res + i;
    }
    return res;
}
console.log('La suma total es: ' + sumaNaturales(10));*/




// Hacer una función que imprima una pirámide de asteriscos como la siguiente:


/*function piramide(altura){

    let caracter2 = '*';
    //let caracter3 = '.';
    //let j = altura;
    for(let i = 1; i <= altura; i++){
        console.log(caracter2.repeat(i))
        //console.log(caracter3.repeat(j) + caracter2.repeat(i) + caracter3.repeat(j));
        //j--;
    }  
}

piramide(15);*/