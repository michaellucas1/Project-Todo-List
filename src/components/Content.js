import Element from "./Element.js";
export default class Content extends Element{
    constructor(){
        super();
        this.#createElements();
        this.#setClasses();
        this.#setText();
        this.#appendElement();

    }
    #createElements(){
        this.parentDiv =this.create('div');
        this.childH2 = this.create('h2');
        this.childDiv = this.create('div');
    }
    #setClasses(){
        this.setClass(this.parentDiv,'main-content');
        this.setClass(this.childDiv,'project-item-container');
    }
    #appendElement(){
        this.connect(this.childH2,this.parentDiv);
        this.connect(this.childDiv,this.parentDiv);
    }
    #setText(){
        this.setTextContent(this.childH2,"Today");
    }
    getElement(){
        return this.parentDiv;
    }
}