let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]

// 1.- Ingresar nombre
// 2.- Verán un menú de opciones
    // 1. Ver todas su calificaciones.
    // 2. Conocer su promedio.
    // 3. Conocer su calificación más alta.
    // 4. Conocer su calificación más baja.

let usuario = prompt('Ingresa tu nombre:');
let menuId;
if(usuario !== ''){
    menuId = parseInt(prompt('1 --> Ver todas mis calificaciones' + 
    '\n2 --> Promedio \n3 --> Calificación más alta \n4 --> Calificación más baja'));

    if(menuId === 1){
        verCalificaciones(usuario);
    }
    else if(menuId === 2){
        promedio(usuario);
    }
    else if(menuId === 3){
        masAlta(usuario);
    }
    else if(menuId === 4){
        masBaja(usuario);
    }

}


function verCalificaciones(usuarioNombre){
    for(let i = 0; i < info.length; i++){
        if(info[i].nombre === usuarioNombre){
            for(let j = 0; j < info[i].materias.length; j++){
                console.log(info[i].materias[j].nombreMateria + ': ' + info[i].materias[j].calificacion);
            }
        }
    }
}

function promedio(usuarioNombre){
    let promedio = 0;
    for(let i = 0; i < info.length; i++){
        if(info[i].nombre === usuarioNombre){
            for(let j = 0; j < info[i].materias.length; j++){
                promedio = promedio + info[i].materias[j].calificacion;
            }
            console.log(promedio / info[i].materias.length);
        }
    }
}

function masAlta(usuarioNombre){
    let calificaciones = [];
    for(let i = 0; i < info.length; i++){
        if(info[i].nombre === usuarioNombre){
            for(let j = 0; j < info[i].materias.length; j++){
                calificaciones[j] = info[i].materias[j].calificacion;
            }
            console.log(Math.max(...calificaciones))
        }
    }
}

function masBaja(usuarioNombre){
    let calificaciones = [];
    for(let i = 0; i < info.length; i++){
        if(info[i].nombre === usuarioNombre){
            for(let j = 0; j < info[i].materias.length; j++){
                calificaciones[j] = info[i].materias[j].calificacion;
            }
            console.log(Math.min(...calificaciones))
        }
    }
}