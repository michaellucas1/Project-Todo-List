import Element from "./Element";
export default class Project extends Element{
    #parentDiv;
    constructor(newProject){
        super();
        this.#createElements();
        this.#setText(newProject);
        this.#setClasses();
        this.#appendElements();
    }
    #createElements(){
        this.#parentDiv=this.create('div');
        this.title = this.create('h3');
        this.tasks = this.create('div');
        this.option = this.create('option');
    }
    #setText(newProject){
        this.title.textContent=`${newProject.project}`;
        this.option.textContent=`${newProject.project}`
    }
    #setClasses(){
        this.setClass(this.tasks,'task-container');
    }
    #appendElements(){
        this.connect(this.title,this.#parentDiv);
        this.connect(this.tasks,this.#parentDiv);
    }
    getElement(){
        return this.#parentDiv;
    }
    getOption(){
        return this.option;
    }
    setID(id){
        this.#parentDiv.setAttribute('id',id);
    }
    getID(){
        return this.#parentDiv.id;
    }
}