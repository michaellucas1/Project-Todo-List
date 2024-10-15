import Project from './Project.js';
import array from './ProjectArray.js'
import GenerateID from './GenerateID.js';
export default class ProjectManager{
    constructor(){
        this.idGenerator = new GenerateID();
        this.nav = document.querySelector('nav');
        this.projectMain = document.querySelector('.project-item-container');
        this.taskFormOption = document.getElementById('locale');

        this.default = new Project(this.defaultProject());
        this.createElement(this.defaultProject().ID);
        this.projectNav.textContent=this.defaultProject().project;

        this.nav.appendChild(this.projectNav);
        this.projectMain.append(this.default.getElement());
        
    }
    defaultProject(){
        const defaultProject={
            project:'Default Project',
            ID:`default`,
        };
        return defaultProject;
    }
    addProject(newProject){
        this.setID(newProject);
        this.createElement(newProject.ID);
        console.log(newProject.ID)
        const project = new Project(newProject);
        newProject['element'] = project.getElement();
        project.getOption().setAttribute("value",project.getID());
        this.taskFormOption.appendChild(project.getOption());
        this.projectNav.textContent= newProject.project;
        this.nav.appendChild(this.projectNav);
        this.projectNav.addEventListener('click',this.displayProject.bind(this));
        array.push(project.getElement());
    }
    displayProject(event){
        this.projectMain.innerHTML='';
        this.projectMain.appendChild(this.getProject(event.target.id));


    }
    getProject(id){
        let result;
        for(let i =0;i<array.length;i++){
            if(array[i].id===id){
                result=array[i];
                break;
            }
        }
        return  result;
    }
    setID(newProject){
        if(newProject.hasOwnProperty('ID')===false){
            newProject['ID']=this.idGenerator.generateID();
        }
    }
    createElement(id){
        this.projectNav = document.createElement('div');
        this.taskContainer=document.createElement('div');
        this.projectNav.classList.add('project-nav');
        this.projectNav.id=id;
        this.taskContainer.classList.add('task-icon-container');
        this.projectNav.appendChild(this.taskContainer);
    }
}