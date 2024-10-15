import TaskManager from "./TaskManager.js";
import ProjectManager from "./ProjectManager.js";
export default class EventListeners{
    constructor(){
        this.#initialize();
        this.#defaultProject();
    }
    #initialize(){
        this.projectForm = document.querySelector('.project-form');
        this.taskForm = document.querySelector('.task-form');
        this.projectDialog = document.querySelector('.project-dialog');
        this.taskDialog = document.querySelector('.task-dialog');
        this.closeProjectModal=document.querySelector('.close-project-modal');
        this.openProjectModal=document.querySelector('.add-project-button');
        this.closeTaskModal=document.querySelector('.close-task-modal');
        this.openTaskModal=document.querySelector('.add-task-button');
        this.projectManager = new ProjectManager();
        this.taskManager = new TaskManager();
        this.closeProjectModal.addEventListener("click",this.#projectCloseButton.bind(this));
        this.openProjectModal.addEventListener("click",this.#projectOpenButton.bind(this));
        this.closeTaskModal.addEventListener("click",this.#taskCloseButton.bind(this));
        this.openTaskModal.addEventListener("click",this.#taskOpenButton.bind(this));
        this.projectForm.addEventListener("submit",this.#newProject.bind(this));
        this.taskForm.addEventListener("submit",this.#newTask.bind(this));
    }
    #defaultProject(){

    }
    #projectCloseButton(){
        this.projectDialog.close();
    }
    #projectOpenButton(){
        this.projectDialog.showModal();
    }
    #taskCloseButton(){
        this.taskDialog.close();
    }
    #taskOpenButton(){
        this.taskDialog.showModal();
    }
    #newProject(event){
        event.preventDefault();
        const myFormData = new FormData(event.target);
        const formDataObject = {};
        myFormData.forEach((value,key)=>(formDataObject[key]=value));
        this.projectManager.addProject(formDataObject);
        this.projectForm.reset();
        this.projectDialog.close();
    }
    #newTask(event){
        event.preventDefault();
        const myFormData = new FormData(event.target);
        const formDataObject = {};
        myFormData.forEach((value,key)=>(formDataObject[key]=value));
        this.taskManager.addTask(formDataObject);
        this.taskForm.reset();
        this.taskDialog.close();
    }
    
}