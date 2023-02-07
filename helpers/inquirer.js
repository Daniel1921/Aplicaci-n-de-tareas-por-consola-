import inquirer from 'inquirer';

import colors from 'colors';

const options = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿ Que actividad desea escoger ? ',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar las tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Mostrar las tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Mostrar las tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} salir`
            }

        ]
    }
];

const pausaMode = [
    {
        type: 'input',
        name: 'pause',
        message: `Presione el ${'Enter'.green} para continuar`
    }
]

const inquirerMenu = async () => {

    console.clear()
    console.log('=========================================='.green)
    console.log('Seleccione una opción'.green)
    console.log('==========================================\n'.green)

    const { opcion } = await inquirer.prompt(options);
    return opcion;
}

const pause = async () => {
    console.log('\n')
    await inquirer.prompt(pausaMode);
   
}


export {inquirerMenu, pause};