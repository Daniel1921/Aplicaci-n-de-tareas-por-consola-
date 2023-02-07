import { inquirerMenu, pause }  from './helpers/inquirer.js';
import colors from 'colors';

 console.clear();

const main = async() => {

    let opt = '';

    do {
        
        opt = await inquirerMenu();
        console.log(opt);
        await pause();
      

    } while ( opt !== '0');   
    
}


main();