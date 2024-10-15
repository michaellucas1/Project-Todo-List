import Task from './Task.js';
import array from './TaskArray.js';
import GenerateID from './GenerateID.js';
export default class TaskManager{
    constructor(){
        this.idGenerator = new GenerateID();
    }
    addTask(newTask){
        const task = new Task(newTask);
        this.setID(newTask);
        console.log(newTask);
    }
    setID(newTask){
        if(newTask.hasOwnProperty('ID')===false){
            newTask['ID']=this.idGenerator.generateID();
        }
    }

}