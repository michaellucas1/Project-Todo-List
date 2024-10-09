import Element from "./Element";
export default class Project extends Element{
    #parentDiv;
    constructor(newProject){
        super();
        this.#createElements();
        this.#setText(newProject);
        this.#appendElements();
    }
    #createElements(){
        this.#parentDiv=this.create('div');
        this.title = this.create('h3');
    }
    #setText(newProject){
        this.title.textContent=`${newProject.project}`;
    }
    #appendElements(){
        this.connect(this.title,this.#parentDiv);
    }
    getElement(){
        return this.#parentDiv;
    }
}