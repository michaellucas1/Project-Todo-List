import Project from './Project.js';
import array from './ProjectArray.js'
import GenerateID from './GenerateID.js';
export default class ProjectManager{
    constructor(){
        this.idGenerator = new GenerateID();
        this.projectNav = document.querySelector('.project-nav');
        this.projectMain = document.querySelector('.main-content');
    }
    addProject(newProject){
        const project = new Project(newProject)
        project.setID(this.idGenerator.generateID());
        const taskFormOption = document.getElementById('locale');
        project.getOption().setAttribute("value",project.getID());
        taskFormOption.appendChild(project.getOption());
        array.push(project.getElement());
        console.log(project.getID());
    }
}