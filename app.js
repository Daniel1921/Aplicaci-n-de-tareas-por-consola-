import { inquirerMenu, pause, readInput }  from './helpers/inquirer.js';
import colors from 'colors';

import Tasks from './models/tasks.js';

console.clear();

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    do {
        
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc);
                console.log(desc);
                break;
        
            case '2':
                    console.log(tasks.listArr);
                break;
        }

       
        
        await pause();
      

    } while ( opt !== '0');   
    
}


main();