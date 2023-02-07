// import colors from 'colors';


// const showMenu = () => {

//     return new Promise((resolve => {

//     console.clear();

//     console.log('=========================================='.green)
//     console.log('Seleccione una opción'.green)
//     console.log('==========================================\n'.green)

//     console.log(`${'1.'.green} Crear una tarea`)
//     console.log(`${'2.'.green} Listar las tareas`)
//     console.log(`${'3.'.green} Mostrar las tareas completadas`)
//     console.log(`${'4.'.green} Mostrar las tareas pendientes`)
//     console.log(`${'5.'.green} Completar tareas`)
//     console.log(`${'6.'.green} Borrar tarea`)
//     console.log(`${'0.'.green} salir\n`)
    
//     const readLine = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout
//         })

//     readLine.question(`Seleccione una opción:`, (opt) => {     
//         readLine.close();
//         resolve(opt);
//     })


//     }));


    

// }

// const pause =  () => {

//     return new Promise((resolve => {
//         const readLine = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//             })
    
//         readLine.question(`Presione el ${'Enter'.green} para continuar`, (opt) => {
         
//             readLine.close();
//             resolve(opt);
    
    
//         })
//     }))



// }




// module.exports = {
//     showMenu,
//     pause
// }