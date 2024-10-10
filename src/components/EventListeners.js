import TaskManager from "./TaskManager.js";
import ProjectManager from "./ProjectManager.js";
export default class EventListeners{
    constructor(){
        this.#newTask();
        this.#newProject();
    }
    #dialogCloseButton(dialog,button){
        button.addEventListener("click",close);
        function close(){
            dialog.close();
        }
    }
    #dialogOpenButton(dialog,button){
        button.addEventListener("click",open);
        function open(){
            dialog.showModal();
        }
    }
    #newProject(){
        const form = document.querySelector('.project-form');
        const dialog = document.querySelector('.project-dialog');
        const closeModal=document.querySelector('.close-project-modal');
        const openModal=document.querySelector('.add-project-button');
        const projectManager = new ProjectManager();
        this.#dialogCloseButton(dialog,closeModal);
        this.#dialogOpenButton(dialog,openModal);
        form.addEventListener("submit",submit);
        function submit(event){
            event.preventDefault();
            const myFormData = new FormData(event.target);
            const formDataObject = {};
            myFormData.forEach((value,key)=>(formDataObject[key]=value));
            projectManager.addProject(formDataObject);
            form.reset();
            dialog.close();
        }
    }
    #newTask(){
        const form= document.querySelector('.task-form'); 
        const dialog = document.querySelector('.task-dialog');
        const closeModal=document.querySelector('.close-task-modal');
        const openModal=document.querySelector('.add-task-button');
        const taskManager = new TaskManager();
        this.#dialogCloseButton(dialog,closeModal);
        this.#dialogOpenButton(dialog,openModal);
        form.addEventListener("submit",submit);        
        function submit(event){
            event.preventDefault();
            const myFormData = new FormData(event.target);
            const formDataObject = {};
            myFormData.forEach((value,key)=>(formDataObject[key]=value));
            taskManager.addTask(formDataObject);
            console.log(formDataObject);
            form.reset();
            dialog.close();
        } 
    }
    
}