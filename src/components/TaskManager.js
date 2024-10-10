import Task from './Task.js';
import array from './TaskArray.js';
import GenerateID from './GenerateID.js';
export default class TaskManager{
    constructor(){
        this.idGenerator = new GenerateID();
    }
    addTask(newTask){
        const task = new Task(newTask);
        task.setID(this.idGenerator.generateID());
        array.push(task.getElement());
        array.forEach((element)=>{console.log(element)});
    }
    #createTaskObject(newTask,taskElement){
        const taskObject = {
            taskID:''
        }
    }
}