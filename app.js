import { confirm, inquirerMenu, listTaskForDelete, pause, readInput, showListTasks }  from './helpers/inquirer.js';
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
                const ids = await showListTasks(tasks.listArr);
                tasks.toggleCompleted(ids);
                console.log(ids);
                break;
            case '6':                          
                const id = await listTaskForDelete(tasks.listArr);                      
                if(id !== '0'){                    
                    const ok = await confirm('¿Esta seguro de borrar esta tarea?')                         
                    if(ok) {
                        tasks.deleteTask(id);
                        console.log('Tarea borrada'.green)
                    } 
                }
                break;
        }

       saveData(tasks.listArr);
        
        await pause();
      

    } while ( opt !== '0');   
    
}


main();