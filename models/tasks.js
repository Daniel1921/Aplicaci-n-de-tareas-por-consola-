import Task from './task.js'


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

    createTask(desc = '') {

         const task = new Task(desc);
         this._list[task.id] = task;

    }


}

export default Tasks;