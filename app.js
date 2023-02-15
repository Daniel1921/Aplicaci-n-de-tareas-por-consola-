import { inquirerMenu, listTaskForDelete, pause, readInput }  from './helpers/inquirer.js';
import colors from 'colors';

import Tasks from './models/tasks.js';
import { readData, saveData } from './helpers/saveFile.js';

console.clear();

const main = async() => {

    let opt = '';
    const tasks = new Tasks();
           
    const tasksDb = readData(); 

    if(tasksDb) {
        tasks.loadTasksfromArray(tasksDb);
    }

    do {   
        
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc); 
                break;        
            case '2':
                tasks.listForUser();
                break;
            case '3':
                tasks.listTaskCompleted();
                break;
            case '4':
                tasks.listTaskCompleted(false);
                break; 
            case '5':
                console.log('En construcción');
                break;
            case '6': 
                const id = await listTaskForDelete(tasksDb);               
                console.log({id});
                // tasks.deleteTask(id);
                break;
        }

       saveData(tasks.listArr);
        
        await pause();
      

    } while ( opt !== '0');   
    
}


main();