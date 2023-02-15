import Task from './task.js'
import colors from 'colors';

class Tasks {
    
    _list = {} ;

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach( key => {
            const tsk = this._list[key]
            list.push(tsk);
        })
        return list;
    }

    constructor() {

    }

    deleteTask( id = '') {
        if(this._list[id]) { 
            delete this._list[id];
        }
    }

    createTask(desc = '') {

         const task = new Task(desc);
         this._list[task.id] = task;

    }   

    loadTasksfromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        })
       // this._list[tasks.id] = tasks;

    }

    listForUser() {
        for (let index = 0; index < this.listArr.length; index++) {
           
             console.log(`${(index + 1 + '.').green} ${this.listArr[index].desc.white} \n Su estado es: ${this.listArr[index].completeIn ? ' COMPLETA'.green : ' INCOMPLETA'.red} `)
            
        }
    }

    listTaskCompleted( isCompleted = true ) {

        if(isCompleted) {

            for (let index = 0; index < this.listArr.length; index++) {
           
                if(this.listArr[index].completeIn) {

                    console.log(`${(index + 1 + '.').green} ${this.listArr[index].desc.white} \n Se completo en la fecha: ${this.listArr[index].completeIn ? this.listArr[index].completeIn.green : ' INCOMPLETA'.red} `)

                }
               
           }

        } else { 

                for (let index = 0; index < this.listArr.length; index++) {
           
                    if(!this.listArr[index].completeIn) {
    
                        console.log(`${(index + 1 + '.').green} ${this.listArr[index].desc.white} \n Su estado es: ${this.listArr[index].completeIn ? ' COMPLETA'.green : ' INCOMPLETA'.red} `)
    
                    }
                   
               }            
        }
        
    }


}

export default Tasks;