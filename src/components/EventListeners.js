import Tasks from "./Tasks.js";
import Projects from "./Project.js";
export default class EventListeners{
    constructor(){
        this.#newTask();
        this.#newProject();
    }
    #closeButton(dialog,button){
        button.addEventListener("click",close);
        function close(){
            dialog.close();
        }
    }
    #openButton(dialog,button){
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
        this.#closeButton(dialog,closeModal);
        this.#openButton(dialog,openModal);
        form.addEventListener("submit",submit);
        function submit(event){
            event.preventDefault();
            const myFormData = new FormData(event.target);
            const formDataObject = {};
            myFormData.forEach((value,key)=>(formDataObject[key]=value));
            const project = new Projects(formDataObject);
            project.connect(project.getElement());
            console.log(formDataObject);
            form.reset();
            dialog.close();
        }
    }
    #newTask(){
        const form= document.querySelector('.task-form'); 
        const dialog = document.querySelector('.task-dialog');
        const closeModal=document.querySelector('.close-task-modal');
        const openModal=document.querySelector('.add-task-button');
        this.#closeButton(dialog,closeModal);
        this.#openButton(dialog,openModal);
        form.addEventListener("submit",submit);        
        function submit(event){
            event.preventDefault();
            const myFormData = new FormData(event.target);
            const formDataObject = {};
            myFormData.forEach((value,key)=>(formDataObject[key]=value));
            const task = new Tasks(formDataObject);
            task.connect(task.getElement());
            console.log(formDataObject);
            form.reset();
            dialog.close();
        } 
    }
    
}