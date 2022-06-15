let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Luis", saldo: 290, password: 'l33t' },
    { nombre: "Carlos", saldo: 67, password: '123' }
  ];

let cuenta, idCuenta;
let password, intentos = 0, acciones;
let repetir;


do{
    main();

    repetir = prompt('Si quieres volver a ingresar oprime 1');

}while(repetir === '1')

alert('Sesión cerrada.');



function main(){

    // cuenta = prompt('Selecciona una de las siguientes cuentas: \n0 --> Hiromi \n1 --> Luis ' + 
    //                 '\n2 --> Carlos');
    cuenta = prompt('Ingresa usuario:');
    idCuenta = parseInt(cuenta);

    if(cuenta === 'Hiromi'){
        Login(0);
    }
    else if(cuenta === 'Luis'){
        Login(1);
    }
    else if(cuenta === 'Carlos'){
        Login(2);
    }
    else{
        return;
    }
}

function Login(idCuentaSeleccionada){
    intentos = 0;
    do{

        password = prompt(`Ingresa contraseña:`);
        intentos++;
    }
    while(intentos < 3 && validarPass(password , idCuentaSeleccionada) === false)
    
    if(intentos === 3){
        alert('Cajero bloqueado. Intentalo mañana!');
    }
    else{
        acciones = prompt('Selecciona una de las siguientes cuentas: \n0 --> Consultar Saldo' + 
        '\n1 --> Ingresar Monto \n2 --> Retirar Monto');
      
        accion(parseInt(acciones) , idCuentaSeleccionada);
    }
}

function validarPass(pass , id){

    return (pass === cuentas[id].password) ? true : false
}

function accion(idOperacion , idCuentaSeleccionada){

    let resultado;

    switch(idOperacion){
        case 0:
            alert(`Tu saldo es de: ${cuentas[idCuentaSeleccionada].saldo}`);
            break;
        case 1:

            resultado = validarLimite('Ingresar' , idCuentaSeleccionada);
            if(resultado > 990){
                
                console.log(`Operación denegada el saldo sobrepasa el limite permitido! \n` + 
                            `Saldo actual: ${cuentas[idCuentaSeleccionada].saldo}`);
            }
            else{
                cuentas[idCuentaSeleccionada].saldo = resultado;
                alert(`Operación exitosa\n  Saldo total :`+
                ` ${cuentas[idCuentaSeleccionada].saldo}`);
            }
            
            break;
        case 2:

            resultado = validarLimite('Retirar' , idCuentaSeleccionada);
            if(resultado < 10){
                alert(`Operación denegada el saldo esta por debajo del limite permitido! \nSaldo actual: ${cuentas[idCuentaSeleccionada].saldo}`);
            }
            else{
                cuentas[idCuentaSeleccionada].saldo = resultado;
                alert(`Operación exitosa\n Saldo total :` + 
                ` ${cuentas[idCuentaSeleccionada].saldo}`);
            }
            
            break;
        default:
            break;
    }
}

function validarLimite(operacionMenu , idCuentaSeleccionada){
    let monto;
    let res;
    
    monto = prompt('Ingresa monto:');

    if(operacionMenu === 'Ingresar'){
        res = cuentas[idCuentaSeleccionada].saldo + parseInt(monto);
    }
    else{
        res = cuentas[idCuentaSeleccionada].saldo - parseInt(monto);
    }

    return res;
}


