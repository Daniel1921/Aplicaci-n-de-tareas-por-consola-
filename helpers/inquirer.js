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
    console.log('Seleccione una opción'.white)
    console.log('==========================================\n'.green)

    const { opcion } = await inquirer.prompt(options);
    return opcion;
}

const pause = async () => {
    console.log('\n')
    await inquirer.prompt(pausaMode);
   
}

const readInput = async(message) => {

    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if(value.length === 0) {
                return 'No se ha ingresado ningun valor!'
            }
            return true;
        }
    }]

    const {desc } = await inquirer.prompt(question);

    return desc

}

const listTaskForDelete = async(tasks = []) => {

    const choices = tasks.map( (task, i) => {
        const idx = `${i+1}.`.green;
        return {
            
                     value: idx,
                     name: `${idx} ${task.desc}`
                 
        }
    })

    const questions = [
        {
            type: 'list',
            name: 'deleteId',
            message: 'Borrar',
            choices
        }
    ]

     const {deleteId} = await inquirer.prompt(questions);
    
     return deleteId;



}


export {inquirerMenu, pause, readInput, listTaskForDelete};