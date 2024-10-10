import Header from "./Header.js";
import ImageAttribution from "./AttributionElement.js";
import Display from "./Display.js";
import Nav from "./Nav.js";
import ProjectForm from "./ProjectForm.js";
import TaskForm from "./TaskForm.js";
import Content from "./Content.js";

 export default class UserInterface extends Display{
    constructor(){
        super();
        this.initialize();
    }
    initialize(){
        this.#parentDiv();
        this.#imageAttribute();
        this.#header();
        this.#main();   
        this.#nav();
        this.#content();
        this.#task();
        this.#project();
    }
    #header(){
        this.header = new Header();
        this.connect(this.header.getElement(),this.div);
    }
    #imageAttribute(){
        this.imageAttribution = new ImageAttribution();
        this.connect(this.imageAttribution.getElement());
    }
    #content(){
        this.content = new Content();
        this.connect(this.content.getElement(),this.main);
    }
    #project(){
        this.project = new ProjectForm();
        this.connect(this.project.getElement(),this.div);
    }
    #task(){
        this.task = new TaskForm();
        this.connect(this.task.getElement(),this.div);
    }
    #parentDiv(){
        this.div = document.createElement('div');
        this.div.classList.add("content-wrapper");
        this.connect(this.div);
    }
    #nav(){
        this.nav = new Nav();
        this.connect(this.nav.getElement(),this.main);
    }
    #main(){
        this.main = document.createElement('main');
        this.connect(this.main,this.div);
    }
}