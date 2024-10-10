import Element from "./Element";
export default class Tasks extends Element{
    #parentDiv;
    constructor(newTask){
        super();
        this.#createElements();
        this.#setText(newTask);
        this.#appendElements();
    }
    #createElements(){
        this.#parentDiv=this.create('div');
        this.title = this.create('h3');
        this.dueDate = this.create('p');
        this.description = this.create('p');
        this.priority =this.create('div');
    }
    #setText(newTask){
        this.title.textContent=`${newTask.title}`;
        this.dueDate.textContent = `${newTask.due}`;
        this.description.textContent = `${newTask.description}`;
        this.priority.textContent = `${newTask.priority}`;
    }
    #appendElements(){
        this.connect(this.title,this.#parentDiv);
        this.connect(this.dueDate,this.#parentDiv);
        this.connect(this.description,this.#parentDiv);
        this.connect(this.priority,this.#parentDiv);
    }
    getElement(){
        return this.#parentDiv;
    }
    setID(id){
        this.#parentDiv.setAttribute('id',id);
    }
    getID(){
        return this.#parentDiv.id;
    }
    
}