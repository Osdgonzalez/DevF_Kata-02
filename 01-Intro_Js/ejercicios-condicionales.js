// Ejercicios IF-ELSE

// 1. Solicitar al usuario que responda a la pregunta ("¿Eres bellisimo/a?"), en caso de contestar sí, responder "Ciertamente", en caso de contestar no, responder: "No te creo".

/*const bellisimo = prompt("¿Eres bellisimo/a?");

if(bellisimo == 'si'){
    alert('Ciertamente');
}
else{
    alert('No te creo');
}*/

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x núm

/*const numero = prompt('Ingresa un numero...');

if((Number(numero) % 2) == 0){
    alert(`${numero} es divisible entre 2`);
}
else{
    alert(`${numero} no es divisible entre 2`);
}*/

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando".
// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima "reprobado" si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien" si es 9, y por último, "excelente" si es 10.
// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará "no tenemos este topping, lo sentimos." y a continuación le informará el precio del helado sin ningún topping.

// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses

const cursos = prompt('Selecciona un programa: \n1 -> Course: $4999 MXN \n2 -> Carrera: $3999 MXN \n3 -> Master: $2999 MXN');
const beca = prompt('Si cuentas con alguna beca, seleccionala: \n1 -> Beca Facebook: 20% de descuento. \n2 -> Beca Google: 15% de descuento. \n3 -> Beca Jesua: 50% de descuento.');

let resultado = 0;
const cursos2 = Number(cursos);
let beca2 = Number(beca);

if(cursos2 == 1){
    resultado = 4999 * 2;
    
    switch(beca2){
        case 1:
            beca2 = resultado * 0.2;            
            break;
        case 2:
            beca2 = resultado * 0.15;
            break;
        case 3:
            beca2 = resultado * 0.5;
            break;
        default:
            alert('Opcion no valida!');
            break;
    }
    resultado = resultado - beca2;
}
else if(cursos2 == 2){
    resultado = 3999 * 6;
    switch(beca2){
        case 1:
            beca2 = resultado * 0.2;
            break;
        case 2:
            beca2 = resultado * 0.15;
            break;
        case 3:
            beca2 = resultado * 0.5;
            break;
        default:
            alert('Opcion no valida!');
            break;
    }
    resultado = resultado - beca2;
}
else if(cursos2 == 3){
    resultado = 2999 * 12;
    switch(beca2){
        case 1:
            beca2 = resultado * 0.2;
            break;
        case 2:
            beca2 = resultado * 0.15;
            break;
        case 3:
            beca2 = resultado * 0.5;
            break;
        default:
            alert('Opcion no valida!');
            break;
    }
    resultado = resultado - beca2;
}
else{
    alert('Opcion no valida!');
}

alert(`Total a pagar mensualmente: ${resultado}`);














// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es "coche", el precio kilometro ha de ser 0.20, si es "moto" ha de ser 0.10 y si es "autobús" 0.5. 
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.